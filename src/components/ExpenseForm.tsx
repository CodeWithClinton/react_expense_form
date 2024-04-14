import { useForm } from "react-hook-form";

const ExpenseForm = () => {

    const { register, handleSubmit, formState:{errors}} = useForm()

  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input id="description" { ...register("description", {required:true, minLength:5})}  type="text" className="form-control" />
        {errors.description?.type == "required" && <p className="text-danger">This field is required</p>}
        {errors.description?.type == "minLength" && <p className="text-danger">This field requires at least 5 characters</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input id="amount" { ...register("amount", {required:true})} type="number" className="form-control" />
        {errors.description?.type == "required" && <p className="text-danger">This field is required</p>}
      </div>

      <div className="mb-3">
        <label htmlFor="category" { ...register("category", {required:true})} className="form-label">Category</label>
        <select id="category" className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
        </select>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
