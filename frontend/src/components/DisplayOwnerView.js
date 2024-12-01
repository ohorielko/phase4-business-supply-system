import React, {useEffect, useState} from 'react';
import { getOwnerView } from '../api';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayOwnerView = () => {
    const [owners, setOwners] = useState([]);
    useEffect(() => {
        const fetchOwnerView = async () => {
            const {data} = await getOwnerView();
            setOwners(data);
        };
        fetchOwnerView();
    }, [setOwners]);

    return (
        <div style={{margin: '50px 50px 0 50px'}}>
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: '#10375C', borderCollapse: 'collapse'}}>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>username</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>first_name</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>last_name</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>address</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>num_businesses</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>num_places</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>highs</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>lows</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>debt</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {owners.map(owner => (
                    <TableRow key={owner.username}>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.username}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.first_name}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.last_name}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.address}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.num_businesses}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.num_places}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.highs}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.lows}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{owner.debt}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default DisplayOwnerView;