// Older Way
function stepOne(CallBack) {
  setTimeout(() => {
    console.log("Step One completed.");
    CallBack();
  }, 2000);
}

function stepTwo(CallBack) {
  setTimeout(() => {
    console.log("Step Two completed.");
    CallBack();
  }, 2000);
}

function stepThree(CallBack) {
  setTimeout(() => {
    console.log("Step Three completed.");
    CallBack();
  }, 2000);
}

function stepFour(CallBack) {
  setTimeout(() => {
    console.log("Step Four completed.");
    CallBack();
  }, 2000);
}

// Run steps in sequence
stepOne(() => {
  stepTwo(() => {
    stepThree(() => {
      stepFour(() => {
        console.log("End");
      });
    });
  });
});




// Modern way using promises
function waitStep(stepName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stepName + " completed.");
      resolve();
    }, 2000);
  });
}

async function runSteps() {
  await waitStep("Step One");
  await waitStep("Step Two");
  await waitStep("Step Three");
  await waitStep("Step Four");
  console.log("End");
}

runSteps();
