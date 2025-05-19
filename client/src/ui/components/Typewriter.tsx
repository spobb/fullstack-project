import { ReactElement, useEffect, useState } from "react";

export function Typewriter({ string, delay }: { string: string, delay: number }): ReactElement {
    const [text, setText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < string.length) {
            const timeout = setTimeout(() => {
                setText(prevText => prevText + string[index]);
                setIndex(prevIndex => prevIndex + 1);
            }, delay + ((Math.random() * 100) - 50));

            return () => clearTimeout(timeout);
        }
    }, [index, delay, string]);


    return <>{text}</>
}