import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const Home = () => (
    <div className='container'>
        <h1 style={{textAlign: 'center'}}>Business Supply System</h1>

        <div className='category'>
            <h2>Views</h2>
            <div className='category-buttons'>
                <Link to="/display-owner-view" className='button'>display_owner_view</Link>
                <Link to="/employees-view" className='button'>display_employee_view</Link>
                <Link to="/drivers-view" className='button'>display_driver_view</Link>
                <Link to="/display_location_view" className='button'>display_location_view</Link>
                <Link to="/display_product_view" className='button'>display_product_view</Link>
                <Link to="/display_service_view" className='button'>display_service_view</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Owners</h2>
            <div className='category-buttons'>
                <Link to="/add-owner" className='button'>add_owner</Link>
            </div>
        </div>
        
    </div>
);

export default Home;