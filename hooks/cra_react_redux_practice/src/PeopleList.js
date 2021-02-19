import React from "react";
import Person from './Person'
import {useSelector} from "react-redux";


const PeopleList = () => {
const users = useSelector(store => store.users);
    const usersList = users.map(user => <Person key={user.id} {...user}/>)

    return (
        <ul>
            {usersList}
        </ul>
    )
}


export default PeopleList;