import { useForm } from "react-hook-form";

interface Category {
  id: number;
  name: string;
}

interface Expense {
  id: number;
  description: string;
  amount: number;
  category_id: number;
  category: Category;
}

interface Props{
  addExpense: (data:Expense) => void;
  categories: Category[]
}

const ExpenseForm = ({addExpense, categories}:Props) => {

  
    const { register, handleSubmit, formState:{errors}, reset} = useForm()

    let onSubmit = (data) => {
      addExpense(data);
      reset()

    }
  

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="category_id" className="form-label">Category</label>
        <select id="category_id" { ...register("category_id", {required:true})} className="form-select">
        <option value="" defaultValue={""}>Open this select menu</option>
        {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option> )}
        </select>
        {errors.category_id?.type == "required" && <p className="text-danger">This field is required</p>}
      </div>

      <div className="mb-3">
        <button className="btn btn-primary">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
