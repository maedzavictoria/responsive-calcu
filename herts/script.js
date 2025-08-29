const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  alert("Yaaay! I love you more ❤🥰");
});

noBtn.addEventListener("mouseover", () => {
  // Move the button randomly when hovered
  const x = Math.floor(Math.random() * window.innerWidth - 100);
  const y = Math.floor(Math.random() * window.innerHeight - 50);
  noBtn.style.position = "absolute";
  noBtn.style.left = $xpx;
  noBtn.style.top = $y
    px;
});
