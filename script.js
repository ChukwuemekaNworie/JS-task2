
const data = [
    {
      principal: 2500,
      time: 1.8
    },
    {
      principal: 1000,
      time: 5
    },
      {
      principal: 3000,
      time: 1
    },
      {
      principal: 2000,
      time: 3
    }
  ]
   
  
  // NB: Each individual object should have 'principal' and 'time' as keys.
  
  // Write a function called "interestCalculator" that takes an array as a single argument and does the following:
  
  function interestCalculator(array) {
    
  //   declare the variables to be used
    let rate;
    let interestData = [];  
    
  //   because it takes in an array as argument
  //   loop through individual items
  
    for (let i = 0; i < array.length; i++) {
      
  //     target keys in the objects in the array, the  array[i] is to enter the individual data in the array(which in this case are objects), and the . is to target the individual items in each object in the array.
      
      const p = array[i].principal
      const t = array[i].time
      
  //     determine rate for each item in the array using the following conditions
      //    NOTE:  and = &&  || = or in JavaScript  
      
  // * If the principal is greater than or equal to 2500 and the time is greater than 1 and less than 3, then rate = 3
      
      if (p >= 2500 && t > 1 && t < 3){
         rate = 3; 
        
    // * If the principal is greater than or equal to 2500 and the time is greater than or equal to 3, then rate = 4
      
      } else if (p >= 2500 && t >= 3){
        rate = 4;
        
     // * If the principal is less than 2500 or the time is less than or equal to 1, then rate = 2   
        
      } else if (p < 2500 || t <= 1){
        rate = 2;
        
         // * Otherwise, rate = 1;
      } else {
        rate = 1
      }
      
      // Calculate the interest for each individual object using the formula: (principal * rate * time) / 100. 
     const interest = (p * rate * t) / 100
     
     // The function should return an array of objects called 'interestData' and each individual object should have 'principal', 'rate', 'time' and 'interest' as keys with their corresponding values.
  
  // make a new object that has principal, rate, time and interest.
     const newObject = {
       principal: p,
       time: t,
       rate: rate,
       interest: interest
     }
     
  //    push that new object into the empty interestData array that was declared above as let interetsData = [] using the array.push method
     
     interestData.push(newObject); 
    }
    // Log the 'interestData' array to console BEFORE your return statement.
     console.log(interestData)
    
    // return the result of the function
    return interestData;
  }
  
  // Finally, call/execute the function and pass the 'data' array you created.
  interestCalculator(data);