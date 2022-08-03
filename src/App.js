import "./App.css";
import States from "./States";
import Guess from "./Guess";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar";
// import { db } from "./firebase-config";
// import { ref } from "firebase/database";
// import { useState, useEffect } from "react";
// import { onValue } from "firebase/database";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/states" element={<States />} />
        <Route path="/guess" element={<Guess />} />
      </Routes>
    </div>
  );
}

export default App;

// function App() {
//   const [states, setStates] = useState([]);
//   // Read
//   useEffect(() => {
//     onValue(ref(db), (snapshot) => {
//       setStates([]);
//       const data = snapshot.val();
//       if (data !== null) {
//         Object.values(data).map((state) => {
//           setStates((oldArray) => [...oldArray, state]);
//         });
//       }
//     });
//     console.log(states);
//   }, []);
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }
