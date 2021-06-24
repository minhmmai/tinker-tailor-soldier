export interface ICustomer {
    customerID: string,
    purchases: Array<{
        purchaseID: number,
        DateOfPurchase: string,
        purchaseValue: number,
        cardName: string
    }>
}