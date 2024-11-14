function toggle(letter) {
  const content = document.getElementById(`btn${letter}`);
  content.style.display = content.style.display === "block" ? "none" : "block";

  
}

function hideContent(letter) {
  const content = document.getElementById(`btn${letter}`);
  content.style.display = "none";
}
