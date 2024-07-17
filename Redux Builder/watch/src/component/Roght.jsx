import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';  // Import the CSS file

const Product = () => {
  const [watches, setWatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchWatches();
  }, []);

  const fetchWatches = () => {
    axios.get("http://localhost:8080/watches")
      .then((res) => {
        setWatches(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/watches/${id}`)
      .then(() => {
        fetchWatches();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleNavigate = (id) => {
    navigate(`/watch/${id}`);
  };

  return (
    <div className="product-container">
      <div className="grid-container">
        {watches.map(watch => (
          <div key={watch.id} className="watch-item" onClick={() => handleNavigate(watch.id)}>
            <img src={watch.image} alt={watch.model} className="watch-image" />
            <h2>Brand: {watch.brand}</h2>
            <h4>Model: {watch.model}</h4>
            <p>Year: {watch.year}</p>
            <button onClick={(e) => { e.stopPropagation(); handleDelete(watch.id); }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
