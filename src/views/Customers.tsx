import React, { Dispatch, useEffect } from 'react';
import styled from 'styled-components';
import * as actions from '../store/actionCreators';
import transactions from '../data/tinker_tailor_soldier.json';
import { Heading2 } from '../assets/mixins';
import CustomerCards from '../components/Customer/Categories';
import CustomerTable from '../components/Customer/CustomerTable';
import { useDispatch } from 'react-redux';

const StyledCustomers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        ${Heading2}
    }
`;

const Customers = () => {
    
    const dispatch: Dispatch<any> = useDispatch();
    
    useEffect(() => {
        dispatch(actions.fetchAllCustomers(transactions))
    }, []);

    return (
        <StyledCustomers>
            <h2>Customers</h2>
            <p>Select a customer for more transactional details</p>
            <CustomerCards />
            <CustomerTable/>
        </StyledCustomers>
    )
};

export default Customers;