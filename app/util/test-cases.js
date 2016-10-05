function generateDummyTest() {
  let delay = 7000 + Math.random() * 7000
  let testPassed = Math.random() > 0.5

  return function(callback) {
    setTimeout(function() {
      callback(testPassed)
    }, delay)
  }
}

export default [
  { description: "invoice gets marked as paid",       run: generateDummyTest() },
  { description: "users are happy",                   run: generateDummyTest() },
  { description: "bank account is synced",            run: generateDummyTest() },
  { description: "stealing underpants... profit!",    run: generateDummyTest() },
  { description: "numbers are adequately waterproof", run: generateDummyTest() },
  { description: "payment methods can do yoga",       run: generateDummyTest() }
]
