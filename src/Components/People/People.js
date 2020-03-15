import React from 'react';
import Userdata from '../userdata';
import {useState} from 'react';

import './People.css'

import List from '../List/list'
import Friend from '../Friend/Friend';


const People = () => {
    const user15= Userdata.slice(0,15);
    const [peoples, setPeoples] = useState(user15);

    const [friend, setFriend]= useState([]);

    const handleAddFriend= (people)=>{
    console.log("product added", people);

    const newFriend = [...friend, people];
    setFriend(newFriend);}
    return (
        <div className="user-container">
        <div className="userlist-container">

            {
                
                peoples.map(people=>
                    <List handleAddFriend={handleAddFriend}
                    people= {people}>  </List>)
            }

           
        </div>
        <div className="cartAndDetails">
        <Friend friend={friend}> </Friend>
    
        </div>
        </div>
                  
     
   );
};

export default People;





