function Salarie(nom, salaire, poste, entreprise) {
	this.nom = nom;
	this.salaire = salaire;
	this.poste = poste;
	this.entreprise = entreprise;

	this.augmenter =  function(pourcentageAugmentation) {
		this.salaire = this.salaire + (this.salaire * pourcentageAugmentation / 100);
		this.salaire = this.salaire * (pourcentageAugmentation / 100 + 1)
	}
}