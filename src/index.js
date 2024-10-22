const sidebar = document.querySelector(".sidebar");
const sidebarToggleOpen = document.querySelector(".sidebar-toggle--open");
const sidebarToggleClose = document.querySelector(".sidebar-toggle--close");
const body = document.body;

sidebarToggleOpen.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--open");
  sidebar.classList.add("sidebar--open");
});

sidebarToggleClose.addEventListener("click", function () {
  sidebar.classList.remove("sidebar--open");
});

// Close the sidebar when clicking outside
document.addEventListener("click", function (event) {
  // Check if the click is outside the sidebar and toggle button
  if (
    !sidebar.contains(event.target) &&
    !sidebarToggleOpen.contains(event.target)
  ) {
    sidebar.classList.remove("sidebar--open");
  }
});
