import React, { useState, useEffect } from 'react';
import {getAllItemCategories, getItemCategoryById} from '../api';


const ItemCreateModal = ({ onClose, onSubmit }) => {
  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    price: 0,
    image: '',
    category_id: 1,
    user_id: 1,
  });

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // useEffect(() => {
  //   // Fetch item categories when the component mounts
  //   getItemCategoryById()
  //     .then((data) => setCategories(data))
  //     .catch((error) => console.error('Error fetching categories:', error))
  //     .finally(() => setLoadingCategories(false));
  // }, [getItemCategoryById]);

  useEffect(() => {
    // Fetch item categories when the component mounts
    const fetchCategories = async () => {
      try {
        const data = await getAllItemCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoadingCategories(false);
      }
    };
  
    fetchCategories();
  }, []);
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Call the onSubmit prop with the new item
    onSubmit(newItem);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create New Item</h2>
        <form>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={newItem.title}
            onChange={handleChange}
          />

        <label htmlFor="description">Desciption:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={newItem.description}
            onChange={handleChange}
          />

          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={newItem.price}
            onChange={handleChange}
          />

          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={newItem.image}
            onChange={handleChange}
          />

        <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={newItem.category_id}
            onChange={handleChange}
          >
            <option value="" disabled>Select a category</option>
            {loadingCategories ? (
              <option value="" disabled>Loading categories...</option>
            ) : (
              categories.map((category) => (
                <option key={category.category_id} value={category.category_id}>
                {category.category_name}
              </option>
              
              ))
            )}
          </select>

          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemCreateModal;
