if (confirm('Souhaitez-vous calculer une remise sur un article ?')) { //ajout de conditions
	alert('Tres bien, allons-y !'); 
} else {
	alert('Retour au menu');
}




var nomUtilisateur = prompt('Tapez votre prenom: '); //invite à tapez son prénom)

if (nomUtilisateur === ''){ // si pas de caractères déclencehement d'une alerte 
	alert('Vous n\'avez rien ecrit' );
} else {
	alert('Merci');
} 

var salutation = 'Bienvenue ';
salutation += nomUtilisateur; //Salutation personnalisée avec nom de l'utilisateur
alert(salutation);

alert('Nous allons faire un peu de calcul pour votre shopping'); //fenêtre d'explication

//var prixArticle = prompt('Tapez le prix de votre article');

//var reduction = prompt('Tapez le pourcentage de reduction'); 


//var remise = prixArticle * reduction / 100;
//var prixFinale = prixArticle - remise;

//alert('le prix de votre article est de : ' + prixFinale + ' euros'); //affcihe le prix après reduction de l'article

var prixArticle, reduction, remise, prixFinale;

prixArticle = prompt('Tapez le prix de votre article'); 
reduction = prompt('Tapez le pourcentage de reduction'); 
remise = prixArticle * reduction / 100;
prixFinale = prixArticle - remise;

alert('le prix de votre article est de : ' + prixFinale + ' euros'); //affcihe le prix après reduction de l'article
