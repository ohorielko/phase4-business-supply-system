import React, { useState } from 'react';
import { addService } from '../api'; // Ensure this API function is implemented in your API utility file
import '../App.css';

const AddServicePage = () => {
    const [info, setInfo] = useState({
        id: '',
        long_name: '',
        home_base: '',
        manager: ''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const submitProcedure = async (e) => {
        e.preventDefault();
        try {
            const response = await addService(info); // API call to add the service
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add a new service');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            id: '',
            long_name: '',
            home_base: '',
            manager: ''
        });
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Add New Service</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="id"
                    placeholder="Service ID"
                    value={info.id}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="long_name"
                    placeholder="Service Name"
                    value={info.long_name}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="home_base"
                    placeholder="Home Base"
                    value={info.home_base}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="manager"
                    placeholder="Manager Username"
                    value={info.manager}
                    onChange={enterText}
                    required
                />
                <div className="procedure-buttons">
                    <button className="cancel-button" type="button" onClick={cancelProcedure}>
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

export default AddServicePage;
