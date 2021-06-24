import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledMenuItem = styled.li`
    font-size: 1.2em;
    a {
        color: whitesmoke;
        padding: .5em 1em;
        text-decoration: none;
        transition: all 0.2s ease;
    }

    .active {
        color: lightskyblue;
    }

    :hover {
        a {
            color: black;
            border-radius: 0 1em;
            background-color: lightskyblue;
        }
    }
`;

interface IProps {
    children: string,
    link: string,
    exact?: boolean
}

const MenuItem = ({ children, link, exact }: IProps) => {
    return (
        <StyledMenuItem>
            <NavLink
                exact={exact}
                to={link}>
                {children}
            </NavLink>
        </StyledMenuItem>
    )
};

export default MenuItem;