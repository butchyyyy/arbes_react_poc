export class PaymentOrder {
  public id: number
  public bankAccountId: number
  public amount: number

  constructor(id: number, bankAccountId: number, amount: number) {
    this.id = id
    this.bankAccountId = bankAccountId
    this.amount = amount
  }
}
