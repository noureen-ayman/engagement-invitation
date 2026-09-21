/* =========================================================
   EDIT THESE VALUES — everything you need to customize lives here
   ========================================================= */
const EVENT_DATE = "Friday, 2 October";
const EVENT_TIME = "7:00 PM";
const LOCATION_NAME = "The Nile Anchor, Bella Yacht";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/19RiGjsjE91wqKLQ9?g_st=ic";

/* ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Fill in event details
  document.getElementById("eventDate").textContent = EVENT_DATE;
  document.getElementById("eventTime").textContent = EVENT_TIME;
  document.getElementById("eventLocation").textContent = LOCATION_NAME;

  const mapLink = document.getElementById("mapLink");
  mapLink.href = GOOGLE_MAPS_URL;

  // Smooth scroll from hero CTA into the invitation
  const openBtn = document.getElementById("openInvitation");
  openBtn.addEventListener("click", () => {
    document.getElementById("invite").scrollIntoView({ behavior: "smooth" });
  });

  // Graceful fallback for placeholder / missing photos
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("img-missing");
    });
  });

  // Scroll-reveal for elements marked .reveal
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => observer.observe(el));
});
