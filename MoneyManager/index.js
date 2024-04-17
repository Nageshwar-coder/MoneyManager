import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].displayText,
    amountList: [],
  }

  onChangeTitleInput = event => {
    this.setState({
      titleInput: event.target.value,
    })
  }

  onChangeAmountInput = event => {
    this.setState({
      amountInput: event.target.value,
    })
  }

  onChangeTypeInput = event => {
    this.setState({
      typeInput: event.target.value,
    })
  }

  onAddFormDetails = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    if (titleInput !== '' && amountInput !== '') {
      const newListItem = {
        id: v4(),
        titleInput,
        amountInput,
        typeInput,
      }
      this.setState(prevState => ({
        amountList: [...prevState.amountList, newListItem],
        titleInput: '',
        amountInput: '',
        typeInput: transactionTypeOptions[0].displayText,
      }))
    } else {
      alert('Please Fill all the Required Fields!')
    }
  }

  claculateIncome = () => {
    const {amountList} = this.state
    let income = 0
    amountList.forEach(eachItem => {
      if (eachItem.typeInput === transactionTypeOptions[0].displayText) {
        income += parseInt(eachItem.amountInput)
      }
    })
    return income
  }

  calculateExpenses = () => {
    const {amountList} = this.state
    let expenses = 0
    amountList.forEach(eachItem => {
      if (eachItem.typeInput === transactionTypeOptions[1].displayText) {
        expenses += parseInt(eachItem.amountInput)
      }
    })
    return expenses
  }

  onDeleteItem = id => {
    const {amountList} = this.state
    const filteredAmountList = amountList.filter(eachItem => id !== eachItem.id)
    this.setState({
      amountList: filteredAmountList,
    })
  }

  calculateBalance = () => {
    const {amountList} = this.state
    let expenses = 0
    let income = 0
    let balance = 0
    amountList.forEach(eachItem => {
      if (eachItem.typeInput === transactionTypeOptions[0].displayText) {
        income += parseInt(eachItem.amountInput)
      } else if (eachItem.typeInput === transactionTypeOptions[1].displayText) {
        expenses += parseInt(eachItem.amountInput)
      }
      balance = income - expenses
    })
    return balance
  }

  render() {
    const {titleInput, amountInput, amountList} = this.state
    const income = this.claculateIncome()
    const expenses = this.calculateExpenses()
    const balance = this.calculateBalance()
    return (
      <div className="app-container">
        <div className="top-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="descript">
            Welcome back to your <span className="hilight">Money Manager</span>
          </p>
        </div>
        <MoneyDetails income={income} expenses={expenses} balance={balance} />
        <div className="bottom-container">
          <form className="form" onSubmit={this.onAddFormDetails}>
            <h1 className="heading">Add Transaction</h1>
            <div className="input-fields">
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                className="input"
                type="text"
                id="title"
                placeholder="TITLE"
                value={titleInput}
                onChange={this.onChangeTitleInput}
              />
            </div>
            <div className="input-fields">
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="input"
                type="text"
                id="amount"
                placeholder="AMOUNT"
                value={amountInput}
                onChange={this.onChangeAmountInput}
              />
            </div>
            <div className="input-fields">
              <label className="label" htmlFor="type">
                TYPE
              </label>
              <select
                className="input"
                id="type"
                onChange={this.onChangeTypeInput}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </form>
          <div className="transaction-list">
            <h1 className="heading">History</h1>
            <div className="heading-list">
              <p className="history-headings">Title</p>
              <p className="history-headings style">Amount</p>
              <p className="history-headings style">Type</p>
            </div>
            <ul className="transaction-history">
              {amountList.map(eachItem => (
                <TransactionItem
                  id={eachItem.id}
                  itemDetails={eachItem}
                  onDeleteItem={this.onDeleteItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
