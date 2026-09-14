import { useState, useEffect } from "react";

export function useTyping(phrase){
    const[typed, setTyped] = useState("");

    useEffect(() => {
        function handleKeyDown(event){
            if(event.key==="Backspace"){
                setTyped((current) => current.slice(0, -1));
                return;
            }

            if (event.key.length!==1||event.metaKey||event.ctrlKey){
                return;
            }

            setTyped((current) => {
                if (current.length>=phrase.length) return current;
                return current + event.key;
            });
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [phrase]);

    return {typed};
}