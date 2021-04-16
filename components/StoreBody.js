import React from 'react'
import CategoriesList from './CategoriesList'
import CategoriesView from './CategoriesView'
import Bag from './Bag'


const StoreBody = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 px-4 md:px-12 lg:px-28'>
            <CategoriesList  />
            <CategoriesView  />
            <Bag  />
            
        </div>
    )
}

export default StoreBody
