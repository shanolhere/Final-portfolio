const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("activeClass");
    });
    e.target.classList.add("activeClass");

    contents.forEach((content) => {
      content.classList.remove("activeClass");
    });
    const element = document.getElementById(id);
    element.classList.add("activeClass");
  }
};
