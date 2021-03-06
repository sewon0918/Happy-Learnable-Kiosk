import React from 'react';
import drinks from '../../Data/beverage.json';
import HowMany from '../HowMany';
import './index.css';

class ShowDrinks extends React.Component {
    constructor(props) {
        super(props);
        this.results = this.results.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.state = {select: false, menu: '', price:0, drinkOrSide : 'beverages' };
    }

    menuClick(id, price){
        const elements = document.getElementsByClassName("showmenu");
        for (var i = 0; i < elements.length; i++) {
            //elements[i].style.border="1px solid black";
            //elements[i].style.boxShadow = '0 0 0 0px red inset';
            elements[i].style.border="3px solid white";
        }
        //document.getElementById(id).style.boxShadow = '0 0 0 3px red inset';
        document.getElementById(id).style.border="3px solid red";
        this.setState({menu: id, price: price});
    }

    results() {
        const drinklist = drinks.map((key, index) => {
            const drinkname = key.name;
            let price=key.price;
            return (<div key={drinkname} id={drinkname} className="showmenu" onClick={this.menuClick.bind(this, drinkname, price)}>
                        <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.png`).default } alt="menu_class"/>
                        <div className="name">{drinkname}</div>
                        <div className="price">{price}</div>
                    </div>)
        })
        return (<div id="recommendMenu">{drinklist}</div>)
    }

    onSelect(){
        this.setState({select: true});
    }

    render(){
        let finish = null;
        let menuList = this.results();
        let button = <button id='select' >선택</button>;
        if (this.state.menu !== "")
            button = <button id='select' onClick={this.onSelect}>선택</button>;
        const drinkname = this.state.menu;
        const drinkOrSide = this.state.drinkOrSide;
        const price=this.state.price;
        let drink_id=drinkname+'_selected';
        if (this.state.select){
            finish = <HowMany menu={drinkname} price = {price} drinkOrSide = {drinkOrSide}/>
            menuList = null;
            button = <div id = 'answer' className="resultBurger"><div key={drinkname} id={drink_id}>
            <img className="image" src={ require(`../../Data/Image/beverages/${drinkname}.png`).default } alt="menu_class"/>
            <div className="name">{drinkname}</div>
            <div className="price">{price}</div>
        </div></div>;
        }
        return(
            <div id='contain'>
                {menuList}
                {button}
                <div id='finish'>{finish}</div>
            </div>
        )
    }
}

export default ShowDrinks;