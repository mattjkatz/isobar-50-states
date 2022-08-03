// import "./App.css";
// import States from "./pages/States";
// import Guess from "./pages/Guess";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

// // import { db } from "./firebase-config";
// // import { ref } from "firebase/database";
// // import { useState, useEffect } from "react";
// // import { onValue } from "firebase/database";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/states" element={<States />} />
//         <Route path="/guess" element={<Guess />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import "./App.css";
import firebase from "./firebase-config";
import { getDatabase, ref, onValue } from "firebase/database";
// import { query, getDocs } from "firebase/database";

function App() {
  const [allStates, setState] = useState([]);
  // const usersCollectionRef = query(db, "statesInfo");
  useEffect(() => {
    const getUsers = async () => {
      const db = getDatabase();
      const states = ref(db, "statesInfo/states");
      onValue(states, (snapshot) => {
        const data = snapshot.val();
        // setStates((allStates) => [...allStates, ...data]);
        let allStates = [];
        data.forEach((state) => {
          allStates.push(state["@attributes"]);
        });
        // setStates(states);
        console.log(allStates);
        // setStates(
        //   data.map((state) => {
        //     console.log(state["@attributes"]);
        //   })
        // );
        // console.log(data[0]["@attributes"]);
        this.setState({
          data: allStates,
        });
      });

      // states.on("value", (snapshot) => {
      //   let data = snapshot.val();
      //   setUsers(data);
      // });
      // const data = await getDocs(usersCollectionRef);
      // setUsers(states.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      // console.log(data);
    };

    getUsers();
  }, [allStates]);

  return allStates.length > 0 ? (
    <div className="App">
      <h1>Hello</h1>
      <p>{allStates}</p>
      {/* <p>{allStates}</p> */}
      {this.allStates.map((state) => {
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
