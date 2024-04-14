
const ExpenseFilter = () => {
  return (
    <div className="mb-3">
    <select id="category" className="form-select" aria-label="Default select example">
    <option selected>Pick a category</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
  </div>
  )
}

export default ExpenseFilter