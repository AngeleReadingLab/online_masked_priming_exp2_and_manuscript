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


## LMMs

### Exp 1

#### RT

contrasts(exp1_data_to_include$Condition) <- c(-.5,.5)
contrasts(exp1_data_to_include$PrimeDuration) <- c(-.5,.5)
lmm_exp1 <- lmer(data = exp1_data_to_include %>% filter(corr == 1 & StimulusType == "Word" & rt > 250 & rt < 1800), rt ~ Condition * PrimeDuration + (1|source) + (1|Target))

#lmm_exp1 <- lmer(data = exp1_data_to_include %>% filter(corr == 1 & StimulusType == "Word" & rt > 250 & rt < 1800), rt ~ Condition * PrimeDuration + (Condition*PrimeDuration|source) + (Condition*PrimeDuration|Target))

summary(lmm_exp1)

#### Accuracy

lmm_acc_exp1 <- glmer(data = exp1_data_to_include %>% filter(rt > 250 & corr != -1 & StimulusType == "Word" & rt < 1800), corr ~ Condition * PrimeDuration + (1|Target), family = binomial(link = "logit"))

summary(lmm_acc_exp1)

### Exp 2

#### RT

contrasts(exp2_data_to_include$Condition) <- c(-.5,.5)
contrasts(exp2_data_to_include$PrimeDuration) <- c(-.5,.5)

lmm_exp2 <- lmer(data = exp2_data_to_include %>% filter(corr == 1 & StimulusType == "Word" & rt > 250 & rt < 1800), rt ~ Condition * PrimeDuration + (1|source) + (1|Target))

summary(lmm_exp2)

#### Accuracy

lmm_acc_exp2 <- glmer(data = exp2_data_to_include %>% filter(corr != -1 & StimulusType == "Word" & rt < 1800), corr ~ Condition * PrimeDuration + (1|Target), family = binomial(link = "logit"))

summary(lmm_acc_exp2)

library(brms)

ncores = parallel::detectCores()
# Mean RTs in each condition

prior_exp1 <- c(set_prior("normal(0,100)", class = "b", coef = "Condition1"),
                set_prior("normal(0,100)", class = "b", coef = "Condition1:PrimeDuration1"),
                set_prior("normal(0,100)", class = "b", coef = "PrimeDuration1"))

# prior_exp1 <- c(set_prior("normal(0,2500)", class = "b", coef = "", dpar = ""),
#                 set_prior("normal(0,100)", class = "b", coef = "Condition1", dpar = ""),
#                 set_prior("normal(0,100)", class = "b", coef = "Condition1:PrimeDuration1"),
#                 set_prior("normal(0,100)", class = "b", coef = "PrimeDuration1"),
#                 set_prior("normal(0,100)", class = "b", coef = "Condition1", dpar = ""),
#                 set_prior("normal(0,100)", class = "b", coef = "Condition1:PrimeDuration1"),
#                 set_prior("normal(0,100)", class = "b", coef = "PrimeDuration1"))

# prior_exp1 <- c(set_prior("normal(0,1000)", class = "b"),
#                 set_prior("normal(0,2500)", class = "Intercept"),
#                 set_prior("normal(0,1000)", class = "b", dpar = "beta"),
#                 set_prior("normal(0,2500)", class = "Intercept", dpar = "beta"))

#formula_exp1 <- bf(rt ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target), beta ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target))

blmm_exp1_rt_dist <- brm(data = exp1_data_to_include %>% filter(corr == 1 & StimulusType == "Word" & rt > 250 & rt < 1800), 
                    bf(rt ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target), beta ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target)),
                    warmup = 1000,
                    iter = 5000,
                    chains = 4,
                    prior = prior_exp1,
                    family = exgaussian(),
                    inits = "random",
                    control = list(adapt_delta = 0.8),
                    cores = 4, backend = "cmdstanr", threads = threading(4))

save(blmm_exp1_rt_dist, file = "blmm_exp1_rt_dist_revision.RData")

blmm_exp1_acc <- brm(data = exp1_data_to_include %>% filter(corr != -1 & StimulusType == "Word" & rt > 250 & rt < 1800), 
                     formula = corr ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target),
                     warmup = 2000,
                     iter = 10000,
                     chains = 4,
                     prior = prior_exp1,
                     family = bernoulli(link = "logit"),
                     inits = "random",
                     control = list(adapt_delta = 0.95),
                     cores = 4, backend = "cmdstanr", threads = threading(4))

save(blmm_exp1_acc, file = "blmm_exp1_acc_revision.RData")


blmm_exp2_rt_dist <- brm(data = exp2_data_to_include %>% filter(corr == 1 & StimulusType == "Word" & rt > 250 & rt < 1800), 
                         bf(rt ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target), beta ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target)),
                         warmup = 1000,
                         iter = 5000,
                         chains = 4,
                         prior = prior_exp1,
                         family = exgaussian(),
                         inits = "random",
                         control = list(adapt_delta = 0.95),
                         cores = 4, backend = "cmdstanr", threads = threading(4))

save(blmm_exp2_rt_dist, file = "blmm_exp2_rt_dist_revision.RData")

blmm_exp2_acc <- brm(data = exp2_data_to_include %>% filter(corr != -1 & StimulusType == "Word" & rt > 250 & rt < 1800), 
                     formula = corr ~ Condition * PrimeDuration + (1 + Condition * PrimeDuration|source) + (1 + Condition * PrimeDuration|Target),
                     warmup = 2000,
                     iter = 10000,
                     chains = 4,
                     prior = prior_exp1,
                     family = bernoulli(link = "logit"),
                     inits = "random",
                     control = list(adapt_delta = 0.8),
                     cores = 4, backend = "cmdstanr", threads = threading(4))

save(blmm_exp2_acc, file = "blmm_exp2_acc_revision.RData")
