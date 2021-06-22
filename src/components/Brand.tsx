import React from 'react';
import styled from 'styled-components';

import logo from '../logo.svg';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30vw;
    
    .logo {
        animation: App-logo-spin infinite 20s linear;
        height: 5em;
    }

    .title {
        color: whitesmoke;
    }

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Logo = () => {
    return (
        <StyledLogo>
            <img src={logo} className="logo" alt="React Bank logo" />
            <h1 className="title">React Bank</h1>
        </StyledLogo>
    )
};

export default Logo;