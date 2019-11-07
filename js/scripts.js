$(function () {
  const itemText = [
    `Talk to adviser
Do ECEN5991 homework2`,
    `Wings
Gluten free water`,
    `Check out the World's biggest pond
Avoid my roommate
Eat banana tonight`,
    `?`
  ];
  // for index.html -- populate card data
  const stretchLink = `<a href="edit.html" class="btn stretched-link"></a>`;
  const elements = document.getElementsByClassName("card-body");
  for (let i = 0; elements && i < elements.length; i++) {
    if (sessionStorage.getItem(`item${i}`)) {
      elements[i].innerHTML = `${sessionStorage.getItem(`item${i}`).replace(/\n/g, "<br>")} ${stretchLink}`;
    } else {
      elements[i].innerHTML = `${itemText[i].replace(/\n/g, "<br>")} ${stretchLink}`;
    }
    elements[i].addEventListener("click", function () {
      sessionStorage.setItem("index", i);
    });
  }

  // for edit.html -- put data in the textarea
  const textAreaEls = document.getElementsByTagName("textarea");
  for (let i = 0; textAreaEls && i < textAreaEls.length; i++) {
    if (sessionStorage.getItem(`item${i}`)) {
      textAreaEls[i].innerHTML = sessionStorage.getItem(`item${i}`);
    } else {
      textAreaEls[i].innerHTML = itemText[i];
    }
    textAreaEls[i].addEventListener("keyup", function () {
      itemText[i] = textAreaEls[i].value;
      sessionStorage.setItem(`item${i}`, itemText[i]);
    });
    // Set the tab active
    if (sessionStorage.getItem("index") == i) {
      const element = document.querySelectorAll(".nav-item.nav-link")[i];
      const event = document.createEvent("HTMLEvents");
      event.initEvent("click", true, true);
      event.eventName = "click";
      element.dispatchEvent(event);
    }
  }
  console.log(sessionStorage.getItem("index"));
});