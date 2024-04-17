import './index.css'

const TransactionItem = props => {
  const {itemDetails, onDeleteItem} = props
  const {id, titleInput, amountInput, typeInput} = itemDetails
  const deleteItem = () => {
    onDeleteItem(id)
  }
  return (
    <div className="history">
      <li>{titleInput}</li>
      <li>{amountInput}</li>
      <li>{typeInput}</li>
      <button
        className="delete-button"
        type="button"
        data-testid="delete-button"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </div>
  )
}

export default TransactionItem
