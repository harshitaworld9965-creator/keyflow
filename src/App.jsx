import TextDisplay from "./components/TextDisplay";
import { useTyping } from "./hooks/useTyping";
import { PHRASES } from "./data/phrases";
import "./App.css";

export default function App() {
  const phrase = PHRASES[0];
  const { typed } = useTyping(phrase);

  return (
    <main className="app">
      <h1 className="app__title">keyflow</h1>
      <p className="app__subtitle">type the words. build the muscle.</p>
      <TextDisplay phrase={phrase} typed={typed} />
    </main>
  );
}