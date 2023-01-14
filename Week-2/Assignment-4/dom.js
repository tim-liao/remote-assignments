//// Week 2 Assignment 4: HTML DOM and Event Handling////
// Following the assignment in week 1, let’s add some effects on it by only pure JavaScript without Bootstrap, jQuery, or any other libraries.
// Request 1: Click to Change Text.
// When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".
document
  .querySelector("#heading")
  .addEventListener(
    "click",
    () => (document.querySelector("h1").textContent = "Have a Good Time!")
  );

//   Request 2: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.
// Hint: all content boxes are already there, they are just set to display: none at the beginning.
document
  .querySelector("#callToAction")
  .addEventListener("click", () =>
    document.querySelector(".footerContainer").removeAttribute("id")
  );
//////////////////////////////////////////////////////////////////////////////////////////////////
