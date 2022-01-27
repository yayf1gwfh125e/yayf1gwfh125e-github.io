let textBtn = document.querySelector(".distractions");
textBtn.innerHTML = "Sem distrações";

function hide() {
    var x = document.getElementById("hide");
    if (x.style.display === "none") {
      x.style.display = "block";
      textBtn.innerHTML = "Sem distrações";
    } else {
      x.style.display = "none";
      textBtn.innerHTML = "Com distrações";
    }

    var y = document.getElementById("hide2");
    if (y.style.display === "none") {
      y.style.display = "flex";
    } else {
      y.style.display = "none";
    }
  }

