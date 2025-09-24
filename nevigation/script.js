
  let nav = document.querySelector(".nav");
  let menu = document.getElementById("menu-btn");
  let close = document.getElementById("close-btn");

  window.addEventListener("resize", () => {
    let screenWidth = window.innerWidth;
    console.log(screenWidth);



    if (screenWidth <= 769) {
      // nav.style.display = "none";
      menu.style.display = "block";
    } else {
      nav.style.display = "block";
      menu.style.display = "none";
    }


  });
  menu.addEventListener("click", () => {
    nav.style.left = "0%";
    close.style.display = "block";
    menu.style.display = "none";
  });

  close.addEventListener("click", () => {
    nav.style.left = "100%";
     close.style.display = "none";
    menu.style.display = "block";
  });



