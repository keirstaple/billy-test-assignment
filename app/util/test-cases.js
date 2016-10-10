function generateDummyTest() {
  let delay = 7000 + Math.random() * 7000;
  let testPassed = Math.random() > 0.5;
  //define callback as a function
  function callback(x) {
    return x;
  }

  return function() {
    //setTimeout takes parameters function (what function to execute) and delay (delay until function executes)
    setTimeout(function(){
      //check to make sure callback has type function
      if (typeof callback === "function") {
        callback(testPassed);
        console.log('success');
      } else {
        console.log('no success');
      }
    }, delay);
  };
}

export default [
  { description: "invoice gets marked as paid",       run: generateDummyTest() },
  { description: "users are happy",                   run: generateDummyTest() },
  { description: "bank account is synced",            run: generateDummyTest() },
  { description: "stealing underpants... profit!",    run: generateDummyTest() },
  { description: "numbers are adequately waterproof", run: generateDummyTest() },
  { description: "payment methods can do yoga",       run: generateDummyTest() }
];
