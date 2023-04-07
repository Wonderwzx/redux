import { connect } from 'react-redux';
import { useState } from 'react';
import { addPerson } from '../redux/reducer';

import './AddPerson.css'

// function component
const AddPerson = ({ addPerson }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPerson(name, age);
        // setName('');
        // setAge('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />

                <button type="submit">Add Person</button>
            </form>
        </div>

    );
};

export default connect(null, { addPerson })(AddPerson);