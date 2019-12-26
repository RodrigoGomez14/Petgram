import React, {useState,useEffect} from 'react'
import Category from '../Category/index'
import {List,Item} from './styles'

function useCategoriesData(){
    const [categories , setCategories] = useState([])
    const [loading , setLoading] = useState(false)
    useEffect(function(){
        async function getData(){
            setLoading(true)
            const result = await fetch("https://petgram-server.midudev.now.sh/categories")
            const response = await result.json()
            setCategories(response)
            setLoading(false)
        }
        getData()
    },[])
    return{categories,loading}
}
export const ListOfCategories = ()=>{
    const {categories,loading}= useCategoriesData()
    const [showFixed , setShowFixed] = useState(false)
    useEffect(function(){
        const onScroll = e =>{
            const newShowFixed = window.scrollY > 200
            setShowFixed(newShowFixed)
        }

        document.addEventListener("scroll",onScroll)
        return () =>{document.removeEventListener('scroll',onScroll)}
    },[showFixed])
    const renderList = (fixed) =>{
        return(
            <List fixed={fixed}>
                {categories.map(category=>(
                    <Item key={category.id}>
                        <Category {...category}/>
                    </Item>
                ))}
            </List>
        )
    } 
    return (
        <>  
            {loading?
            'Cargando Categorias...'
            :
            <>
                {renderList()}
                {showFixed && renderList(true)}
            </>
            }
        </>
    )
}

