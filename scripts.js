document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("show-ai-button");
  const aiSection = document.getElementById("godfather-ai");

  if (btn && aiSection) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      aiSection.style.display = "block";
      aiSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
