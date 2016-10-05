import Ember from 'ember';
import testArray from './../util/test-cases';


console.log(testArray);

export default Ember.Component.extend({
  //need to set a property equal to the array here for the values to appear on the page
  testArray: testArray,
  actions: {
    runTests(){
      testArray.forEach(function(item){
        console.log(item);
        item.run();
      });
    }
  }
});
