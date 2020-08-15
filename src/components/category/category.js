import React from 'react';
import propTypes from 'prop-types';
import './category.scss';

const Category = (props) => 
    <p className="category">{props.name}</p>; 

export default Category

Category.propTypes = {
    name: propTypes.string.isRequired,
};
