// script.js

function ouvrirOnglet(ongletId) {
    // Cacher tous les contenus d'onglets
    var ongletContenus = document.querySelectorAll('.onglet-contenu');
    ongletContenus.forEach(function(contenu) {
        contenu.style.display = 'none';
    });

    // Retirer la classe "active" de tous les boutons d'onglets
    var ongletBoutons = document.querySelectorAll('.onglet-bouton');
    ongletBoutons.forEach(function(bouton) {
        bouton.classList.remove('active');
    });

    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(ongletId).style.display = 'block';

    // Ajouter la classe "active" au bouton d'onglet actif
    var boutonActif = document.querySelector('.onglet-bouton[onclick="ouvrirOnglet(\'' + ongletId + '\')"]');
    boutonActif.classList.add('active');
}

// Afficher le premier onglet par défaut au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    ouvrirOnglet('onglet1'); // Ouvre l'onglet 1 par défaut
});
