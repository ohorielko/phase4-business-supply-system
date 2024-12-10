import React, { useState } from 'react';
import { manageService } from '../api'; // Ensure you have this API function defined
import '../App.css';

const ManageServicePage = () => {
    const [info, setInfo] = useState({
        username: '',
        id: '',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const submitProcedure = async (e) => {
        e.preventDefault();
        try {
            const response = await manageService(info); // Make an API call
            alert(response.data.message);
        } catch (error) {
            alert('Failed to manage service. Please check your input.');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            id: '',
        });
    };

    return (
        <div className="procedure-container">
            <h1 className="procedure-heading">Manage Service</h1>
            <form onSubmit={submitProcedure} className="procedure-form">
                <input
                    type="text"
                    className="procedure-field"
                    name="username"
                    placeholder="Worker Username"
                    value={info.username}
                    onChange={enterText}
                    required
                />
                <input
                    type="text"
                    className="procedure-field"
                    name="id"
                    placeholder="Service ID"
                    value={info.id}
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

export default ManageServicePage;
