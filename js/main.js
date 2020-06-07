const nav = document.querySelector("nav");
const header = document.querySelector("header");

const navOptions = {
  threshold: 0.9
};

const navBarObserver = new IntersectionObserver(
  function(entries, navBarObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        nav.classList.add("navScrolled");
      } else {
        nav.classList.remove("navScrolled");
      }
    });
  },

  navOptions
);

navBarObserver.observe(header);

/****************************************** */

const navLi1 = document.querySelector(".navLink1");

const navLiObs1 = new IntersectionObserver(
  function(entries, navLiObs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navLi1.classList.add("navLinkScrolled");
      } else {
        navLi1.classList.remove("navLinkScrolled");
      }
    });
  },

  navOptions
);

navLiObs1.observe(header);
/****************************************** */
const navLi2 = document.querySelector(".navLink2");

const navLiObs2 = new IntersectionObserver(
  function(entries, navLiObs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navLi2.classList.add("navLinkScrolled");
      } else {
        navLi2.classList.remove("navLinkScrolled");
      }
    });
  },

  navOptions
);

navLiObs2.observe(header);
/****************************************** */
const navLi3 = document.querySelector(".navLink3");

const navLiObs3 = new IntersectionObserver(
  function(entries, navLiObs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navLi3.classList.add("navLinkScrolled");
      } else {
        navLi3.classList.remove("navLinkScrolled");
      }
    });
  },

  navOptions
);

navLiObs3.observe(header);
/****************************************** */
const navLi4 = document.querySelector(".navLink4");

const navLiObs4 = new IntersectionObserver(
  function(entries, navLiObs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        navLi4.classList.add("navLinkScrolled");
      } else {
        navLi4.classList.remove("navLinkScrolled");
      }
    });
  },

  navOptions
);

navLiObs4.observe(header);
/********************************************************************************************************** */
const brandSc = document.querySelector(".branding");

const brandScObs = new IntersectionObserver(
  function(entries, brandScObs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        brandSc.classList.add("brandingScroll");
      } else {
        brandSc.classList.remove("brandingScroll");
      }
    });
  },

  navOptions
);

brandScObs.observe(header);

/********************************************************************************************************** */

$(document).ready(function() {
  $(".burgBar").click(function() {
    $(".navbarItems").slideToggle();
  });
});

$(document).ready(function() {
  $("ul.navbarItems li a").click(function() {
    $(".navbarItems").slideToggle();
  });
});

/********************************************************************************************************** */
$(".burgBar").click(function() {
  $(".burgBar").css({ border: "1px solid #325FEC", "border-radius": "5px" });
});

$(".gallery").lightcase();
/********************************************************************************************************** */
