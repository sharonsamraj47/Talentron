const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  // Calculate 25% of the page height
  const scrollThreshold =
    document.documentElement.scrollHeight * 0.25;

  // Check the current scroll position
  if (window.scrollY > scrollThreshold) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

