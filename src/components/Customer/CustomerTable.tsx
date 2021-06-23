import React from 'react'
import styled from 'styled-components';

const StyledCustomerTable = styled.table`

`;

const CustomerTable = () => {
    return (
        <StyledCustomerTable>
            <tr>
                <th>Customer No.</th>
                <th>No. Transactions</th>
            </tr>
        </StyledCustomerTable>
    )
};

export default CustomerTable;