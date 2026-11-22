
/* ========================================
   AGATHA COCENZO - SCRIPT PRINCIPAL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ======================================
  // CONFIGURAÇÕES DE CONTATO
  // ======================================

  const CONFIG = {
    whatsapp: "5511947477987",
    instagram: "agatharicardoc",

    mensagem:
      "Olá, Agatha! Encontrei seu site e gostaria de conhecer melhor seus serviços."
  };


  // ======================================
  // MENU MOBILE
  // ======================================

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {

    menuToggle.addEventListener("click", () => {

      const isOpen = navigation.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
      );

    });

    // Fecha o menu ao clicar em um link

    navigation.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

      });

    });

    // Fecha o menu ao pressionar ESC

    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {

        navigation.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

      }

    });

  }


  // ======================================
  // CONFIGURAÇÃO DOS LINKS
  // ======================================

  const whatsappURL =
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensagem)}`;

  const instagramURL =
    `https://instagram.com/${CONFIG.instagram}`;

  // Botões e links do WhatsApp

  document.querySelectorAll(".whatsapp-link").forEach(link => {
    link.href = whatsappURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });

  // Botões e links do Instagram

  document.querySelectorAll(".instagram-link").forEach(link => {
    link.href = instagramURL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });


  // ======================================
  // ANO AUTOMÁTICO NO RODAPÉ
  // ======================================

  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }


  // ======================================
  // ANIMAÇÕES AO ROLAR A PÁGINA
  // ======================================

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("active");

          obs.unobserve(entry.target);

        }

      });

    }, {
      threshold: 0.12
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });

  } else {

    revealElements.forEach(element => {
      element.classList.add("active");
    });

  }


  // ======================================
  // NAVEGAÇÃO ATIVA
  // ======================================

  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".navigation a[href^='#']");

  if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          const sectionId = entry.target.id;

          navLinks.forEach(link => {

            const isCurrent =
              link.getAttribute("href") === `#${sectionId}`;

            link.classList.toggle("current", isCurrent);

          });

        }

      });

    }, {
      rootMargin: "-30% 0px -60% 0px"
    });

    sections.forEach(section => {
      sectionObserver.observe(section);
    });

  }

});
