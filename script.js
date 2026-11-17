
const WHATSAPP_NUMBER = "255702387967";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");
const form = document.querySelector("#enrollment-form");
const status = document.querySelector(".form-status");

document.querySelector("#year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
  navigation.classList.toggle("open", !isOpen);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelectorAll("[data-course]").forEach((link) => {
  link.addEventListener("click", () => {
    const courseSelect = form.elements.course;
    const matchingOption = Array.from(courseSelect.options).find((option) => option.text === link.dataset.course);
    if (matchingOption) courseSelect.value = matchingOption.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const fields = [
    ["Parent / guardian", data.get("parentName")],
    ["Student", data.get("studentName")],
    ["Age", data.get("studentAge")],
    ["School level", data.get("schoolLevel")],
    ["Phone", data.get("phone")],
    ["Course", data.get("course")],
    ["Learning format", data.get("format")],
    ["Preferred area", data.get("location")],
    ["Additional information", data.get("message")],
  ].filter(([, value]) => String(value || "").trim());

  const message = `Hello AkiliTech Academy, I’d like to ask about computer lessons.\n\n${fields.map(([label, value]) => `${label}: ${String(value).trim()}`).join("\n")}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  status.textContent = "Your enquiry is ready. Review it in WhatsApp before sending.";
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});

document.querySelectorAll('a[href^="https://wa.me/"]').forEach((link) => {
  const url = new URL(link.href);
  const text = url.searchParams.get("text");
  link.href = `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
});
