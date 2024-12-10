import React, { useState } from 'react';
import { addLocation } from '../api';
import '../App.css';

const AddLocationPage = () => {
    const [info, setInfo] = useState({
        label: '',
        x_coord: '',
        y_coord: '',
        space: '',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await addLocation(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add location!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            label: '',
            x_coord: '',
            y_coord: '',
            space: '',
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add New Location</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="label" placeholder="label" value={info.label} onChange={enterText} required />
                <input type="number" className='procedure-field' name="x_coord" placeholder="x_coord" value={info.x_coord} onChange={enterText} required />
                <input type="number" className='procedure-field' name="y_coord" placeholder="y_coord" value={info.y_coord} onChange={enterText} required />
                <input type="number" className='procedure-field' name="space" placeholder="space" value={info.space} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddLocationPage;