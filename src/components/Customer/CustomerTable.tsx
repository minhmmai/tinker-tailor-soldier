import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

import { ICustomer } from '../../interfaces/ICustomer';

const StyledCustomerTable = styled.div`

`;

const CustomerTable = () => {
    let table;

    // if (customers.length > 0) {
    //     table = (
    //         <table>
    //             <tr>
    //                 <th>Customer No.</th>
    //                 <th>No. Transactions</th>
    //             </tr>
    //             {
    //                 customers.forEach((entry: ICustomer) => {
    //                     return (
    //                         <tr>
    //                             <td>{entry.customerID.toUpperCase()}</td>
    //                             <td>{entry.purchases.length}</td>
    //                         </tr>
    //                     )
    //                 })
    //             }
    //         </table>
    //     )
    // }

    return (
        <StyledCustomerTable>
            {table}
        </StyledCustomerTable>
    )
};

export default CustomerTable;