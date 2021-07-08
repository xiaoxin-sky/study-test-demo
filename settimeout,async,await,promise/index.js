/* new Promise((resolve) => {
  console.log('111');
  resolve();
  console.log(222);
}).then(() => console.log("promise-then")); */
/* async function promise1() {
  return new Promise((resolve) => {
    console.log("dj1");
    resolve(1);
    console.log("dj2");
  });
}
const res = promise1().then((res) => console.log(res));
console.log(res);
console.log("start");
console.log("end");
 */
Promise.resolve()
  .then(() => {
    console.log("p1");
    Promise.resolve().then(() => {
      console.log("p2");
      return Promise.resolve();
    }).then(()=>{
      console.log("p3");
    });
  })
  .then(() => {
    console.log("p4");
  })
  .then(() => {
    console.log("p5");
  })
  .then(() => {
    console.log("p6");
  })
  .then(() => {
    console.log("p7");
  })
  .then(() => {
    console.log("p8");
  });
