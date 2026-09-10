const toast = document.getElementById("toast");
const modal = document.getElementById("subscribeModal");

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

const lockModal = document.getElementById("lockModal");
const showLock = (e) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (modal) modal.classList.remove("open");
  lockModal.classList.add("open");
};

document.getElementById("closeLockModal").addEventListener("click", () => {
  lockModal.classList.remove("open");
});
lockModal.addEventListener("click", (e) => {
  if (e.target === lockModal) lockModal.classList.remove("open");
});

document.querySelectorAll(".topbar button, .socials a, .links a").forEach((el) => {
  el.addEventListener("click", showLock, true);
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

const countdownEl = document.getElementById("countdown");
if (countdownEl) {
  const end = new Date(countdownEl.dataset.end).getTime();
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");

  const pad = (n) => String(Math.max(0, n)).padStart(2, "0");

  const tick = () => {
    const diff = end - Date.now();
    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      return;
    }
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;
    daysEl.textContent = pad(Math.floor(diff / day));
    hoursEl.textContent = pad(Math.floor((diff % day) / hour));
    minsEl.textContent = pad(Math.floor((diff % hour) / min));
    secsEl.textContent = pad(Math.floor((diff % min) / sec));
  };

  tick();
  setInterval(tick, 1000);
}
