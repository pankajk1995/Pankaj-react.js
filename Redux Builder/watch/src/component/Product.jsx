import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
  // Import the CSS file

const Product = () => {
  const [watches, setWatches] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ brand: '', model: '', year: '', image: '' });
   const navigate=useNavigate()

  useEffect(() => {
    fetchWatches();
  }, []);

  const fetchWatches = () => {
    axios.get("http://localhost:8080/watches")
      .then((res) => {
        setWatches(res.data);
        // navigate('/');
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

  const handleEdit = (id) => {
    const watch = watches.find(w => w.id === id);
    setEditId(id);
    setEditData(watch);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/watches/${editId}`, editData)
      .then(() => {
        setEditId(null);
        setEditData({ brand: '', model: '', year: '', image: '' });
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
            <img src={watch.image} alt={watch.model} className="watch-image" height={200} width={200}/>
            <h2>Brand: {watch.brand}</h2>
            <h4>Model: {watch.model}</h4>
            <p>Year: {watch.year}</p>
            <button onClick={() => handleDelete(watch.id)}>Delete</button>
            <button onClick={() => handleEdit(watch.id)}>Edit</button>
          </div>
        ))}
      </div>
      {editId && (
        <form onSubmit={handleEditSubmit} className="edit-form">
          <input
            type="text"
            name="brand"
            value={editData.brand}
            onChange={handleEditChange}
            placeholder="Brand"
          />
          <input
            type="text"
            name="model"
            value={editData.model}
            onChange={handleEditChange}
            placeholder="Model"
          />
          <input
            type="number"
            name="year"
            value={editData.year}
            onChange={handleEditChange}
            placeholder="Year"
          />
          <input
            type="text"
            name="image"
            value={editData.image}
            onChange={handleEditChange}
            placeholder="Image URL"
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Product;
