import React, { useState } from 'react';
import { loadVan } from '../api';
import '../App.css';

const LoadVanPage = () => {
    const[info, setInfo] = useState({
        id:'',
        tag:'',
        barcode:'',
        more_packages:'',
        price:''
    });

    const enterText = (e) => {
        const { name, value } = e.target;
        setInfo((prevInfo) => ({...prevInfo, [name]: value, }));
    }

    const submitProcedure = async (e) => {
        e.preventDefault()
        try {
            const response = await loadVan(info);
            alert(response.data.message);
        } catch (error) {
            alert('Failed to load van!');
        }
    };

    const cancelProcedure = () => {
        setInfo({
            id:'',
            tag:'',
            barcode:'',
            more_packages:'',
            price:''
        });
    };

    return (
        <div className='procedure-container'>
            <h1 className='procedure-heading'>Load Van</h1>
            <form onSubmit={submitProcedure} className='procedure-form'>
                <input type="text" className='procedure-field' name="id" placeholder="id" value={info.id} onChange={enterText} required />
                <input type="number" className='procedure-field' name="tag" placeholder="tag" value={info.tag} onChange={enterText} required />
                <input type="text" className='procedure-field' name="barcode" placeholder="barcode" value={info.barcode} onChange={enterText} required />
                <input type="number" className='procedure-field' name="more_packages" placeholder="more_packages" value={info.more_packages} onChange={enterText} required />
                <input type="number" className='procedure-field' name="price" placeholder="price" value={info.price} onChange={enterText} required />
                <div className='procedure-buttons'>
                    <button className='cancel-button' type='button' onClick={cancelProcedure} >Cancel</button>
                    <button className='submit-button' type='submit'>Submit</button>
                </div>
                
            </form>
        </div>
    );
};

export default LoadVanPage;