document.addEventListener("DOMContentLoaded", () => {
    let nav = document.querySelector(".nav");
    let menu = document.getElementById("menu-btn");
    let close = document.getElementById("close-btn");
    const menuLinks = document.querySelectorAll(".services-menu .link1");
    const hero_section_btn = document.querySelectorAll(".hero-section-btn button");
    const typo3_section_btn = document.querySelectorAll(".typo3-section-btn button");

    //for firstlink back btn
    const dropdowns = document.querySelectorAll(".dropdown");
    const backButtons = document.querySelectorAll(".back-btn");


    function setActive_for_buttons(e) {
        const group = e.currentTarget.parentElement.querySelectorAll("button");
        // get only buttons in the same container (parent div)

        if (e.target.classList.contains("active-btn")) {
            // remove active if the same button is clicked again
            e.target.classList.remove("active-btn");
        } else {
            // remove active from all in this group
            group.forEach(el => el.classList.remove("active-btn"));
            // add active to the clicked one
            e.target.classList.add("active-btn");
        }
    }

    // For hero buttons
    hero_section_btn.forEach(btn => {
        btn.addEventListener("click", setActive_for_buttons);
    });

    // For typo3 buttons
    typo3_section_btn.forEach(btn => {
        btn.addEventListener("click", setActive_for_buttons);
    });

    window.addEventListener("resize", () => {
        let screenWidth = window.innerWidth;
        console.log(screenWidth);

    });

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
            if (window.innerWidth < 900) {
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
            if (window.innerWidth < 900) {
                const parentFirstLink = btn.closest(".firstlink");
                parentFirstLink.classList.remove("active");
                document.querySelectorAll(".drop-item").forEach(item => item.classList.remove("active-btn"));
            }
        });
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            const content = link.nextElementSibling;
            const arrow = link.querySelector("img");
            const isActive = link.classList.contains("active1");

            // Step 1: reset all
            document.querySelectorAll(".service-content-ul2").forEach(c => c.style.display = "none");
            document.querySelectorAll(".services-menu img").forEach(img => {
                // img.style.transform = "rotate(0deg)";
                // img.style.backgroundColor = "transparent"; // reset background
            });
            document.querySelectorAll(".services-menu .link1").forEach(l => l.classList.remove("active1"));

            // Step 2: if clicked was not active → activate it
            if (!isActive) {
                content.style.display = "block";
                // arrow.style.transform = "rotate(-180deg)";
                // arrow.style.backgroundColor = "red";   // 🔴 active arrow
                link.classList.add("active1");
            }
        });
    });

    // LazyLoad for all .lazy images
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 300,
        callback_loaded: function (el) {
            el.classList.add("loaded"); // optional fade-in class
        },
        callback_error: function (el) {
            console.error("Error loading", el.getAttribute("data-src"));
        }
    });

    //email velidation
    let submitBtn = document.getElementById('submit');
    
    submitBtn.addEventListener('click', validateEmail);
    function validateEmail() {
        const emailField = document.getElementById('email');
        const email = emailField.value.trim();

        // simple regex for email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            alert('Please enter your email');
        } else if (!regex.test(email)) {
            alert('Please enter a valid email address');
            emailField.focus();
        } else {
            // alert('Valid email!');
            // here you can proceed (send data / submit form)
        }
    }

});





