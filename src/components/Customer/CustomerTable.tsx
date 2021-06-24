import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import * as actions from '../../store/actionCreators';
import { ICustomer } from '../../interfaces/ICustomer';
import { CustomerState } from '../../store/type';
import { CustomerType } from './CustomerType';

const StyledCustomerTable = styled.div`
    height: 5em;
    width: 5em;
    background-color: black;
`;

const CustomerTable = () => {
    const filteredCustomers: ICustomer[] = useSelector(
        (state: CustomerState) => state.filteredCustomers
    );

    return (
        <StyledCustomerTable>
            {filteredCustomers.toString()}
        </StyledCustomerTable>
    )
};

export default CustomerTable;