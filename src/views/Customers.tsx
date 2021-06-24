import React, { Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Spinner from '../components/UI/Spinner';
import { CustomerType } from '../components/Customer/CustomerType';
import transactions from '../data/tinker_tailor_soldier.json';
import {initCustomers, filterCustomerByType} from '../utils/utils';
import { ICustomer } from '../interfaces/ICustomer';
import { Heading2 } from '../assets/mixins';
import CustomerCards from '../components/Customer/CustomerCards';
import CustomerTable from '../components/Customer/CustomerTable';

const StyledCustomers = styled.div`
    h2{
        ${Heading2}
    }
`;

const Customers = () => {
    const [customers, setCustomers] = useState<Array<ICustomer>>([]);
    const [customerType, setCustomerType] = useState<CustomerType>();

    useEffect(() => {
        setCustomers(initCustomers(transactions));
    }, []);

    return (
        <StyledCustomers>
            <h2>Customers</h2>
            <p>Select a customer for more transactional details</p>
            <CustomerCards/>
        </StyledCustomers>
    )
};

export default Customers;