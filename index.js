// Créer le menu de navigation dynamiquement
document.write('<div id="navbar" style="background-color:#333; padding:10px;">');
document.write('<a href="#about-me" style="color:white; margin-right:20px;">À propos de moi</a>');
document.write('<a href="#contact-me" style="color:white;">Contactez moi</a>');
document.write('</div>');

// Ajouter du CSS pour le style du menu
var style = document.createElement('style');
style.innerHTML = `
  #navbar {
    background-color: #333;
    overflow: hidden;
  }
  #navbar a {
    float: left;
    display: block;
    color: white;
    text-align: center;
    padding: 14px 20px;
    text-decoration: none;
  }
  #navbar a:hover {
    background-color: #ddd;
    color: black;
  }
`;
document.head.appendChild(style);

