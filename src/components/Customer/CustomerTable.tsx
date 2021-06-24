import React from 'react'
import { connect, useSelector } from 'react-redux';
import styled from 'styled-components';

import Accordion from '../UI/Accordion';
import { ICustomer } from '../../interfaces/ICustomer';
import { CustomerState } from '../../store/type';
import Spinner from '../UI/Spinner';
import { CustomerType } from './CustomerType';

interface IProps {
    filteredCustomers: ICustomer[]
}

const StyledCustomerTable = styled.div`
`;

const CustomerTable = ({ filteredCustomers }: IProps) => {

    const customerType: CustomerType = useSelector(
        (state: CustomerState) => state.customerType
    )

    let table;

    if (customerType === CustomerType.None) {
        table = <p>Select a category to see customers</p>
    } else {
        table = (
            filteredCustomers.map((customer: ICustomer, index: number) => {
                return <Accordion key={index} customer={customer}/>
            })
        )
    }

    return (
        <StyledCustomerTable>
            {table}
        </StyledCustomerTable>
    )
};

const mapStateToProps = (state: CustomerState) => {
    return {
        filteredCustomers: state.filteredCustomers
    }
}

export default connect(mapStateToProps)(CustomerTable);