// Créer le conteneur du menu de navigation
var navbar = document.createElement('div');
navbar.id = 'navbar';
navbar.style.backgroundColor = '#333';
navbar.style.padding = '10px';

// Créer les liens du menu
var linkAbout = document.createElement('a');
linkAbout.href = '#about-me';
linkAbout.style.color = 'white';
linkAbout.style.marginRight = '20px';
linkAbout.textContent = 'À propos de moi';

var linkContact = document.createElement('a');
linkContact.href = '#contact-me';
linkContact.style.color = 'white';
linkContact.textContent = 'Contactez moi';

// Ajouter les liens au conteneur du menu
navbar.appendChild(linkAbout);
navbar.appendChild(linkContact);

// Ajouter le menu au corps de la page (body)
document.body.prepend(navbar);

// Ajouter du CSS pour les liens du menu
var style = document.createElement('style');
style.innerHTML = `
  #navbar a {
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
    display: inline-block;
  }
  #navbar a:hover {
    background-color: #ddd;
    color: black;
  }
`;
document.head.appendChild(style);


