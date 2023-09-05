import React from 'react'
import TrelloFilter from './TrelloFilter'
import TrelloList from './TrelloList'
import { styled } from 'styled-components'


const Body = () => {
  return (
    <div>
      <Filter><b><TrelloFilter/></b></Filter>
    <Div><TrelloList/></Div>
    </div>
  )
}
const Filter = styled('div')`
   background-color: #5959b6;
   width: 300px;
   height: 735px;
   color: white;
   margin-top: -22px;
   justify-content: center;
   display: flex;
   align-items: center;
`
const Div = styled('div')`
   margin-left: 300px;
   margin-top: -735px;
   background-color: #a8a8f0;
   height: 735px;
   
`

export default Body