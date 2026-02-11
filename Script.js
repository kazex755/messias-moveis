/* ==============================
   BANCO DE DADOS SIMULADO
================================ */
const products = [
    { id: 1, name: "Arroz Tipo 1 - 5kg", price: 24.90, category: "alimentos", img: "https://placehold.co/300x200/EEE/333?text=Arroz" },
    { id: 2, name: "Feijão Preto - 1kg", price: 8.50, category: "alimentos", img: "https://placehold.co/300x200/EEE/333?text=Feijao" },
    { id: 3, name: "Detergente Líquido", price: 2.89, category: "limpeza", img: "https://placehold.co/300x200/EEE/333?text=Detergente" },
    { id: 4, name: "Água Sanitária 2L", price: 5.49, category: "limpeza", img: "https://placehold.co/300x200/EEE/333?text=Agua" },
    { id: 5, name: "Refrigerante 2L", price: 9.90, category: "bebidas", img: "https://placehold.co/300x200/EEE/333?text=Refri" },
    { id: 6, name: "Suco Natural 1L", price: 12.00, category: "bebidas", img: "https://placehold.co/300x200/EEE/333?text=Suco" }
];

const productListEl = document.getElementById("product-list");

/* ==============================
   RENDERIZAÇÃO
================================ */
function renderProducts(filter = "todos") {
    productListEl.innerHTML = "";

    const list = filter === "todos"
        ? products
        : products.filter(p => p.category === filter);

    list.forEach(p => {
        productListEl.innerHTML += `
            <article class="card">
                <img src="${p.img}" class="card-img" loading="lazy">
                <div class="card-body">
                    <h3 class="card-title">${p.name}</h3>
                    <div class="card-price">R$ ${p.price.toFixed(2).replace('.', ',')}</div>
                    <button class="btn btn-outline" onclick="orderProduct('${p.name}')">
                        Pedir no Zap
                    </button>
                </div>
            </article>
        `;
    });
}

function filterProducts(category, event) {
    document.querySelectorAll(".cat-chip").forEach(b => b.classList.remove("active"));
    event.target.classList.add("active");
    renderProducts(category);
}

/* ==============================
   WHATSAPP
================================ */
function orderProduct(name) {
    const phone = "5511999999999";
    const msg = `Olá, gostaria de encomendar: ${name}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* ==============================
   GEOLOCALIZAÇÃO
================================ */
function getGeolocation() {
    const status = document.getElementById("geo-msg");
    const manual = document.getElementById("manual-address");

    if (!navigator.geolocation) {
        status.textContent = "Geolocalização não suportada.";
        manual.style.display = "block";
        return;
    }

    status.textContent = "Solicitando localização...";

    navigator.geolocation.getCurrentPosition(
        pos => {
            document.getElementById("lat").value = pos.coords.latitude;
            document.getElementById("lng").value = pos.coords.longitude;
            status.textContent = "Localização confirmada ✓";
            manual.style.display = "none";
        },
        () => {
            status.textContent = "Permissão negada. Informe o endereço.";
            manual.style.display = "block";
        }
    );
}

/* ==============================
   FORMULÁRIO
================================ */
document.getElementById("visit-form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Solicitação enviada com sucesso!");
});

/* ==============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => renderProducts());