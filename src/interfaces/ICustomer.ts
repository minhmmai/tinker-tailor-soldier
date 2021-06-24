import { CustomerType } from "../components/Customer/CustomerType";
import { ICustomerTransaction } from "./ICustomerTransactions";

export interface ICustomer {
    customerID: string,
    customerType: CustomerType,
    purchases: ICustomerTransaction[]
}