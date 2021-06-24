import React from 'react';
import styled from 'styled-components';

import logo from '../../logo.svg';

const StyledBrand = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
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

const Brand = () => {
    return (
        <StyledBrand>
            <img src={logo} className="logo" alt="React Bank logo" />
            <h1 className="title">React Bank</h1>
        </StyledBrand>
    )
};

export default Brand;