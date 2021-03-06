import React from 'react';
import './index.css';
import burgers from '../../Data/burger.json'
import OptionChange from '../OptionChange';
import Payment from '../Payment';
import Setmenu from '../Setmenu';
import HowMany from '../HowMany';

class ShowBurgers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {menu: "", results: 0, order: false, show0: false, show: false, show2: false, show3: false, query:null, info: null, optionSelect:0, set: 0};
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show0: true})
        },200)
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },2000) 
        setTimeout(()=>{
            this.setState({show3: true})
        },4500) 
     }


    menuClick(id, json, price){
        console.log(json);
        const elements = document.getElementsByClassName("showBurger");

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.border="3px solid white";
        }
        console.log(id)
        document.getElementById(id).style.border = '3px solid red';
        this.setState({menu: id, order: false, info: json}); 
    
        console.log("jj")
    }
    orderMenu() {
        console.log(this.state.menu);
        this.setState({order: true});
    }

    results() {
        const {name} = this.props;
        const {ingredient} = this.props;
        const {recommend} = this.props;
        const {dbExist} = this.props;
        const {recommendMenu} = this.props;
        const {phone} = this.props;
        console.log("name", name);
        console.log("ingredient", ingredient);
        console.log("phone", phone);
        console.log("dbExist", dbExist);
        let num = 0;
        if (this.state.query !== name) {
            this.setState({query: name, show: false, show2: false, show3: false, order: false});
            setTimeout(()=>{
               this.setState({show: true})
            },500)
            setTimeout(()=>{
                this.setState({show2: true})
            },2000) 
            setTimeout(()=>{
                this.setState({show3: true})
            },4500) 

        }
        let nextButton = null;
        if (this.state.menu !== "") {
            nextButton = <button id='select' onClick={this.orderMenu.bind(this)}>??????</button>;
        }
        const burgerlist = burgers.map((key, index) => {
            const burgername = key.name;
            const singleprice=key.singleprice;
            const setprice=key.setprice;
            if (name != null) {
                console.log("name");
                if (name !== "" && burgername.includes(name)) {
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.png`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">??????: {singleprice}</div>
                            <div className="price">??????: {setprice} </div>
                        </div>);
                }
                else return (null);
            }
            else if (ingredient !== undefined && ingredient !== null) {
                console.log("ingred");
                if (key.ingredient === ingredient){
                    num += 1;
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.png`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">??????: {singleprice}</div>
                            <div className="price">??????: {setprice} </div>
                        </div>);
                }
                else return (null);
            }
            else if (phone!==null && recommend && dbExist){
                console.log("recommend and db exist", recommendMenu)
                for (var i=0 ; i< recommendMenu.length ; i++){
                    if (burgername.includes(recommendMenu[i])){
                        return (
                            <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                                <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.png`).default } alt="menu_class"/>
                                <div className="name">{burgername}</div>
                                <div className="price">??????: {singleprice}</div>
                                <div className="price">??????: {setprice} </div>
                            </div>);
                    }
                }
                
            }
            else if (phone!==null && recommend && !dbExist){
                console.log("recommend but no db")
                if (burgername.includes("?????????")){
                    return (
                        <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                            <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.png`).default } alt="menu_class"/>
                            <div className="name">{burgername}</div>
                            <div className="price">??????: {singleprice}</div>
                            <div className="price">??????: {setprice} </div>
                        </div>);
                }
            }
            else {
                console.log("show all");
                return (
                    <div key = {burgername} id = {burgername} className="showBurger" onClick={this.menuClick.bind(this, burgername, key)}>
                        <img className="image" src={ require(`../../Data/Image/burgers/${burgername}.png`).default } alt="menu_class"/>
                        <div className="name">{burgername}</div>
                        <div className="price">??????: {singleprice}</div>
                        <div className="price">??????: {setprice} </div>
                    </div>);
            }
            return null;
        })
        if (name != null && num === 0) 
            return (<>
                {this.state.show && <div className="dialog">"{name}"??? ?????? ?????? ????????? ????????????. ????????? ????????? ?????? ??????????????????</div>}
            </>)
            if (this.state.order)
                return (
                <div id = 'answer' className="resultBurger">
                    <img className="image" src={ require(`../../Data/Image/burgers/${this.state.menu}.png`).default } alt="menu_class"/>
                    <div className="name">{this.state.menu}</div>
                </div>)
        if (name != null)
            return (<>
                {<div  className='dialog' id='answer'>{name}</div>}
                {this.state.show && <div  className='dialog'>"{name}"??? ?????? ?????? ???????????????. </div>}
                {this.state.show2 && <div  className='dialog_long'>???????????? ????????? ???????????? "??????"??? ???????????????. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (ingredient != null) 
            return (<>
                {<div  className='dialog' id='answer'>{ingredient}</div>}
                {this.state.show && <div  className='dialog'>???????????? {ingredient}??? ??????????????????. </div>}
                {this.state.show2 && <div  className='dialog_long'>???????????? ????????? ???????????? "??????"??? ???????????????. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (recommend && dbExist)
            return(<>
                {<div  className='dialog'>"{phone}" ?????? ?????????????????????.</div>}
                {this.state.show && <div  className='dialog'>???????????? ????????? ???????????? "??????"??? ???????????????. </div>}
                {this.state.show2 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
        if (recommend && !dbExist)
        return(<>
            {<div  className='dialog'>???????????? ????????? ?????? ????????? ????????????.</div>}
            {this.state.show && <div  className='dialog'>???????????? ????????? ???????????????????????????. </div>}
            {this.state.show2 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
        </>)
        if (name == null && ingredient == null) return (<>
                {<div  className='dialog' id='answer'>?????? ?????? ??????</div>}
                {this.state.show && <div  className='dialog'>"?????? ?????? ??????"??? ??????????????????. </div>}
                {this.state.show2 && <div  className='dialog_long'>???????????? ????????? ???????????? "??????"??? ???????????????. </div>}
                {this.state.show3 && <><div id="menuShower">{burgerlist}</div>{nextButton}</>}
            </>)
    }

    optionyes(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: 1});
    }
    optionno(){
        //console.log(this.state.optionSelect);
        this.setState({optionSelect: -1});
    }
    setmenu(){
        this.setState({set: 1});
    }
    singlemenu(){
        this.setState({set: -1});
    }
    render(){
        console.log(this.state.info);
        let order = null;
        let option=null;
        let ifset = null;
        let minioption=null;
        if(this.state.set > 0){
            ifset=<Setmenu set_price={this.state.info.setprice} name={this.state.menu}></Setmenu>
        }
        if(this.state.set < 0){
            ifset=<HowMany price={this.state.info.singleprice} menu={this.state.menu} drinkOrSide={"burgers"}></HowMany>
        }
        if(this.state.order){
            option=<><div className="dialog">{this.state.menu}(???)??? ?????????????????????.</div></>
            //minioption=<><div className="dialog2"><button className="button" onClick={this.optionyes.bind(this)}>???.</button><button className="button" onClick={this.optionno.bind(this)}>?????????.</button></div></>
            console.log(this.state.optionSelect);
            if(true){
                //minioption=<div className='dialog' id='answer'>???</div>;
                order = <OptionChange name={this.state.menu} patty_count={this.state.info.patty_num} cheeze_count={this.state.info.cheeze} onion_state={this.state.info.onion} tomato_state={this.state.info.tomato} lettuce_state={this.state.info.raddish} sauce_state={this.state.info.sauce} single_price={this.state.info.singleprice} set_price={this.state.info.setprice}></OptionChange>
            }
            /*
            if(this.state.optionSelect < 0){
                //minioption=<div className='dialog' id='answer'>?????????</div>;
                order = <><div  className='dialog'>????????? ?????? ?????? ????????? ??????????????????????</div>
                <div className="dialog2"><button className='button' onClick={this.singlemenu.bind(this)}>??????</button><button className='button' onClick={this.setmenu.bind(this)}>??????</button></div>{ifset}</>
            }*/
        }

        return(
            <div id='contain'>
                {this.results()}
                {option}
                {minioption}
                {order}

            </div>
        )
    }
}

export default ShowBurgers;