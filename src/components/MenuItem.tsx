import React from 'react';
import styled from 'styled-components';

const StyledMenuItem = styled.li`
    font-size: 1.2em;
    a {
        color: whitesmoke;
        padding: .5em 1em;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    :hover {
        a {
            color: black;
            border-radius: 0 1em;
            background-color: lightskyblue;
        }
    }
`;

interface Props {
    label: string,
    destination: string
}

const MenuItem = ({label, destination}: Props) => {
    return (
        <StyledMenuItem>
            <a href={destination}>{label}</a>
        </StyledMenuItem>
    )
};

export default MenuItem;