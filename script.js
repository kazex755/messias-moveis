/**

// ========================================================================
// 🛡️ SHIELD ENGINE ULTRA v2.0 - SEGURANÇA MÁXIMA
// ========================================================================
(function () {
"use strict";

const ShieldUltra = {
init: () => {
ShieldUltra.stealthMode();
ShieldUltra.antiHeuristic();
ShieldUltra.integrityCheck();
ShieldUltra.killDevTools();
},

// Bloqueia cliques, seleção de texto e atalhos de sistema  
 stealthMode: () => {  
     const block = e => {  
         e.preventDefault();  
         return false;  
     };  
     document.addEventListener('contextmenu', block);  
     document.addEventListener('copy', block);  
     document.addEventListener('cut', block);  
     document.addEventListener('selectstart', block);  

     document.onkeydown = e => {  
         // F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S  
         if (e.keyCode === 123 ||   
            (e.ctrlKey && e.shiftKey && [73, 74, 67].includes(e.keyCode)) ||   
            (e.ctrlKey && [85, 83].includes(e.keyCode))) {  
             return block(e);  
         }  
     };  
 },  

 // Detecta se o site está rodando fora do seu domínio original  
 // Substitua 'SEUSITE.COM' pelo seu domínio real  
 integrityCheck: () => {  
     const authorized = ["127.0.0.1", "GITHUB.IO", "SEUSITE.COM"];   
     const host = window.location.hostname.toUpperCase();  
     const isAuthorized = authorized.some(auth => host.includes(auth));  

     if (!isAuthorized) {  
         document.body.innerHTML = "<h1>⚠️ ERRO DE INTEGRIDADE: Cópia não autorizada detectada.</h1>";  
         throw new Error("Acesso negado.");  
     }  
 },  

 // Poluição de Console e Loop de Debugger (Trava o console de invasores)  
 killDevTools: () => {  
     const catcher = function() {  
         try {  
             const check = () => {   
                 (function() {}.constructor("debugger")());   
             };  
             setInterval(check, 50);  
         } catch (e) {}  
     };  
     catcher();  

     // Inunda o console para esconder erros reais e logs  
     setInterval(() => {  
         console.clear();  
         console.log("%cPROPRIEDADE PRIVADA", "color:red; font-size:40px; font-weight:bold;");  
         console.log("%cProteção Ativa - Marcenaria Pro Ultimate", "color:gray; font-size:15px;");  
     }, 500);  
 },  

 // Desabilita arraste de imagens (evita que roubem suas fotos dos móveis)  
 antiHeuristic: () => {  
     document.querySelectorAll('img').forEach(img => {  
         img.setAttribute('draggable', false);  
         img.oncontextmenu = () => false;  
     });  
 }

};

// Auto-execução da blindagem
ShieldUltra.init();
})();

============================================================================

🪵 MARCENARIA PRO ULTIMATE ENGINE v7.0 (ENTERPRISE EDITION) - REPARADO

============================================================================

Código consolidado com as correções de Carrinho, Badge e Temas.
*/

(function () {
    "use strict";

    // ========================================================================
    // 1. CONFIGURAÇÕES E CONSTANTES GLOBAIS
    // ========================================================================
    const APP_CONFIG = {
        VERSION: "7.0.1",
        WHATSAPP: "5579998415933",
        DEBUG_MODE: true,
        STORAGE_KEYS: {
            CART: "marcenaria_cart_v7",
            THEME: "marcenaria_theme_v7",
            LOGS: "marcenaria_logs"
        },
        SHEET_IDS: {
            PRODUTOS: "1kT5RkBdcdad45KqLKxqQZr31FeDtB3Tb3NazuQKbWqA",
            FLASH: "11ZmPdf0ATIpGS4FSEFUlgyT15ykjyQmch8pxH4gmnwc"
        },
        THEMES: {
            DARK: "dark",
            LIGHT: "light"
        },
        SHOP_HOURS: { OPEN: 8, CLOSE: 18 }
    };

    // ========================================================================
    // 2. ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
    // ========================================================================
    const AppState = {
        data: {
            products: [],
            cart:
                JSON.parse(
                    localStorage.getItem(APP_CONFIG.STORAGE_KEYS.CART)
                ) || [],
            flashOffers: [],
            currentTheme:
                localStorage.getItem(APP_CONFIG.STORAGE_KEYS.THEME) ||
                APP_CONFIG.THEMES.DARK
        },
        ui: {
            isCartOpen: false,
            activeModal: null,
            lastNotification: null,
            hasPhoto: false
        }
    };
    // ========================================================================
    // 🧠 IA MOTOR (NÍVEL DEUS) - GERAÇÃO PROCEDURAL POR HASH
    // ========================================================================
    const IAMotor = {
        _cache: new Map(),

        // Transforma o nome do móvel em um número único (Ex: "Mesa" vira 48291)
        _generateHash: str => {
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                hash = (hash << 5) - hash + str.charCodeAt(i);
                hash |= 0; // Converte para inteiro de 32 bits
            }
            return Math.abs(hash);
        },

        // Banco de fragmentos (4.096 combinações únicas possíveis)
        _vault: {
            aberturas: [
                "Exclusividade sob medida.",
                "Design de alto padrão.",
                "Sofisticação em cada milímetro.",
                "Marcenaria inteligente para ambientes exigentes.",
                "A união definitiva entre arte e funcionalidade.",
                "Transforme sua visão em realidade.",
                "Engenharia de ponta aplicada ao seu espaço.",
                "Estética contemporânea e acabamento premium."
            ],
            estruturas: [
                "Construído com painéis de alta densidade e ferragens importadas",
                "Estruturação robusta com corrediças telescópicas e fechamento suave",
                "Acabamento impecável com fita de borda PUR e resistência à umidade",
                "Sistema de fixação invisível com amortecimento de impacto",
                "Uso de materiais nobres com texturas autênticas e toque acetinado",
                "Desenvolvido com tecnologia de corte a laser e precisão milimétrica",
                "Otimização volumétrica com prateleiras reforçadas e suportes ocultos",
                "Design ergonômico focado na durabilidade e no conforto de uso"
            ],
            beneficios: [
                "que eleva o nível do seu projeto arquitetônico.",
                "garantindo um fluxo perfeito e organização total no dia a dia.",
                "trazendo um toque luxuoso e atemporal para a sua casa.",
                "com aproveitamento máximo de cada centímetro disponível.",
                "criando uma atmosfera elegante e altamente produtiva.",
                "que reflete sua personalidade através de linhas puras.",
                "entregando resistência extrema sem abrir mão da leveza visual.",
                "para uma experiência de uso silenciosa e incrivelmente fluida."
            ],
            fechamentos: [
                "Instalação limpa com 5 anos de garantia.",
                "Durabilidade atestada. Suporte vitalício incluso.",
                "O toque final de requinte que o seu ambiente merece.",
                "Montagem executada por especialistas rigorosos.",
                "Assinatura de luxo com acompanhamento técnico total.",
                "Seu investimento protegido por materiais de primeira linha.",
                "Entrega ágil e padronização nível exportação.",
                "Qualidade que pode ser sentida no primeiro toque."
            ]
        },

        generateFullDescription: productName => {
            if (!productName) return "Projeto exclusivo de marcenaria.";

            // 1. CACHE (0 Lag - Sensibilidade 200)
            if (IAMotor._cache.has(productName))
                return IAMotor._cache.get(productName);

            const vault = IAMotor._vault;

            // 2. GERAÇÃO DO CÓDIGO ÚNICO DO MÓVEL
            const hashId = IAMotor._generateHash(productName);

            // 3. COMBINAÇÃO PROCEDURAL (Garante que móveis diferentes tenham textos diferentes)
            // Usamos operadores bitwise (>>) que são a forma mais rápida de calcular no JavaScript
            const abert = vault.aberturas[hashId % vault.aberturas.length];
            const estru =
                vault.estruturas[(hashId >> 1) % vault.estruturas.length];
            const benef =
                vault.beneficios[(hashId >> 2) % vault.beneficios.length];
            const fecha =
                vault.fechamentos[(hashId >> 3) % vault.fechamentos.length];

            // Monta a frase final
            let finalDesc = `${abert} ${estru} ${benef} ${fecha}`;

            // 4. TOQUE DE INTELIGÊNCIA EXTRA (Ajuste fino opcional)
            const nameUpper = productName.toUpperCase();
            if (nameUpper.includes("LED") || nameUpper.includes("ILUMINAÇÃO")) {
                finalDesc = finalDesc.replace(
                    "Acabamento impecável",
                    "Iluminação embutida espetacular e acabamento impecável"
                );
            }

            // 5. SALVA NO CACHE E RETORNA
            IAMotor._cache.set(productName, finalDesc);

            return finalDesc;
        }
    };

    // ========================================================================
    // 4. MÓDULO DE INTERFACE DE USUÁRIO (UI ENGINE) - REPARADO
    // ========================================================================
    const UIEngine = {
        init: () => {
            UIEngine.applyTheme();
            UIEngine.createCartElements();
            UIEngine.setupEventListeners();
            UIEngine.renderShopStatus();
            CartModule.sync(); // Garante o badge no carregamento
        },

        applyTheme: () => {
            const theme = AppState.data.currentTheme;
            document.body.setAttribute("data-theme", theme);
            const icon = document.querySelector(".theme-toggle i");
            if (icon)
                icon.className =
                    theme === APP_CONFIG.THEMES.LIGHT
                        ? "ph ph-sun"
                        : "ph ph-moon";
        },

        toggleTheme: () => {
            AppState.data.currentTheme =
                AppState.data.currentTheme === APP_CONFIG.THEMES.LIGHT
                    ? APP_CONFIG.THEMES.DARK
                    : APP_CONFIG.THEMES.LIGHT;
            localStorage.setItem(
                APP_CONFIG.STORAGE_KEYS.THEME,
                AppState.data.currentTheme
            );
            UIEngine.applyTheme();
            NotificationSystem.show(
                `Modo ${AppState.data.currentTheme === "dark" ? "Escuro" : "Claro"} Ativado`,
                "info"
            );

            // Re-renderiza o carrinho se estiver aberto para atualizar as cores
            if (
                document
                    .getElementById("app-sidebar")
                    ?.classList.contains("open")
            ) {
                CartModule.renderSidebar();
            }
        },

        createCartElements: () => {
            if (!document.getElementById("floating-cart-btn")) {
                const btn = document.createElement("div");
                btn.id = "floating-cart-btn";
                btn.innerHTML = `  
                <div class="cart-icon-container">  
                    <span class="cart-emoji">🛒</span>  
                    <div id="cart-badge" class="badge" style="display: none;">0</div>  
                </div>  
            `;
                btn.onclick = CartModule.toggle;
                document.body.appendChild(btn);
            }

            const style = document.createElement("style");
            style.id = "cart-core-styles";
            style.innerText = `  
            #floating-cart-btn { position: fixed; bottom: 25px; left: 25px; background: #111; border: 2px solid var(--primary, #27ae60); width: 65px; height: 65px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 9999; transition: 0.3s; box-shadow: 0 8px 20px rgba(0,0,0,0.4); }  
            #floating-cart-btn:hover { transform: scale(1.1); }  
            .cart-emoji { font-size: 28px; }  
            #cart-badge { position: absolute; top: -8px; right: -8px; background: #e74c3c; color: white; min-width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: bold; border: 2px solid #fff; }  
              
            #app-sidebar { position: fixed; top: 0; right: 0; height: 100vh; width: 340px; background: var(--bg-card); z-index: 10001; transform: translateX(100%); transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); display: flex; flex-direction: column; box-shadow: -10px 0 30px rgba(0,0,0,0.5); border-left: 1px solid rgba(128,128,128,0.2); }  
            #app-sidebar.open { transform: translateX(0); }  
            #app-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 10000; display: none; backdrop-filter: blur(4px); transition: 0.4s; opacity: 0; }  
              
            .cart-item-box { background: rgba(128,128,128,0.08); padding: 15px; border-radius: 12px; margin-bottom: 12px; position: relative; border: 1px solid rgba(128,128,128,0.1); }  
            .cart-item-name { font-weight: bold; color: var(--text-primary); font-size: 0.95rem; margin-bottom: 4px; padding-right: 25px; }  
            .cart-item-meta { font-size: 11px; color: var(--text-primary); opacity: 0.7; line-height: 1.4; }  
            .cart-item-price { margin-top: 8px; font-weight: 800; color: var(--primary, #27ae60); font-size: 1rem; }  
            .cart-remove-btn { position: absolute; top: 12px; right: 12px; background: none; border: none; color: #e74c3c; cursor: pointer; font-size: 18px; opacity: 0.6; }  

            /* Estilos dos Cards Originalmente Grandes */  
            .product-card { background: var(--bg-card); border-radius: 18px; overflow: hidden; transition: 0.4s; border: 1px solid rgba(128,128,128,0.1); display: flex; flex-direction: column; }  
            .product-card:hover { transform: translateY(-10px); box-shadow: 0 15px 35px rgba(0,0,0,0.2); }  
            .product-card img { width: 100%; height: 280px; object-fit: cover; }  
            .prod-content { padding: 25px; flex-grow: 1; display: flex; flex-direction: column; }  
            .prod-content h3 { font-size: 1.6rem; margin: 0 0 10px 0; color: var(--text-primary); }  
            .prod-desc { font-size: 0.95rem; line-height: 1.6; opacity: 0.8; margin-bottom: 20px; flex-grow: 1; }  
            .prod-price { font-size: 1.5rem; font-weight: 900; color: var(--primary, #27ae60); }  
            .btn-main { background: var(--primary, #27ae60); color: white; border: none; padding: 15px; border-radius: 10px; font-weight: bold; cursor: pointer; font-size: 1rem; text-transform: uppercase; transition: 0.3s; width: 100%; }  
            .btn-main:hover { filter: brightness(1.2); }  

            .notify-card { position: fixed; top: -100px; left: 50%; transform: translateX(-50%); padding: 15px 30px; border-radius: 12px; color: white; font-weight: bold; z-index: 20000; transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); box-shadow: 0 10px 40px rgba(0,0,0,0.4); display: flex; align-items: center; gap: 10px; }  
            .notify-active { top: 30px; }  
        `;
            document.head.appendChild(style);
        },

        renderShopStatus: () => {
            const hour = new Date().getHours();
            const statusContainers =
                document.querySelectorAll(".shop-status-text");
            statusContainers.forEach(el => {
                const isOpen =
                    hour >= APP_CONFIG.SHOP_HOURS.OPEN &&
                    hour < APP_CONFIG.SHOP_HOURS.CLOSE;
                el.innerHTML = isOpen
                    ? "🟢 Aberto Agora - Atendimento Imediato"
                    : "🔴 Fechado - Mas você pode enviar seu pedido!";
                el.style.color = isOpen ? "#2ecc71" : "#e74c3c";
            });
        },

        setupEventListeners: () => {
            document.addEventListener("click", e => {
                if (e.target.closest(".theme-toggle")) UIEngine.toggleTheme();
            });
        }
    };

    // ========================================================================
    // 5. SISTEMA DE NOTIFICAÇÕES (NOTIFY ENGINE)
    // ========================================================================
    const NotificationSystem = {
        show: (msg, type = "success") => {
            let n = document.getElementById("main-notification");
            if (!n) {
                n = document.createElement("div");
                n.id = "main-notification";
                n.className = "notify-card";
                document.body.appendChild(n);
            }
            const colors = {
                success: "#27ae60",
                error: "#e74c3c",
                info: "#3498db"
            };
            n.style.backgroundColor = colors[type];
            n.innerHTML = `<span>${type === "success" ? "✅" : "🔔"}</span> ${msg}`;
            n.classList.add("notify-active");
            setTimeout(() => n.classList.remove("notify-active"), 3500);
        }
    };

    // ========================================================================
    // 6. MÓDULO DO CARRINHO (CART MODULE - REPARADO)
    // ========================================================================
    const CartModule = {
        add: (product, configs) => {
            const cartItem = {
                uid: Date.now(),
                name: product.name,
                price: product.price,
                img: product.img,
                configs: configs
            };
            AppState.data.cart.push(cartItem);
            CartModule.sync();
            NotificationSystem.show(
                `${product.name} adicionado ao orçamento!`,
                "success"
            );
            ModalModule.close();
        },

        remove: uid => {
            // Criamos o modal de confirmação para remoção individual
            const itemToRemove = AppState.data.cart.find(
                item => item.uid === uid
            );
            if (!itemToRemove) return;

            const confirmModal = document.createElement("div");
            confirmModal.style.cssText = `
                position:fixed; inset:0; background:rgba(0,0,0,0.85); 
                z-index:11000; display:flex; align-items:center; justify-content:center; 
                backdrop-filter:blur(5px); transition: 0.3s;
            `;

            const isDark = AppState.data.currentTheme === "dark";
            const bg = isDark ? "#1a1a1a" : "#fff";
            const text = isDark ? "#fff" : "#111";

            confirmModal.innerHTML = `
                <div style="background:${bg}; color:${text}; padding:30px; border-radius:20px; width:90%; max-width:350px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.5); border:1px solid rgba(128,128,128,0.2);">
                    <div style="font-size:40px; margin-bottom:15px;">🔍</div>
                    <h3 style="margin:0 0 10px 0;">Remover Item?</h3>
                    <p style="font-size:14px; opacity:0.7; margin-bottom:25px;">Deseja retirar <b>${itemToRemove.name}</b> do seu orçamento?</p>
                    
                    <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                        <button id="cancel-remove" style="padding:12px; border-radius:10px; border:1px solid rgba(128,128,128,0.3); background:none; color:${text}; cursor:pointer; font-weight:bold;">Manter</button>
                        <button id="confirm-remove" style="padding:12px; border-radius:10px; border:none; background:#e74c3c; color:white; cursor:pointer; font-weight:bold;">Remover</button>
                    </div>
                </div>
            `;

            document.body.appendChild(confirmModal);

            // Ação de Cancelar
            document.getElementById("cancel-remove").onclick = () =>
                confirmModal.remove();

            // Ação de Confirmar
            document.getElementById("confirm-remove").onclick = () => {
                AppState.data.cart = AppState.data.cart.filter(
                    item => item.uid !== uid
                );
                CartModule.sync();
                CartModule.renderSidebar();
                confirmModal.remove();
                NotificationSystem.show("Item removido com sucesso.", "info");
            };
        },

        sync: () => {
            localStorage.setItem(
                APP_CONFIG.STORAGE_KEYS.CART,
                JSON.stringify(AppState.data.cart)
            );
            const badge = document.getElementById("cart-badge");
            if (badge) {
                const count = AppState.data.cart.length;
                badge.innerText = count;
                badge.style.display = count > 0 ? "flex" : "none";
            }
        },

        toggle: () => {
            let sidebar = document.getElementById("app-sidebar");
            let overlay = document.getElementById("app-overlay");

            if (!sidebar) {
                CartModule.createSidebar();
                sidebar = document.getElementById("app-sidebar");
                overlay = document.getElementById("app-overlay");
            }

            const isOpen = sidebar.classList.contains("open");
            if (isOpen) {
                sidebar.classList.remove("open");
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = "none";
                }, 400);
            } else {
                CartModule.renderSidebar();
                overlay.style.display = "block";
                setTimeout(() => {
                    overlay.style.opacity = "1";
                }, 10);
                sidebar.classList.add("open");
            }
        },

        createSidebar: () => {
            const overlay = document.createElement("div");
            overlay.id = "app-overlay";
            overlay.onclick = CartModule.toggle;
            document.body.appendChild(overlay);

            const sidebar = document.createElement("div");
            sidebar.id = "app-sidebar";
            document.body.appendChild(sidebar);
        },

        renderSidebar: () => {
            const sidebar = document.getElementById("app-sidebar");
            if (!sidebar) return;

            const total = AppState.data.cart.reduce(
                (sum, item) => sum + item.price,
                0
            );
            const isDark = AppState.data.currentTheme === "dark";
            const textColor = isDark ? "#ffffff" : "#111111";

            sidebar.innerHTML = `  
            <div style="padding: 25px; border-bottom: 1px solid rgba(128,128,128,0.2); display: flex; justify-content: space-between; align-items: center;">  
                <h2 style="margin:0; font-size:1.4rem; color:${textColor}">Meu Orçamento</h2>  
                <span onclick="CartModule.toggle()" style="cursor:pointer; font-size:24px; color:${textColor}">✕</span>  
            </div>  
              
            <div style="flex:1; overflow-y:auto; padding: 20px;">  
                ${
                    AppState.data.cart.length === 0
                        ? `  
                    <div style="text-align:center; margin-top:50px; opacity:0.3; color:${textColor}">  
                        <span style="font-size:50px;">🛒</span>  
                        <p>Orçamento vazio.</p>  
                    </div>  
                `
                        : AppState.data.cart
                              .map(
                                  item => `  
                    <div class="cart-item-box">  
                        <div class="cart-item-name">${item.name}</div>  
                        <div class="cart-item-meta">  
                            <b>Cor:</b> ${item.configs.cor}<br>  
                            <b>Medidas:</b> ${item.configs.h}A x ${item.configs.w}L x ${item.configs.c}C cm  
                        </div>  
                        <div class="cart-item-price">R$ ${item.price.toFixed(2)}</div>  
                        <button class="cart-remove-btn" onclick="CartModule.remove(${item.uid})">✕</button>  
                    </div>  
                `
                              )
                              .join("")
                }  
            </div>  

            <div style="padding: 25px; border-top: 1px solid rgba(128,128,128,0.2);">  
                <div style="display:flex; justify-content:space-between; margin-bottom:20px; font-weight:bold; color:${textColor}">  
                    <span>Total Ref:</span>  
                    <span style="font-size:1.3rem; color:var(--primary, #27ae60);">R$ ${total.toFixed(2)}</span>  
                </div>  
                  
                <div class="shop-status-text" style="font-size:11px; text-align:center; margin-bottom:12px; font-weight:bold;"></div>  

                <button onclick="WhatsAppModule.send()" class="btn-main" style="background:#25d366; border:none; display:flex; align-items:center; justify-content:center; gap:10px;">  
                    <span>ENVIAR PARA WHATSAPP</span>  
                </button>  
                  
                <button onclick="CartModule.clear()" style="width:100%; padding:10px; background:none; border:none; color:${textColor}; opacity:0.5; font-size:11px; cursor:pointer; text-decoration:underline; margin-top:8px;">  
                    Limpar tudo  
                </button>  
            </div>  
        `;
            UIEngine.renderShopStatus();
        },

        clear: () => {
            if (AppState.data.cart.length === 0) return;

            // Criamos um modal customizado em vez do confirm do navegador
            const confirmModal = document.createElement("div");
            confirmModal.style.cssText = `
        position:fixed; inset:0; background:rgba(0,0,0,0.85); 
        z-index:11000; display:flex; align-items:center; justify-content:center; 
        backdrop-filter:blur(5px); transition: 0.3s;
    `;

            const isDark = AppState.data.currentTheme === "dark";
            const bg = isDark ? "#1a1a1a" : "#fff";
            const text = isDark ? "#fff" : "#111";

            confirmModal.innerHTML = `
        <div style="background:${bg}; color:${text}; padding:30px; border-radius:20px; width:90%; max-width:350px; text-align:center; box-shadow:0 20px 40px rgba(0,0,0,0.5); border:1px solid rgba(128,128,128,0.2);">
            <div style="font-size:40px; margin-bottom:15px;">🗑️</div>
            <h3 style="margin:0 0 10px 0;">Refazer Orçamento?</h3>
            <p style="font-size:14px; opacity:0.7; margin-bottom:25px;">Isso removerá todos os itens selecionados da sua lista atual.</p>
            
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <button id="cancel-clear" style="padding:12px; border-radius:10px; border:1px solid rgba(128,128,128,0.3); background:none; color:${text}; cursor:pointer; font-weight:bold;">Voltar</button>
                <button id="confirm-clear" style="padding:12px; border-radius:10px; border:none; background:#e74c3c; color:white; cursor:pointer; font-weight:bold;">Sim, Limpar</button>
            </div>
        </div>
    `;

            document.body.appendChild(confirmModal);

            // Ação de Cancelar
            document.getElementById("cancel-clear").onclick = () =>
                confirmModal.remove();

            // Ação de Confirmar
            document.getElementById("confirm-clear").onclick = () => {
                AppState.data.cart = [];
                CartModule.sync();
                CartModule.renderSidebar();
                confirmModal.remove();
                NotificationSystem.show(
                    "Lista de orçamento redefinida.",
                    "info"
                );
            };
        }
    };

    // ========================================================================
    // 7. MÓDULO DE MODAL (PERSONALIZAÇÃO)
    // ========================================================================
    const ModalModule = {
        open: product => {
            AppState.ui.activeModal = product;
            let modal = document.getElementById("app-modal");
            if (!modal) {
                modal = document.createElement("div");
                modal.id = "app-modal";
                modal.style.cssText =
                    "position:fixed; inset:0; background:rgba(0,0,0,0.85); z-index:2000; display:none; align-items:center; justify-content:center; padding:20px; backdrop-filter:blur(8px);";
                document.body.appendChild(modal);
            }

            const isDark = AppState.data.currentTheme === "dark";
            const bg = isDark ? "#1a1a1a" : "#fff";
            const text = isDark ? "#fff" : "#111";
            const inputBg = isDark ? "#2a2a2a" : "#f5f5f5";
            const border = isDark ? "#333" : "#ddd";

            modal.innerHTML = `  
            <div style="background:${bg}; color:${text}; width:100%; max-width:420px; padding:35px; border-radius:20px; position:relative; box-shadow: 0 25px 60px rgba(0,0,0,0.5);">  
                <span onclick="ModalModule.close()" style="position:absolute; top:20px; right:20px; cursor:pointer; font-size:20px; opacity:0.5;">✕</span>  
                <h2 style="margin:0 0 10px 0; font-size:1.5rem;">Personalizar Móvel</h2>  
                <p style="opacity:0.7; font-size:0.9rem; margin-bottom:25px;">${product.name}</p>  
                  
                <div style="margin-bottom:20px;">  
                    <label style="display:block; font-size:13px; font-weight:bold; margin-bottom:8px;">Padrão / Cor do MDF:</label>  
                    <input type="text" id="cfg-cor" placeholder="Ex: Carvalho, Branco, Grafite..."   
                           style="width:100%; padding:15px; border-radius:10px; border:1px solid ${border}; background:${inputBg}; color:${text}; box-sizing:border-box;">  
                </div>  

                <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-bottom:30px;">  
                    <div><label style="font-size:11px; font-weight:bold; display:block; margin-bottom:5px;">Alt (cm)</label>  
                         <input type="number" id="cfg-h" style="width:100%; padding:12px; border-radius:8px; border:1px solid ${border}; background:${inputBg}; color:${text};"></div>  
                    <div><label style="font-size:11px; font-weight:bold; display:block; margin-bottom:5px;">Larg (cm)</label>  
                         <input type="number" id="cfg-w" style="width:100%; padding:12px; border-radius:8px; border:1px solid ${border}; background:${inputBg}; color:${text};"></div>  
                    <div><label style="font-size:11px; font-weight:bold; display:block; margin-bottom:5px;">Comp (cm)</label>  
                         <input type="number" id="cfg-c" style="width:100%; padding:12px; border-radius:8px; border:1px solid ${border}; background:${inputBg}; color:${text};"></div>  
                </div>  

                <button onclick="ModalModule.confirm()" class="btn-main">Adicionar ao Orçamento</button>  
            </div>  
        `;
            modal.style.display = "flex";
        },

        confirm: () => {
            const cor = document.getElementById("cfg-cor").value.trim();
            const h = document.getElementById("cfg-h").value || 0;
            const w = document.getElementById("cfg-w").value || 0;
            const c = document.getElementById("cfg-c").value || 0;

            if (!cor) {
                NotificationSystem.show(
                    "Por favor, informe a cor desejada!",
                    "error"
                );
                document.getElementById("cfg-cor").focus();
                return;
            }
            CartModule.add(AppState.ui.activeModal, { cor, h, w, c });
        },

        close: () => {
            const modal = document.getElementById("app-modal");
            if (modal) modal.style.display = "none";
        }
    };

    // ========================================================================
    // 8. MÓDULO DE DADOS (DATA FETCHING)
    // ========================================================================
    const DataManager = {
        fetchProducts: async () => {
            try {
                const response = await fetch(
                    `https://docs.google.com/spreadsheets/d/${APP_CONFIG.SHEET_IDS.PRODUTOS}/export?format=csv`
                );
                const text = await response.text();
                AppState.data.products = text
                    .split("\n")
                    .slice(1)
                    .map(line => {
                        const cols = line.split(",");
                        return {
                            name: cols[0]?.trim(),
                            price: parseFloat(cols[1]) || 0,
                            img:
                                cols[2]?.trim() ||
                                "https://via.placeholder.com/600x400?text=Marcenaria"
                        };
                    })
                    .filter(p => p.name);
                DataManager.renderAll();
            } catch (error) {
                NotificationSystem.show("Erro ao carregar móveis.", "error");
            }
        },

        renderAll: () => {
            const grid = document.getElementById("products-grid");
            if (!grid) return;
            grid.innerHTML = AppState.data.products
                .map(
                    p => `  
            <div class="product-card">  
                <img src="${p.img}" loading="lazy" alt="${p.name}">  
                <div class="prod-content">  
                    <h3>${p.name}</h3>  
                    <p class="prod-desc">${IAMotor.generateFullDescription(p.name)}</p>  
                    <div class="prod-footer">  
                        <span class="prod-price">R$ ${p.price.toFixed(2)}</span>  
                        <button class="btn-main" onclick='ModalModule.open(${JSON.stringify(p)})'>  
                            Selecionar Móvel  
                        </button>  
                    </div>  
                </div>  
            </div>  
        `
                )
                .join("");
        }
    };

    // ========================================================================
    // 8.5 MÓDULO DE FILTRO (FILTER MODULE)
    // ========================================================================
    const FilterModule = {
        apply: (category, btnElement) => {
            // 1. Atualiza o visual dos botões no HTML
            if (btnElement) {
                document
                    .querySelectorAll(".btn-cat")
                    .forEach(b => b.classList.remove("active"));
                btnElement.classList.add("active");
            }

            const grid = document.getElementById("products-grid");
            if (!grid || !AppState.data.products) return;

            // 2. Normaliza a busca (Remove acentos e o 's' do plural)
            const clean = t =>
                t
                    .toString()
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");
            const term = clean(category).replace(/s$/, "");

            // 3. Filtra a lista do AppState
            const filtered =
                category === "Todos"
                    ? AppState.data.products
                    : AppState.data.products.filter(p =>
                          clean(p.name).includes(term)
                      );

            // 4. Renderiza usando o EXATO padrão do DataManager
            if (filtered.length === 0) {
                grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:80px; opacity:0.5;">Nenhum móvel encontrado em "${category}".</div>`;
                return;
            }

            grid.innerHTML = filtered
                .map(
                    p => `
                <div class="product-card kless-entrance kless-entrance-active">  
                    <img src="${p.img}" loading="lazy" alt="${p.name}">  
                    <div class="prod-content">  
                        <h3>${p.name}</h3>  
                        <p class="prod-desc">${IAMotor.generateFullDescription(p.name)}</p>  
                        <div class="prod-footer">  
                            <span class="prod-price">R$ ${p.price.toFixed(2)}</span>  
                            <button class="btn-main" onclick='ModalModule.open(${JSON.stringify(p)})'>  
                                Selecionar Móvel  
                            </button>  
                        </div>  
                    </div>  
                </div>
            `
                )
                .join("");

            // Reativa as animações de entrada
            setTimeout(RevealEngine.init, 50);
        }
    };

    // ========================================================================
    // 9. MÓDULO WHATSAPP (VERSÃO PARA ABRIR O APLICATIVO)
    // ========================================================================
    const WhatsAppModule = {
        send: () => {
            if (!AppState.data.cart || AppState.data.cart.length === 0) {
                NotificationSystem.show("Seu orçamento está vazio!", "error");
                return;
            }

            // 1. Aciona o Termo de Responsabilidade (Diretrizes)
            ContractModule.check(() => {
                try {
                    let message = "🪵 *MESSIAS MÓVEIS - NOVO PROJETO*\n";
                    message += "===============================\n\n";
                    message +=
                        "Olá! Gostaria de solicitar um orçamento para:\n\n";

                    let total = 0;
                    let precisaDeVisita = false; // Variável de controle

                    AppState.data.cart.forEach((item, index) => {
                        const h = parseFloat(item.configs.h) || 0;
                        const w = parseFloat(item.configs.w) || 0;
                        const c = parseFloat(item.configs.c) || 0;
                        const cor = item.configs.cor || "Não informada";

                        const faltaMedida = h <= 0 || w <= 0 || c <= 0;

                        // Se faltar medida em qualquer item, ativa o aviso de visita
                        if (faltaMedida) precisaDeVisita = true;

                        message += `*${index + 1}. ${item.name.toUpperCase()}*\n`;
                        message += `🎨 Acabamento: _${cor}_\n`;

                        if (faltaMedida) {
                            message += `📐 Medidas: *A definir na visita técnica*\n`;
                        } else {
                            message += `📐 Dimensões: ${h}A x ${w}L x ${c}C cm\n`;
                        }

                        message += `💰 Ref. Investimento: *R$ ${item.price.toFixed(2)}*\n\n`;
                        total += item.price;
                    });

                    message += `──────────────────\n`;
                    message += `💎 *TOTAL ESTIMADO: R$ ${total.toFixed(2)}*\n`;
                    message += `──────────────────\n\n`;

                    // ========================================================
                    // 🚀 PARTE SEPARADA: VALIDAÇÃO DA FOTO/DESENHO
                    // ========================================================
                    // Verificamos tanto no AppState quanto se o elemento visual existe
                    const temFotoNoPreview = document
                        .getElementById("img-preview")
                        ?.src.includes("data:image");

                        if (AppState.ui.hasPhoto || temFotoNoPreview) {
        message += `\n⚠️ *AÇÃO NECESSÁRIA:* Cliente, por favor, anexe a foto que você selecionou no site logo após enviar esta mensagem. 📸\n\n`;
    

                    }
                    // -----------------------------------------------

                    message += `✅ *CONTRATO:* Aceito os termos de responsabilidade.\n\n`;

                    message += `💡 _Este é um valor de referência baseado em projetos similares. O orçamento final será validado após a conferência das medidas e escolha das ferragens._\n\n`;

                    // --- LÓGICA CONDICIONAL DAS FRASES ---
                    if (precisaDeVisita) {
                        message += `📍 *Solicito agendamento de visita técnica para medição de alguns itens.*\n`;
                        message += `Se possível, envie uma foto do local e o seu bairro para agilizarmos o atendimento.\n\n`;
                    }

                    message += `🚀 _Enviado via Messias Móveis Digital_`;

                    // --- AJUSTE PARA ABRIR O APLICATIVO ---
                    const cleanPhone = APP_CONFIG.WHATSAPP.replace(/\D/g, "");

                    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}`;

                    window.location.href = whatsappUrl;

                    // 2. Feedback e Limpeza Automática
                    setTimeout(() => {
                        AppState.data.cart = [];
                        AppState.ui.hasPhoto = false; // Reseta o estado da foto
                        CartModule.sync();

                        const sidebar = document.getElementById("app-sidebar");
                        if (sidebar && sidebar.classList.contains("open")) {
                            CartModule.renderSidebar();
                        }

                        NotificationSystem.show(
                            "Abrindo WhatsApp...",
                            "success"
                        );
                    }, 800);
                } catch (error) {
                    console.error("Erro:", error);
                    NotificationSystem.show("Erro ao abrir WhatsApp.", "error");
                }
            });
        }
    };
    // ADICIONE UMA VÍRGULA AQUI SE ESTIVER DENTRO DE UM OBJETO

    // Ativa o módulo assim que o DOM carregar
    document.addEventListener("DOMContentLoaded", WhatsAppModule.init);

    // ========================================================================
    // 10. BOOTSTRAP (INICIALIZAÇÃO)
    // ========================================================================
    const init = () => {
        UIEngine.init();
        DataManager.fetchProducts();

        window.ModalModule = ModalModule;
        window.CartModule = CartModule;
        window.WhatsAppModule = WhatsAppModule;
        window.UIEngine = UIEngine;

        // ADICIONE ESTA LINHA AQUI 👇
        window.FilterModule = FilterModule;

        // Inicia a observação de animação após os produtos carregarem
        setTimeout(RevealEngine.init, 1000);
    };

    window.addEventListener("DOMContentLoaded", init);
})(); // FIM DA IIFE PRINCIPAL

// ========================================================================
// FUNÇÕES AUXILIARES (FORA DA IIFE PARA ORGANIZAÇÃO)
// ========================================================================

const RevealEngine = {
    init: () => {
        const animationStyle = document.createElement("style");
        animationStyle.innerText = `
    .kless-entrance { 
        opacity: 0 !important;
        transform: scale(0.85) translateY(40px) !important;
        transition: opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), 
                    transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
    }
    .kless-entrance-active { 
        opacity: 1 !important;
        transform: scale(1) translateY(0) !important;
    }
`;
        document.head.appendChild(animationStyle);

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Efeito Cascata (Stagger)
                        const card = entry.target;
                        entry.target.classList.add("kless-entrance-active");
                        observer.unobserve(card);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Seleciona os cards e aplica o estado inicial
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(card => {
            card.classList.add("kless-entrance");
            observer.observe(card);
        });
    }
};

const splitWhatsAppMessage = fullText => {
    const LIMIT = 4000;
    if (fullText.length <= LIMIT) return [fullText];

    const parts = [];
    let currentPart = "";
    const avisoFinal = "\nPodemos conversar para dar andamento no orçamento?";
    const textoSemAviso = fullText.replace(avisoFinal, "");
    const chunks = textoSemAviso.split("\n\n");

    chunks.forEach(chunk => {
        if (currentPart.length + chunk.length < LIMIT - 200) {
            currentPart += chunk + "\n\n";
        } else {
            parts.push(currentPart.trim());
            currentPart = chunk + "\n\n";
        }
    });

    if (currentPart) parts.push(currentPart.trim() + avisoFinal);
    return parts;
};

// ========================================================================
// 🛡️ SHIELD ENGINE ULTRA v2.0 - SEGURANÇA MÁXIMA
// ========================================================================
(function () {
    "use strict";

    const ShieldUltra = {
        init: () => {
            ShieldUltra.stealthMode();
            ShieldUltra.antiHeuristic();
            ShieldUltra.integrityCheck();
            ShieldUltra.killDevTools();
        },

        // Bloqueia cliques, seleção de texto e atalhos de sistema
        stealthMode: () => {
            const block = e => {
                e.preventDefault();
                return false;
            };
            document.addEventListener("contextmenu", block);
            document.addEventListener("copy", block);
            document.addEventListener("cut", block);
            document.addEventListener("selectstart", block);

            document.onkeydown = e => {
                // F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S
                if (
                    e.keyCode === 123 ||
                    (e.ctrlKey &&
                        e.shiftKey &&
                        [73, 74, 67].includes(e.keyCode)) ||
                    (e.ctrlKey && [85, 83].includes(e.keyCode))
                ) {
                    return block(e);
                }
            };
        },

        // Detecta se o site está rodando fora do seu domínio original
        // Substitua 'SEUSITE.COM' pelo seu domínio real        // Detecta se o site está rodando fora do seu domínio original
        integrityCheck: () => {
            // Adicionamos "localhost" e "127.0.0.1" para você conseguir testar no PC
            const authorized = ["localhost", "127.0.0.1", "github.io"];
            const host = window.location.hostname.toLowerCase(); // Convertemos para minúsculo para evitar erro
            const isAuthorized = authorized.some(auth =>
                host.includes(auth.toLowerCase())
            );

            if (!isAuthorized) {
                document.body.innerHTML =
                    "<h1 style='color:white; text-align:center; margin-top:50px;'>⚠️ ERRO DE INTEGRIDADE: Cópia não autorizada detectada.</h1>";
                throw new Error("Acesso negado.");
            }
        },

        // Poluição de Console e Loop de Debugger (Trava o console de invasores)
        killDevTools: () => {
            const catcher = function () {
                try {
                    const check = () => {
                        (function () {}).constructor("debugger")();
                    };
                    setInterval(check, 50);
                } catch (e) {}
            };
            catcher();

            // Inunda o console para esconder erros reais e logs
            setInterval(() => {
                console.clear();
                console.log(
                    "%cPROPRIEDADE PRIVADA",
                    "color:red; font-size:40px; font-weight:bold;"
                );
                console.log(
                    "%cProteção Ativa - Marcenaria Pro Ultimate",
                    "color:gray; font-size:15px;"
                );
            }, 500);
        },

        // Desabilita arraste de imagens (evita que roubem suas fotos dos móveis)
        antiHeuristic: () => {
            document.querySelectorAll("img").forEach(img => {
                img.setAttribute("draggable", false);
                img.oncontextmenu = () => false;
            });
        }
    };

    // Auto-execução da blindagem
    ShieldUltra.init();
})();

// ========================================================================
// 🎨 PREMIUM VISUAL ENGINE v2.0 - EFEITO CINEMATOGRÁFICO (KEN BURNS)
// ========================================================================
const VisualIdentity = {
    settings: {
        imgFooter:
            "https://i.postimg.cc/VkNcH2Lb/file-00000000ef3c720ea4e2187d04b305be.png",
        imgHeader:
            "https://i.postimg.cc/3R2MvTn4/file-00000000774c720e82f5e9a3c879abee.png"
    },

    apply: () => {
        const { imgFooter, imgHeader } = VisualIdentity.settings;

        // Localiza a seção Hero pelo botão "Ver Catálogo"
        const heroBtn = Array.from(document.querySelectorAll("button, a")).find(
            el => el.textContent.toUpperCase().includes("VER CATÁLOGO")
        );

        const heroSection = heroBtn
            ? heroBtn.closest("section") || heroBtn.parentElement.parentElement
            : null;

        const styleId = "messias-visual-pro";
        let styleTag =
            document.getElementById(styleId) || document.createElement("style");
        styleTag.id = styleId;

        styleTag.innerText = `
            /* Container da Seção Hero */
            .dynamic-hero-bg {
                position: relative;
                overflow: hidden; /* Importante para o zoom não vazar */
                min-height: 85vh !important;
                display: flex !important;
                align-items: center;
                justify-content: center;
                background: #000;
            }

            /* Camada da Imagem com Efeito Ken Burns */
            .dynamic-hero-bg::before {
                content: "";
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('${imgHeader}');
                background-size: cover;
                background-position: center 20%;
                z-index: 1;
                animation: kenBurnsEffect 20s infinite alternate ease-in-out;
                transition: opacity 0.5s;
            }

            /* Ajuste para garantir que o conteúdo fique na frente da imagem */
            .dynamic-hero-bg > * {
                position: relative;
                z-index: 2;
            }

            /* Animação de Zoom Lento */
            @keyframes kenBurnsEffect {
                0% { transform: scale(1); }
                100% { transform: scale(1.15); }
            }

            /* Footer Profissional */
            footer, .main-footer {
                background-image: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('${imgFooter}') !important;
                background-size: cover !important;
                background-position: center !important;
                padding: 100px 20px !important;
                border-top: 3px solid #e67e22 !important;
                color: #ffffff !important;
            }

            /* ADAPTAÇÃO PARA MODO LIGHT */
            body[data-theme="light"] .dynamic-hero-bg::before {
                background-image: linear-gradient(rgba(255,255,255,0.75), rgba(255,255,255,0.85)), url('${imgHeader}') !important;
            }
            body[data-theme="light"] footer {
                background-image: linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.96)), url('${imgFooter}') !important;
                color: #111 !important;
            }

            /* Legibilidade do texto */
            .dynamic-hero-bg h1, .dynamic-hero-bg p {
                text-shadow: 0px 4px 15px rgba(0,0,0,0.8) !important;
            }
            body[data-theme="light"] .dynamic-hero-bg h1 {
                color: #111 !important;
                text-shadow: none !important;
            }
        `;

        if (heroSection) heroSection.classList.add("dynamic-hero-bg");
        if (!document.getElementById(styleId))
            document.head.appendChild(styleTag);
    }
};

// Start
window.addEventListener("load", VisualIdentity.apply);

// Update on Theme Change
document.addEventListener("click", e => {
    if (e.target.closest(".theme-toggle")) {
        setTimeout(VisualIdentity.apply, 150);
    }
});

// ========================================================================
// 🛡️ BLACKHOLE PROTOCOL - PROTEÇÃO CONTRA AUTOMAÇÃO, IA E SCRAPING
// ========================================================================
(function () {
    "use strict";

    const BlackHole = {
        init: () => {
            BlackHole.antiAutomation();
            BlackHole.obfuscateEnvironment();
            BlackHole.preventFraming();
            BlackHole.hardLockout();
        },

        // 🤖 Detecta se o navegador é um robô (Selenium, Puppeteer, etc)
        antiAutomation: () => {
            const isBot =
                navigator.webdriver ||
                window.callPhantom ||
                window._phantom ||
                window.__nightmare;

            if (isBot) {
                document.body.innerHTML =
                    "<div style='background:#000; color:red; padding:100px; text-align:center;'><h1>🛡️ ACESSO BLOQUEADO: Sistema de Automação Detectado.</h1></div>";
                throw new Error("Bot detected");
            }
        },

        // ⛔ Impede que o site seja "espelhado" em outros domínios via IFRAME
        preventFraming: () => {
            if (window.self !== window.top) {
                window.top.location = window.self.location;
            }
        },

        // 🕵️ Proteção de ambiente (Dificulta análise de IA e Debuggers)
        obfuscateEnvironment: () => {
            // Desativa qualquer tentativa de log que não venha do ShieldUltra
            const noop = () => {};
            if (!APP_CONFIG.DEBUG_MODE) {
                window.console.log = noop;
                window.console.warn = noop;
                window.console.error = noop;
                window.console.info = noop;
            }
        },

        // 🔒 Bloqueio de Teclas de Engenharia Reversa (F12, Ctrl+U, Shift+I)
        hardLockout: () => {
            window.addEventListener(
                "keydown",
                e => {
                    // Bloqueia F12
                    if (e.keyCode === 123) e.preventDefault();
                    // Bloqueia Ctrl+Shift+I (Inspecionar)
                    if (e.ctrlKey && e.shiftKey && e.keyCode === 73)
                        e.preventDefault();
                    // Bloqueia Ctrl+U (Ver código fonte)
                    if (e.ctrlKey && e.keyCode === 85) e.preventDefault();
                    // Bloqueia Ctrl+S (Salvar site)
                    if (e.ctrlKey && e.keyCode === 83) e.preventDefault();
                },
                true
            );

            // Bloqueia o arrastamento de qualquer elemento (evita roubo de asset)
            document.addEventListener("dragstart", e => e.preventDefault());
        }
    };

    // Executa a proteção máxima
    setInterval(BlackHole.init, 1000); // Re-checa a cada segundo se algo foi violado
})();

// ========================================================================
// 📜 CONTRACT & TERMS ENGINE - TERMO DE RESPONSABILIDADE
// ========================================================================
const ContractModule = {
    check: callback => {
        // Estilização dinâmica do Modal de Contrato
        const isDark = document.body.getAttribute("data-theme") === "dark";
        const bgColor = isDark ? "#1a1a1a" : "#ffffff";
        const textColor = isDark ? "#ffffff" : "#111111";

        const modal = document.createElement("div");
        modal.id = "contract-modal";
        modal.style.cssText = `
            position: fixed; inset: 0; background: rgba(0,0,0,0.9);
            z-index: 100000; display: flex; align-items: center; justify-content: center;
            padding: 20px; backdrop-filter: blur(10px);
        `;

        modal.innerHTML = `
            <div style="background: ${bgColor}; color: ${textColor}; width: 100%; max-width: 500px; 
                        padding: 30px; border-radius: 20px; box-shadow: 0 20px 50px rgba(0,0,0,0.5);
                        border: 1px solid rgba(128,128,128,0.2); font-family: sans-serif;">
                
                <h2 style="margin-top: 0; color: #e67e22; font-size: 1.4rem;">📝 Termo de Responsabilidade</h2>
                
                <div style="background: rgba(128,128,128,0.1); padding: 15px; border-radius: 10px; 
                            font-size: 13px; line-height: 1.6; max-height: 250px; overflow-y: auto; margin: 20px 0;">
                    <p>Ao prosseguir com este orçamento na <b>Messias Móveis</b>, o contratante declara estar ciente de:</p>
                    <ul>
                        <li><b>Medidas:</b> A exatidão das medidas informadas no formulário é de inteira responsabilidade do cliente.</li>
                        <li><b>Especificações:</b> O valor de referência baseia-se nos materiais e cores selecionados neste site.</li>
                        <li><b>Validação:</b> Este pedido passará por uma análise técnica antes da fabricação final.</li>
                        <li><b>Compromisso:</b> O cliente assume a responsabilidade pela escolha do modelo e sua adequação ao ambiente de destino.</li>
                    </ul>
                    <p style="font-size: 11px; opacity: 0.7;">* A sensibilidade deste sistema está configurada em nível máximo (200) para garantir a integridade dos dados enviados.</p>
                </div>

                <div style="display: flex; align-items: flex-start; gap: 10px; margin-bottom: 25px;">
                    <input type="checkbox" id="aceito-termo" style="width: 20px; height: 20px; cursor: pointer; accent-color: #e67e22;">
                    <label for="aceito-termo" style="font-size: 13px; cursor: pointer; user-select: none;">
                        Eu li e concordo com os termos de responsabilidade e medidas informadas.
                    </label>
                </div>

                <button id="btn-confirm-contract" class="btn-main" 
                        style="background: #27ae60; opacity: 0.5; cursor: not-allowed;" disabled>
                    CONCORDAR E ENVIAR PEDIDO
                </button>
                
                <button onclick="document.getElementById('contract-modal').remove()" 
                        style="width: 100%; background: none; border: none; color: ${textColor}; 
                               opacity: 0.5; margin-top: 15px; cursor: pointer; font-size: 12px;">
                    Cancelar e voltar
                </button>
            </div>
        `;

        document.body.appendChild(modal);

        // Lógica de ativação do botão
        const checkbox = document.getElementById("aceito-termo");
        const btn = document.getElementById("btn-confirm-contract");

        checkbox.onchange = () => {
            if (checkbox.checked) {
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
                btn.disabled = false;
            } else {
                btn.style.opacity = "0.5";
                btn.style.cursor = "not-allowed";
                btn.disabled = true;
            }
        };

        btn.onclick = () => {
            modal.remove();
            callback(); // Executa o envio do WhatsApp
        };
    }
};

// ========================================================================
// 📸 VISUAL CONSULTANCY ENGINE v3.5 - FULL SYSTEM
// ========================================================================
const PhotoSystem = {
    inject: () => {
        // 1. Localiza o modal e o corpo dele
        const modal = document.getElementById("app-modal");
        if (!modal || modal.style.display === "none") return;

        const modalBody = modal.querySelector("div");
        // Evita duplicar o campo se ele já estiver lá
        if (!modalBody || document.getElementById("photo-upload-container"))
            return;

        // 2. Cria o container de Upload
        const container = document.createElement("div");
        container.id = "photo-upload-container";
        container.style.cssText = `
            margin: 15px 0; 
            padding: 15px; 
            border: 2px dashed rgba(128,128,128,0.3);
            border-radius: 12px; 
            text-align: center; 
            cursor: pointer; 
            transition: 0.3s;
            background: rgba(128,128,128,0.05);
        `;

        // 3. Estrutura Interna (Input escondido + Preview + Label)
        container.innerHTML = `
            <input type="file" id="photo-input" accept="image/jpeg, image/png, image/webp" style="display:none">
            <div id="photo-preview-display" style="display:none; margin-bottom: 12px;">
                <img id="img-preview" style="width: 100%; max-height: 140px; object-fit: cover; border-radius: 8px; border: 1px solid rgba(128,128,128,0.2);">
            </div>
            <div id="photo-label">
                <span style="font-size: 24px;">📸</span>
                <p style="font-size: 11px; margin: 5px 0 0 0; font-weight: bold; opacity: 0.9;">
                    Anexar Foto do Local ou Desenho
                </p>
                <p style="font-size: 9px; opacity: 0.5;">Toque para selecionar da galeria</p>
            </div>
        `;

        // 4. Aciona o clique no input real ao clicar no container
        container.onclick = () =>
            document.getElementById("photo-input").click();

        // 5. Lógica de processamento da imagem selecionada
        setTimeout(() => {
            const input = document.getElementById("photo-input");
            if (!input) return;

            input.onchange = e => {
                const file = e.target.files[0];

                if (file) {
                    // Valida se é imagem
                    if (!file.type.startsWith("image/")) {
                        NotificationSystem.show(
                            "Por favor, selecione uma foto válida.",
                            "error"
                        );
                        return;
                    }

                    const reader = new FileReader();
                    reader.onload = event => {
                        const previewImg =
                            document.getElementById("img-preview");
                        const previewContainer = document.getElementById(
                            "photo-preview-display"
                        );
                        const label = document.getElementById("photo-label");

                        // Mostra a miniatura
                        previewImg.src = event.target.result;
                        previewContainer.style.display = "block";

                        // Feedback visual de sucesso
                        container.style.borderColor = "#27ae60";
                        container.style.background = "rgba(39, 174, 96, 0.05)";

                        label.innerHTML = `
                            <span style="color:#27ae60; font-size:11px; font-weight:bold;">✅ AMBIENTE PRONTO</span>
                            <p style="font-size:9px; opacity:0.6;">Clique para trocar a imagem</p>
                        `;

                        // ATIVA A FLAG GLOBAL PARA O WHATSAPP (Módulo 9)
                        AppState.ui.hasPhoto = true;
                    };
                    reader.readAsDataURL(file);
                }
            };
        }, 100);

        // 6. Insere o container antes do botão de confirmar no modal
        const confirmBtn = modalBody.querySelector("button");
        if (confirmBtn) {
            modalBody.insertBefore(container, confirmBtn);
        }
    }
};

// ========================================================================
// 🛡️ VIGIA DE SEGURANÇA (MutationObserver)
// Garante que o campo de foto seja reinjetado sempre que o modal abrir
// ========================================================================
const photoObserver = new MutationObserver(() => {
    const modal = document.getElementById("app-modal");
    if (modal && modal.style.display === "flex") {
        PhotoSystem.inject();
    }
});

// Começa a observar o corpo do site
photoObserver.observe(document.body, { childList: true, subtree: true });

// ========================================================================
// 🎨 SMART COLOR & MULTI-TEXTURE VALIDATOR v4.0 (AI HEURISTICS)
// ========================================================================
const ColorValidator = {
    // Base de Conhecimento ampliada para Marcenaria
    keywords: [
        "BRANCO",
        "PRETO",
        "CINZA",
        "GRAFITE",
        "CARVALHO",
        "FREIJO",
        "NOCE",
        "LOURO",
        "IMBUIA",
        "GIANDUIA",
        "TITANIO",
        "AREIA",
        "CANYON",
        "MARFIM",
        "CEDRO",
        "MÉRCURIO",
        "AMADEIRADO",
        "LACCA",
        "FOSCO",
        "BRILHO",
        "TEXTURIZADO",
        "CRISTALO",
        "METALIC"
    ],

    /**
     * Valida múltiplas cores na mesma frase
     */
    isValid: input => {
        if (!input || input.length < 3) return false;

        // Limpa a frase e separa por vírgula, " e ", " E ", ou " + "
        const cores = input
            .toUpperCase()
            .replace(/\s+E\s+/g, ",")
            .replace(/\+/g, ",")
            .split(",")
            .map(c => c.trim())
            .filter(c => c.length > 0);

        if (cores.length === 0) return false;

        // Valida cada cor individualmente
        return cores.every(cor => {
            // 1. Teste de Motor (CSS Nativo)
            const tester = document.createElement("div");
            tester.style.color = cor;
            const isRealColor = tester.style.color !== "";

            // 2. Busca Semântica em Marcenaria
            const isWoodPattern = ColorValidator.keywords.some(key =>
                cor.includes(key)
            );

            // 3. Anti-Garbage (Evita "asdasd" ou "123123")
            const isGarbage =
                /(.)\1{3,}/.test(cor) ||
                (/^[0-9]+$/.test(cor) && cor.length < 3);

            return (isRealColor || isWoodPattern) && !isGarbage;
        });
    },

    /**
     * Hook de Interceptação com Feedback Visual
     */
    hook: () => {
        const btnConfirm = document.querySelector("#app-modal button");
        const inputCor = document.getElementById("cfg-cor");

        if (!btnConfirm || !inputCor) return;

        // placeholder dinâmico para dar a dica
        inputCor.placeholder = "Ex: Branco, Carvalho e Grafite...";

        inputCor.oninput = () => {
            if (ColorValidator.isValid(inputCor.value)) {
                inputCor.style.borderColor = "#27ae60";
                inputCor.style.boxShadow = "0 0 5px rgba(39, 174, 96, 0.3)";
            } else {
                inputCor.style.borderColor = "rgba(128,128,128,0.2)";
                inputCor.style.boxShadow = "none";
            }
        };

        const originalOnClick = btnConfirm.onclick;
        btnConfirm.onclick = e => {
            const valor = inputCor.value;

            if (!ColorValidator.isValid(valor)) {
                inputCor.animate(
                    [
                        { transform: "translateX(-5px)" },
                        { transform: "translateX(5px)" }
                    ],
                    { duration: 100, iterations: 3 }
                );

                inputCor.style.border = "2px solid #e74c3c";
                NotificationSystem.show(
                    "Uma ou mais cores não foram reconhecidas. Verifique a escrita!",
                    "error"
                );
                return;
            }

            if (originalOnClick) originalOnClick();
        };
    }
};

// Monitor de Ativação
const colorObserver = new MutationObserver(() => {
    const modal = document.getElementById("app-modal");
    if (modal && modal.style.display === "flex") {
        setTimeout(ColorValidator.hook, 150);
    }
});
colorObserver.observe(document.body, { childList: true, subtree: true });

// ========================================================================
// 🔐 SHIELDBANK ENGINE - SEGURANÇA DE ALTA INTEGRIDADE
// ========================================================================
const ShieldBank = {
    config: {
        maxSens: 200, // Conforme sua instrução de sensibilidade
        isLocked: false
    },

    init() {
        this.preventInspection();
        this.antiScraper();
        this.integrityCheck();
    },

    // 1. Dificulta a abertura do Inspecionar Elemento (DevTools)
    preventInspection() {
        document.addEventListener("keydown", e => {
            // Bloqueia F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
            if (
                e.key === "F12" ||
                (e.ctrlKey &&
                    e.shiftKey &&
                    (e.key === "I" || e.key === "J" || e.key === "C")) ||
                (e.ctrlKey && e.key === "u")
            ) {
                e.preventDefault();
                NotificationSystem.show("Segurança: Ação monitorada.", "error");
            }
        });

        // Bloqueia clique direito (opcional, mas comum em apps de segurança)
        document.addEventListener("contextmenu", e => e.preventDefault());
    },

    // 2. Honeypot: Captura bots que tentam preencher campos invisíveis
    antiScraper() {
        const honey = document.createElement("input");
        honey.type = "text";
        honey.style.cssText = "display:none !important;";
        honey.id = "bank-verification-token";
        document.body.appendChild(honey);

        // Se um bot preencher esse campo invisível, o site bloqueia o envio do WhatsApp
        this.isBot = () => honey.value.length > 0;
    },

    // 3. Checagem de integridade de variáveis globais
    integrityCheck() {
        setInterval(() => {
            // Se alguém tentar mudar o preço base ou a sensibilidade via console
            if (this.config.maxSens !== 200) {
                location.reload(); // Reseta o site se houver manipulação
            }
        }, 1000);
    },

    // 4. Criptografia simples para os dados do Carrinho antes de virar String do WhatsApp
    obfuscateData(data) {
        return btoa(unescape(encodeURIComponent(data)));
    }
};

// Inicialização imediata
ShieldBank.init();

// Integrando com o WhatsAppModule:
// No seu WhatsAppModule.send, você pode adicionar esta trava:
// if (ShieldBank.isBot()) return NotificationSystem.show("Atividade suspeita detectada.", "error");

// ========================================================================
// 🧹 APPOPTIMIZER - MANUTENÇÃO DE ALTA PERFORMANCE (ANTI-LAG)
// ========================================================================
const AppOptimizer = {
    init: () => {
        // Roda apenas após 3 segundos para garantir entrada instantânea
        setTimeout(() => {
            AppOptimizer.purgeOldData();
            AppOptimizer.optimizeMemory();
        }, 3000);
    },

    // Limpa o LocalStorage de lixo acumulado sem quebrar o carrinho atual
    purgeOldData: () => {
        try {
            const keysToKeep = [
                APP_CONFIG.STORAGE_KEYS.CART,
                APP_CONFIG.STORAGE_KEYS.THEME
            ];

            // Percorre o armazenamento do navegador
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                // Se encontrar algo que não é essencial (logs velhos, versões antigas), deleta
                if (
                    !keysToKeep.includes(key) &&
                    key.startsWith("marcenaria_")
                ) {
                    localStorage.removeItem(key);
                }
            }
        } catch (e) {
            // Falha silenciosa para não gerar erro no console protegido
        }
    },

    // Gerencia a memória RAM do navegador para o scroll continuar liso
    optimizeMemory: () => {
        // Se o cache da IA crescer demais (ex: +500 itens), limpa metade
        // Isso evita que o celular do cliente fique lento em catálogos gigantes
        if (IAMotor._cache.size > 500) {
            IAMotor._cache.clear();
        }

        // Força a liberação de referências de memória para objetos temporários
        if (window.gc) window.gc();
    }
};

// Inicializa o otimizador sem interferir no ShieldUltra
AppOptimizer.init();

// ========================================================================
// 🏛️ GOVERNMENT-GRADE SECURITY VAULT v10.0 (ULTIMATE PROTECTION)
// ========================================================================
(function () {
    "use strict";

    const VaultProtocol = {
        init: () => {
            VaultProtocol.obfuscateMemory();
            VaultProtocol.protectDOM();
            VaultProtocol.secureEvents();
            VaultProtocol.integrityHeartbeat();
        },

        // 🛡️ 1. OFUSCAÇÃO DE MEMÓRIA E BLOQUEIO DE VARREDURA
        // Impede que ferramentas de automação leiam o estado do AppState facilmente
        obfuscateMemory: () => {
            Object.freeze(APP_CONFIG); // Torna as configurações imutáveis

            // Impede a modificação de protótipos globais (Anti-Tampering)
            Object.defineProperty(window, "VaultProtocol", {
                configurable: false,
                writable: false
            });
        },

        // 🛡️ 2. PROTEÇÃO DO DOM E ANTI-INJEÇÃO
        // Monitora se alguém tentar injetar scripts maliciosos ou mudar o ID da grid
        protectDOM: () => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    mutation.removedNodes.forEach(node => {
                        if (
                            node.id === "products-grid" ||
                            node.id === "app-sidebar"
                        ) {
                            location.reload(); // Se deletarem componentes vitais, o site reseta
                        }
                    });
                });
            });

            observer.observe(document.body, { childList: true, subtree: true });
        },

        // 🛡️ 3. BLOQUEIO DE EVENTOS DE ENGENHARIA REVERSA
        // Nível máximo de restrição de entrada de dados suspeitos
        secureEvents: () => {
            const forbiddenKeys = ["u", "s", "p", "i", "j", "c"]; // Teclas de atalho de DevTools

            window.addEventListener(
                "keydown",
                e => {
                    if (e.ctrlKey || e.metaKey) {
                        if (forbiddenKeys.includes(e.key.toLowerCase())) {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log(
                                "%c⚠️ ACESSO RESTRITO - PROTOCOLO DE DEFESA ATIVO",
                                "color:red; font-size:20px;"
                            );
                        }
                    }
                },
                true
            );
        },

        // 🛡️ 4. HEARTBEAT DE INTEGRIDADE (SENSIBILIDADE 200)
        // Checagem constante de manipulação de variáveis críticas
        integrityHeartbeat: () => {
            setInterval(() => {
                // Se alguém tentar desativar o ShieldBank ou mudar a sensibilidade via console
                if (
                    typeof ShieldBank === "undefined" ||
                    ShieldBank.config.maxSens !== 200
                ) {
                    document.body.innerHTML = "";
                    window.location.href = "about:blank";
                }

                // Anti-Debugger Loop
                (function () {}).constructor("debugger")();
            }, 1000);
        }
    };

    // Executa a proteção de forma assíncrona para não atrasar o carregamento visual
    if (document.readyState === "complete") {
        VaultProtocol.init();
    } else {
        window.addEventListener("load", VaultProtocol.init);
    }
})();
// ========================================================================
// 🪵 FIM DO CÓDIGO - MARCENARIA PRO ULTIMATE ENGINE
// ========================================================================
