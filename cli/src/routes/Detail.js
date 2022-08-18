// import logo from "./logo.svg";
import "./Detail.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { type2List, type2List_1 } from "../data/BugType";

function Detail() {
  const type1List = [
    "My Account",
    "Wallet and Transaction Issues",
    "Buying and Selling NFTs",
    "Report an Error Message",
    "Migration Issues",
    "Report Fradulent Activity",
  ];

  function type2List(type1) {
    if (type1 === type1List[0]) {
      return type2List_1;
    } else if (type1 === type1List[1]) {
      return type2List_2;
    } else if (type1 === type1List[2]) {
      return type2List_3;
    } else if (type1 === type1List[3]) {
      return type2List_4;
    } else if (type1 === type1List[4]) {
      return type2List_5;
    } else if (type1 === type1List[5]) {
      return type2List_6;
    }
  }

  const type2List_1 = [
    "Getting Started",
    "Log-in Issues",
    "Collection or Display Issues",
  ];
  const type2List_2 = [
    "Connecting and Using Wallets",
    "Transaction Issues",
    "Payments",
  ];
  const type2List_3 = ["Buying", "Selling"];
  // 이부분 하고 있음
  const type2List_4 = [
    "Oops Something Went Wrong",
    "Failed to Fetch",
    "There was problem completing your request",
    "404 Error",
    "1020 Error",
    "API Error 400",
  ];
  const type2List_5 = [
    "I cannot see my NFTs on Terra",
    "I cannot find my NFTs on Polygon",
  ];
  const type2List_6 = [
    "I was scammed",
    "I'm reporting a fake collection",
    "Someone is using my images without my permission",
    "I'm reporting explicit content",
  ];

  function initialState(type1) {
    if (type1 === type1List[0]) {
      return "Getting Started";
    } else if (type1 === "Wallet and Transaction Issues") {
      return "Connecting and Using Wallets";
    } else if (type1 === type1List[2]) {
      return "Buying";
    } else if (type1 === type1List[3]) {
      return "Oops Something Went Wrong";
    } else if (type1 === type1List[4]) {
      return "I cannot see my NFTs on Terra";
    } else if (type1 === type1List[5]) {
      return "I was scammed";
    }
  }
  const [type1, setType1] = useState("My Account");
  const [type2, setType2] = useState("Getting Started");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSelect1 = (e) => {
    setType1(e.target.value);
    setType2(initialState(e.target.value));
  };

  const handleSelect2 = (e) => {
    setType2(e.target.value);
  };

  function submit() {
    console.log("error submitted " + subject);
    fetch("http://localhost:8000/submit", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type1: type1,
        type2: type2,
        subject: subject,
        description: description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }
  return (
    <div className="Detail">
      <div style={{ maxWidth: "500px", margin: "0 auto" }}>
        <h1>Bug Report</h1>
        <h5>
          We apologize for any inconvenience this may have caused. <br />
          In order to identify the case at a glance, please give us as many
          details as possible. This should include troubleshooting steps you've
          already taken, as well as screenshots of any error messages. <br />
          We will try our best to resolve your situation ASAP.
        </h5>
        <p>Error Type1</p>
        <select onChange={handleSelect1} value={type1}>
          {type1List.map((item) => (
            <option
              value={item}
              key={item}
              defaultValue={type1List[0]}
              id="type1"
            >
              {item}
            </option>
          ))}
        </select>
        <p>Error Type2</p>
        {/* type1에 따라 분류한다. */}

        {/* <input
          type="text"
          id="type2"
          onChange={(e) => setType2(e.target.value)}
        /> */}
        {/* <select onChange={handleSelect2} value={type2}>
          {type2List(type1).map((item) => (
            <option value={item} key={item} id="type2">
              {item}
            </option>
          ))}
        </select> */}
        {type1 === "My Account" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Wallet and Transaction Issues" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Buying and Selling NFTs" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Report an Error Message" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Migration Issues" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Report Fradulent Activity" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : type1 === "Buying and Selling NFTs" ? (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        ) : (
          <select onChange={handleSelect2} value={type2}>
            {type2List(type1).map((item) => (
              <option value={item} key={item} id="type2">
                {item}
              </option>
            ))}
          </select>
        )}
        <p>Subject</p>
        <input
          type="text"
          id="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <p>Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          rows={10}
          cols={25}
        />
        <div>
          <button onClick={submit}>
            <Link to="/submit">Submit</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

// 아래부터 맞다.
// const Options = [
//   { value: "My Account", name: "My Account" },
//   {
//     value: "Wallet and Transaction Issues",
//     name: "Wallet and Transaction Issues",
//   },
//   { value: "Buying and Selling NFTs", name: "Buying and Selling NFTs" },
//   { value: "Report an Error Message", name: "Report an Error Message" },
//   { value: "Migration Issues", name: "Migration Issues" },
//   { value: "Report Fraudulent Activity", name: "Report Fradulent Activity" },
// ];
// const SelectBox = (props) => {
//   return (
//     <select>
//       {props.options.map((option) => (
//         <option key={option.value} value={option.value}>
//           {option.name}
//         </option>
//       ))}
//     </select>
//   );
// };

// function Detail() {
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
//           <button onClick={submit}>
//             <Link to="/submit">Submit</Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Detail;
