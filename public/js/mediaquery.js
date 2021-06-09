 // media query event handler
 if (matchMedia) {
    const mq = window.matchMedia("(min-width: 600px)");
    mq.addListener(WidthChange);
    WidthChange(mq);
  }

  // media query change
  function WidthChange(mq) {
    if (mq.matches) { // if desktop or tablet

        //NAV changes
        document.getElementsByClassName('menuContainer')[0].style.display = "none";
        document.getElementsByClassName("nav-links")[0].style.visibility = "visible";
        document.getElementsByClassName("nav-links")[0].style.opacity = "1";
        document.getElementById('join-us-arrow').style.display = "flex";

        //HOME changes


    } else { // if mobile
        document.getElementsByClassName('menuContainer')[0].style.display = "block";
        document.getElementsByClassName("nav-links")[0].style.visibility = "hidden";
        document.getElementsByClassName("nav-links")[0].style.opacity = "0";
        document.getElementById('join-us-arrow').style.display = "none";
    }

  }