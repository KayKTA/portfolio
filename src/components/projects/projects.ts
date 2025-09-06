export type Project = {
	id: string;
	title: string;
	subtitle?: string;
	modelUrl?: string;   // JSON du modèle logit
	dataUrl?: string;    // CSV pour l’onglet Data
	info?: string;       // texte markdown/HTML simple
};

export const PROJECTS: Project[] = [
	{
		id: 'titanic',
		title: 'Titanic',
		subtitle: 'Analyse des survivants du Titanic',
		modelUrl: '/data/titanic_model.json',
		dataUrl: '/data/titanic_train.csv',
		info: `Données Kaggle • Variables: Sex, age_group, Pclass, Embarked, family • Modèle: régression logistique.`,
	},
	{
        id: 'p2',
		title: 'Projets 2',
        subtitle: 'Analyse projet2',
		modelUrl: '',
		dataUrl: '',
		info: `A venir`,
	},
	{
		id: 'p3',
		title: 'Projets 3',
        subtitle: 'Analyse projet2',
		modelUrl: '',
		dataUrl: '',
		info: `A venir`,
	},
	{
		id: 'p4',
		title: 'Projets 4',
        subtitle: 'Analyse projet2',
        modelUrl: '',
		dataUrl: '',
		info: `A venir`,
	},

	// projets à venir
];
