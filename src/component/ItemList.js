import React, { useState, useEffect } from 'react';
import Item from './Item';
import ItemCreateModal from './ItemCreate';
import { useDispatch } from 'react-redux';
import { getAllItems, createItem, updateItem, deleteItem, getAllItemCategories } from '../api';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCreateModalOpen, setCreateModalOpen] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItemsData();
  }, []);

  const fetchItemsData = async () => {
    try {
      const data = await getAllItems();
      setItems(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  const handleCreateItemClick = (state, action) => {
    setCreateModalOpen(true);
  };

  const handleCloseModal = () => {
    setCreateModalOpen(false);
  };

  const handleCreateItemSubmit = async (newItem) => {
    try {
      await createItem(newItem);
      fetchItemsData();
      setCreateModalOpen(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      await updateItem(updatedItem.id, updatedItem);
      fetchItemsData(); // Refresh the item list after updating an item
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId);
      fetchItemsData(); // Refresh the item list after deleting an item
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {loading && <p>Loading items...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
          <div className="row">
          {items.map((item) => (
            <Item
              key={item.item_id}
              {...item}
              onItemUpdate={handleUpdateItem}
              onItemDelete={handleDeleteItem}
            />
          ))}
          </div>
          <button type="button" onClick={handleCreateItemClick}>Create Item</button>
        </>
      )}

      {/* Create Item Modal */}
      {isCreateModalOpen && (
        <>
        <ItemCreateModal
          onClose={handleCloseModal}
          onSubmit={handleCreateItemSubmit}
          fetchCategories={getAllItemCategories}
        />
        </>
      )}
    </>
  );
};

export default ItemList;
