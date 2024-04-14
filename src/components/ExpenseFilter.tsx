interface Category {
    id: number;
    name: string
  }
  

interface Props {
  onChange: (id: number) => void;
  categories: Category[]
}
const ExpenseFilter = ({ onChange, categories }: Props) => {
  return (
    <div className="mb-3">
      <select
        id="category"
        className="form-select"
        onChange={(event) => onChange(parseInt(event.target.value))}
      >
        <option value="" defaultValue={""}>Pick a category</option>
        {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
        
      </select>
    </div>
  );
};

export default ExpenseFilter;
