import { useState, useEffect } from "react";
import "./App.css";
import firebase from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";

function App() {
  const [allStates, setState] = useState(true);
  useEffect(() => {
    console.log("allStates", allStates);
    const getUsers = async () => {
      const db = getDatabase();
      const states = ref(db, "statesInfo/states");
      onValue(states, (snapshot) => {
        const data = snapshot.val();
        let allStates = [];
        data.forEach((state) => {
          allStates.push(state["@attributes"]);
        });
        console.log(allStates);
      });
    };

    getUsers();
  }, [allStates]);

  return allStates.length > 0 ? (
    <div className="App">
      <h1>Hello</h1>
      <p>{allStates}</p>
      {allStates.map((state) => {
        return (
          <div key={state.abbreviation}>
            <h1>{state.abbreviation}</h1>
            <h1>{state.capital}</h1>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default App;
