import Ember from 'ember';
import testArray from './../util/test-cases';


console.log(testArray);

export default Ember.Component.extend({
  //need to set a property equal to the array here for the values to appear on the page
  testArray: testArray,

  actions: {
    //pressing start button triggers the runTests method
    startTests(){
      //loops through testArray
      testArray.forEach(function(test){
        //triggers run from the array
        test.run();
      });
    }

  }
});
