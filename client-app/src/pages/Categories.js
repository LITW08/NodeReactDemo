import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const { data } = await axios.get('/api/categories/getall');
            setCategories(data);
        }

        getCategories();
    }, []);

    return (
        <div className="col-md-8 offset-md-2">

            <Link to="/newcategory" className="btn btn-success">New Category</Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(cat => <tr key={cat.id}>
                        <td>{cat.name}</td>
                        <td>
                            <button className='btn btn-warning'>Edit</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default Categories;