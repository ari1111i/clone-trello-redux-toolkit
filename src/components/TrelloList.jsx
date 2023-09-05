import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloItem from "./TrelloItem";
import { useSelector } from "react-redux";
import styled from 'styled-components';

const TrelloListContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
`;

const TrelloList = () => {
  const listItem = useSelector((store) => store.redSource.list);

  return (
    <TrelloListContainer>
      {listItem.map((list) => (
        <div key={list.id}>
          <div>{list.title}</div>
          <ul>
            {list?.children?.length > 0 &&
              list.children.map((children) => (
                <TrelloCard key={children.id} cardInfo={children} />
              ))}
          </ul>
          <div>
            <TrelloItem type="card" parentId={list.id} />
          </div>
        </div>
      ))}
      <div>
        <div>
          <TrelloItem />
        </div>
      </div>
    </TrelloListContainer>
  );
};


export default TrelloList;
