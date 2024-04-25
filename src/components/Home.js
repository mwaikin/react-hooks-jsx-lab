import React from "react";
import { name, city, image } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div>Home</div>;
  return (
    <div id="home">
      <h1 style={{color: "firebrick"}}> {name}is a web developer from{city}
      </h1>
    </div>
  )
}

export default Home;
