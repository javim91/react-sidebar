import React from 'react';

const submenuItem = (props) => {
    return (
        //<a href={props.data.link} className="itemlink"><i className={"fas fa-"+props.data.icon}></i>{props.data.title}</a>   
        <div>
            <a onClick={props.click} href="#" className={'itemlink hasSmenu '+ (props.data.open ? 'open' : '')}><i className={'fas fa-' + props.data.icon}></i> { props.data.title }</a>
            <ul className="smenu" id={ props.idRef }>
                { 
                    props.data.smenu.map((smenu, index) => {
                        return (
                            <li key={index}>
                                <a href={'/'+ smenu.link} key={index}>{ smenu.title }</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>          
    )
};

export default submenuItem;