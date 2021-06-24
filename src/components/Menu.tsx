import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    list-style: none;
`;

const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem exact link="/">Home</MenuItem>
            <MenuItem link="/customers">Customers</MenuItem>
        </StyledMenu>
    )
};

export default Menu;