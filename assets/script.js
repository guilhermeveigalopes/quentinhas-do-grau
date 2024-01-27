function showTab(tabId) {
    // Esconde todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = 'none');

    // Mostra a aba selecionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    showMenu('almoco'); // Adicionado para exibir a tela de almoço ao carregar a página
});

function showMenu(menuId) {
    // Esconde todos os menus
    const menus = document.querySelectorAll('.menu');
    menus.forEach(menu => menu.style.display = 'none');

    // Mostra o menu selecionado
    const selectedMenu = document.getElementById(menuId);
    selectedMenu.style.display = 'block';
}
