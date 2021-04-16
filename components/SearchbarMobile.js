import React from 'react'

const SearchBarMobile = () => {
    return (
        <div className='block md:hidden search-bar px-4'>
            <form action="" className='flex flex-row justify-center items-center'>
                <div>
                    <input 
                    type="text"
                    className='bg-gray-100 rounded-l text-text-ash focus:bg-white border border-transparent focus:border-sokoblue focus:outline-none p-3 w-96'
                    placeholder="Search for products and categories"
                    />
                </div>
                <div>
                    <button type="submit" className='block text-center bg-sokoyellow rounded-r p-3 border border-sokoyellow'><svg className="w-6 h-6 text-sokoblue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></button>
                </div>
            </form>
            
        </div>
    )
}

export default SearchBarMobile
