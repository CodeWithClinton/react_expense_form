const ExpenseList = () => {
  return (
    <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Amount</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td>2 cups of ice cream</td>
      <td>$200</td>
      <td>groceries</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>

    <tr>
      <td>2 cups of ice cream</td>
      <td>$200</td>
      <td>groceries</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>

    <tr>
      <td>2 cups of ice cream</td>
      <td>$200</td>
      <td>groceries</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>

    <tr>
      <td>2 cups of ice cream</td>
      <td>$200</td>
      <td>groceries</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>

    <tr>
      <td>2 cups of ice cream</td>
      <td>$200</td>
      <td>groceries</td>
      <td><button className="btn btn-outline-danger">Delete</button></td>
    </tr>

  </tbody>
</table>
  )
}

export default ExpenseList