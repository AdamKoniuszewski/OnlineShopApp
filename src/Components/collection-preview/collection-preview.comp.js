import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from '../collecttion-item/collection-item.comp'

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title' >{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item,idx) => idx<4)
                .map((item) => (
                <CollectionItem key={item.id} item={item}/>
            ))}
        </div>
        <div className='horizontalLine'/>
    </div>
);

export default CollectionPreview; 