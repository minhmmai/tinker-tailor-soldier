import React from 'react';
import styled from 'styled-components';

import breakpoints from '../assets/breakpoints';
import Brand from './UI/Brand';
import Menu from './Menu';

const StyledNavigationBar = styled.div`
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: auto;
    width: 100vw;    

    @media ${breakpoints.device.xs} {
        flex-direction: column;
        justify-content: center;
        .card {
            width: 100vw;
        }
    }
    @media ${breakpoints.device.sm} {
        flex-direction: column;
        justify-content: center;
    }
    @media ${breakpoints.device.md} {
        flex-direction: row;
        justify-content: space-around;
    }
    @media ${breakpoints.device.lg} {
        flex-direction: row;
        justify-content: space-around;
    }
`;

const NavigationBar = () => {
    return (
        <StyledNavigationBar>
            <Brand />
            <Menu />
        </StyledNavigationBar>
    )
};

export default NavigationBar;