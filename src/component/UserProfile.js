// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { getUserById, getUserItems } from '../api';

const UserProfile = ({ userId }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [userItems, setUserItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user profile and items when the component mounts
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      // Fetch user profile details
      const profileData = await getUserById(userId);
      setUserProfile(profileData);

      // Fetch items posted by the user
      const itemsData = await getUserItems(userId);
      setUserItems(itemsData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {userProfile && (
        <div>
          <p>First Name: {userProfile.firstName}</p>
          <p>Last Name: {userProfile.lastName}</p>
        </div>
      )}

      {userItems.length > 0 && (
        <div>
          <h3>Items for Sale:</h3>
          <ul>
            {userItems.map((item) => (
              <li key={item.id}>{item.name}</li>
              // Display other item details as needed
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
