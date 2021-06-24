import { ITransaction } from '../interfaces/ITransaction';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerType } from '../components/Customer/CustomerType';

// Transform transaction-based data to customer-based
export const initCustomers = (transactions: ITransaction[]) => {
    const customers: ICustomer[] = [];

    transactions.forEach((transaction: ITransaction) => {
        let tempCustomerId: string = transaction.customerID;
        let includedCustomerIndex: number = customers.findIndex((customer: ICustomer) => customer.customerID === tempCustomerId)

        // Add new customer if they are not in the list OR just add new transaction to customer's purchases if they already are.
        if (includedCustomerIndex === -1) {
            let newCustomer: ICustomer = {
                customerID: tempCustomerId,
                purchases: [{
                    purchaseID: transaction.purchaseID,
                    DateOfPurchase: transaction.DateOfPurchase,
                    purchaseValue: transaction.purchaseValue,
                    cardName: transaction.cardName
                }]
            }
            customers.push(newCustomer);
        } else {
            let newTransaction = {
                purchaseID: transaction.purchaseID,
                DateOfPurchase: transaction.DateOfPurchase,
                purchaseValue: transaction.purchaseValue,
                cardName: transaction.cardName
            }
            customers[includedCustomerIndex].purchases.push(newTransaction)
        }
    })

    return customers;
};

export const filterCustomerByType = (customers: ICustomer[], customerType: CustomerType) => {
    let startingLetter: string = "N";
    let filteredCustomers: ICustomer[] = [];

    if (customerType === CustomerType.Existing) {
        startingLetter = "E"
    } else if (customerType === CustomerType.Staff) {
        startingLetter = "S"
    }

    filteredCustomers = customers.filter((customer: ICustomer) => {
        customer.customerID.toUpperCase().startsWith(startingLetter);
    });

    return filteredCustomers;
}