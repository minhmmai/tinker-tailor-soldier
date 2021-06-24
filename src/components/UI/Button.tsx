import React from 'react';
import styled from 'styled-components';

import { Shadow } from '../../assets/mixins';

interface IProps {
    children: string
}

const StyledButton = styled.button`
    align-self: flex-end;
    border: .5em solid lightskyblue;
    border-radius: 1em 0;
    background-color: lightskyblue;
    cursor: pointer;
    padding: .5em 1em;
    transition: all 0.2 ease;

    :hover{
        background-color: whitesmoke;
        ${Shadow}
    }
`;

const Button = ({ children }: IProps) => {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
};

export default Button;