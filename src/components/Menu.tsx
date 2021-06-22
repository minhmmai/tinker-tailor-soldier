import React from 'react';
import styled from 'styled-components';

import MenuItem from './MenuItem';

const StyledMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    width: 30vw;
`;

const Menu = () => {
    return (
        <StyledMenu>
            <MenuItem label="Home" destination="/"/>
            <MenuItem label="Customers" destination="/customers"/>
        </StyledMenu>
    )
};

export default Menu;