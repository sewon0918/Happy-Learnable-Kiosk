import React from 'react';
import './index.css';



class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {focused: false};
    }

    render(){
        const {menu} = this.props;
        const {price} = this.props;
        const {drink} = this.props;
        const {side} = this.props;
        
        return(
            
            <div>
                <div key={menu} id={menu} className="showBurger" >
                        <img className="image" src={ require(`../../Data/Image/burgers/${menu}.jpg`).default } alt="menu_class"/>
                        <img className="image" src={ require(`../../Data/Image/sides/${side}.jpg`).default } alt="menu_class"/>
                        <img className="image" src={ require(`../../Data/Image/beverages/${drink}.jpg`).default } alt="menu_class"/>
                        <div className="name">{menu} 세트</div>
                        <div className="price">{price}</div>
                    </div>
                
            </div>
        )
    }
}

export default Menu;