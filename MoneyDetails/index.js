import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props
  return (
    <div className="middle-container">
      <div className="details-container balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="text-container">
          <p className="title">Your Balance</p>
          <p className="amount">Rs {balance}</p>
        </div>
      </div>
      <div className="details-container income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div className="text-container">
          <p className="title">Your Income</p>
          <p className="amount">Rs {income}</p>
        </div>
      </div>
      <div className="details-container expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="income"
          className="image"
        />
        <div className="text-container">
          <p className="title">Your Expenses</p>
          <p className="amount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
