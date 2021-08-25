import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{
    // const categories=['One Punch','Samurai x', 'Dragon ball'];
    const [categories, setCategories] = useState(['One Punch'])
    // const handleAdd=()=>{
    //     setCategories([...categories,'Boruto']);
    // }
    return(
        <> 
            <h2>GifExpertAPP</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map((category)=>(
                        < GifGrid 
                        key={category}
                        category={category} 
                        />
                    ))
                }
            </ol>
        </>             
    );
}

export default GifExpertApp;