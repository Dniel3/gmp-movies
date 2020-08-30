import * as React from 'react';
import Category from '../../components/category/category';

export interface CategoryProps {
    name: string;
} 

export enum Categories {
    ALL = 'all',
    DOCUMENTARY = 'documentary', 
    COMEDY = 'action', 
    HORROR = 'horror', 
    CRIME = 'crime',
    ADVENTURE = 'adventure',
}

const CategoryList = () => (
    <>
        <Category name={Categories.ALL} key={`category-${Categories.ALL}`}/>
        <Category name={Categories.DOCUMENTARY} key={`category-${Categories.DOCUMENTARY}`}/>
        <Category name={Categories.COMEDY} key={`category-${Categories.COMEDY}`}/>
        <Category name={Categories.HORROR} key={`category-${Categories.HORROR}`}/>
        <Category name={Categories.CRIME} key={`category-${Categories.CRIME}`}/>
        <Category name={Categories.ADVENTURE} key={`category-${Categories.ADVENTURE}`}/>
    </>
);

export default CategoryList
