//下載jquery文件https://teamtreehouse.com/library/jquery-basics-2/adding-jquery-to-a-project#transcript
//可以直接從網路抓載https://teamtreehouse.com/library/jquery-basics-2/conclusion
//// Week 2 Assignment 4: HTML DOM and Event Handling////
// Following the assignment in week 1, let’s add some effects on it by only pure JavaScript without Bootstrap, jQuery, or any other libraries.
// Request 1: Click to Change Text.
// When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".
const $heading = $("#heading");
$heading.on("click", (event) => {
  $(event.target).text(`Have a Good Time!`);
});
//   Request 2: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.
// Hint: all content boxes are already there, they are just set to display: none at the beginning.
//這邊 jquery 線上課程影片老師有提到部分地區的瀏覽器無法支援 JS ，因此要把可能會阻擋主要內容的指令（隱藏指令，限制指令等）放在 JS 資料夾中
//因此這邊的 html 和 A4 作業的差別是 html file 中 class="footerContainer" 中的 id="displayNone" 被拿掉了，我這邊想要用 jquery 寫
const $footerContainer = $(".footerContainer");
const $callToButton = $("#callToAction");

$footerContainer.hide();
$callToButton.on("click", () => {
  $footerContainer.show();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
