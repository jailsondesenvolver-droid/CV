const icons = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="m3 8 9 5v9"/><path d="m21 8-9 5"/><path d="M21 8v8l-9 6-9-6V8"/></svg>',
  file:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>',
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="20" r="1"/><circle cx="19" cy="20" r="1"/><path d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6"/></svg>',
  truck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 17h4V5H2v12h3"/><path d="M14 8h4l4 4v5h-3M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
  wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h15v12H5a3 3 0 0 1-3-3V6"/><path d="M16 13h4"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3v18h18"/><path d="m7 16 4-5 4 3 5-7"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  chevron:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7 10 5 5 5-5"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  money:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  receipt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 2v20l3-2 3 2 2-2 3 2 2-2 3 2V2l-3 2-3-2-2 2-3-2-2 2-3-2Z"/><path d="M8 9h8M8 13h6"/></svg>',
  target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4L19 6"/></svg>'
};

function paintIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach(el => { el.innerHTML = icons[el.dataset.icon] || ""; });
}
paintIcons();

const modules = {
  contatos:["Contatos","Clientes, fornecedores e histórico de relacionamento.","users"],
  produtos:["Produtos","Cadastro de produtos, estoque, preços e itens ofertados.","box"],
  orcamentos:["Orçamentos","Propostas comerciais, aprovações e acompanhamento.","file"],
  vendas:["Vendas","Pedidos, faturamento e evolução das vendas.","cart"],
  fretes:["Fretes","Controle de entregas, transportadoras e custos logísticos.","truck"],
  financeiro:["Financeiro","Contas a pagar e receber, fluxo de caixa e resultados.","wallet"],
  relatorios:["Relatórios","Indicadores comerciais e financeiros para tomada de decisão.","chart"]
};
const dashboard = document.querySelector("#dashboard");
const moduleView = document.querySelector("#moduleView");
const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#scrim");

function navigate(page) {
  document.querySelectorAll(".menu-item").forEach(item => item.classList.toggle("active", item.dataset.page === page));
  dashboard.classList.toggle("active", page === "dashboard");
  moduleView.classList.toggle("active", page !== "dashboard");
  if (page !== "dashboard") {
    const [title, description, icon] = modules[page];
    document.querySelector("#moduleTitle").textContent = title;
    document.querySelector("#moduleDescription").textContent = description;
    const iconBox = document.querySelector("#moduleIcon");
    iconBox.dataset.icon = icon;
    iconBox.innerHTML = icons[icon];
  }
  sidebar.classList.remove("open");
  scrim.classList.remove("show");
  window.scrollTo({top:0,behavior:"smooth"});
}

document.querySelectorAll("[data-page]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.page)));
document.querySelectorAll("[data-go]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.go)));
document.querySelector("#mobileMenu").addEventListener("click", () => { sidebar.classList.toggle("open"); scrim.classList.toggle("show"); });
scrim.addEventListener("click", () => { sidebar.classList.remove("open"); scrim.classList.remove("show"); });

const toast = document.querySelector("#toast");
let toastTimer;
function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}
document.querySelector("#newSale").addEventListener("click", showToast);
moduleView.querySelector(".primary-button").addEventListener("click", showToast);
document.querySelector(".notification").addEventListener("click", showToast);

const search = document.querySelector("#searchInput");
document.addEventListener("keydown", event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    search.focus();
  }
});
search.addEventListener("keydown", event => {
  if (event.key === "Enter" && search.value.trim()) {
    showToast();
    search.select();
  }
});
