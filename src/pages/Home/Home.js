import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {

    const [itemText, setItemText] = useState('');
    const [listItems, setListItems] = useState([]);

    // add new item to database
    const addItem = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/item', { item: itemText })
            setListItems(prev => [...prev, res.data]);
            setItemText('');
        } catch (err) {
            console.log(err)
        }
    }
    // create function for fetch data from database
    useEffect(() => {
        const getItemsList = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/items')
                setListItems(res.data);
                console.log('render')
            } catch (err) {
                console.log(err)
            }
        }
        getItemsList()
    }, []);

    // delete oparation (complete task)
    const deleteItem = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/item/${id}`)
            const newListItems = listItems.filter(item => item._id !== id);
            setListItems(newListItems)
        } catch (err) {
            console.log(err)
        }
    }
    // for update oparatons 
    const renderUpdate = () => {
        <form className='update-form'>
            <input type="text" placeholder="New Item" class="input input-bordered input-info w-full max-w-xs" />
            <button className='btn btn-xs btn-info' type='submit'>Edit</button>
        </form>
    }

    return (
        <div className='py-10'>
            <div>
                <h2 className='text-3xl text-blue-50 font-semibold py-16'>Add Your Daily Tasks</h2>
            </div>
            <div>
                <form className='py-8' onSubmit={e => addItem(e)}>
                    <input type="text" placeholder="Add Todo Item Here" class="input input-bordered input-info w-full max-w-xs" onChange={e => { setItemText(e.target.value) }} value={itemText} />
                    <button className='btn btn-info pl-2'>Add</button>
                </form>

                <div className='todo-listItems'>
                    {
                        listItems.map(item => (
                            <div className='todo-item p-2'>
                                <p className='item-content'>{item.item}</p>
                                <button class="btn btn-xs btn-info">Update</button>
                                <button class="btn btn-xs btn-accent" onClick={() => { deleteItem(item._id) }}>Complete</button>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* This is a simple section for design */}
            <div className='px-10'>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row">
                        <img className='w-96 rounded-lg' src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1" alt='' />
                        <div>
                            <h1 class="text-4xl font-bold">Be Smart With Daily Tasks!</h1>
                            <p class="py-6 text-justify	">By keeping such a list, you make sure that your tasks are written down all in one place so you don't forget anything important. And by prioritizing tasks, you plan the order in which you'll do them, so that you can tell what needs your immediate attention, and what you can leave until later.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;