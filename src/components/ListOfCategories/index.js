import React from 'react'
import Category from '../Category/index'
import {List,Item} from './styles'
import {categories} from '../../api/db.json'
const ListOfCategories = ()=>(
    <List>
        {categories.map(category=>(
            <Item key={category.id}>
                <Category {...category}/>
            </Item>
        ))}
    </List>
)
export default ListOfCategories