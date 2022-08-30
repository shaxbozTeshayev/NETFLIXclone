const tabItems = document.querySelectorAll(".tab_item");
const tabContentItems = document.querySelectorAll(".tab_content_item");

function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add("tab_border");
  const tabContentItem = document.querySelector(`#${this.id}_content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab_border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
