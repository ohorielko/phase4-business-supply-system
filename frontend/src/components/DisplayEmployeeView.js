import React, {useEffect, useState} from 'react';
import { getEmployeeView } from '../api';
import {Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const DisplayEmployeeView = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const fetchEmployeeView = async () => {
            const {data} = await getEmployeeView();
            setEmployees(data);
        };
        fetchEmployeeView();
    }, [setEmployees]);

    return (
        <div style={{margin: '50px 50px 0 50px'}}>
        <Table>
            <TableHead>
                <TableRow style={{backgroundColor: '#10375C', borderCollapse: 'collapse'}}>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>username</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>tax_identifier</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>salary</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>hiring_date</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>experience_level</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>license_identifier</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>driving_experience</TableCell>
                    <TableCell style={{color: 'white', fontWeight: 'bold', fontSize: '18px'}}>manager_status</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map(employee => (
                    <TableRow key={employee.username}>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.username}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.tax_identifier}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.salary}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.hiring_date}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.experience_level}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.license_identifier}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.driving_experience}</TableCell>
                        <TableCell style={{fontSize: '16px', border: '1px solid black'}}>{employee.manager_status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
    );
};

export default DisplayEmployeeView;