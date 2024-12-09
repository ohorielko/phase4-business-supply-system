import React, { useState } from "react";
import { refuelVan } from "../api";
import "../App.css";

// -- [16] refuel_van()
// -- -----------------------------------------------------------------------------
// /* This stored procedure allows us to add more fuel to a van. The van can only
// be refueled if it's located at the delivery service's home base. */
// -- -----------------------------------------------------------------------------
// drop procedure if exists refuel_van;
// delimiter //
// create procedure refuel_van (in ip_id varchar(40), in ip_tag integer, in ip_more_fuel integer)
// sp_main: begin
//     if exists (
//         select 1
//         from delivery_services ds
//         join vans v on ds.home_base = v.located_at
//         where v.id = ip_id and v.tag = ip_tag
//     ) then
//         update vans
//         set fuel = fuel + ip_more_fuel
//         where id = ip_id and tag = ip_tag;
//     end if;
// end //
// delimiter ;
const RefuelVanPage = () => {
  const [info, setInfo] = useState({
    id: "",
    tag: "",
    more_fuel: "",
  });

  const enterText = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const submitProcedure = async (e) => {
    e.preventDefault();
    try {
      const response = await refuelVan(info);
      alert(response.data.message);
    } catch (error) {
      alert("Failed to refuel van");
    }
  };

  const cancelProcedure = () => {
    setInfo({
      id: "",
      tag: "",
      more_fuel: "",
    });
  };

  return (
    <div className="procedure-container">
      <h1 className="procedure-heading">Refuel Van</h1>
      <form onSubmit={submitProcedure} className="procedure-form">
        <input
          type="text"
          className="procedure-field"
          name="id"
          placeholder="Van ID"
          value={info.id}
          onChange={enterText}
          required
        />
        <input
          type="number"
          className="procedure-field"
          name="tag"
          placeholder="Tag"
          value={info.tag}
          onChange={enterText}
          required
        />
        <input
          type="number"
          className="procedure-field"
          name="more_fuel"
          placeholder="More Fuel"
          value={info.more_fuel}
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

export default RefuelVanPage;
