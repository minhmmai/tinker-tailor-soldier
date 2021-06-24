import ICustomer, { ICustomer, ICustomer, ICustomer } from '../interfaces/ICustomer';
import { CustomerType } from '../components/Customer/CustomerType';

type CustomerState = {
    customers: ICustomer[],
    customerType: CustomerType
  }
  
  type CustomerAction = {
    type: string,
    customers?: ICustomer[],
    customerType?: CustomerType
  }
  
  type DispatchType = (args: CustomerAction) => CustomerAction