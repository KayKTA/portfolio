import * as React from 'react';
import { Paper } from '@mui/material';

type Props = {
    src: string;
    height?: number;
    title?: string;
    injectCss?: string;
};

export default function NotebookEmbed({
    src,
    height = 1100,
    title = 'Notebook',
    injectCss,
}: Props) {
    const ref = React.useRef<HTMLIFrameElement>(null);

    const onLoad = React.useCallback(() => {
        const iframe = ref.current;
        if (!iframe) return;
        try {
            const doc = iframe.contentDocument || iframe.contentWindow?.document;
            if (!doc) return;

            if (injectCss) {
                const style = doc.createElement('style');
                style.type = 'text/css';
                style.appendChild(doc.createTextNode(injectCss));
                doc.head.appendChild(style);
            }
        } catch {
        }
    }, [injectCss]);

    return (
        <Paper variant="outlined" sx={{ p: 0, overflow: 'hidden' }}>
            <iframe
                ref={ref}
                title={title}
                src={src}
                style={{ width: '100%', height }}
                frameBorder={0}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                onLoad={onLoad}
            />
        </Paper>
    );
}
