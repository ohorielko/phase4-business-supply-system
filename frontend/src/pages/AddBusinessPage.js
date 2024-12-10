import React, { useState } from 'react';
import { addBusiness } from '../api';
import '../App.css';

const AddBusinessPage = () => {
    const [info, setInfo] = useState({
        long_name: '',
        rating: '',
        spent: '',
        location: '',
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault();
        if (info.rating < 1 || info.rating > 5) {
            alert("Rating must be between 1 and 5.");
            return;
        }
        if (info.spent < 0) {
            alert("Spent amount must be a positive value.");
            return;
        }
        try {
            const response = await addBusiness(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to add business!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            long_name: '',
            rating: '',
            spent: '',
            location: '',
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Add New Business</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="long_name" placeholder="business name" value={info.long_name} onChange={enterText} required />
                <input type="number" className='procedure-field' name="rating" placeholder="rating" value={info.rating} onChange={enterText} required />
                <input type="number" className='procedure-field' name="spent" placeholder="spent" value={info.spent} onChange={enterText} required />
                <input type="text" className='procedure-field' name="location" placeholder="location" value={info.location} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddBusinessPage;