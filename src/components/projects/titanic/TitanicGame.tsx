import * as React from 'react';
import {
  Box, Typography, Card, CardActionArea, CardContent,
  Grid, Button, CircularProgress, Paper, Divider, Stack, LinearProgress
} from '@mui/material';
import type { LogitModel, UserInput } from '../../../lib/logit/predict';
import { predictProbability } from '../../../lib/logit/predict';

type Step = {
  key: 'sex' | 'ageGroup' | 'pclass' | 'embarked' | 'family';
  label: string;
  options: { value: string | number; label: string }[];
};

const STEPS: Step[] = [
    { key: 'sex', label: 'Quel était votre sexe ?', options: [
        { value: 'male', label: 'Homme' },
        { value: 'female', label: 'Femme' },
    ]},
    { key: 'ageGroup', label: 'Quel était votre âge ?', options: [
        { value: 'adult', label: 'Adulte' },
        { value: 'child', label: 'Enfant' },
    ]},
    { key: 'pclass', label: 'Dans quelle classe voyagiez-vous ?', options: [
        { value: 1, label: '1ʳᵉ classe' },
        { value: 2, label: '2ᵉ classe' },
        { value: 3, label: '3ᵉ classe' },
    ]},
    { key: 'embarked', label: 'Depuis quel port avez-vous embarqué ?', options: [
        { value: 'C', label: 'Cherbourg' },
        { value: 'Q', label: 'Queenstown' },
        { value: 'S', label: 'Southampton' },
    ]},
    { key: 'family', label: 'Voyagiez-vous seul·e ou avec de la famille ?', options: [
        { value: 'alone', label: 'Seul·e' },
        { value: 'with_family', label: 'Avec famille' },
    ]},
];

export default function TitanicGame({ modelUrl = '/data/titanic_model.json' }:{
    modelUrl?: string;
}) {
    const [model, setModel] = React.useState<LogitModel | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [stepIndex, setStepIndex] = React.useState(0);
    const [answers, setAnswers] = React.useState<Record<string, string | number>>({});
    const [prob, setProb] = React.useState<number | null>(null);

    React.useEffect(() => {
        setLoading(true);
        fetch(modelUrl)
        .then(r => r.json())
        .then((m: LogitModel) => setModel(m))
        .finally(() => setLoading(false));
    }, [modelUrl]);

    const restart = () => {
        setAnswers({});
        setStepIndex(0);
        setProb(null);
    };

    const handleChoice = (key: Step['key'], value: string | number) => {
        const next = { ...answers, [key]: value };
        setAnswers(next);

        if (stepIndex < STEPS.length - 1) {
        setStepIndex(stepIndex + 1);
        return;
        }

        if (!model) return;

        const input: UserInput = {
        Sex: next.sex as string,
        age_group: next.ageGroup as string,
        Pclass: Number(next.pclass),
        Embarked: next.embarked as string,
        family: next.family as string,
        };

        const p = predictProbability(model, input);
        setProb(p);
    };

    if (loading || !model) {
        return <CircularProgress size={24} />;
    }

    // Fonction de rendu du résumé
    const renderSummary = () => (
        <Stack spacing={1}>
        {STEPS.map(s => (
            <Box key={s.key}>
            <Typography variant="body2" fontWeight={500}>
                {s.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {answers[s.key] !== undefined
                ? s.options.find(o => o.value === answers[s.key])?.label
                : '—'}
            </Typography>
            </Box>
        ))}
        </Stack>
    );

    // Résultat final
    if (prob !== null) {
        const pct = (prob * 100).toFixed(1);
        const success = Number(pct) >= 50;
        return (
            <Grid container spacing={3}>
                <Grid size={{ xs: 12, md: 8 }}>
                <Paper variant="outlined" sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>Résultat</Typography>
                    <Typography variant="h3" color={success ? 'success.main' : 'error.main'}>
                    {pct}% de chances de survie
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1.5 }} color="text.secondary">
                    Calculé avec la régression logistique Titanic.
                    </Typography>
                    <Button sx={{ mt: 3 }} variant="outlined" onClick={restart}>Rejouer</Button>
                </Paper>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>
                    📋 Vos choix
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    {renderSummary()}
                </Paper>
                </Grid>
            </Grid>
        );
    }

    const step = STEPS[stepIndex];
    const progress = ((stepIndex) / STEPS.length) * 100;

    return (
        <Grid container spacing={3}>
            {/* Colonne gauche */}
            <Grid size={{ xs: 12, md: 8 }}>
                {/* Barre de progression */}
                <Box sx={{ mb: 2 }}>
                <LinearProgress variant="determinate" value={progress} />
                <Typography variant="caption" display="block" align="center" sx={{ mt: 0.5 }}>
                    Question {stepIndex + 1} sur {STEPS.length}
                </Typography>
                </Box>

                {/* Question en cours */}
                <Typography variant="h6" align="center" sx={{ mb: 2 }}>
                {step.label}
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                {step.options.map(opt => (
                    <Grid key={String(opt.value)} size={{ xs: 12, sm: 6, md: 4 }}>
                    <Card sx={{ '&:hover': { boxShadow: 4 } }}>
                        <CardActionArea onClick={() => handleChoice(step.key, opt.value)}>
                        <CardContent sx={{ textAlign: 'center', py: 3 }}>
                            <Typography variant="h6">{opt.label}</Typography>
                        </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                ))}
                </Grid>
            </Grid>

            {/* Colonne droite : résumé */}
            <Grid size={{ xs: 12, md: 4 }}>
                <Paper variant="outlined" sx={{ p: 2}}>
                <Typography variant="subtitle1" gutterBottom>
                    📋 Vos choix
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {renderSummary()}
                </Paper>
            </Grid>
        </Grid>
    );
}
