// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les boutons "Acheter"
    var acheterBtns = document.querySelectorAll('add_panier');
    // Parcourir tous les boutons et ajouter un écouteur d'événement pour chaque
    acheterBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            add_panier(this); // Appeler la fonction ajouterAuPanier avec le bouton cliqué comme argument
        });
    });
});

function add_panier(bouton) {
    // Récupérer l'élément parent de bouton (div .annonce)
    var annonce = bouton.parentElement;
    
    // Récupérer le nom du produit
    var nomProduit = annonce.querySelector('h3').textContent;
    
    // Supprimer l'annonce de la liste des annonces
    annonce.remove();
    
    // Ajouter le nom du produit au panier
    var panier = document.getElementById('liste-articles');
    var nouvelElement = document.createElement('li');
    nouvelElement.textContent = nomProduit;
    panier.appendChild(nouvelElement);
}
