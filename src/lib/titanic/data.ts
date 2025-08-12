import { TitanicStats, Profile, ComboStat } from './types';

export async function loadTitanicStats(): Promise<TitanicStats> {
  const res = await fetch('/data/titanic_stats.json', { cache: 'force-cache' });
  if (!res.ok) throw new Error('Failed to load titanic_stats.json');
  return res.json();
}

// Cherche la meilleure correspondance (toutes les dimensions), sinon fallback en combinant les marginales
export function estimateSurvival(stats: TitanicStats, profile: Profile): { rate: number; evidence: string } {
  const exact = stats.combo.find((c: ComboStat) =>
    c.sex === profile.sex &&
    c.age_group === profile.age_group &&
    c.pclass === profile.pclass &&
    c.embarked === profile.embarked &&
    c.family === profile.family
  );
  if (exact) return { rate: exact.survival_rate, evidence: `Match exact (${exact.count} obs.)` };

  // Fallback: moyenne pondérée des marginales disponibles (simple mais robuste)
  const parts: Array<{ rate: number; weight: number; label: string }> = [];

  const mSex = stats.marginals.sex.find(m => m.sex === profile.sex);
  if (mSex) parts.push({ rate: mSex.survival_rate, weight: mSex.count, label: 'sexe' });

  const mAge = stats.marginals.age_group.find(m => m.age_group === profile.age_group);
  if (mAge) parts.push({ rate: mAge.survival_rate, weight: mAge.count, label: 'âge' });

  const mClass = stats.marginals.pclass.find(m => m.pclass === profile.pclass);
  if (mClass) parts.push({ rate: mClass.survival_rate, weight: mClass.count, label: 'classe' });

  const mEmb = stats.marginals.embarked.find(m => m.embarked === profile.embarked);
  if (mEmb) parts.push({ rate: mEmb.survival_rate, weight: mEmb.count, label: 'port' });

  const mFam = stats.marginals.family.find(m => m.family === profile.family);
  if (mFam) parts.push({ rate: mFam.survival_rate, weight: mFam.count, label: 'famille' });

  if (!parts.length) return { rate: 0.0, evidence: 'Aucune donnée' };

  const total = parts.reduce((s, p) => s + p.weight, 0);
  const rate = parts.reduce((s, p) => s + p.rate * (p.weight / total), 0);
  const evidence = `Moyenne pondérée marginales (${parts.map(p => p.label).join(', ')})`;

  return { rate, evidence };
}
