document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__header");
    const body = item.querySelector(".accordion__body");
    const icon = item.querySelector(".icon");

    header.addEventListener("click", function () {
      const isOpen = item.classList.contains("open");

      accordionItems.forEach((i) => {
        i.classList.remove("open");
        i.querySelector(".accordion__body").style.maxHeight = null;
        const icon = i.querySelector(".icon");
        if (icon) icon.src = "assets/image/downnn.svg";
      });

      if (isOpen) return;

      item.classList.add("open");
      body.style.maxHeight = body.scrollHeight + "px";
      if (icon) icon.src = "assets/image/uppp.svg";
    });
  });
});
