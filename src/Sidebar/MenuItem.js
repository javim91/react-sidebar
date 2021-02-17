import React from 'react';

const menuItem = (props) => {
    return (
        <a href={'/'+ props.data.link} className="itemlink"><i className={"fas fa-"+props.data.icon}></i> {props.data.title}</a>     
    )
};

export default menuItem;