import "./styles.css";
import { business } from "./config.js";

const menu = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () =>
  menu.setAttribute(
    "aria-expanded",
    String(menu.getAttribute("aria-expanded") !== "true"),
  ),
);
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-row")) closeMenu();
});
document.querySelector("#year").textContent = new Date().getFullYear();

const serviceDialog = document.querySelector("#service-dialog");
const bookingDialog = document.querySelector("#booking-dialog");
const form = document.querySelector("#booking-form");
const status = document.querySelector("#form-status");
const send = document.querySelector("#whatsapp-send");
const preview = document.querySelector("#message-preview");
let returnFocus;
function openDialog(dialog, trigger) {
  document.querySelectorAll("dialog[open]").forEach((item) => item.close());
  returnFocus = trigger;
  dialog.showModal();
  document.body.classList.add("modal-open");
}
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog
    .querySelector(".close")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom)
    )
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (!document.querySelector("dialog[open]")) {
      document.body.classList.remove("modal-open");
      returnFocus?.focus();
    }
  });
});
function book(trigger, service) {
  if (service) form.elements.service.value = service;
  status.textContent = "";
  send.hidden = true;
  preview.hidden = true;
  openDialog(bookingDialog, trigger);
}
document
  .querySelectorAll("[data-book]")
  .forEach((button) => button.addEventListener("click", () => book(button)));
document.querySelectorAll("[data-service]").forEach((button) =>
  button.addEventListener("click", () => {
    const service = button.dataset.service;
    document.querySelector("#service-title").textContent = service;
    document.querySelector("#service-description").textContent =
      `Emplacamento, licenciamento e transferência de ${service.toLowerCase()}. Nossa equipe orienta você sobre os documentos e acompanha o andamento do atendimento.`;
    document.querySelector("#service-book").dataset.service = service;
    openDialog(serviceDialog, button);
  }),
);
document
  .querySelector("#service-book")
  .addEventListener("click", (event) =>
    book(returnFocus, event.currentTarget.dataset.service),
  );
const today = new Date();
const localDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
form.elements.date.min = localDate;
for (const field of [form.elements.name, form.elements.model]) {
  field.addEventListener("input", () =>
    field.setCustomValidity(field.value.trim() ? "" : "Preencha este campo."),
  );
}
form.addEventListener("input", () => {
  send.hidden = true;
  preview.hidden = true;
  status.textContent = "";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  for (const field of [form.elements.name, form.elements.model])
    field.setCustomValidity(field.value.trim() ? "" : "Preencha este campo.");
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const date = data.get("date");
  const message = [
    "Olá, Marplacas! Gostaria de solicitar atendimento.",
    `Tipo de veículo: ${data.get("service")}`,
    `Nome: ${data.get("name").trim()}`,
    `Modelo: ${data.get("model").trim()}`,
    `Placa: ${data.get("plate").trim().toUpperCase() || "Não informada"}`,
    `Data desejada: ${date ? date.split("-").reverse().join("/") : "A combinar"}`,
  ].join("\n");
  preview.value = message;
  preview.hidden = false;
  if (/^\d{12,13}$/.test(business.whatsapp)) {
    send.href = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
    send.hidden = false;
    status.textContent =
      "Mensagem pronta. Clique em Abrir WhatsApp para continuar. O atendimento e a data serão confirmados pela equipe.";
  } else
    status.textContent =
      "WhatsApp a confirmar. Sua mensagem está pronta para copiar.";
});

document.querySelectorAll(".faq details").forEach((detail) =>
  detail.addEventListener("toggle", () => {
    if (detail.open)
      document.querySelectorAll(".faq details").forEach((other) => {
        if (other !== detail) other.open = false;
      });
  }),
);
if (business.address) {
  document.querySelector("#address").textContent = business.address;
  const query = encodeURIComponent(business.address);
  const iframe = document.createElement("iframe");
  iframe.title = "Localização da Marplacas no Google Maps";
  iframe.src = `https://maps.google.com/maps?q=${query}&output=embed`;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "no-referrer-when-downgrade";
  document.querySelector("#map").replaceChildren(iframe);
  document.querySelector("#directions").hidden = false;
  document.querySelector("#google-route").href =
    `https://www.google.com/maps/dir/?api=1&destination=${query}`;
  document.querySelector("#waze-route").href =
    `https://waze.com/ul?q=${query}&navigate=yes`;
}
if (business.whatsapp) {
  const phone = document.querySelector("#phone");
  const link = document.createElement("a");
  link.href = `https://wa.me/${business.whatsapp}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "WhatsApp: (13) 98851-5662";
  phone.replaceChildren(link);
  const fixed = document.createElement("p");
  const fixedLink = document.createElement("a");
  fixedLink.href = `tel:+55${business.phone}`;
  fixedLink.textContent = "Telefone: (13) 3329-7186";
  fixed.append(fixedLink);
  phone.after(fixed);
}
if (business.hours)
  document.querySelector("#hours").textContent = business.hours;
