library(lme4)
library(tidyverse)
library(brms)

library(xfun)



# Load Exp 1 data
##################

# Qualtrics survey data
exp1_all_participants <- read_csv("participant_data_exp1.csv")

# PsychoJS trial data
exp1 <- fs::dir_ls(path = "./data_exp1", glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_type = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer())) %>% 
  filter(!is.na(TrialID) & TrialID < 1000) %>%
  select(source, participant, date, OS, frameRate, rt, corr, TrialID, StimulusType, Condition, PrimeDuration, Prime, Target)

exp1$device <- ifelse(exp1$OS %in% c("Linux armv7l", "Linux armv8l"), "android", "computer")

# only consider participants who have actually participated in the whole experiment
# also don't consider participants whose age is 99 (used for testing)
# one participant is duplicate. Remove the first occurrence (likely incompatible device)

exp1_actual_participants <- filter(exp1_all_participants, (PROLIFIC_PID %in% exp1$participant) & (nchar(PROLIFIC_PID) == 24) & !(PROLIFIC_PID %in% c("5fa3b4abbcfd0b6c243758bc")) & (`What is your age?` != 99) & (`Response ID` != "R_sU4qJ6UCe9jRKs9"))

# get participants with more than 80% correct responses

exp1_accuracy_by_participant <- exp1 %>% filter(participant %in% exp1_actual_participants$PROLIFIC_PID) %>% group_by(source) %>% summarise(acc = mean(corr == 1), N = n())

exp1_participants_to_include <- exp1_accuracy_by_participant %>% filter(N == 480 & acc >= .8)   

exp1_participants_to_exclude <- exp1_accuracy_by_participant %>% filter(N != 480 | acc < .8)   

#participant_list_for_prolific <- str_extract(string = participants_to_include$source, pattern = "[a-z0-9]{24}") 

exp1_data_to_include <- exp1 %>% filter(source %in% exp1_participants_to_include$source & participant %in% exp1_actual_participants$PROLIFIC_PID) %>% mutate(StimulusType = StimulusType %>% factor(levels = c("NW", "WORD"), labels = c("Nonword", "Word")), Condition = Condition %>% factor(levels = c("ID", "UN"), labels = c("Identical", "Unrelated")), PrimeDuration = PrimeDuration %>% factor(levels = c(33, 50), labels = c("33 ms", "50 ms")), rt = rt * 1000)

# Load Exp 2 data
#################


exp2_all_participants <- read_csv("participant_data_exp2.csv")

exp2 <- fs::dir_ls(path = "./data_exp2", glob = "*.csv") %>%
  map_dfr(read_csv, .id = "source", col_type = cols(
    .default = col_character(), rt = col_double(), corr = col_integer(), TrialID = col_integer())) %>% 
  filter(!is.na(TrialID) & TrialID < 1000) %>%
  select(source, participant, date, OS, frameRate, rt, corr, TrialID, StimulusType, Condition, PrimeDuration, Prime, Target)

exp2$device <- ifelse(exp2$OS %in% c("Linux armv7l", "Linux armv8l"), "android", "computer")

# only consider participants who have actually participated in the whole experiment
# also don't consider participants whose age is 99 (used for testing)
# one participant is duplicate. Remove the first occurrence (likely incompatible device)

exp2_actual_participants <- filter(exp2_all_participants, (PROLIFIC_PID %in% exp2$participant) & (nchar(PROLIFIC_PID) == 24) & !(PROLIFIC_PID %in% c("5fa3b4abbcfd0b6c243758bc")) & (`What is your age?` != 99) & !(`Response ID` %in% c("R_2c2dVRNmGvI6CH9", "R_3ELutaT6GNe5mmR", "R_XX7jgUk2NbIi41j", "R_125QKzJfHwoGHaT")))

# get participants with more than 80% correct responses

exp2_accuracy_by_participant <- exp2 %>% filter(participant %in% exp2_actual_participants$PROLIFIC_PID) %>% group_by(source) %>% summarise(acc = mean(corr == 1), N = n())

exp2_participants_to_include <- exp2_accuracy_by_participant %>% filter(N == 480 & acc >= .8)   

exp2_participants_to_exclude <- exp2_accuracy_by_participant %>% filter(N != 480 | acc < .8)   

#participant_list_for_prolific <- str_extract(string = participants_to_include$source, pattern = "[a-z0-9]{24}") 

exp2_data_to_include <- exp2 %>% filter(source %in% exp2_participants_to_include$source & participant %in% exp2_actual_participants$PROLIFIC_PID) %>% mutate(StimulusType = StimulusType %>% factor(levels = c("NW", "WORD"), labels = c("Nonword", "Word")), Condition = Condition %>% factor(levels = c("ID", "UN"), labels = c("Identical", "Unrelated")), PrimeDuration = PrimeDuration %>% factor(levels = c(16, 33), labels = c("16 ms", "33 ms")), rt = rt * 1000)

# data for ex-gaussian analysis
# From Gomez et al. (2013):
# We use the diffusion model to test Forster’s (Forster, 1999;
# Forster et al., 2003) versus Bodner and Masson’s (2001, 2003)
# account of the differences between masked and unmasked priming.
# We fitted the data from the masked and the unmasked trials
# separately. We performed the fits of the model in two ways: First,
# for display in the figures and tables, we present the fits to the
# grouped data that we obtained using the fitting routines described
# by Ratcliff and Tuerlinckx (2002). We calculated the accuracy and
# latency (i.e., the RTs at the 0.1, 0.3, *0.5* (0.6 in the paper is a typo), 0.7, and 0.9 quantiles) for
# word and nonword responses for all conditions and for all subjects,
# and we obtained the group-level performance by averaging across
# subjects (i.e., vincentizing; Ratcliff, 1979; Vincent, 1912).

# calculate quantiles

# exp1
# RT

exp1_rt_quantiles_by_subject <- exp1_data_to_include %>% filter(corr == 1 & rt > 250 & rt < 1800) %>% 
  group_by(StimulusType, source, Condition, PrimeDuration) %>% 
  summarise(qRT = quantile(rt, c(0.1, 0.3, 0.5, 0.7, 0.9)), q = c(0.1, 0.3, 0.5, 0.7, 0.9)) 

exp1_rt_quantiles <- exp1_rt_quantiles_by_subject %>% group_by(StimulusType, Condition, PrimeDuration, q) %>% 
  summarise(mean_qRT = mean(qRT))

exp1_acc_quantiles_by_subject <- exp1_data_to_include %>% filter(corr != -1 & rt > 250 & rt < 1800) %>% 
  group_by(StimulusType, source, Condition, PrimeDuration) %>% 
  summarise(qAcc = quantile(corr, c(0.1, 0.3, 0.5, 0.7, 0.9)), q = c(0.1, 0.3, 0.5, 0.7, 0.9)) 

exp1_acc_quantiles <- exp1_acc_quantiles_by_subject %>% group_by(StimulusType, Condition, PrimeDuration, q) %>% 
  summarise(mean_qAcc = mean(qAcc))

exp1_rt_quantiles$mean_qAcc <- exp1_acc_quantiles$mean_qAcc

write_csv(exp1_rt_quantiles, file = "exp1_quantiles_for_diffusion_analysis.csv")

# exp2

exp2_rt_quantiles_by_subject <- exp2_data_to_include %>% filter(corr == 1 & rt > 250 & rt < 1800) %>% 
  group_by(StimulusType, source, Condition, PrimeDuration) %>% 
  summarise(qRT = quantile(rt, c(0.1, 0.3, 0.5, 0.7, 0.9)), q = c(0.1, 0.3, 0.5, 0.7, 0.9)) 

exp2_rt_quantiles <- exp2_rt_quantiles_by_subject %>% group_by(StimulusType, Condition, PrimeDuration, q) %>% 
  summarise(mean_qRT = mean(qRT))

exp2_acc_quantiles_by_subject <- exp2_data_to_include %>% filter(corr != -1 & rt > 250 & rt < 1800) %>% 
  group_by(StimulusType, source, Condition, PrimeDuration) %>% 
  summarise(qAcc = quantile(corr, c(0.1, 0.3, 0.5, 0.7, 0.9)), q = c(0.1, 0.3, 0.5, 0.7, 0.9)) 

exp2_acc_quantiles <- exp2_acc_quantiles_by_subject %>% group_by(StimulusType, Condition, PrimeDuration, q) %>% 
  summarise(mean_qAcc = mean(qAcc))

exp2_rt_quantiles$mean_qAcc <- exp2_acc_quantiles$mean_qAcc

write_csv(exp2_rt_quantiles, file = "exp2_quantiles_for_diffusion_analysis.csv")
