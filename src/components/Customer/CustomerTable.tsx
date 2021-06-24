import React from 'react'
import { connect, useSelector } from 'react-redux';
import styled from 'styled-components';

import { ICustomer } from '../../interfaces/ICustomer';
import { CustomerState } from '../../store/type';
import Spinner from '../UI/Spinner';
import { CustomerType } from './CustomerType';

interface IProps {
    filteredCustomers: ICustomer[]
}

const StyledCustomerTable = styled.div`
    table {
        width: 50vw;
        tbody {
            tr {
            :hover {
                background-color: gray;
            }
        }
        }
        
    }
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
            <table>
                <thead>
                    <tr>
                        <td>Customer ID</td>
                        <td>Transactions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredCustomers.map((customer: ICustomer, index: number) => {
                            return (
                                <tr key={index}>
                                    <td>{customer.customerID}</td>
                                    <td>{customer.purchases.length}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
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