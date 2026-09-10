const toast = document.getElementById("toast");
const modal = document.getElementById("subscribeModal");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

document.getElementById("shareBtn").addEventListener("click", async () => {
  const data = {
    title: "Discover Crypto",
    text: "It’s time to Discover Crypto",
    url: window.location.href,
  };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied");
    }
  } catch (_) {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Link copied");
  }
});

document.getElementById("subscribeBtn").addEventListener("click", () => {
  modal.classList.add("open");
});

document.getElementById("closeModal").addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("open");
});

document.getElementById("emailForm").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
  showToast("You're on the list");
});

document.getElementById("subForm").addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.remove("open");
  showToast("Subscribed");
});
