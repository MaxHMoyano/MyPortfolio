document.addEventListener("DOMContentLoaded", function() {
  // Handler when the DOM is fully loaded
  let buttons = document.querySelectorAll(
    "#work_btn, #about_btn, #contact_btn"
  );
  buttons.forEach(btn => {
    btn.addEventListener("click", e => {
      buttons.forEach(btn => btn.classList.remove("active"));
      btn.classList.add("active");
      document.location = `#${btn.id.split("_")[0]}`;
    });
  });
});

function goToHome() {
  let buttons = document.querySelectorAll(
    "#work_btn, #about_btn, #contact_btn"
  );
  buttons.forEach(btn => btn.classList.remove("active"));
  document.location = "#home";
}
