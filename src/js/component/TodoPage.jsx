import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'

import { Context } from '../Context.jsx'

export default function TodoPage() {

    const { taskList } = useContext(Context);
    const { index } = useParams();

    const todo = taskList[index];

    return (
        <div>
            <h1 className="todoPage d-flex justify-content-center">{todo}</h1>

            <Link to="/">
                <p className='back'>Back</p>
            </Link>
        </div>
    )
}