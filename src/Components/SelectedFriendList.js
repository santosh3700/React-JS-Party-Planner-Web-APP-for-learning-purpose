import { Alert } from 'bootstrap';
import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';

const SelectedFriendList = (props) => {
    return (
        <>
            <ListGroup>
                <h4>Enko bulayenge 😄</h4><br/>
                {
                    props.selectedList.map((friend, key)=>(
                        <ListGroup.Item 
                            key={key}
                            onClick={() => props.removeFriend(friend)}
                            className="bg-success"
                            style={{color:'#FFFFFF'}}
                        >
                            {friend} 😊
                        </ListGroup.Item>
                    ))
                }
            </ListGroup>
        </>

    );
}

export default SelectedFriendList;