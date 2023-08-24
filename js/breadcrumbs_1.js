"use strict"

window.addEventListener("DOMContentLoaded", () => {

    let ellipsis = document.querySelector(".zb-breadcrumbs-block .ellipsis");
    let collapsibleCrumbs = document.querySelectorAll(".zb-breadcrumbs-block .collapsible-crumb");

    if (ellipsis) {
        ellipsis.addEventListener( 'click', () => {
            if (collapsibleCrumbs) {
                collapsibleCrumbs.forEach((crumb) => {
                   crumb.classList.add("open");
                });
                ellipsis.style.display = 'none';
            }
        })
    }

});
