import React from 'react';
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, } from '@fortawesome/free-solid-svg-icons'
const list = (props) => {
    
   const{name, img,company,phone,yearlySalary, username,website, address}= props.people;
       return (
       
        
                <div className="user">
                    <div className="userImg"> 
                    <img src={img} alt=""/>
                    </div>
                <div className="user-option">
                    <h1>{name}</h1>
                    <h4> <small>Work at:</small> {company.name}</h4>
                    <h4><small>Yearly salary: </small> $ {yearlySalary}</h4>
                    
                    
                    <br/>
                    <button className="button"
                    onClick={()=> props.handleAddFriend(name)}
                    ><FontAwesomeIcon icon={faUserFriends} /> add to friend list  </button>

                    
                </div>

                <div className="detail">
                    <h3>Details</h3>
                    <h5><small>User name:</small>{username}</h5>
                    <h5><small>website:</small> {website}</h5>
                    <h5><small>Phone:</small> {phone}</h5>
                    <h5><small>Address:</small> {address}</h5>
                    
                </div>
                </div>
     
          
    );
};

export default list;