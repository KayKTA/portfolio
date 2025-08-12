export type Sex = 'male' | 'female';
export type AgeGroup = 'child' | 'adult';
export type Embarked = 'C' | 'Q' | 'S';
export type Family = 'alone' | 'with_family';

export interface ComboStat {
  sex: Sex;
  age_group: AgeGroup;
  pclass: 1 | 2 | 3;
  embarked: Embarked;
  family: Family;
  survival_rate: number; // 0..1
  count: number;
}

export interface MarginalBlock<T extends string | number> {
  [k: string]: Array<Record<string, T | number>>;
}

export interface TitanicStats {
  combo: ComboStat[];
  marginals: {
    sex: Array<{ sex: Sex; survival_rate: number; count: number }>;
    age_group: Array<{ age_group: AgeGroup; survival_rate: number; count: number }>;
    pclass: Array<{ pclass: 1 | 2 | 3; survival_rate: number; count: number }>;
    embarked: Array<{ embarked: Embarked; survival_rate: number; count: number }>;
    family: Array<{ family: Family; survival_rate: number; count: number }>;
  };
}

export interface Profile {
  sex: Sex;
  age_group: AgeGroup;
  pclass: 1 | 2 | 3;
  embarked: Embarked;
  family: Family;
}
