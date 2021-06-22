import React from 'react';
import styled from 'styled-components';

const StyledMenuItem = styled.li`
    margin: 0 1em;
    font-size: 1.2em;
    a {
        color: whitesmoke;
        text-decoration: none;
        transition: color 0.2s ease;
    }

    :hover {
        a {
            color: lightskyblue;
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