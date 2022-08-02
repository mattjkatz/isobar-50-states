import "./App.css";
import { db } from "./firebase-config";
import { uid } from "uid";
import { set, ref } from "firebase/database";
import { useState, useEffect } from "react";
import { onValue } from "firebase/database";

function App() {
  const [states, setStates] = useState([]);
  // Read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setStates([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((state) => {
          setStates((oldArray) => [...oldArray, state]);
        });
      }
    });
    console.log(states);
  }, []);
  return (
    <div className="App">
      {states.map((state) => (
        <h1>{state}</h1>
      ))}
    </div>
  );
}

export default App;
