import React, { useState } from 'react';
import styled from 'styled-components';

import breakpoints from '../../assets/breakpoints';
import { ICustomer } from '../../interfaces/ICustomer';
import { ICustomerTransaction } from '../../interfaces/ICustomerTransactions';
import { getTotalSpending, calculateDiscount } from "../../utils/utils";

interface IProps {
    customer: ICustomer
}

const StyledAccordion = styled.div`
    background-color: lightskyblue;
    border-radius: 1em 0;
    .label-bar {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.5em;
        padding: 1em;
        .summary {
            font-size: .7em;
            text-align: left;
        }
    }

    .content {
        background-color: lightgray;
        border-radius: 0 0 1em 0;
        padding: 1em;

        .discount-details {
            text-align: left;
        }
    }

    .transaction {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .transaction-value {
            font-size: 2em;
        }
    }

    @media ${breakpoints.device.xs} {
        width: 100vw;
        .label-bar {
            flex-direction: column;
        }
    }
    @media ${breakpoints.device.sm} {
        width: 100vw;
    }
    @media ${breakpoints.device.md} {
        width: 75vw;
    }
    @media ${breakpoints.device.lg} {
        width: 50vw;
    }
`;

const Accordion = ({ customer }: IProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <StyledAccordion>
            <div className="label-bar" onClick={() => setIsActive(!isActive)}>
                <div>{customer.customerID}</div>
                <div className="summary">
                    <div>
                        <p>Total Spending: ${getTotalSpending(customer.purchases).toFixed(2)}</p>
                        <p>Total Discount: ${calculateDiscount(customer).value.toFixed(2)}</p>
                    </div>
                </div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {
                isActive && <div className="content">
                    {
                        customer.purchases.map((transaction: ICustomerTransaction, index: number) => {
                            return (
                                <div key={index} className="transaction">
                                    <div>
                                        <p>{index + 1}. {transaction.DateOfPurchase}</p>
                                    </div>
                                    <div className="transaction-value">
                                        <p>${transaction.purchaseValue.toFixed(2)}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="discount-details">
                        {
                            calculateDiscount(customer).details.map((detail, index) => {
                                return (
                                    <p key={index}>{detail}</p>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </StyledAccordion>
    )
};

export default Accordion;