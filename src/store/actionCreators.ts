import * as actionTypes from "./actionTypes"
import { ITransaction } from '../interfaces/ITransaction';
import { initCustomers } from '../utils/utils';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerAction, DispatchType } from "./type";
import { CustomerType } from "../components/Customer/CustomerType";

export const fetchCustomersSuccess = (customers: ICustomer[]) => {
    const action: CustomerAction = {
        type: actionTypes.UPDATE_CUSTOMERS,
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
            dispatch(fetchCustomersSuccess(newCustomers));
        }, 1000)
    }
}

export const filterCustomerByType = () => {
    const action: CustomerAction = {
        type: actionTypes.FILTER_CUSTOMER_BY_TYPE
    };
    return action
}