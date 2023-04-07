import React, {Component} from "react";
import {connect} from "react-redux";

import * as actionTypes from '../redux/actions';

import { deletePerson } from '../redux/reducer';

const Persons = ({ people, deletePerson }) => {
    const handleDelete = (id) => {
        deletePerson(id);
    };

    return (
        <ul>
            {people.map((person) => (
                <div key={person.id} onClick={() => handleDelete(person.id)}>
                    <h1>{person.name}</h1>
                    <div className="age">Age: {person.age}</div>
                    {/*<button onClick={() => handleDelete(person.id)}>Delete</button>*/}
                    <hr/>
                </div>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    people: state.people,
});

export default connect(mapStateToProps, { deletePerson })(Persons);