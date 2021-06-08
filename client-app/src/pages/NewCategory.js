import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewCategory = () => {
    const history = useHistory();
    const [categoryName, setCategoryName] = useState('');


    const onSubmit = async () => {
        await axios.post('/api/categories/new', { categoryName });
        history.push('/categories');
    }

    return (
        <div style={{ height: "70vh" }} className="row justify-content-center align-items-center">
            <div className="col-md-8">
                <input onChange={e => setCategoryName(e.target.value)}
                    value={categoryName}
                    type="text"
                    className="form-control-lg form-control"
                    placeholder="Category Name" />
                <br />
                <button onClick={onSubmit} className="btn btn-primary btn-block">Save</button>
            </div>
        </div>
    )
}

export default NewCategory;