import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, doneTODO, deleteTODO, imComplete } from './action';

type ReturnType = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  addList: () => void;
  doneList: (name: string) => void;
  deleteList: (name: string) => void;
  imCompleteList: (name: string) => void;
};

//  useOperationsにする？
export const useTodoOperations = (): ReturnType => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const addList = () => {
    if (!name) return;

    dispatch(addTodo(name));
    setName('');
  };
  const doneList = (name: string) => {
    dispatch(doneTODO(name));
  };
  const deleteList = (name: string) => {
    dispatch(deleteTODO(name));
  };
  const imCompleteList = (name: string) => {
    dispatch(imComplete(name));
  };

  return { name, setName, addList, doneList, deleteList, imCompleteList };
};
