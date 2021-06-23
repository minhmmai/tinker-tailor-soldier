import React from 'react';
import styled from 'styled-components';

import { Heading2 } from '../assets/mixins';
import CustomerCards from '../components/Customer/CustomerCards';

const StyledCustomers = styled.div`
    h2{
        ${Heading2}
    }
`;

const Customers = () => {
    return (
        <StyledCustomers>
            <h2>Customers</h2>
            <p>Select a customer for more transactional details</p>
            <CustomerCards/>
        </StyledCustomers>
    )
};

export default Customers;