import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';

const Home = () => (
    <div className='container'>
        <h1 style={{textAlign: 'center'}}>Business Supply System</h1>

        <div className='category'>
            <h2>Views</h2>
            <div className='category-buttons'>
                <Link to="/display-owner-view" className='button'>[22] display_owner_view</Link>
                <Link to="/employees-view" className='button'>[23] display_employee_view</Link>
                <Link to="/drivers-view" className='button'>[24] display_driver_view</Link>
                <Link to="/display_location_view" className='button'>[25] display_location_view</Link>
                <Link to="/display_product_view" className='button'>[26] display_product_view</Link>
                <Link to="/display_service_view" className='button'>[27] display_service_view</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Owners</h2>
            <div className='category-buttons'>
                <Link to="/add-owner" className='button'>[1] add_owner</Link>
                <Link to="/start-funding" className='button'>[10] start_funding</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Employees</h2>
            <div className='category-buttons'>
                <Link to="/add-employee" className='button'>[2] add_employee</Link>
                <Link to="/hire-employee" className='button'>[11] hire_employee</Link>
                <Link to="/fire-employee" className='button'>[12] fire_employee</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Drivers</h2>
            <div className='category-buttons'>
                <Link to="/add-driver-role" className='button'>[3] add_driver_role</Link>
                <Link to="/remove-driver-role" className='button'>[21] remove_driver_role</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Workers</h2>
            <div className='category-buttons'>
                <Link to="/add-worker-role" className='button'>[4] add_worker_role</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Products</h2>
            <div className='category-buttons'>
                <Link to="/add-product" className='button'>[5] add_product</Link>
                <Link to="/purchase-product" className='button'>[18] purchase_product</Link>
                <Link to="/remove-product" className='button'>[19] remove_product</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Vans</h2>
            <div className='category-buttons'>
                <Link to="/add-van" className='button'>[6] add_van</Link>
                <Link to="/takeover-van" className='button'>[14] takeover_van</Link>
                <Link to="/load-van" className='button'>[15] load_van</Link>
                <Link to="/refuel-van" className='button'>[16] refuel_van</Link>
                <Link to="/drive-van" className='button'>[17] drive_van</Link>
                <Link to="/remove-van" className='button'>[20] remove_van</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Businesses</h2>
            <div className='category-buttons'>
                <Link to="/add-business" className='button'>[7] add_business</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Delivery Services</h2>
            <div className='category-buttons'>
                <Link to="/add-service" className='button'>[8] add_service</Link>
                <Link to="/manage-service" className='button'>[13] manage_service</Link>
            </div>
        </div>

        <div className='category'>
            <h2>Locations</h2>
            <div className='category-buttons'>
                <Link to="/add-location" className='button'>[9] add_location</Link>
            </div>
        </div>
        
    </div>
);

export default Home;