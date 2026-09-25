Promise.allSettled([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((error) => {
    console.error(error);
  });