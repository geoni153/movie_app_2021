import React from "react";

function Food({name, picture}) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
}

const foodILike = [
  {
    name: "chicken",
    image: "https://www.thespruceeats.com/thmb/PrfALhou8wczKx74j7cp_F6lvbs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/korean-bbq-chicken-wings-2118689-hero-01-5c92a63b46e0fb000144278f.jpg"
  },
  {
    name: "kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg"
  }
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
  <div> 
    {foodILike.map(renderFood)}
  </div>
  );
}

export default App;
