import React, { useState } from 'react';
import users from '../userdata/UsersList'
import { faPeopleCarry } from '@fortawesome/free-solid-svg-icons';
import './Friend.css'

const Friend = (props) => {
    const friend= props.friend;


    return (
        <div>
            <h4>Total User:{users.length}</h4>
            <h5> Friends: {friend.length}</h5>
            <p className="adding-friend" >Added Friends:
                <br/>
                {props.friend} </p>
               
            
           
        </div>
    );
};

export default Friend;