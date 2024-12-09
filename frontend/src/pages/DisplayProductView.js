import React, {useEffect, useState} from 'react';
import { displayProductView } from '../api';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayProductViewPage = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchDriverView = async () => {
            const {data} = await displayProductView();
            setProducts(data);
        };
        fetchDriverView();
    }, [setProducts]);

    return (
        <div style={{margin: '50px 50px 0 50px'}}>
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: '#10375C', borderCollapse: 'collapse'}}>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>product_name</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>location</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>amount_available</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>low_price</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>high_price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map(product => (
                    <TableRow key={product.product_name}>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{product.product_name}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{product.location}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{product.amount_available}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{product.low_price}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{product.high_price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default DisplayProductViewPage;