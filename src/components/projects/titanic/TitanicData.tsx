import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Papa from 'papaparse';
import { BarChart, PieChart, ScatterChart } from '@mui/x-charts';

type Row = Record<string, any>;

function useCSV(url?: string) {
    const [rows, setRows] = React.useState<Row[]>([]);
    React.useEffect(() => {
        if (!url) { setRows([]); return; }
        let ok = true;
        Papa.parse(url, {
            download: true,
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (res) => { if (ok) setRows(res.data as Row[]); },
        });
        return () => { ok = false; };
    }, [url]);

    return rows;
}

export default function TitanicData({ dataUrl }: { dataUrl?: string }) {
    const rows = useCSV(dataUrl);

    const bySex = React.useMemo(() => {
        const m = new Map<string, { n: number; alive: number }>();
        rows.forEach(r => {
        const key = String(r.Sex ?? '');
        const alive = Number(r.Survived) === 1 ? 1 : 0;
        const o = m.get(key) ?? { n: 0, alive: 0 };
        o.n += 1; o.alive += alive; m.set(key, o);
        });
        return Array.from(m, ([sex, o]) => ({ sex, rate: o.n ? Math.round((o.alive / o.n) * 100) : 0 }));
    }, [rows]);

    const byClass = React.useMemo(() => {
        const m = new Map<number, { n: number; alive: number }>();
        rows.forEach(r => {
        const key = Number(r.Pclass);
        const alive = Number(r.Survived) === 1 ? 1 : 0;
        const o = m.get(key) ?? { n: 0, alive: 0 };
        o.n += 1; o.alive += alive; m.set(key, o);
        });
        return [1,2,3].map(k => {
        const o = m.get(k) ?? { n: 0, alive: 0 };
        return { cls: `Classe ${k}`, rate: o.n ? Math.round((o.alive / o.n) * 100) : 0 };
        });
    }, [rows]);

    const byEmbarked = React.useMemo(() => {
        const mapPort: Record<string,string> = { C: 'Cherbourg', Q: 'Queenstown', S: 'Southampton' };
        const m = new Map<string, { n: number; alive: number }>();
        rows.forEach(r => {
        const key = String(r.Embarked ?? '');
        const alive = Number(r.Survived) === 1 ? 1 : 0;
        const o = m.get(key) ?? { n: 0, alive: 0 };
        o.n += 1; o.alive += alive; m.set(key, o);
        });
        return Array.from(m, ([emb, o]) => ({ id: emb, value: o.n ? Math.round((o.alive / o.n) * 100) : 0, label: mapPort[emb] ?? emb }));
    }, [rows]);

    const scatterData = React.useMemo(() => {
        const yes: { x:number; y:number }[] = [];
        const no:  { x:number; y:number }[] = [];
        rows.forEach(r => {
        const age = Number(r.Age);
        const fare = Number(r.Fare);
        if (Number.isFinite(age) && Number.isFinite(fare)) {
            (Number(r.Survived) === 1 ? yes : no).push({ x: age, y: fare });
        }
        });
        return { yes, no };
    }, [rows]);

    return (
        <Box sx={{ display: 'grid', gap: 2 }}>
            {/* Survie par sexe */}
            <Paper variant="outlined" sx={{ p: 2,  }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Taux de survie par sexe</Typography>
                <BarChart
                height={260}
                xAxis={[{ scaleType: 'band', data: bySex.map(d => d.sex) }]}
                series={[{ data: bySex.map(d => d.rate), label: 'Survie (%)' }]}
                />
            </Paper>

            {/* Survie par classe */}
            <Paper variant="outlined" sx={{ p: 2,  }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Taux de survie par classe</Typography>
                <BarChart
                height={260}
                xAxis={[{ scaleType: 'band', data: byClass.map(d => d.cls) }]}
                series={[{ data: byClass.map(d => d.rate), label: 'Survie (%)' }]}
                />
            </Paper>

            {/* Survie par port d’embarquement */}
            <Paper variant="outlined" sx={{ p: 2,  }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Taux de survie par port</Typography>
                <PieChart
                height={260}
                series={[{ data: byEmbarked }]}
                />
            </Paper>

            {/* Scatter Fare ~ Age  -> A améliorer */}
            <Paper variant="outlined" sx={{ p: 2,  }}>
                <Typography variant="subtitle1" sx={{ mb: 1 }}>Âge vs Prix du billet (couleur = survie)</Typography>
                <ScatterChart
                height={300}
                series={[
                    { id: 'Survived', data: scatterData.yes },
                    { id: 'Non survivants', data: scatterData.no },
                ]}
                xAxis={[{ label: 'Âge' }]}
                yAxis={[{ label: 'Fare' }]}
                />
            </Paper>
        </Box>
    );
}
