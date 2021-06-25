import React from 'react';
import { ICustomer } from '../interfaces/ICustomer';
import { CustomerType } from '../components/Customer/CustomerType';
import * as cards from '../data/cards';
import { getTotalSpending, calculateDiscount } from './utils';

const newCustomer: ICustomer = {
  customerID: "N10",
  customerType: CustomerType.New,
  purchases: [
    {
      purchaseID: 9991,
      DateOfPurchase: "01/01/2020",
      day: "01",
      month: "01",
      year: "2020",
      purchaseValue: 6758,
      card: cards.soldier
    },
    {
      purchaseID: 9992,
      DateOfPurchase: "01/07/2020",
      day: "01",
      month: "07",
      year: "2020",
      purchaseValue: 2345,
      card: cards.tinker
    }
  ]
}

const existingCustomer: ICustomer = {
  customerID: "E10",
  customerType: CustomerType.Existing,
  purchases: [
    {
      purchaseID: 9991,
      DateOfPurchase: "01/09/2020",
      day: "01",
      month: "09",
      year: "2020",
      purchaseValue: 435,
      card: cards.soldier
    },
    {
      purchaseID: 9992,
      DateOfPurchase: "01/10/2020",
      day: "01",
      month: "10",
      year: "2020",
      purchaseValue: 675,
      card: cards.tinker
    }
  ]
}

const staffCustomer: ICustomer = {
  customerID: "S10",
  customerType: CustomerType.Staff,
  purchases: [    
    {
      purchaseID: 9992,
      DateOfPurchase: "31/08/2020",
      day: "31",
      month: "08",
      year: "2020",
      purchaseValue: 8965,
      card: cards.tinker
    },
    {
      purchaseID: 9992,
      DateOfPurchase: "17/05/2020",
      day: "17",
      month: "05",
      year: "2020",
      purchaseValue: 5432,
      card: cards.tailor
    },
    {
      purchaseID: 9991,
      DateOfPurchase: "23/06/2020",
      day: "23",
      month: "06",
      year: "2020",
      purchaseValue: 6531,
      card: cards.soldier
    }
  ]
}

test('Return correct total spending for all customers', () => {
  expect(getTotalSpending(newCustomer.purchases)).toBe(9103);
  expect(getTotalSpending(existingCustomer.purchases)).toBe(1110);
  expect(getTotalSpending(staffCustomer.purchases)).toBe(20928);
});
test('Return correct discount for all customers', () => {
  expect(+calculateDiscount(newCustomer).value.toFixed(2)).toBe(235.18);
  expect(+calculateDiscount(existingCustomer).value.toFixed(2)).toBe(0);
  expect(+calculateDiscount(staffCustomer).value.toFixed(2)).toBe(1322.66);
});
