import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WatchDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [watch, setWatch] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/watches/${id}`)
      .then((res) => {
        setWatch(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!watch) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{border:"2px solid black", width:"50%", margin:"auto", marginTop:"15px"}}>
      <h1 style={{textAlign:"center", color:"darkslateblue", marginTop:"20px"}}>Watch Details</h1>
      <div className='imagealign'>
      <img src={watch.image} alt={watch.model} height={300} width={300} />
      </div>
      <div style={{textAlign:"center"}}>
      <h2>Brand: {watch.brand}</h2>
      <h4>Model: {watch.model}</h4>
      <p>Year: {watch.year}</p>
      <button onClick={() => navigate('/')}>Back</button>
      </div>
    </div>
  );
};

export default WatchDetail;
