import { useState, useEffect } from "react";
import "./../App.css";
import firebase from "./../firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";

function States() {
  const [allStates, setState] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const db = getDatabase();
      const states = ref(db, "statesInfo/states");
      onValue(states, (snapshot) => {
        const data = snapshot.val();
        let stateList = [];
        data.forEach((state) => {
          stateList.push(Object.entries(state["@attributes"]));
        });
        setState(stateList);
        console.log(stateList, "This is the states array");
      });
    };

    getUsers();
  }, []);

  return allStates.length > 0 ? (
    <div className="States">
      {allStates.map((state) => {
        return (
          <div key={state[0][1]}>
            <h1>{state[4][1]}</h1>
            <h1>{state[1][1]}</h1>
          </div>
        );
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default States;
