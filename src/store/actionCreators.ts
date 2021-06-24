import * as actionTypes from "./actionTypes"
import { ITransaction } from '../interfaces/ITransaction';
import { initCustomers } from '../utils/utils';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerAction, DispatchType } from "./type";
import { CustomerType } from "../components/Customer/CustomerType";

export const fetchCustomers = (customers: ICustomer[]) => {
    const action: CustomerAction = {
        type: actionTypes.FETCH_CUSTOMERS,
        customers: customers
    };
    return action
}

export const setCustomerType = (type: CustomerType) => {
    const action: CustomerAction = {
        type: actionTypes.SET_CUSTOMER_TYPE,
        customerType: type
    };
    return action
}

export const fetchAllCustomers = (transactionsData: ITransaction[]) => {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            const newCustomers: ICustomer[] = initCustomers(transactionsData);
            dispatch(fetchCustomers(newCustomers));
        }, 1000)
    }
}