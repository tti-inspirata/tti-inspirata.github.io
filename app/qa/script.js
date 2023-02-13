const accSingleTriggers = document.querySelectorAll(".accordion-header");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("active");
      return;
    }
    item.classList.remove("active");
  });
}