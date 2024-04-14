import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import axios from "axios";

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

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/expenses/")
      .then((res) => {
        console.log(res.data);
        setExpenses(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/categories/")
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
        setError("");
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, []);

  const addExpense = (data:Expense) => {
    const originalExpenses = [...expenses];
    setExpenses([data, ...expenses]);
    axios
      .post("http://127.0.0.1:8000/expenses/", data)
      .then((res) => {
        setExpenses([res.data, ...expenses]);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setExpenses(originalExpenses)
      });
  }

  const deleteExpense = (id: number) => {
    const originalExpenses = [...expenses];
    setExpenses(expenses.filter((expense) => expense.id != id));
    axios.delete("http://127.0.0.1:8000/expenses/" + id).catch((err) => {
      setError(err.message);
      setExpenses(originalExpenses);
    });
  };
  let filteredExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category?.id == selectedCategory)
    : expenses;

  return (
    <>
      <h5>{selectedCategory}</h5>
      {error && <h4 className="text-danger">{error}</h4>}
      <ExpenseForm addExpense={addExpense} categories={categories} />
      <ExpenseFilter
        categories={categories}
        onChange={(id: number) => setSelectedCategory(id)}
      />
      <ExpenseList deleteExpense={deleteExpense} expenses={filteredExpenses} />
    </>
  );
};

export default App;
