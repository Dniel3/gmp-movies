import * as React from 'react';
import './category.scss';
import { CategoryProps } from '../../containers/categorylist/category_list';

const Category = (props: CategoryProps) => 
    <p className="category">{props.name}</p>; 

export default Category
