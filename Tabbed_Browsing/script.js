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
