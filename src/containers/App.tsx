import React from "react"

import {BankAccountListView} from "components/BankAccountListView"
import {BankAccount} from "data/BankAccount"

const bankAccounts: BankAccount[] = [
  new BankAccount(1, "15651651/0800"),
  new BankAccount(2, "54646764/0800"),
]

const App = () => <div><h1>List of your bank accounts:</h1><BankAccountListView bankAccounts={bankAccounts}/></div>

export default App
