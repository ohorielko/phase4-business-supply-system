import React, {useEffect, useState} from 'react';
import { displayServiceView } from '../api';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayServiceViewPage = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchDriverView = async () => {
            const {data} = await displayServiceView();
            setServices(data);
        };
        fetchDriverView();
    }, [setServices]);

    return (
        <div style={{margin: '50px 50px 0 50px'}}>
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: '#10375C', borderCollapse: 'collapse'}}>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>id</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>long_name</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>home_base</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>manager</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>revenue</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>products_carried</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>cost_carried</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>weight_carried</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {services.map(service => (
                    <TableRow key={service.id}>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.id}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.long_name}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.home_base}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.manager}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.revenue}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.products_carried}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.cost_carried}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{service.weight_carried}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default DisplayServiceViewPage;