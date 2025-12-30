/* CallBack Hell :- We dont use it because it make the code writing and understanding difficult when cocde becomes bigger so we avoid it  so to Avoid using 
                    callBAck hell A new Topic comes Called Promises 
   Promises :- Promises is for "Eventual" Complpetion of task. It is an Object in JS. It is a soltuion to callBack. mea ya toh kaam reject hoga ya resolve hoga but kaam jaruru hoga ye fix h
   Syntax:- 
   let promise = new Promise((resolve , reject) => { })
*/

const getPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is your data", data);
      resolve();
    }, 2000);
  });
};

getPromise(1)
  .then(() => {
    return getPromise(2);
  })
  .then(() => {
    return getPromise(3);
  });


