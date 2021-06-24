import React from 'react';
import styled from 'styled-components';

import Brand from './UI/Brand';
import Menu from './Menu';

const StyledNavigationBar = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: 100vw;
`;

const NavigationBar = () => {
    return (
        <StyledNavigationBar>
            <Brand/>
            <Menu/>
        </StyledNavigationBar>
    )
};

export default NavigationBar;