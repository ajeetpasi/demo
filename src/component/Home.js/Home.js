import React, { useEffect, useState } from "react";
import "./home.css";

const infoData = [
  {
    name: "Ajju ",
    age: 23,
    add: "Azamgarh",
  },
];

const Home = () => {
  let text = "Ajeet Saroj";
  const [visibletext, setTextAppear] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTextAppear((prevText) => prevText + text.charAt(prevText.length));
    }, 150);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="home">
      <div className="mainhome">
        <div className="nametag">
          <ul>
            {infoData.map((item) => {
              <li>{item}</li>;
            })}
          </ul>
        </div>
        <div className="imagetag">
          <img className="image" src="./ajju.jpg" alt="ajju" />
        </div>
      </div>
    </div>
  );
};

export default Home;
