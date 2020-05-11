function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo"); // para sempre aparecer a primeira section

  if (tabMenu.length && tabContent.length) {
    // tabMenu > 0? e tabContent > 0? Se sim -> ocorra
    function activeTab(index) {
      // fazendo uma função para pegar o index do item e remover ou adicionar a class .ativo
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }
    // fazendo um loop para adicionar um evento nas imagens quando clicar e ativar a função activeTab
    // para pegar o index de onde estou clickando e adicionar ou remover a class .ativo para mostrar o content section
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass); // para adicionar a class ativo no próximo elemento
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSmooth() {
  const internalLinks = document.querySelectorAll(".js-menu a[href^='#']");

  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSmooth();

function initAnimationScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - halfWindow;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else section.classList.remove("ativo");
      });
    }

    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

initAnimationScroll();
