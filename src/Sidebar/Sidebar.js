import React, { Component } from 'react';
import './Sidebar.css';
import MenuItem from './MenuItem';
import SubmenuItem from './SubmenuItem';

class sidebar extends Component {
    state = {
        menuItems: [
            { title: 'Home', link: 'home', icon: 'home' },
            { title: 'Orders', link: 'orders', icon: 'shopping-cart',
                smenu: [
                    { title: 'Kitchet', link: 'orders/kitchet' },
                    { title: 'Main Bar', link: 'orders/main-bar' },
                    { title: 'Pool Bar', link: 'orders/pool-bar' },
                    { title: 'Minimarket', link: 'orders/minimarket' },
                ], 
                smenuMaxHeight: null, 
                open: false ,
            },
            { title: 'Providers', link: 'providers', icon: 'id-card'},
            { title: 'Products', link: 'products', icon: 'boxes' },
            { title: 'Tools', link: '', icon: 'terminal', 
                smenu: [
                    { title: 'Join Codes', link: 'join-codes' },
                    { title: 'Import Products', link: 'import-products' },
                ], 
                smenuMaxHeight: null, 
                open: false 
            },
            { title: 'Logout', link: 'logout', icon: 'sign-out-alt' },
        ]
    }

    componentDidMount() {
        const menuItems = this.state.menuItems;

        let elements = document.getElementsByClassName("smenu");
		for(let i = 0; i<elements.length; i++){
			let menuIndex = elements[i].id.split('smenu')[1];
			menuItems[menuIndex].smenuMaxHeight = elements[i].offsetHeight;
			elements[i].style.maxHeight = 0;
		}

        this.setState({
            menuItems: menuItems
        });
    }

    toogleSubmenuHandler = (event, index) => {
        event.preventDefault();
        let el = document.getElementById("smenu"+index)
        const menuItems = this.state.menuItems;
        const item = menuItems[index];

        if(item.smenu){
            item.open = !item.open;
        }
        if(item.open) {
            el.style.maxHeight = item.smenuMaxHeight+'px';
        } else {
            el.style.maxHeight = 0;
        }

        this.setState({
            menuItems: menuItems
        });        
    }

    render() {   
        return (
            <div className="sidebar">
                <ul>
                    { 
                        this.state.menuItems.map((menuItem, index) => {
                            return (
                                <li className="item" key={index}>
                                    { !menuItem.smenu ? 
                                        <MenuItem data={menuItem}/> : 
                                        <SubmenuItem data={menuItem} 
                                            idRef={'smenu'+index}
                                            click={(event) => this.toogleSubmenuHandler(event, index)} /> 
                                    }                                                                    
                                </li>
                            )
                        }) 
                    }
                </ul>
            </div>      
        );
    }    
}

export default sidebar;