import { useState, useEffect } from "react";
import "./../App.css";
import firebase from "./../firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
import Card from "./../components/Card";

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
          stateList.push(state["@attributes"]);
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
          <div key={state.abbreviation}>
            <Card
              url={`https://www.50states.com/images/redesign/flags/${state.abbreviation.toLowerCase()}-largeflag.png`}
              name={state.name}
            />
          </div>

          // <div className="card text-center" key={state[0][1]}>
          //   <div className="overflow">
          //     <img
          //       src={`https://www.50states.com/images/redesign/flags/${state[0][1].toLowerCase()}-largeflag.png`}
          //       alt={state[0][1]}
          //     />
          //   </div>
          //   <div className="card-body text-dark">
          //     <h4>{state[4][1]}</h4>
          //     <a href="/" className="btn btn-outline-success">
          //       Go Anywhere
          //     </a>
          //   </div>
          // </div>
        );
      })}
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default States;
