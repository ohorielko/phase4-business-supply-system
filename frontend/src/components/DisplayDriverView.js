import React, {useEffect, useState} from 'react';
import { getDriverView } from '../api';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayDriverView = () => {
    const [drivers, setDrivers] = useState([]);
    useEffect(() => {
        const fetchDriverView = async () => {
            const {data} = await getDriverView();
            setDrivers(data);
        };
        fetchDriverView();
    }, [setDrivers]);

    return (
        <div style={{margin: '50px 50px 0 50px'}}>
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: '#10375C', borderCollapse: 'collapse'}}>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>username</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>licenseID</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>successful_trips</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>number_of_vans</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {drivers.map(driver => (
                    <TableRow key={driver.username}>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{driver.username}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{driver.licenseID}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{driver.successful_trips}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{driver.number_of_vans}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default DisplayDriverView;