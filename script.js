const PAYMENT_URL = "https://rzp.io/rzp/JaYffFXO";
const EBOOK_DOWNLOAD_URL = "https://drive.google.com/file/d/1aFJ39yCBtOBdfreVkkfxv4JAJk5_Bjj7/view?usp=sharing";

document.querySelectorAll("[data-purchase]").forEach((link) => {
  link.href = PAYMENT_URL;
  link.addEventListener("click", (event) => {
    if (PAYMENT_URL === "PAYMENT_URL_HERE") {
      event.preventDefault();
      window.alert("Replace PAYMENT_URL_HERE in script.js with your payment link.");
    }
  });
});

document.querySelectorAll("[data-download]").forEach((link) => {
  link.href = EBOOK_DOWNLOAD_URL;
  link.addEventListener("click", (event) => {
    if (EBOOK_DOWNLOAD_URL === "EBOOK_DOWNLOAD_URL_HERE") {
      event.preventDefault();
      window.alert("Replace EBOOK_DOWNLOAD_URL_HERE in script.js with your download link.");
    }
  });
});

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
