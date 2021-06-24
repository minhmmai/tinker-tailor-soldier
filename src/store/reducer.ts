import { CustomerType } from "../components/Customer/CustomerType"
import { filterCustomerByType } from "../utils/utils";
import * as actionTypes from "./actionTypes"
import { CustomerAction, CustomerState } from './type';

const initialState: CustomerState = {
  customers: [],
  filteredCustomers: [],
  customerType: CustomerType.None
}

const reducer = (
  state: CustomerState = initialState,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case actionTypes.UPDATE_CUSTOMERS:
      return {
        ...state,
        customers: action.customers!
      }

    case actionTypes.SET_CUSTOMER_TYPE:
      return {
        ...state,
        customerType: action.customerType!
      }

    case actionTypes.FILTER_CUSTOMER_BY_TYPE:
      return {
        ...state,
        filteredCustomers: filterCustomerByType(state.customers, state.customerType)
      }

    default:
      return state;
  }
}

export default reducer;