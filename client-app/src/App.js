import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import NewCategory from './pages/NewCategory';
import Categories from './pages/Categories';
import NewToDoItem from './pages/NewToDoItem';

const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/newcategory' component={NewCategory} />
            <Route exact path='/categories' component={Categories} />
            <Route exact path='/newtodoitem' component={NewToDoItem} />
        </Layout>
    );
}

export default App;