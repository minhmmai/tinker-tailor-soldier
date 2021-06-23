import React from 'react';
import styled from 'styled-components';

import { CustomerType } from './CustomerType';
import CustomerCard from './CustomerCard';

const StyledCustomerCards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CustomerCards = () => {

    return (
        <StyledCustomerCards>
            <CustomerCard type={CustomerType.New} link="/customers/new"/>
            <CustomerCard type={CustomerType.Existing}  link="/customers/existing"/>
            <CustomerCard type={CustomerType.Staff}  link="/customers/staff"/>
            <CustomerCard type={CustomerType.Other}  link="/customers/other"/>
        </StyledCustomerCards>
    )
};

export default CustomerCards;