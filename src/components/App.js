
import React, { Component, useState } from "react";
import '../styles/App.css';

// import "./styles.css";

// import React, { Component, useState } from "react";
// import '../styles/App.css';

function App() {
  var cityList = [
    { name: "Goa", country: "India" },
    { name: "Amsterdam", country: "Netherlands" },
    { name: "New York", country: "USA" },
    { name: "Darjeeling", country: "India" },
    { name: "Tokyo", country: "Japan" },
    { name: "Lonavala", country: "India" },
    { name: "Brandenburg Gate", country: "Germany" },
    { name: "Reichstag Building", country: "Germany" },
    { name: "Museum Island", country: "Germany" },
    { name: "Munnar", country: "India" },
    { name: "Leh Ladakh", country: "India" },
    { name: "Goa", country: "India" },
    { name: "Agra", country: "India" },
    { name: "Dalhousie", country: "India" },
    { name: "Coorg", country: "India" },
    { name: "Rome", country: "Italy" },
    { name: "Milan", country: "Italy" },
    { name: "Venice", country: "Italy" },
    { name: "Varanasai", country: "India" },
    { name: "Jaipur", country: "India" },
    { name: "The Hofburg", country: "Austria" },
    { name: "Belvedere Palace", country: "Austria" },
    { name: "St. Stephen Cathedral", country: "Austria" },
    { name: "Kahna National Park", country: "India" },
    { name: "Amritsar", country: "India" },
    { name: "Mussoorie", country: "India" },
    { name: "Mount Abu", country: "India" },
    { name: "Tirupati", country: "India" }
  ];

  var newList1 = cityList.filter(function (ele) {
    return ele.country === "India";
  });

  var newList2 = cityList.filter(function (ele) {
    return ele.country !== "India";
  });

  var combList = [...newList1, ...newList2];

  let unique = [...new Set(combList.map((item) => item.name))];
  /*var unique = []; 
  newList.map((elem) => {
    if (unique.indexOf(elem.name) === -1) {
      unique.push(elem.name);
    }
  }); */

//   let i = 1;
//   var result = unique.map(function (el) {
//     var o = Object.assign({}, el);
//     o.key = "location" + i;
//     i++;
//     return o;
//   });

//   console.log(cityList);
//   console.log(newList);
//   console.log(unique);
//   console.log(result);
  
  function showCity() {
    let new_city = cityList.filter((location) => {
      if (location.country === "India") return location;
    });
    let result = new_city.map((city, index) => (
      <li key={`location${index + 1}`}>{city.name}</li>
    ));
    return result;
  }

  return (
    <div id="main">
      <ol>
        {showCity()}
//         {unique.map((item, index) => (
//           <li key={`location${index + 1}`}>
//             {item[0]}
//             {item[1]}
//             {item[2]}
//             {item[3]}
//             {item[4]}
//             {item[5]}
//             {item[6]}
//             {item[7]}
//             {item[8]}
//             {item[9]}
//             {item[10]}
//             {item[11]}
//             {item[12]}
//             {item[13]}
//             {item[14]}
//             {item[15]}
//             {item[16]}
//             {item[17]}
//             {item[18]}
//             {item[19]}
//           </li>
          // <li key={item.key}>{item.map((i)=>({i}))}</li>
//         ))}
      </ol>
    </div>
  );
}

export default App;

