import { useState, useEffect } from 'react';

export function useData(loadData) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsFetching(true);

    loadData()
      .then(data => {
        setData(data);
      })
      .catch(err => setError(err))
      .finally(() => setIsFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, error, isFetching };
}

export function useToDoList() {
  const [toDo, setTodo] = useState([
    { id: 1, name: 'buy milk', isDone: false },
    { id: 2, name: 'test', isDone: true },
    { id: 3, name: 'some text', isDone: false }])
    const addNewItem = (item) => {
      setTodo([...toDo, item])
    }
    const deleteItem = (id) => {
      setTodo(toDo.filter(item => item.id !== id))
    }
    const isDoneHandler = (id) => {
      setTodo(toDo.map((item) => ({
        ...item,
        isDone: item.id === id ? !item.isDone : item.isDone,
      })));}
    return ([toDo, addNewItem, deleteItem, isDoneHandler])
}