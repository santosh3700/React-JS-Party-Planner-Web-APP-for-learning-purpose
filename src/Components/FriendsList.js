import { Alert } from 'bootstrap';
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const FriendsList = (props) => {

    
    return (
        <>
            <ListGroup>
                <>
                <h4>Kis kis ko bulana hai 🤔</h4><br/>
                {
                    props.list.map((friend, key)=>(
                        <ListGroup.Item 
                            key={key}
                            onClick={() => props.addFriend(friend)}
                            className="bg-danger"
                            style={{color:'#FFFFFF'}}
                        >
                            {friend} 🙏
                        </ListGroup.Item>
                    ))
                }
                </>
            </ListGroup>
        </>

    );
}

export default FriendsList;