import ICard from "./ICard";

export interface ICustomerTransaction {
    purchaseID: number,
    DateOfPurchase: string,
    day: string,
    month: string,
    year: string,
    purchaseValue: number,
    card: ICard
}