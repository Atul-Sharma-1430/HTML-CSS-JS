//Normal funution to print retrive Data
function getData(id) {
  setTimeout(() => {
    console.log("Data ", id);
  }, 2000);
}

console.log("Before");
getData();
console.log("After");

// Now the Q is to print 3 data one after another but with a delay of 2 secs after every data retrival
/*Solution:-  CallBack Hell :- We dont use it because it make the code writing and understanding difficult so we avoid it  so to Avoid using 
              callBAck hell A new Topic comes Called Promises */
function getData(id, nextData) {
  setTimeout(() => {
    console.log("Data ", id);
    if (nextData) {
      nextData();
    }
  }, 2000);
}
// we Can't write it like this it will get executed immediately
// getData(1 , getData(2));
// Hence we write like this
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});

/*  
Output :- Prints after every 2 secs
    Data  1
    Data  2
    Data  3
    Data  4
*/
