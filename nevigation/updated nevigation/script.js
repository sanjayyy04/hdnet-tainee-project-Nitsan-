document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const menu = document.getElementById("menu-btn");
    const close = document.getElementById("close-btn");

    const dropdowns = document.querySelectorAll(".dropdown");
    const backButtons = document.querySelectorAll(".back-btn");

    // open mobile nav
    menu.addEventListener("click", () => {
        nav.style.left = "0%";
        close.style.display = "block";
        menu.style.display = "none";
    });

    // close mobile nav
    close.addEventListener("click", () => {
        nav.style.left = "100%";
        close.style.display = "none";
        menu.style.display = "block";

        // reset all open firstlinks
        document.querySelectorAll(".firstlink").forEach(fl => fl.classList.remove("active"));
        document.querySelectorAll(".drop-item").forEach(item => item.classList.remove("active-btn"));
    });

    // mobile click to open firstlink
    dropdowns.forEach(drop => {
        const dropItem = drop.querySelector(".drop-item");
        const firstLink = drop.querySelector(".firstlink");

        dropItem.addEventListener("click", e => {
            // only intercept click on mobile / tablet
            if (window.innerWidth < 780) {
                e.preventDefault();
                // close any other open panels
                document.querySelectorAll(".firstlink").forEach(fl => fl.classList.remove("active"));
                document.querySelectorAll(".drop-item").forEach(item => item.classList.remove("active-btn"));

                // open this one
                firstLink.classList.add("active");
                dropItem.classList.add("active-btn");
            }
        });
    });

    // back buttons to close firstlink on mobile
    backButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            if (window.innerWidth < 780) {
                const parentFirstLink = btn.closest(".firstlink");
                parentFirstLink.classList.remove("active");
                document.querySelectorAll(".drop-item").forEach(item => item.classList.remove("active-btn"));
            }
        });
    });

    // LazyLoad images
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 300,
        callback_loaded: function (el) {
            el.classList.add("loaded");
        },
        callback_error: function (el) {
            console.error("Error loading", el.getAttribute("data-src"));
        }
    });
});
