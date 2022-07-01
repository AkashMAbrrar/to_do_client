import React from 'react';

const Home = () => {
    return (
        <div className='py-10'>
            <div>
                <h2 className='text-3xl text-blue-50 font-semibold'>Add Your Daily Tasks</h2>
            </div>
            <form className='py-10'>
                <input type="text" placeholder="Add Todon Item Here" class="input input-bordered input-info w-full max-w-xs" />
            </form>

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