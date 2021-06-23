import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { CustomerType } from './CustomerType';
import { Heading5 } from '../../assets/mixins';
import bellIcon from '../../assets/icons/bell.svg';
import customerIcon from '../../assets/icons/customer.svg';
import staffIcon from '../../assets/icons/staff.svg';
import otherIcon from '../../assets/icons/other.svg';

interface Props {
    type?: CustomerType,
    link: string,
    exact?: boolean
}

const StyledCustomerCard = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
    text-decoration: none;
    width: auto;
    height: 5em;
    transition: all 0.2s ease;
    
    a{
        border-bottom: .5em solid black;
        text-decoration: none;
    }

    .customer-icon {
        width: 20%;
        height: auto;
    }

    h5 {
        ${Heading5}
    }

    .active {        
        border-bottom-color: lightskyblue;
    }

    :hover {        
        a {
            border-bottom-color: lightskyblue;
        }
    }
`;

const CustomerCard = ({ type = CustomerType.Other, link, exact }: Props) => {
    let imgSrc = otherIcon;
    let customerType = "Other";

    if (type === CustomerType.New) {
        imgSrc = bellIcon
        customerType = "New"
    } else if (type === CustomerType.Existing) {
        imgSrc = customerIcon
        customerType = "Existing"
    } else if (type === CustomerType.Staff) {
        imgSrc = staffIcon
        customerType = "Staff"
    }

    return (
        <StyledCustomerCard>
            <NavLink to={link} exact={exact}>
                <img className="customer-icon" src={imgSrc} alt="Customer type icon" />
                <h5>{customerType}</h5>
            </NavLink>
        </StyledCustomerCard>
    )
};

export default CustomerCard;