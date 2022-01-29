let textBtn = document.querySelector(".distractions");
textBtn.innerHTML = "Off";

function hide() {
  var x = document.getElementById("hide");
  var y = document.getElementById("btn-hide")
  if (x.style.display === "none") {
    x.style.display = "block";
    textBtn.innerHTML = "Off";
    y.style.color = "aqua";
    y.style.background = "red";

  } else {
    x.style.display = "none";
    textBtn.innerHTML = "On";
    y.style.color = "red";
    y.style.background = "aqua";
  }
}

