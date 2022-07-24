/*!
 * Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector("#sideNav");
  if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#sideNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

 // create onclick function to link portfolio to another webpage
    const portfolio1 = document.body.querySelector("#portfolio1");
    if (portfolio) {
        portfolio1.addEventListener("click", () => {
            window.location.href = "https://clearsight-sei.herokuapp.com";
        });
    }

    const portfolio2 = document.body.querySelector("#portfolio2");
        if (portfolio) {
            portfolio2.addEventListener("click", () => {
                window.location.href = "https://clearsight-sei.herokuapp.com";
            });
    }

    const portfolio3 = document.body.querySelector("#portfolio3");
    if (portfolio) {
        portfolio3.addEventListener("click", () => {
            window.location.href = "https://kmcaloney15.github.io/library-memory-game/";
        });
    }
});
