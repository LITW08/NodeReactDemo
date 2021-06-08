import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const NewToDoItem = () => {
    const history = useHistory();
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await axios.get('/api/categories/getall');
            setCategories(data);
        }

        getCategories();
    }, []);

    useEffect(() => {
        if(!categories.length) {
            return;
        }

        setSelectedCategoryId(categories[0].id);
    }, [categories]);

    const onSubmit = async () => {
        await axios.post('/api/todoitems/add', {title, dueDate, categoryId: selectedCategoryId});
        history.push('/');
    }

    return (
        <div style={{height: '70vh'}} className="row justify-content-center align-items-center">
            <div className="col-md-6 jumbotron">
                <h1>Add new item</h1>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input onChange={e => setTitle(e.target.value)} id="title" type="text" className="form-control form-control-lg" placeholder="Title" name="title" />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Due Date:</label>
                    <input onChange={e => setDueDate(e.target.value)} id="date" type="date" className="form-control form-control-lg" placeholder="Due Date" name="dueDate" />
                </div>
                <div className="form-group">
                    <label htmlFor="categoryid">Category:</label>
                    <select onChange={e => setSelectedCategoryId(e.target.value)} value={selectedCategoryId} className="form-control form-control-lg" name="categoryid">
                        {categories.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}
                    </select>
                </div>
                <button onClick={onSubmit} className="btn btn-primary btn-block">Save</button>
            </div>
        </div>
    )
}

export default NewToDoItem;