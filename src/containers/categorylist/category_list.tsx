import * as React from 'react';
import Category from '../../components/category/category';

export interface CategoryProps {
    name: string;
} 

const CATEGORIES: CategoryProps[] = [
    {name: 'ALL'}, 
    {name: 'DOCUMENTARY'}, 
    {name: 'COMEDY'}, 
    {name:'HORROR'}, 
    {name:'CRIME'}
];

const CategoryList = () => (
    <>
        {CATEGORIES.map((category, index) => 
                (<Category name={category.name} key={`category-${index}`}/>)
            )}
    </>
);

export default CategoryList
