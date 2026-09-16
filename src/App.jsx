import TextDisplay from "./components/TextDisplay";
import Stats from "./components/Stats";
import { useTyping } from "./hooks/useTyping";
import { useTimer } from "./hooks/useTimer";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { PHRASES } from "./data/phrases";
import { useEffect } from "react";
import "./App.css";

export default function App() {
  const phrase = PHRASES[0];
  const { typed } = useTyping(phrase);

  const isComplete = typed.length === phrase.length;
  const { elapsed } = useTimer(typed.length > 0 && !isComplete);

  const correctChars = typed
    .split("")
    .filter((char, index) => char === phrase[index]).length;

  const accuracy =
    typed.length > 0 ? Math.round((correctChars / typed.length) * 100) : 100;

  const minutes = elapsed / 60;
  const wpm = minutes > 0 ? Math.round(typed.length / 5 / minutes) : 0;

  const [bestWpm, setBestWpm] = useLocalStorage("keyflow-best-wpm", 0);

  useEffect(() => {
    if (isComplete && wpm > bestWpm) {
      setBestWpm(wpm);
    }
  }, [isComplete, wpm, bestWpm, setBestWpm]);

  return (
    <main className="app">
      <h1 className="app__title">keyflow</h1>
      <p className="app__subtitle">type the words. build the muscle.</p>
      <TextDisplay phrase={phrase} typed={typed} />
      <Stats wpm={wpm} accuracy={accuracy} elapsed={elapsed} />
      <p className="app__best">best: {bestWpm} wpm</p>
    </main>
  );
}