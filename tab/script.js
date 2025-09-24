const menuLinks = document.querySelectorAll(".services-menu .link1");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const content = link.nextElementSibling;
        const arrow = link.querySelector("img");
        const isActive = link.classList.contains("active");

        // Step 1: reset all
        document.querySelectorAll(".service-content-ul2").forEach(c => c.style.display = "none");
        document.querySelectorAll(".services-menu img").forEach(img => img.style.transform = "rotate(0deg)");

        // Step 2: if clicked was not active → activate it
        if (!isActive) {
            content.style.display = "block";
            arrow.style.transform = "rotate(-180deg)";
            link.classList.add("active");
        }
        else{
            link.classList.remove("active");
        }
    });
});
