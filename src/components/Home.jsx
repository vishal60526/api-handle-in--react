import React from 'react'
import Nav from './Nav'
import Coustomhook from '../hook/Coustomhook'
import useApi from '../hook/Coustomhook';
import Card from './Card';
function Home() {
 const res= useApi('https://randomuser.me/api/?page=1&results=1&seed=abc');


  return (
    <div>
      <Nav></Nav>
    <Card  data={res}  />
    </div>
  )
}

export default Home
