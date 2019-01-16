var nomUtilisateur = prompt('Tapez votre prenom: '); //invite à tapez son prénom)


var salutation = 'Bienvenue ';
salutation += nomUtilisateur; //Salutation personnalisée avec nom de l'utilisateur
alert(salutation);

alert('Nous allons faire un peu de calcul pour votre shopping'); //fenêtre d'explication

var prixArticle = prompt('Tapez le prix de votre article');

var reduction = prompt('Tapez le pourcentage de reduction'); 


var remise = prixArticle * reduction / 100;
var prixFinale = prixArticle - remise;

alert('le prix de votre article est de : ' + prixFinale + ' euros'); //affcihe le prix après reduction de l'article

