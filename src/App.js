import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "chicken",
    image: "https://www.thespruceeats.com/thmb/PrfALhou8wczKx74j7cp_F6lvbs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/korean-bbq-chicken-wings-2118689-hero-01-5c92a63b46e0fb000144278f.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "kimchi",
    image: "https://www.koreanbapsang.com/wp-content/uploads/2019/11/DSC_0831.jpg",
    rating: 3.5
  }
];

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
  <div> 
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
  );
}

export default App;
