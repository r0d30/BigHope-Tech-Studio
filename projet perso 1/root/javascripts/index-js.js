const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');

// Ajoutez un gestionnaire d'événements au bouton
menuButton.addEventListener('click', () => {
    // Vérifiez l'état du volet
    if (sideMenu.classList.contains('closed')) {
        // Ouvrez le volet
        sideMenu.style.left = '0';
        sideMenu.classList.remove('closed');
    } else {
        // Fermez le volet
        sideMenu.style.left = '-300px';
        sideMenu.classList.add('closed');
    }
});