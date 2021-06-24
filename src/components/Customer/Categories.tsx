import React from 'react';
import styled from 'styled-components';

import breakpoints from '../../assets/breakpoints';
import { CustomerType } from './CustomerType';
import CustomerCard from './Category';

const StyledCategories = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${breakpoints.device.xs} {
        flex-direction: column;
    }
`;

const Categories = () => {

    return (
        <StyledCategories>
            <CustomerCard type={CustomerType.New} link="/customers/new"/>
            <CustomerCard type={CustomerType.Existing}  link="/customers/existing"/>
            <CustomerCard type={CustomerType.Staff}  link="/customers/staff"/>
        </StyledCategories>
    )
};

export default Categories;