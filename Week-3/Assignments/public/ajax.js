// document.getElementById("aaa").addEventListener("click", function () {
//   console.log(document.getElementById("name").value);
// });

//////////////////
//不能跑的寫法////
// var xhrr = new XMLHttpRequest();
// let i;
// xhrr.onreadystatechange = function () {
//   if (xhrr.status === 200 && xhrr.readyState === 4) {
//     document.getElementById("aaa").addEventListener("click", function () {
//       i = document.getElementById("name").value;
//       console.log(i);
//       document.getElementById("number").innerHTML = xhrr.responseText;
//     });
//   }
// };

// xhrr.open("GET", `data?number=${i}`);
// xhrr.send();
////////////////////
///第一種解法/////////
const renew = (i) => {
  var xhrr = new XMLHttpRequest();
  xhrr.onreadystatechange = function () {
    if (xhrr.status === 200 && xhrr.readyState === 4) {
      // console.log(i);
      document.getElementById("number").innerHTML = xhrr.responseText;
    }
  };
  xhrr.open("GET", `data?number=${i}` /*, false*/);

  xhrr.send();
};

document.getElementById("aaa").addEventListener("click", () => {
  renew(document.getElementById("name").value);
});
//第二種解法///////
// const renew = (i) => {
//   var xhrr = new XMLHttpRequest();
//   xhrr.open("GET", `data?number=${i}`, false);
//   xhrr.addEventListener("load", function () {
//     if (xhrr.status === 200 && xhrr.readyState === 4) {
//       console.log(i);
//       document.getElementById("number").innerHTML = xhrr.responseText;
//     }
//   });
//   xhrr.send();
// };

// document.getElementById("aaa").addEventListener("click", () => {
//   renew(document.getElementById("name").value);
// });
///////////////////////////
