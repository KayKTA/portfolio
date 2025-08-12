export type CategoricalValue = string | number;
export type VariableSchema = {
	name: string;
	type: 'categorical';
	categories: CategoricalValue[];
	reference: CategoricalValue } | { name: string; type: 'numeric' };

export interface LogitModel {
    intercept: number;
    coefficients: Record<string, number>;
    schema: { variables: VariableSchema[] };
}

export type UserInput = Record<string, CategoricalValue | number>;

export function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x));
}

/**
 * Retourne la liste des noms de "features actives" en fonction
 * - de l'input utilisateur
 * - et du schéma de variables défini dans le modèle
 *
 * Pour chaque variable :
 *   - Si c’est une variable catégorielle :
 *       → On ignore si la valeur = catégorie de référence (drop='first')
 *       → Sinon, on crée un nom de feature sous la forme : `${nom}_${valeur}`
 *
 *   - Si c’est une variable numérique :
 *       → On utilise simplement le nom de la variable
 */
export function activeFeatureNames(model: LogitModel, input: UserInput): string[] {
	const names: string[] = [];

	for (const variable of model.schema.variables) {
		const value = input[variable.name];

		if (variable.type === 'categorical') {
			// Catégorie de référence -> pas de colonne associée
			if (value === variable.reference) continue;

			// exemples: "Sex_male"
			names.push(`${variable.name}_${String(value)}`);
		}

		if (variable.type === 'numeric') {
		// Les numériques gardent juste leur nom
		names.push(variable.name);
		}
	}

	return names;
}

/**
 * Calcule la probabilité p(y=1|x) à partir de :
 * - l'intercept du modèle
 * - les coefficients appris
 * - les valeurs fournies par l'utilisateur
 *
 * Étapes :
 *   1. Initialiser le log-odds avec l’intercept du modèle
 *   2. Ajouter la contribution de chaque variable catégorielle active
 *   3. Ajouter la contribution pondérée de chaque variable numérique
 *   4. Transformer le log-odds en probabilité avec la sigmoïde
 */
export function predictProbability(model: LogitModel, input: UserInput): number {
	// point de départ = intercept
	let logodds = model.intercept;

	// variables catégorielles (one-hot encoding)
	for (const featureName of activeFeatureNames(model, input)) {
		const coeff = model.coefficients[featureName];
		if (typeof coeff === 'number') {
			logodds += coeff;
		}
	}

	// variables numériques
	for (const variable of model.schema.variables) {
		if (variable.type === 'numeric') {
			const x = Number(input[variable.name] ?? 0);
			const coeff = model.coefficients[variable.name];
			if (typeof coeff === 'number') {
				logodds += coeff * x;
			}
		}
	}

	// transformation log-odds → probabilité
	return sigmoid(logodds);
}
