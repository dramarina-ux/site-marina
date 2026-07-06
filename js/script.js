/* =========================================================
   Dra. Marina Schneider — Cirurgia Plástica
   Script
   ========================================================= */
(function () {
  "use strict";

  var CATEGORY_LABELS = {
    face: "Face",
    mama: "Mama",
    corpo: "Corpo",
    intima: "Íntima",
    cosmiatria: "Cosmiatria"
  };

  var PROCEDURES = [
    {
      slug: "blefaroplastia",
      categoria: "face",
      titulo: "Blefaroplastia",
      resumo: "Um olhar mais leve, descansado e harmonioso.",
      descricao: "A blefaroplastia é a cirurgia que corrige o excesso de pele e as bolsas de gordura nas pálpebras, devolvendo leveza ao olhar e rejuvenescendo a expressão facial.",
      chips: ["Olhar mais descansado", "Rejuvenescimento natural"],
      img: "assets/images/procedimentos/cards/blefaroplastia.jpg",
      detail: "assets/images/procedimentos/detail/blefaroplastia.jpg"
    },
    {
      slug: "otoplastia",
      categoria: "face",
      titulo: "Otoplastia",
      resumo: "Harmonia que valoriza sua essência.",
      descricao: "A otoplastia é a cirurgia que corrige o formato, o posicionamento e o tamanho das orelhas, promovendo mais equilíbrio facial e autoestima, com resultados naturais e duradouros.",
      chips: ["Resultados naturais", "Proporção facial"],
      img: "assets/images/procedimentos/cards/otoplastia.jpg",
      detail: "assets/images/procedimentos/detail/otoplastia.jpg"
    },
    {
      slug: "mamoplastia",
      categoria: "mama",
      titulo: "Mamoplastia",
      resumo: "Redutora, de aumento, mastopexia e explante.",
      descricao: "Conjunto de procedimentos que remodelam as mamas de acordo com o objetivo e a anatomia de cada paciente: redução de volume, aumento com implante, levantamento (mastopexia) ou troca/retirada de implante (explante).",
      chips: ["Redutora", "Aumento", "Mastopexia", "Explante"],
      img: "assets/images/procedimentos/cards/mamoplastia.jpg",
      detail: "assets/images/procedimentos/detail/mamoplastia.jpg"
    },
    {
      slug: "ginecomastia",
      categoria: "mama",
      titulo: "Ginecomastia",
      resumo: "Contorno torácico mais firme e masculino.",
      descricao: "Procedimento indicado para reduzir o volume das mamas masculinas, removendo o excesso de tecido glandular e gordura, e promovendo um contorno torácico mais firme e masculino.",
      chips: ["Contorno mais masculino", "Mais confiança"],
      img: "assets/images/procedimentos/cards/ginecomastia.jpg",
      detail: "assets/images/procedimentos/detail/ginecomastia.jpg"
    },
    {
      slug: "abdominoplastia",
      categoria: "corpo",
      titulo: "Abdominoplastia e Miniabdominoplastia",
      resumo: "Contorno abdominal mais firme e definido.",
      descricao: "Procedimentos indicados para remover o excesso de pele e gordura da região abdominal, reposicionar a musculatura e restaurar o contorno, com opção de técnica reduzida (miniabdominoplastia) para casos de flacidez mais leve.",
      chips: ["Abdominoplastia", "Miniabdominoplastia"],
      img: "assets/images/procedimentos/cards/abdominoplastia.jpg",
      detail: "assets/images/procedimentos/detail/abdominoplastia.jpg"
    },
    {
      slug: "lipoaspiracao",
      categoria: "corpo",
      titulo: "Lipoaspiração e Lipoenxertia",
      resumo: "Contornos mais harmônicos e naturais.",
      descricao: "Procedimentos que removem o excesso de gordura localizada e permitem reaproveitá-la para remodelar e adicionar volume a outras áreas do corpo, proporcionando contornos mais harmônicos e resultados naturais.",
      chips: ["Lipoaspiração", "Lipoenxertia"],
      img: "assets/images/procedimentos/cards/lipoaspiracao.jpg",
      detail: "assets/images/procedimentos/detail/lipoaspiracao.jpg"
    },
    {
      slug: "ninfoplastia",
      categoria: "intima",
      titulo: "Ninfoplastia",
      resumo: "Mais conforto e bem-estar no dia a dia.",
      descricao: "A ninfoplastia é a cirurgia que reduz e remodela os pequenos lábios, promovendo mais conforto, bem-estar e autoestima.",
      chips: ["Mais conforto", "Bem-estar"],
      img: "assets/images/procedimentos/cards/ninfoplastia.jpg",
      detail: "assets/images/procedimentos/detail/ninfoplastia.jpg"
    },
    {
      slug: "cosmiatria",
      categoria: "cosmiatria",
      titulo: "Cosmiatria",
      resumo: "Gerenciamento global do envelhecimento.",
      descricao: "Procedimentos injetáveis que atuam de forma complementar à cirurgia: botox para suavizar linhas de expressão, bioestimuladores de colágeno para firmeza e qualidade da pele, e preenchimentos para restaurar volumes com naturalidade.",
      chips: ["Botox", "Bioestimulador", "Preenchimento"],
      img: "assets/images/procedimentos/cards/cosmiatria.jpg",
      detail: "assets/images/procedimentos/detail/cosmiatria.jpg"
    }
  ];

  var NO_PHOTO_ICON = '<svg class="no-photo-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M8 21c0-7 5-13 16-13s16 6 16 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M8 21c0 7.5 6 15 16 15s16-7.5 16-15" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M24 8v28" stroke="currentColor" stroke-width="1.1" stroke-dasharray="1.5 3.2" stroke-linecap="round"/></svg>';

  function buildProcedureCards() {
    var grid = document.getElementById("proceduresGrid");
    if (!grid) return;

    var html = PROCEDURES.map(function (proc, i) {
      var mediaHtml;
      var classes = "proc-card reveal";
      if (proc.img) {
        mediaHtml =
          '<img src="' + proc.img + '" alt="' + proc.titulo + '" loading="lazy">' +
          '<div class="proc-scrim"></div>';
      } else {
        classes += " no-photo";
        mediaHtml = NO_PHOTO_ICON + '<div class="proc-scrim"></div>';
      }
      return (
        '<button type="button" class="' + classes + '" data-category="' + proc.categoria + '" data-index="' + i + '">' +
          mediaHtml +
          '<span class="proc-label">' +
            '<span class="proc-title">' + proc.titulo + '</span>' +
          '</span>' +
        '</button>'
      );
    }).join("");

    grid.innerHTML = html;

    grid.querySelectorAll(".proc-card").forEach(function (card) {
      card.addEventListener("click", function () {
        openLightbox(PROCEDURES[Number(card.getAttribute("data-index"))]);
      });
    });

    // Re-run reveal observer for newly injected cards
    observeReveals();
  }

  function initFilters() {
    var buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("is-active"); });
        btn.classList.add("is-active");
        var filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".proc-card").forEach(function (card) {
          var show = filter === "todos" || card.getAttribute("data-category") === filter;
          card.classList.toggle("hide", !show);
        });
      });
    });
  }

  // ---- Lightbox ----
  var lightbox, lightboxImg, lightboxTitle, lightboxDesc, lightboxCategory, lightboxChips, lastFocused;

  function initLightbox() {
    lightbox = document.getElementById("lightbox");
    lightboxImg = document.getElementById("lightboxImg");
    lightboxTitle = document.getElementById("lightboxTitle");
    lightboxDesc = document.getElementById("lightboxDesc");
    lightboxCategory = document.getElementById("lightboxCategory");
    lightboxChips = document.getElementById("lightboxChips");

    if (!lightbox) return;

    lightbox.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("is-open")) closeLightbox();
    });
  }

  function openLightbox(proc) {
    if (!lightbox) return;
    lastFocused = document.activeElement;

    var imgSrc = proc.detail || proc.img;
    if (imgSrc) {
      lightboxImg.src = imgSrc;
      lightboxImg.alt = proc.titulo;
      lightboxImg.style.display = "block";
    } else {
      lightboxImg.removeAttribute("src");
      lightboxImg.style.display = "none";
    }

    lightboxCategory.textContent = CATEGORY_LABELS[proc.categoria];
    lightboxTitle.textContent = proc.titulo;
    lightboxDesc.textContent = proc.descricao;
    lightboxChips.innerHTML = proc.chips.map(function (c) {
      return '<span class="chip">' + c + '</span>';
    }).join("");

    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // ---- Header scroll state ----
  function initHeaderScroll() {
    var header = document.getElementById("siteHeader");
    if (!header) return;
    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  // ---- Mobile nav ----
  function initNavToggle() {
    var toggle = document.getElementById("navToggle");
    var nav = document.getElementById("mainNav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Bio collapse ----
  function initBioToggle() {
    var btn = document.getElementById("bioToggle");
    var panel = document.getElementById("bioCollapse");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = panel.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      btn.querySelector("span").textContent = isOpen ? "←" : "→";
    });
  }

  // ---- Back to top ----
  function initBackToTop() {
    var btn = document.getElementById("backToTop");
    if (!btn) return;
    function update() {
      btn.classList.toggle("is-visible", window.scrollY > 500);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // ---- Reveal on scroll ----
  var revealObserver;
  function observeReveals() {
    var els = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach(function (el) { revealObserver.observe(el); });
  }

  // ---- Footer year ----
  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", function () {
    buildProcedureCards();
    initFilters();
    initLightbox();
    initHeaderScroll();
    initNavToggle();
    initBioToggle();
    initBackToTop();
    observeReveals();
    setYear();
  });
})();
