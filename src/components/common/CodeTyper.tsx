import { useEffect, useState, useRef } from "react";

type Props = {
    code: string;
    baseSpeed?: number;       // ms par caractère
    loop?: boolean;
    cursor?: boolean;
};

export default function CodeTyper({
    code,
    baseSpeed = 35,
    loop = true,
    cursor = true,
}: Props) {
    const [i, setI] = useState(0);
    const rafRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const chars = code.split("");

    useEffect(() => {
        let last = performance.now();

        const step = (now: number) => {
            const dt = now - last;
            const currentChar = chars[i] || "";
            const delay = currentChar === ";" ? 300 : currentChar === "\n" ? 700 : baseSpeed;

            if (dt >= delay) {
                last = now;
                setI((prev) => {
                    if (prev < chars.length) return prev + 1;
                    if (!loop) return prev;
                    // reset après une pause
                    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
                    timeoutRef.current = window.setTimeout(() => setI(0), 1200);
                    return prev;
                });
            }
            rafRef.current = requestAnimationFrame(step);
        };

        rafRef.current = requestAnimationFrame(step);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [chars, baseSpeed, loop, i]);

    const visible = chars.slice(0, i).join("");
    const showCursor = cursor && (loop || i < chars.length);

    return (
        <code
            style={{
                whiteSpace: "pre-wrap",
                fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                lineHeight: 1.6,
            }}
        >
            {visible}
            {showCursor ? <span className="typer-caret">▌</span> : null}
            <style>{`
                .typer-caret {
                display: inline-block;
                margin-left: 2px;
                animation: caretBlink 1s steps(1) infinite;
                }
                @keyframes caretBlink {
                0%, 50% { opacity: 1; }
                50.01%, 100% { opacity: 0; }
                }
            `}</style>
        </code>
    );
}
