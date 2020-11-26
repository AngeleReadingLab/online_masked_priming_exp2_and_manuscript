/************************************** 
 * Lexical_Decision_Task_Mp_Exp2 Test *
 **************************************/

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'lexical_decision_task_MP_exp2';  // from the Builder filename that created this script
let expInfo = {'participant': '999'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instruction_pagesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instruction_pagesLoopBegin, instruction_pagesLoopScheduler);
flowScheduler.add(instruction_pagesLoopScheduler);
flowScheduler.add(instruction_pagesLoopEnd);
const practice_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practice_trialsLoopBegin, practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopScheduler);
flowScheduler.add(practice_trialsLoopEnd);
const end_of_practice_trials_pagesLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(end_of_practice_trials_pagesLoopBegin, end_of_practice_trials_pagesLoopScheduler);
flowScheduler.add(end_of_practice_trials_pagesLoopScheduler);
flowScheduler.add(end_of_practice_trials_pagesLoopEnd);
const experiment_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(experiment_trialsLoopBegin, experiment_trialsLoopScheduler);
flowScheduler.add(experiment_trialsLoopScheduler);
flowScheduler.add(experiment_trialsLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.5';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://bournemouthpsych.eu.qualtrics.com/jfe/form/SV_4UTkhSmaQNjgz7D?STATUS=completed', 'https://bournemouthpsych.eu.qualtrics.com/jfe/form/SV_4UTkhSmaQNjgz7D');

  return Scheduler.Event.NEXT;
}


var InstructionsClock;
var instructions;
var instr_done_keyboard;
var instr_done_button;
var instr_done_label;
var instr_done_touch;
var thisExp;
var win;
var event;
var randint;
var instructions_image;
var presentTrialClock;
var fixation_mask;
var prime_text;
var target;
var response;
var dpi_scaling;
var font_scale;
var fixation_height;
var text_height;
var arrow_keys_height;
var counterbalancing_condition;
var trial_list_file;
var mask_duration;
var trial_timeout;
var button_left;
var button_right;
var trial_label_right;
var touch_resp;
var trial_label_left_new;
var feedbackClock;
var msg;
var feedback_text;
var button_left_2;
var button_right_2;
var trial_label_left_2;
var trial_label_right_2;
var BreakClock;
var break_every;
var break_msg_top;
var break_msg_middle;
var break_msg_bottom;
var break_msg;
var break_text;
var break_done_touch;
var break_done_keyboard;
var break_done_button;
var break_done_button_label;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_done_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  instr_done_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label',
    text: 'Continue',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  // Some shortcuts to make auto-conversion from Python easier
  // from https://docs.google.com/document/d/13jp0QAqQeFlYSjeZS0fDInvgaDzBXjGQNe4VNKbbNHQ/edit?pli=1#
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  
  //round = function(num, n=0) {    
  //    return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  //}
  
  
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  instructions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "presentTrial"
  presentTrialClock = new util.Clock();
  fixation_mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_mask',
    text: '######',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  prime_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prime_text',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  dpi_scaling = 1;
  font_scale = 1.5;
  fixation_height = 0.1;
  text_height = 0.1;
  arrow_keys_height = 0.05;
  counterbalancing_condition = (Math.floor((Math.random() * ((3 - 0) + 1))) + 0);
  thisExp.addData("counterbalancing_condition", counterbalancing_condition);
  trial_list_file = (("trials_list" + counterbalancing_condition.toString()) + ".xlsx");
  mask_duration = 0.5;
  trial_timeout = 2;
  
  button_left = new visual.Rect ({
    win: psychoJS.window, name: 'button_left', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [(- 0.4), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  button_right = new visual.Rect ({
    win: psychoJS.window, name: 'button_right', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [0.4, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  trial_label_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right',
    text: 'M = Word',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  trial_label_left_new = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left_new',
    text: 'Z = Nonword',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg = "No feedback message set yet";
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  button_left_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_left_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [(- 0.4), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  button_right_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_right_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [0.4, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  trial_label_left_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left_2',
    text: 'Z = Nonword',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  trial_label_right_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right_2',
    text: 'M = Word',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  instr_done_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  instr_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'instr_done_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  instr_done_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_done_label',
    text: 'Continue',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  instr_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  instr_done_touch.mouseClock = new util.Clock();
  // Some shortcuts to make auto-conversion from Python easier
  // from https://docs.google.com/document/d/13jp0QAqQeFlYSjeZS0fDInvgaDzBXjGQNe4VNKbbNHQ/edit?pli=1#
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  
  //round = function(num, n=0) {    
  //    return +(Math.round(num + ("e+" + n))  + ("e-" + n));
  //}
  
  
  randint = function(min, maxplusone) {
    return Math.floor(Math.random() * (maxplusone - min) ) + min;
  }
  
  instructions_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instructions_image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.4, 0.3],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  // Initialize components for Routine "presentTrial"
  presentTrialClock = new util.Clock();
  fixation_mask = new visual.TextStim({
    win: psychoJS.window,
    name: 'fixation_mask',
    text: '######',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  prime_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'prime_text',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  target = new visual.TextStim({
    win: psychoJS.window,
    name: 'target',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  dpi_scaling = 1;
  font_scale = 1.5;
  fixation_height = 0.1;
  text_height = 0.1;
  arrow_keys_height = 0.05;
  counterbalancing_condition = (Math.floor((Math.random() * ((3 - 0) + 1))) + 0);
  thisExp.addData("counterbalancing_condition", counterbalancing_condition);
  trial_list_file = (("trials_list" + counterbalancing_condition.toString()) + ".xlsx");
  mask_duration = 0.5;
  trial_timeout = 2;
  
  button_left = new visual.Rect ({
    win: psychoJS.window, name: 'button_left', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [(- 0.4), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  button_right = new visual.Rect ({
    win: psychoJS.window, name: 'button_right', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [0.4, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -6, interpolate: true,
  });
  
  trial_label_right = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right',
    text: 'M = Word',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  touch_resp = new core.Mouse({
    win: psychoJS.window,
  });
  touch_resp.mouseClock = new util.Clock();
  trial_label_left_new = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left_new',
    text: 'Z = Nonword',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -10.0 
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  msg = "No feedback message set yet";
  
  feedback_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedback_text',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  button_left_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_left_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [(- 0.4), (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -2, interpolate: true,
  });
  
  button_right_2 = new visual.Rect ({
    win: psychoJS.window, name: 'button_right_2', 
    width: [0.4, 0.2][0], height: [0.4, 0.2][1],
    ori: 0, pos: [0.4, (- 0.3)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -3, interpolate: true,
  });
  
  trial_label_left_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_left_2',
    text: 'Z = Nonword',
    font: 'Courier New',
    units: undefined, 
    pos: [(- 0.4), (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  trial_label_right_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_label_right_2',
    text: 'M = Word',
    font: 'Courier New',
    units: undefined, 
    pos: [0.4, (- 0.3)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  break_every = 2;
  break_msg_top = "";
  break_msg_middle = "Please take a short break.\n";
  break_msg_bottom = "When you are done, please press the space bar or touch the \"Continue\" button below to continue the experiment.";
  break_msg = "";
  
  break_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_text',
    text: 'default text',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  break_done_touch = new core.Mouse({
    win: psychoJS.window,
  });
  break_done_touch.mouseClock = new util.Clock();
  break_done_keyboard = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  break_done_button = new visual.Rect ({
    win: psychoJS.window, name: 'break_done_button', 
    width: [0.4, 0.1][0], height: [0.4, 0.1][1],
    ori: 0, pos: [0, (- 0.4)],
    lineWidth: 1, lineColor: new util.Color('black'),
    fillColor: new util.Color('white'),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  break_done_button_label = new visual.TextStim({
    win: psychoJS.window,
    name: 'break_done_button_label',
    text: 'Continue',
    font: 'Courier New',
    units: undefined, 
    pos: [0, (- 0.4)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win: psychoJS.window,
    name: 'thank_you',
    text: 'This is the end of the experiment.\n\nPlease do NOT close this window until you have been redirected to the debrief page. \n\nPlease wait for the message “Thank you for your patience” to appear and then click OK to continue to the debrief page.\n\nYou must go to the debrief page in order for your participation to be recorded.',
    font: 'Courier New',
    units: undefined, 
    pos: [0, 0], height: 1.0,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instruction_pages;
var currentLoop;
function instruction_pagesLoopBegin(instruction_pagesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  instruction_pages = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions.xlsx',
    seed: undefined, name: 'instruction_pages'
  });
  psychoJS.experiment.addLoop(instruction_pages); // add the loop to the experiment
  currentLoop = instruction_pages;  // we're now the current loop

  // Schedule all the trials in the trialList:
  instruction_pages.forEach(function() {
    const snapshot = instruction_pages.getSnapshot();

    instruction_pagesLoopScheduler.add(importConditions(snapshot));
    instruction_pagesLoopScheduler.add(InstructionsRoutineBegin(snapshot));
    instruction_pagesLoopScheduler.add(InstructionsRoutineEachFrame(snapshot));
    instruction_pagesLoopScheduler.add(InstructionsRoutineEnd(snapshot));
    instruction_pagesLoopScheduler.add(endLoopIteration(instruction_pagesLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function instruction_pagesLoopEnd() {
  psychoJS.experiment.removeLoop(instruction_pages);

  return Scheduler.Event.NEXT;
}


var practice_trials;
function practice_trialsLoopBegin(practice_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'trials_list_practice.xlsx',
    seed: undefined, name: 'practice_trials'
  });
  psychoJS.experiment.addLoop(practice_trials); // add the loop to the experiment
  currentLoop = practice_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  practice_trials.forEach(function() {
    const snapshot = practice_trials.getSnapshot();

    practice_trialsLoopScheduler.add(importConditions(snapshot));
    practice_trialsLoopScheduler.add(presentTrialRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(presentTrialRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(presentTrialRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
    practice_trialsLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    practice_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
    practice_trialsLoopScheduler.add(endLoopIteration(practice_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function practice_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(practice_trials);

  return Scheduler.Event.NEXT;
}


var end_of_practice_trials_pages;
function end_of_practice_trials_pagesLoopBegin(end_of_practice_trials_pagesLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  end_of_practice_trials_pages = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'instructions_after_practice.xlsx',
    seed: undefined, name: 'end_of_practice_trials_pages'
  });
  psychoJS.experiment.addLoop(end_of_practice_trials_pages); // add the loop to the experiment
  currentLoop = end_of_practice_trials_pages;  // we're now the current loop

  // Schedule all the trials in the trialList:
  end_of_practice_trials_pages.forEach(function() {
    const snapshot = end_of_practice_trials_pages.getSnapshot();

    end_of_practice_trials_pagesLoopScheduler.add(importConditions(snapshot));
    end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineBegin(snapshot));
    end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineEachFrame(snapshot));
    end_of_practice_trials_pagesLoopScheduler.add(InstructionsRoutineEnd(snapshot));
    end_of_practice_trials_pagesLoopScheduler.add(endLoopIteration(end_of_practice_trials_pagesLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function end_of_practice_trials_pagesLoopEnd() {
  psychoJS.experiment.removeLoop(end_of_practice_trials_pages);

  return Scheduler.Event.NEXT;
}


var experiment_trials;
function experiment_trialsLoopBegin(experiment_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  experiment_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: trial_list_file,
    seed: undefined, name: 'experiment_trials'
  });
  psychoJS.experiment.addLoop(experiment_trials); // add the loop to the experiment
  currentLoop = experiment_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  experiment_trials.forEach(function() {
    const snapshot = experiment_trials.getSnapshot();

    experiment_trialsLoopScheduler.add(importConditions(snapshot));
    experiment_trialsLoopScheduler.add(presentTrialRoutineBegin(snapshot));
    experiment_trialsLoopScheduler.add(presentTrialRoutineEachFrame(snapshot));
    experiment_trialsLoopScheduler.add(presentTrialRoutineEnd(snapshot));
    experiment_trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
    experiment_trialsLoopScheduler.add(feedbackRoutineEachFrame(snapshot));
    experiment_trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
    experiment_trialsLoopScheduler.add(BreakRoutineBegin(snapshot));
    experiment_trialsLoopScheduler.add(BreakRoutineEachFrame(snapshot));
    experiment_trialsLoopScheduler.add(BreakRoutineEnd(snapshot));
    experiment_trialsLoopScheduler.add(endLoopIteration(experiment_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function experiment_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(experiment_trials);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instr_done_keyboard_allKeys;
var gotValidClick;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions.setText(instruct_text);
    instr_done_keyboard.keys = undefined;
    instr_done_keyboard.rt = undefined;
    _instr_done_keyboard_allKeys = [];
    // setup some python lists for storing info about the instr_done_touch
    instr_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    instructions_image.setImage(instruct_image);
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(instructions);
    InstructionsComponents.push(instr_done_keyboard);
    InstructionsComponents.push(instr_done_button);
    InstructionsComponents.push(instr_done_label);
    InstructionsComponents.push(instr_done_touch);
    InstructionsComponents.push(instructions_image);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var continueRoutine;
var prevButtonState;
var _mouseButtons;
function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions* updates
    if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions.tStart = t;  // (not accounting for frame time here)
      instructions.frameNStart = frameN;  // exact frame index
      
      instructions.setAutoDraw(true);
    }

    
    // *instr_done_keyboard* updates
    if (t >= 0.0 && instr_done_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_keyboard.tStart = t;  // (not accounting for frame time here)
      instr_done_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_done_keyboard.clearEvents(); });
    }

    if (instr_done_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_done_keyboard.getKeys({keyList: ['space'], waitRelease: false});
      _instr_done_keyboard_allKeys = _instr_done_keyboard_allKeys.concat(theseKeys);
      if (_instr_done_keyboard_allKeys.length > 0) {
        instr_done_keyboard.keys = _instr_done_keyboard_allKeys[_instr_done_keyboard_allKeys.length - 1].name;  // just the last key pressed
        instr_done_keyboard.rt = _instr_done_keyboard_allKeys[_instr_done_keyboard_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *instr_done_button* updates
    if (t >= 0.0 && instr_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_button.tStart = t;  // (not accounting for frame time here)
      instr_done_button.frameNStart = frameN;  // exact frame index
      
      instr_done_button.setAutoDraw(true);
    }

    
    // *instr_done_label* updates
    if (t >= 0.0 && instr_done_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_label.tStart = t;  // (not accounting for frame time here)
      instr_done_label.frameNStart = frameN;  // exact frame index
      
      instr_done_label.setAutoDraw(true);
    }

    // *instr_done_touch* updates
    if (t >= 0.0 && instr_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_done_touch.tStart = t;  // (not accounting for frame time here)
      instr_done_touch.frameNStart = frameN;  // exact frame index
      
      instr_done_touch.status = PsychoJS.Status.STARTED;
      instr_done_touch.mouseClock.reset();
      prevButtonState = instr_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instr_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instr_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [instr_done_button]) {
            if (obj.contains(instr_done_touch)) {
              gotValidClick = true;
              instr_done_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *instructions_image* updates
    if (((has_image == 1)) && instructions_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_image.tStart = t;  // (not accounting for frame time here)
      instructions_image.frameNStart = frameN;  // exact frame index
      
      instructions_image.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _mouseXYs;
function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('instr_done_keyboard.keys', instr_done_keyboard.keys);
    if (typeof instr_done_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instr_done_keyboard.rt', instr_done_keyboard.rt);
        routineTimer.reset();
        }
    
    instr_done_keyboard.stop();
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = instr_done_touch.getPos();
    _mouseButtons = instr_done_touch.getPressed();
    psychoJS.experiment.addData('instr_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('instr_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('instr_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('instr_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('instr_done_touch.rightButton', _mouseButtons[2]);
    if (instr_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('instr_done_touch.clicked_name', instr_done_touch.clicked_name[0]);}
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _response_allKeys;
var prime_duration_s;
var target_onset;
var button_duration;
var corr;
var presentTrialComponents;
function presentTrialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'presentTrial'-------
    t = 0;
    presentTrialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    prime_text.setText(Prime);
    target.setText(Target);
    response.keys = undefined;
    response.rt = undefined;
    _response_allKeys = [];
    prime_duration_s = (PrimeDuration / 1000);
    target_onset = (mask_duration + prime_duration_s);
    button_duration = (target_onset + trial_timeout);
    
    // setup some python lists for storing info about the touch_resp
    // current position of the mouse:
    touch_resp.x = [];
    touch_resp.y = [];
    touch_resp.leftButton = [];
    touch_resp.midButton = [];
    touch_resp.rightButton = [];
    touch_resp.time = [];
    touch_resp.clicked_name = [];
    gotValidClick = false; // until a click is received
    corr = (- 1);
    
    // keep track of which components have finished
    presentTrialComponents = [];
    presentTrialComponents.push(fixation_mask);
    presentTrialComponents.push(prime_text);
    presentTrialComponents.push(target);
    presentTrialComponents.push(response);
    presentTrialComponents.push(button_left);
    presentTrialComponents.push(button_right);
    presentTrialComponents.push(trial_label_right);
    presentTrialComponents.push(touch_resp);
    presentTrialComponents.push(trial_label_left_new);
    
    presentTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


var frameRemains;
function presentTrialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'presentTrial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = presentTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixation_mask* updates
    if (t >= 0.0 && fixation_mask.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixation_mask.tStart = t;  // (not accounting for frame time here)
      fixation_mask.frameNStart = frameN;  // exact frame index
      
      fixation_mask.setAutoDraw(true);
    }

    frameRemains = 0.0 + mask_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((fixation_mask.status === PsychoJS.Status.STARTED || fixation_mask.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      fixation_mask.setAutoDraw(false);
    }
    
    // *prime_text* updates
    if (t >= mask_duration && prime_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      prime_text.tStart = t;  // (not accounting for frame time here)
      prime_text.frameNStart = frameN;  // exact frame index
      
      prime_text.setAutoDraw(true);
    }

    frameRemains = mask_duration + prime_duration_s - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((prime_text.status === PsychoJS.Status.STARTED || prime_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      prime_text.setAutoDraw(false);
    }
    
    // *target* updates
    if (t >= target_onset && target.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target.tStart = t;  // (not accounting for frame time here)
      target.frameNStart = frameN;  // exact frame index
      
      target.setAutoDraw(true);
    }

    frameRemains = target_onset + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((target.status === PsychoJS.Status.STARTED || target.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      target.setAutoDraw(false);
    }
    
    // *response* updates
    if (t >= target_onset && response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response.tStart = t;  // (not accounting for frame time here)
      response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { response.clearEvents(); });
    }

    frameRemains = target_onset + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((response.status === PsychoJS.Status.STARTED || response.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      response.status = PsychoJS.Status.FINISHED;
  }

    if (response.status === PsychoJS.Status.STARTED) {
      let theseKeys = response.getKeys({keyList: ['m', 'z'], waitRelease: false});
      _response_allKeys = _response_allKeys.concat(theseKeys);
      if (_response_allKeys.length > 0) {
        response.keys = _response_allKeys[_response_allKeys.length - 1].name;  // just the last key pressed
        response.rt = _response_allKeys[_response_allKeys.length - 1].rt;
        // was this correct?
        if (response.keys == corrAns) {
            response.corr = 1;
        } else {
            response.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *button_left* updates
    if (t >= 0 && button_left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left.tStart = t;  // (not accounting for frame time here)
      button_left.frameNStart = frameN;  // exact frame index
      
      button_left.setAutoDraw(true);
    }

    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((button_left.status === PsychoJS.Status.STARTED || button_left.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      button_left.setAutoDraw(false);
    }
    
    // *button_right* updates
    if (t >= 0 && button_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right.tStart = t;  // (not accounting for frame time here)
      button_right.frameNStart = frameN;  // exact frame index
      
      button_right.setAutoDraw(true);
    }

    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((button_right.status === PsychoJS.Status.STARTED || button_right.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      button_right.setAutoDraw(false);
    }
    
    // *trial_label_right* updates
    if (t >= 0 && trial_label_right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_right.tStart = t;  // (not accounting for frame time here)
      trial_label_right.frameNStart = frameN;  // exact frame index
      
      trial_label_right.setAutoDraw(true);
    }

    frameRemains = 0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((trial_label_right.status === PsychoJS.Status.STARTED || trial_label_right.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      trial_label_right.setAutoDraw(false);
    }
    // *touch_resp* updates
    if (t >= target_onset && touch_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_resp.tStart = t;  // (not accounting for frame time here)
      touch_resp.frameNStart = frameN;  // exact frame index
      
      touch_resp.status = PsychoJS.Status.STARTED;
      touch_resp.mouseClock.reset();
      prevButtonState = touch_resp.getPressed();  // if button is down already this ISN'T a new click
      }
    frameRemains = target_onset + trial_timeout - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((touch_resp.status === PsychoJS.Status.STARTED || touch_resp.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      touch_resp.status = PsychoJS.Status.FINISHED;
  }
    if (touch_resp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = touch_resp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = touch_resp.getPos();
          touch_resp.x.push(_mouseXYs[0]);
          touch_resp.y.push(_mouseXYs[1]);
          touch_resp.leftButton.push(_mouseButtons[0]);
          touch_resp.midButton.push(_mouseButtons[1]);
          touch_resp.rightButton.push(_mouseButtons[2]);
          touch_resp.time.push(touch_resp.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [button_left, button_right]) {
            if (obj.contains(touch_resp)) {
              gotValidClick = true;
              touch_resp.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *trial_label_left_new* updates
    if (t >= 0.0 && trial_label_left_new.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_left_new.tStart = t;  // (not accounting for frame time here)
      trial_label_left_new.frameNStart = frameN;  // exact frame index
      
      trial_label_left_new.setAutoDraw(true);
    }

    frameRemains = 0.0 + button_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((trial_label_left_new.status === PsychoJS.Status.STARTED || trial_label_left_new.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      trial_label_left_new.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    presentTrialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var _pj;
var rt;
function presentTrialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'presentTrial'-------
    presentTrialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // was no response the correct answer?!
    if (response.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         response.corr = 1;  // correct non-response
      } else {
         response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('response.keys', response.keys);
    psychoJS.experiment.addData('response.corr', response.corr);
    if (typeof response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('response.rt', response.rt);
        routineTimer.reset();
        }
    
    response.stop();
    // store data for thisExp (ExperimentHandler)
    if (touch_resp.x) {  psychoJS.experiment.addData('touch_resp.x', touch_resp.x[0])};
    if (touch_resp.y) {  psychoJS.experiment.addData('touch_resp.y', touch_resp.y[0])};
    if (touch_resp.leftButton) {  psychoJS.experiment.addData('touch_resp.leftButton', touch_resp.leftButton[0])};
    if (touch_resp.midButton) {  psychoJS.experiment.addData('touch_resp.midButton', touch_resp.midButton[0])};
    if (touch_resp.rightButton) {  psychoJS.experiment.addData('touch_resp.rightButton', touch_resp.rightButton[0])};
    if (touch_resp.time) {  psychoJS.experiment.addData('touch_resp.time', touch_resp.time[0])};
    if (touch_resp.clicked_name) {  psychoJS.experiment.addData('touch_resp.clicked_name', touch_resp.clicked_name[0])};
    
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if (response.keys) {
        corr = response.corr;
        rt = response.rt;
    } else {
        if ((touch_resp.clicked_name[0] !== undefined)) {
            rt = touch_resp.time[0];
            if (((_pj.in_es6("left", touch_resp.clicked_name[0]) && (corrAns === "z")) || (_pj.in_es6("right", touch_resp.clicked_name[0]) && (corrAns === "m")))) {
                corr = 1;
            } else {
                corr = 0;
            }
        } else {
            corr = (- 1);
        }
    }
    thisExp.addData("rt", rt);
    thisExp.addData("corr", corr);
    
    // the Routine "presentTrial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedback_color;
var feedback_duration;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((corr === (- 1))) {
        msg = "Too slow!";
        feedback_color = "black";
        feedback_duration = 0.5;
    } else {
        if ((TrialID >= 1000)) {
            feedback_duration = 0.5;
            if (corr) {
                msg = "Correct";
                feedback_color = "green";
            } else {
                msg = "Incorrect";
                feedback_color = "red";
            }
        } else {
            feedback_duration = 0;
        }
    }
    
    feedback_text.setColor(new util.Color(feedback_color));
    feedback_text.setText(msg);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(feedback_text);
    feedbackComponents.push(button_left_2);
    feedbackComponents.push(button_right_2);
    feedbackComponents.push(trial_label_left_2);
    feedbackComponents.push(trial_label_right_2);
    
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((feedback_text.status === PsychoJS.Status.STARTED || feedback_text.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      feedback_text.setAutoDraw(false);
    }
    
    // *button_left_2* updates
    if (t >= 0 && button_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_left_2.tStart = t;  // (not accounting for frame time here)
      button_left_2.frameNStart = frameN;  // exact frame index
      
      button_left_2.setAutoDraw(true);
    }

    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((button_left_2.status === PsychoJS.Status.STARTED || button_left_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      button_left_2.setAutoDraw(false);
    }
    
    // *button_right_2* updates
    if (t >= 0 && button_right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_right_2.tStart = t;  // (not accounting for frame time here)
      button_right_2.frameNStart = frameN;  // exact frame index
      
      button_right_2.setAutoDraw(true);
    }

    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((button_right_2.status === PsychoJS.Status.STARTED || button_right_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      button_right_2.setAutoDraw(false);
    }
    
    // *trial_label_left_2* updates
    if (t >= 0 && trial_label_left_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_left_2.tStart = t;  // (not accounting for frame time here)
      trial_label_left_2.frameNStart = frameN;  // exact frame index
      
      trial_label_left_2.setAutoDraw(true);
    }

    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((trial_label_left_2.status === PsychoJS.Status.STARTED || trial_label_left_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      trial_label_left_2.setAutoDraw(false);
    }
    
    // *trial_label_right_2* updates
    if (t >= 0 && trial_label_right_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_label_right_2.tStart = t;  // (not accounting for frame time here)
      trial_label_right_2.frameNStart = frameN;  // exact frame index
      
      trial_label_right_2.setAutoDraw(true);
    }

    frameRemains = 0 + feedback_duration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((trial_label_right_2.status === PsychoJS.Status.STARTED || trial_label_right_2.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      trial_label_right_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'feedback'-------
    feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var show_break;
var _break_done_keyboard_allKeys;
var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Break'-------
    t = 0;
    BreakClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    break_msg_top = (("BREAK\n\nYou have now completed " + round(((experiment_trials.thisTrialN / experiment_trials.nTotal) * 100)).toString()) + "% of the experiment. ");
    break_msg = ((break_msg_top + break_msg_middle) + break_msg_bottom);
    show_break = experiment_trials.nRemaining % break_every == 0
    console.log(experiment_trials.ThisTrialN)
    console.log(experiment_trials.nRemaining)
    console.log(show_break)
    break_text.setText(break_msg);
    // setup some python lists for storing info about the break_done_touch
    break_done_touch.clicked_name = [];
    gotValidClick = false; // until a click is received
    break_done_keyboard.keys = undefined;
    break_done_keyboard.rt = undefined;
    _break_done_keyboard_allKeys = [];
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(break_text);
    BreakComponents.push(break_done_touch);
    BreakComponents.push(break_done_keyboard);
    BreakComponents.push(break_done_button);
    BreakComponents.push(break_done_button_label);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Break'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // exit the break routine immediately if we are not on a break trial
    // break trials occur every break_every trials (see Begin Experiment)
    
    if (!show_break){
        continueRoutine = false;
    }
    
    // *break_text* updates
    if (t >= 0.0 && break_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_text.tStart = t;  // (not accounting for frame time here)
      break_text.frameNStart = frameN;  // exact frame index
      
      break_text.setAutoDraw(true);
    }

    // *break_done_touch* updates
    if (t >= 0.0 && break_done_touch.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_touch.tStart = t;  // (not accounting for frame time here)
      break_done_touch.frameNStart = frameN;  // exact frame index
      
      break_done_touch.status = PsychoJS.Status.STARTED;
      break_done_touch.mouseClock.reset();
      prevButtonState = break_done_touch.getPressed();  // if button is down already this ISN'T a new click
      }
    if (break_done_touch.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = break_done_touch.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [break_done_button]) {
            if (obj.contains(break_done_touch)) {
              gotValidClick = true;
              break_done_touch.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    
    // *break_done_keyboard* updates
    if (t >= 0.0 && break_done_keyboard.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_keyboard.tStart = t;  // (not accounting for frame time here)
      break_done_keyboard.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { break_done_keyboard.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { break_done_keyboard.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { break_done_keyboard.clearEvents(); });
    }

    if (break_done_keyboard.status === PsychoJS.Status.STARTED) {
      let theseKeys = break_done_keyboard.getKeys({keyList: ['space'], waitRelease: false});
      _break_done_keyboard_allKeys = _break_done_keyboard_allKeys.concat(theseKeys);
      if (_break_done_keyboard_allKeys.length > 0) {
        break_done_keyboard.keys = _break_done_keyboard_allKeys[_break_done_keyboard_allKeys.length - 1].name;  // just the last key pressed
        break_done_keyboard.rt = _break_done_keyboard_allKeys[_break_done_keyboard_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *break_done_button* updates
    if (t >= 0.0 && break_done_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_button.tStart = t;  // (not accounting for frame time here)
      break_done_button.frameNStart = frameN;  // exact frame index
      
      break_done_button.setAutoDraw(true);
    }

    
    // *break_done_button_label* updates
    if (t >= 0.0 && break_done_button_label.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      break_done_button_label.tStart = t;  // (not accounting for frame time here)
      break_done_button_label.frameNStart = frameN;  // exact frame index
      
      break_done_button_label.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Break'-------
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for thisExp (ExperimentHandler)
    _mouseXYs = break_done_touch.getPos();
    _mouseButtons = break_done_touch.getPressed();
    psychoJS.experiment.addData('break_done_touch.x', _mouseXYs[0]);
    psychoJS.experiment.addData('break_done_touch.y', _mouseXYs[1]);
    psychoJS.experiment.addData('break_done_touch.leftButton', _mouseButtons[0]);
    psychoJS.experiment.addData('break_done_touch.midButton', _mouseButtons[1]);
    psychoJS.experiment.addData('break_done_touch.rightButton', _mouseButtons[2]);
    if (break_done_touch.clicked_name.length > 0) {
      psychoJS.experiment.addData('break_done_touch.clicked_name', break_done_touch.clicked_name[0]);}
    psychoJS.experiment.addData('break_done_keyboard.keys', break_done_keyboard.keys);
    if (typeof break_done_keyboard.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('break_done_keyboard.rt', break_done_keyboard.rt);
        routineTimer.reset();
        }
    
    break_done_keyboard.stop();
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var EndComponents;
function EndRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    thank_you.setHeight(0.05);
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(thank_you);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'End'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thank_you* updates
    if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thank_you.tStart = t;  // (not accounting for frame time here)
      thank_you.frameNStart = frameN;  // exact frame index
      
      thank_you.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if ((thank_you.status === PsychoJS.Status.STARTED || thank_you.status === PsychoJS.Status.FINISHED) && t >= frameRemains) {
      thank_you.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'End'-------
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
