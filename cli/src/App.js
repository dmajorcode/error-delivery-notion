import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Detail from "./routes/Detail";
import Base from "./routes/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const [type1, setType1] = useState("");
//   const [type2, setType2] = useState("");
//   const [subject, setSubject] = useState("");
//   const [description, setDescription] = useState("");

//   function submit() {
//     console.log("error submitted " + subject);
//     fetch("http://localhost:8000/submit", {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         type1: type1,
//         type2: type2,
//         subject: subject,
//         description: description,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Success", data);
//       })
//       .catch((error) => {
//         console.log("Error: ", error);
//       });
//   }
//   return (
//     <div className="App">
//       <div style={{ maxWidth: "500px", margin: "0 auto" }}>
//         <h1>Bug Report</h1>
//         <h5>
//           We apologize for any inconvenience this may have caused. In order to
//           identify the case at a glance, please give us as many details as
//           possible. This should include troubleshooting steps you've already
//           taken, as well as screenshots of any error messages. We will try our
//           best to resolve your situation ASAP.
//         </h5>
//         <p>Error Type1</p>
//         <input
//           type="text"
//           id="type1"
//           onChange={(e) => setType1(e.target.value)}
//         />
//         <p>Error Type2</p>
//         <input
//           type="text"
//           id="type2"
//           onChange={(e) => setType2(e.target.value)}
//         />
//         <p>Subject</p>
//         <input
//           type="text"
//           id="subject"
//           onChange={(e) => setSubject(e.target.value)}
//         />
//         <p>Description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           rows={10}
//           cols={25}
//         />
//         <div>
//           <button onClick={submit}>Submit</button>
//         </div>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/submit" element={<Base />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
