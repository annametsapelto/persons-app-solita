import React from 'react';
import data from './Data/names'

function ListItem () {
    return (
        
        data.names.map((item, i) => {
            return (
            <li key={i}> {item.name}, {item.amount}</li>
       )
            
    } 
    )
    )

}

export default ListItem;  
