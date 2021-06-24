import { CustomerType } from "../components/Customer/CustomerType"
import { ICustomer } from "../interfaces/ICustomer"
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
      const newCustomers: ICustomer[] = action.customers!
      return {
        ...state,
        customers: state.customers.concat(newCustomers)
      }

    case actionTypes.SET_CUSTOMER_TYPE:
      return {
        ...state,
        customerType: action.customerType!
      }  

      case actionTypes.FILTER_CUSTOMER_BY_TYPE:
        return {
          ...state,
          filteredCustomers: action.filteredCustomers!
        }  
  
    default:
      return state;
  }
}

export default reducer;