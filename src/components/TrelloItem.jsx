import React, { useState } from "react";
import { addList, addCard } from "../store/redSource";
import { useDispatch } from "react-redux";
import { styled } from 'styled-components'

const TrelloItem = ({ type, parentId }) => {
  const [inputValue, setInputValue] = useState("");
  const [isWiew, setIsWiew] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (type) {
      dispatch(addCard({id: Math.random(), title:inputValue, parentId:parentId}))
    } else {
      dispatch(addList({ id: Math.random(), title: inputValue }));
    }
    inList()
    setInputValue("");
  };
  const upInput = (e) => {
    setInputValue(e.target.value);
  };
  const openTask = () => {
    setIsWiew(true);
  };
  const inList = () => {
    setIsWiew(false);
  };

  return (
    <div>
      <Button onClick={openTask}>+ Add New {type?" Column":""}</Button>{""}
      {isWiew && (
        <form onSubmit={handleClick}>
          <Input type="text"  value={inputValue} onChange={upInput} placeholder={type?"Enter Card":"Task..."}/>
          <div>
            <Adds>Add List</Adds>
            <Cancel onClick={inList}>X</Cancel>
          </div>
        </form>
      )}
    </div>
  );
};
const Button = styled('button')`
  width: 150px;
  height: 50px;
  border: none;
  background-color: #9292f0;
  border-radius: 0px;
  margin-left: 60px;
  margin-top: 60px;
  color: white;
  
&:hover{
  background-color: #7f7fea;
}
`
const Input = styled('input')`
  border: none;
  background-color: #9292f0;
  color: white;
  margin-left: 60px;
  height: 30px;
  
`
const Adds = styled('button')`
  border: none;
  background-color: #9292f0;
  color: white;
  margin-left: 60px;
  border-radius: 5px;
  width: 100px;
  height: 25px;
  margin-top: 3px;
  
&:hover{
  background-color: #7f7fea;
}
`
const Cancel = styled('button')`
  border: none;
  color: white;
  background-color: #a8a8f0;
  margin-left: 5px;
  height: 25px;
  width: 30px;
&:hover{
  background-color:#9d9dee;
}
`


export default TrelloItem;
