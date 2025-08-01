function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

/* javascript code for faq section */
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".accordion");

  faqContainer.addEventListener("click", (e) => {
    const header = e.target.closest(".accordion-header");

    if (!header) return;

    const item = header.parentElement;
    const body = item.querySelector(".accordion-body");
    const icon = header.querySelector("i");

    // Toggle icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle visibility
    body.classList.toggle("open");

    // Close other open items
    const allItems = faqContainer.querySelectorAll(".accordion-item");

    allItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherBody = otherItem.querySelector(".accordion-body");
        const otherIcon = otherItem.querySelector(".accordion-header i");

        otherBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});
