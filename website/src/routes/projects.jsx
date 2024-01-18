import React from 'react';

const Projects = () => {
    return (
        <div className="flex justify-center w-full h-screen">

            <div className="w-2/3 ">
                <h2 className='font-bold text-center'>Affiliate Testing</h2>
            <div className='grid grid-cols-3 gap-3'>
                <div className='m-5 ring rounded-xl text-center ring-black hover:ring-red-400 font-bold hover:text-red-400'>
                <a target="_blank" href="https://www.amazon.com/b?_encoding=UTF8&tag=kjdii-20&linkCode=ur2&linkId=29ab19e698d285fbc261a7973ca1445f&camp=1789&creative=9325&node=133140011">Kindle</a>

                </div>

                <div className='m-5 max-w-50 ring rounded-xl text-center ring-black hover:ring-red-400 font-bold hover:text-red-400'>
                <a target="_blank" href="https://www.amazon.com/gp/search?ie=UTF8&tag=kjdii-20&linkCode=ur2&linkId=80d735a6edb7644676bf02f7d1224fb5&camp=1789&creative=9325&index=aps&keywords=best Sellers">Best Sellers</a>
                </div>
                
            </div>
            </div>
            </div>

    );
};

export default Projects;
