import React, { useState } from 'react';
import { takeoverVan } from '../api';
import '../App.css';

const TakeoverVanPage = () => {
    const[info, setInfo] = useState({
        username: '',
        id:'',
        tag:''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await takeoverVan(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to takeover van!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            username: '',
            id:'',
            tag:''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Takeover Van</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="username" placeholder="username" value={info.username} onChange={enterText} required />
                <input type="text" className='procedure-field' name="id" placeholder="id" value={info.id} onChange={enterText} required />
                <input type="number" className='procedure-field' name="tag" placeholder="tag" value={info.tag} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default TakeoverVanPage;