import React, { useState } from "react";
import { driveVan } from "../api"; // Assuming you have an API function to handle the drive van procedure

// -- [17] drive_van()
// -- -----------------------------------------------------------------------------
// /* This stored procedure allows us to move a single van to a new
// location (i.e., destination). This will also update the respective driver's
// experience and van's fuel. The main constraints on the van(s) being able to
// move to a new  location are fuel and space.  A van can only move to a destination
// if it has enough fuel to reach the destination and still move from the destination
// back to home base.  And a van can only move to a destination if there's enough
// space remaining at the destination. */
// -- -----------------------------------------------------------------------------
// create procedure drive_van (in ip_id varchar(40), in ip_tag integer, in ip_destination varchar(40))

const DriveVanPage = () => {
  const [info, setInfo] = useState({
    vanId: "",
    destination: "",
    vanTag: "", // Added vanTag to the state
  });

  const enterText = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const submitProcedure = async (e) => {
    e.preventDefault();
    try {
      const response = await driveVan(info);
      alert(response.data.message);
    } catch (error) {
      alert("Failed to drive van");
    }
  };

  const cancelProcedure = () => {
    setInfo({
      vanId: "",
      destination: "",
      vanTag: "", // Reset vanTag on cancel
    });
  };

  return (
    <div className="procedure-container">
      <h1 className="procedure-heading">Drive Van</h1>
      <form onSubmit={submitProcedure} className="procedure-form">
        <input
          type="text"
          className="procedure-field"
          name="vanId"
          placeholder="Van ID"
          value={info.vanId}
          onChange={enterText}
          required
        />
        <input
          type="text"
          className="procedure-field"
          name="vanTag"
          placeholder="Van Tag"
          value={info.vanTag}
          onChange={enterText}
          required
        />
        <input
          type="text"
          className="procedure-field"
          name="destination"
          placeholder="Destination"
          value={info.destination}
          onChange={enterText}
          required
        />

        <div className="procedure-buttons">
          <button
            className="cancel-button"
            type="button"
            onClick={cancelProcedure}
          >
            Cancel
          </button>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DriveVanPage;
