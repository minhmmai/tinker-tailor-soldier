import React from 'react';
import styled from 'styled-components';

import logo from '../../logo.svg';

const StyledSpinner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);    
    
    .logo {
        animation: App-logo-spin infinite 2s linear;
        height: 5em;
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

const Spinner = () => {
    return (
        <StyledSpinner>
            <img src={logo} className="logo" alt="React Bank logo" />
        </StyledSpinner>
    )
};

export default Spinner;