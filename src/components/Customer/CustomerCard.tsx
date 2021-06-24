import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import * as actions from '../../store/actionCreators';
import { CustomerType } from './CustomerType';
import { Heading5 } from '../../assets/mixins';
import bellIcon from '../../assets/icons/bell.svg';
import customerIcon from '../../assets/icons/customer.svg';
import staffIcon from '../../assets/icons/staff.svg';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerState } from '../../store/type';
import { ICustomer } from '../../interfaces/ICustomer';

interface IProps {
    type: CustomerType,
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

const CustomerCard = ({ type, link, exact }: IProps) => {
    const customers: ICustomer[] = useSelector(
        (state: CustomerState) => state.customers
    )

    const customerType: CustomerType = useSelector(
        (state: CustomerState) => state.customerType
    )

    const dispatch: Dispatch<any> = useDispatch();

    let imgSrc, customerText: string = "";

    if (type === CustomerType.New) {
        imgSrc = bellIcon
        customerText = "New"
    } else if (type === CustomerType.Existing) {
        imgSrc = customerIcon
        customerText = "Existing"
    } else if (type === CustomerType.Staff) {
        imgSrc = staffIcon
        customerText = "Staff"
    }

    const changeCustomerType: any = (event: MouseEvent) => {
        event?.preventDefault();
        dispatch(actions.setCustomerType(type))
        dispatch(actions.filterCustomers(customers, customerType))
    }

    return (
        <StyledCustomerCard  onClick={changeCustomerType}>
            <NavLink to={link} exact={exact}>
                <img className="customer-icon" src={imgSrc} alt="Customer type icon" />
                <h5>{customerText}</h5>
            </NavLink>
        </StyledCustomerCard>
    )
};

export default CustomerCard;