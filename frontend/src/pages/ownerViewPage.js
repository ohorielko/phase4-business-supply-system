import React, { useState, useEffect } from "react";
import DisplayOwnerView from "../components/DisplayOwnerView";
import AddOwnerForm from "../components/AddOwnerForm";

const OwnerViewPage = () => {
  const [owners, setOwners] = useState([]);
  const [refresh, setRefresh] = useState(false); // To refresh the view after adding a new owner
  const [message, setMessage] = useState("");

  // Fetch owners from the backend
  const fetchOwners = async () => {
    try {
      const response = await fetch("/api/owners/view");
      const data = await response.json();
      setOwners(data);
    } catch (error) {
      setMessage("Failed to load owners: " + error.message);
    }
  };

  useEffect(() => {
    fetchOwners();
  }, [refresh]); // Refresh the view when a new owner is added

  return (
    <div>
      <h1>Business Supply System - Owners</h1>

      {/* Add Owner Form */}
      <AddOwnerForm
        onSuccess={() => {
          setMessage("Owner added successfully!");
          setRefresh(!refresh); // Toggle refresh to reload the owner view
        }}
        onError={(errorMessage) => setMessage(errorMessage)}
      />

      {message && <p>{message}</p>}

      {/* Owner View Table */}
      <DisplayOwnerView owners={owners} />
    </div>
  );
};

export default OwnerViewPage;
