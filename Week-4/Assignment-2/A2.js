function ajax(src, callback) {
  // your code here
  const xhrr = new XMLHttpRequest();
  xhrr.onreadystatechange = () => {
    if (xhrr.status === 200 && xhrr.readyState === 4) {
      let data = JSON.parse(xhrr.responseText);
      return callback(data);
    }
  };
  xhrr.open("GET", src);
  xhrr.send();
}
function render(data) {
  // your code here
  // document.createElement() and appendChild() methods are preferred.
  const newSection = document.createElement("section");
  data.map((index) => {
    newSection.innerHTML += `
  <h1>name : ${index.name} , price : ${index.price} , description : ${index.description}</h1>
  `;
  });

  document.getElementById("product").appendChild(newSection);
}
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
); // you should get product information in JSON format and render data in the page

//////
// ajax(
//   "https://appworks-school.github.io/Remote-Assignment-Data/products",
//   console.log
// );
