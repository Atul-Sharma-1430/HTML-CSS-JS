const getPromise = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("This is your data", data);
      resolve();
    }, );
  });
};

// IIFE - Immediately Invoked Function Expression
(async () => {
  await getPromise(1);
  await getPromise(2);
  await getPromise(3);
  await getPromise(4);
})();
