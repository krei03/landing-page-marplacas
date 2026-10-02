(async () => {
  const results = [];
  const check = (name, ok) => {
    results.push({ name, ok });
    if (!ok) throw new Error(name);
  };
  check("sem overflow", document.documentElement.scrollWidth <= innerWidth);
  check("zoom 100%", visualViewport.scale === 1);
  check(
    "seis secoes",
    document.querySelectorAll("main > section").length === 6,
  );
  check(
    "links internos",
    [...document.querySelectorAll('a[href^="#"]')].every((a) =>
      document.querySelector(a.getAttribute("href")),
    ),
  );
  const menu = document.querySelector(".menu-toggle");
  if (innerWidth <= 820) {
    menu.click();
    check("menu abre", menu.getAttribute("aria-expanded") === "true");
    document.querySelector("#navigation a").click();
    check("menu fecha", menu.getAttribute("aria-expanded") === "false");
  }
  for (const button of document.querySelectorAll(
    ".service-card [data-service]",
  )) {
    button.click();
    check(
      "conteúdo " + button.dataset.service,
      document.querySelector("#service-title").textContent ===
        button.dataset.service,
    );
    const dialog = document.querySelector("#service-dialog");
    check(
      "modal cabe",
      dialog.getBoundingClientRect().width <= innerWidth &&
        dialog.scrollWidth <= dialog.clientWidth,
    );
    document.querySelector("#service-book").click();
    check(
      "modal exclusivo",
      document.querySelectorAll("dialog[open]").length === 1,
    );
    check(
      "tipo automático",
      document.querySelector('[name="service"]').value ===
        button.dataset.service,
    );
    document.querySelector("#booking-dialog .close").click();
  }
  document.querySelector("[data-book]").click();
  const form = document.querySelector("form");
  check("vazio inválido", !form.checkValidity());
  form.elements.name.value = "Teste";
  form.elements.name.dispatchEvent(new Event("input", { bubbles: true }));
  form.elements.model.value = "Onix";
  form.elements.model.dispatchEvent(new Event("input", { bubbles: true }));
  form.elements.plate.value = "ABC1D23";
  form.elements.date.value = "2026-12-10";
  form.requestSubmit();
  const send = document.querySelector("#whatsapp-send");
  check(
    "destino correto",
    send.href.startsWith("https://wa.me/5513988515662?text="),
  );
  check(
    "mensagem estruturada",
    decodeURIComponent(send.href).includes("Data desejada: 10/12/2026"),
  );
  check(
    "feedback",
    !send.hidden &&
      document
        .querySelector("#form-status")
        .textContent.includes("Mensagem pronta"),
  );
  form.elements.name.value = "   ";
  form.requestSubmit();
  check("espaços inválidos", !form.elements.name.checkValidity());
  document.querySelector("#booking-dialog .close").click();
  const faq = document.querySelectorAll(".faq details");
  faq[0].open = true;
  await new Promise((r) => setTimeout(r, 80));
  faq[1].open = true;
  await new Promise((r) => setTimeout(r, 80));
  check("FAQ exclusivo", [...faq].filter((d) => d.open).length === 1);
  const map = document.querySelector("#map iframe");
  map.scrollIntoView();
  await new Promise((r) => setTimeout(r, 1500));
  check(
    "endereço do mapa",
    decodeURIComponent(map.src).includes("Monteiro, 211"),
  );
  document.querySelector("#directions").open = false;
  document.querySelector("#directions summary").click();
  check("rotas visíveis", document.querySelector("#directions").open);
  check(
    "Google destino",
    decodeURIComponent(document.querySelector("#google-route").href).includes(
      "Monteiro, 211",
    ),
  );
  check(
    "Waze destino",
    decodeURIComponent(document.querySelector("#waze-route").href).includes(
      "Monteiro, 211",
    ),
  );
  return JSON.stringify({ viewport: innerWidth, results });
})();
