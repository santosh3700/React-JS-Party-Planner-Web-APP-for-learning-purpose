import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import SelectedFriendList from '../Components/SelectedFriendList'
import FriendsList from '../Components/FriendsList';

const Home = () => {


    const [listOfFriends, setFriends] = useState([
        'Rakesh', 'Hani', 'Gaurav', 'Raju', 'Sanjay', 'Vijaya', 'Santosh', 'Abhijeet', 'Ganesh', 'Manoj', 'Rohit', 'Diksha', 'Rekha'
    ])

    const [selectedFriends, setSelectedFriends] = useState([])

    //add a friend to party list
    const addFriend = (friend) => {

        setFriends(
            listOfFriends.filter((e) => (e !== friend))
        )

        setSelectedFriends([
            ...selectedFriends,
            friend
        ])


    }

    //remove a friend from party list
    const removeFriend = (friend) => {

        setSelectedFriends(
            selectedFriends.filter((e) => (e !== friend))
        )

        setFriends([
            ...listOfFriends,
            friend
        ])
    }



    return (
        <Container style={{ padding: '50px' }}>
            <Row style={{ textAlign: 'center', marginBottom: '50px' }}>
                <Col>
                    <h1>Chalo Party Karte hai 😋</h1>
                    <hr />
                </Col>
            </Row>
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <FriendsList
                        list={listOfFriends}
                        addFriend={addFriend} />
                </Col>
                <Col>
                    <SelectedFriendList
                        selectedList={selectedFriends}
                        removeFriend={removeFriend} />
                </Col>
            </Row>
        </Container>


    );
}

export default Home;