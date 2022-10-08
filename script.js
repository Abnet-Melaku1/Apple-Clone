const strongs = document.querySelectorAll(".footer_section>div>div>strong");
const uls = document.querySelectorAll(".footer_section > div > ul");
console.log(uls);
// console.log(strongs);
// console.log(uls)
strongs.forEach((strong) =>
  strong.addEventListener("click", () => {
    let sibling = strong.nextElementSibling;
    if (sibling.classList.contains("fa-plus")) {
      sibling.classList.remove("fa-plus");
      sibling.classList.add("fa-xmark");
    } else {
      sibling.classList.remove("fa-xmark");
      sibling.classList.add("fa-plus");
    }

    uls.forEach((ul) => {
      let vari = strong.className;
      // console.log(ul, vari);
      if (ul.classList.contains(vari)) {
        console.log(vari, ul);
        ul.classList.toggle("active");
      }
    });
  })
);
const nav = document.querySelector("header");
const lists = document.querySelector(".nav-links");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const burger = document.querySelector(".burger");
const links = lists.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  lists.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  line1.classList.toggle("toggle");
  line2.classList.toggle("toggle");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    // lists.classList.toggle("nav-open");
    line1.classList.toggle("toggle");
    line2.classList.toggle("toggle");
    nav.classList.toggle("nav-open");
    lists.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
