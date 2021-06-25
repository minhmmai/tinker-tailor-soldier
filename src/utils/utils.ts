import { ITransaction } from '../interfaces/ITransaction';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerType } from '../components/Customer/CustomerType';
import { ICustomerTransaction } from '../interfaces/ICustomerTransactions';
import * as cards from '../data/cards';
import ICard from '../interfaces/ICard';

// Transform transaction-based data to customer-based
export const initCustomers = (transactions: ITransaction[]) => {
    const customers: ICustomer[] = [];

    transactions.forEach((transaction: ITransaction) => {
        const tempCustomerId: string = transaction.customerID;
        const includedCustomerIndex: number = customers.findIndex((customer: ICustomer) => customer.customerID === tempCustomerId)
        const date: string[] = dateParser(transaction.DateOfPurchase);
        const customerType: CustomerType = getCustomerType(transaction.customerID);
        const card = getCardFromName(transaction.cardName)!;

        // Add new customer if they are not in the list OR just add new transaction to customer's purchases if they already are.
        if (includedCustomerIndex === -1) {
            let newCustomer: ICustomer = {
                customerID: tempCustomerId,
                customerType: customerType,
                purchases: [{
                    purchaseID: transaction.purchaseID,
                    DateOfPurchase: transaction.DateOfPurchase,
                    day: date[0],
                    month: date[1],
                    year: date[2],
                    purchaseValue: transaction.purchaseValue,
                    card: card
                }]
            }
            customers.push(newCustomer);
        } else {
            let newTransaction = {
                purchaseID: transaction.purchaseID,
                DateOfPurchase: transaction.DateOfPurchase,
                day: date[0],
                month: date[1],
                year: date[2],
                purchaseValue: transaction.purchaseValue,
                card: getCardFromName(transaction.cardName)!
            }
            customers[includedCustomerIndex].purchases.push(newTransaction)
        }
    })

    return customers;
};

const dateParser = (date: string) => {
    return date.split("/");
}

export const filterCustomerByType = (customers: ICustomer[], customerType: CustomerType) => {
    let filteredCustomers: ICustomer[] = []

    if (customerType !== CustomerType.None) {
        let firstChar = "";

        if (customerType === CustomerType.New) {
            firstChar = "N"
        } else if (customerType === CustomerType.Existing) {
            firstChar = "E"
        } else if (customerType === CustomerType.Staff) {
            firstChar = "S"
        }

        filteredCustomers = customers.filter((customer: ICustomer) => customer.customerID.toUpperCase().charAt(0) === firstChar)
    }

    return filteredCustomers;
}

export const calculateDiscount = (customer: ICustomer) => {
    const customerType = customer.customerType;
    const totalSpending = getTotalSpending(customer.purchases);

    let discount: number = 0;

    // 200 discount on annual payment, if total spending exceeds A$5000 for new customer
    if (customerType === CustomerType.New) {
        if (totalSpending > 5000) {
            discount = 200
        }
    // 1% discount if annual spending exceeds A$2000 for existing customer 
    } else if (customerType === CustomerType.Existing) {
        if (totalSpending > 2000) {
            discount = totalSpending / 100
        }
    // 2% discount on the interest of any card and full annual fee wave off for staff
    } else if (customerType === CustomerType.Staff) {
        // Add 2% discount to interest payment
        customer.purchases.forEach((transaction: ICustomerTransaction) => {
            discount += ((transaction.purchaseValue * transaction.card.interestRate) - (transaction.purchaseValue * (transaction.card.interestRate - 0.02)))

        })

        // Find unique cards from all customer transactions
        const uniqueCards: ICard[] = [];
        customer.purchases.forEach((transaction: ICustomerTransaction) => {
             if (uniqueCards.indexOf(transaction.card) === -1) {
                 uniqueCards.push(transaction.card)
             }
        })

        // Subtract annual fee on-time for each card
        uniqueCards.forEach((card: ICard) => {
            discount += card.annualFee
        })
    }

    customer.purchases.forEach((transaction: ICustomerTransaction) => {
        if (+transaction.month === 5 || +transaction.month === 6) {
            discount += (transaction.purchaseValue * 0.01)
        }else if (+transaction.month === 7 || +transaction.month === 8) {
            discount += (transaction.purchaseValue * 0.015)
        }
    })

    return discount
}

const getCustomerType = (customerID: string) => {
    const firstChar = customerID.toUpperCase().charAt(0);

    if (firstChar === "N") {
        return CustomerType.New
    } else if (firstChar === "E") {
        return CustomerType.Existing
    } else if (firstChar === "S") {
        return CustomerType.Staff
    } else {
        return CustomerType.None
    }
}

const getCardFromName = (cardName: string) => {
    if(cardName.toUpperCase() === "TINKER") {
        return cards.tinker
    }else if(cardName.toUpperCase() === "TAILOR") {
        return cards.tailor
    }else if(cardName.toUpperCase() === "SOLDIER") {
        return cards.soldier
    }
}

export const getTotalSpending = (transactions: ICustomerTransaction[]) => {
    return transactions.reduce((sum, current) => sum + current.purchaseValue, 0);
}