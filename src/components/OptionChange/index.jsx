import React from 'react';
import './index.css';
import 치즈 from '../../images/cheeze.png';
import 패티 from '../../images/patty.png';
import 양파 from '../../images/onion.png';
import 토마토 from '../../images/tomato.png';
import 양상추 from '../../images/lettuce.png';
import 소스 from '../../images/sauce.png';
import burgers from '../../Data/burger.json'

class OptionChange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            patty_count:0,
            cheeze_count:0,
            onion_state:0,
            tomato_state:0,
            lettuce_state:0,
            sauce_state:0,
            OptionSelected: []
        }
        this.basicoption=this.basicoption.bind(this);
    }
    Add_patty(){
        console.log("add");
        this.setState({
          patty_count: this.state.patty_count + 1
        });
      }
    Rem_patty(){
    console.log("rem");
        if(this.state.patty_count>0){
            this.setState({
                patty_count: this.state.patty_count - 1
                });
        }
        else{
            this.setState({
                patty_count:0
            })
        }
    }

    Add_cheeze(){
        console.log("che_ad");
        this.setState({
            cheeze_count: this.state.cheeze_count + 1
        });
      }
    Rem_cheeze(){
    console.log("rem_ch");
        if(this.state.cheeze_count>0){
            this.setState({
                cheeze_count: this.state.cheeze_count - 1
                });
        }
        else{
            this.setState({
                cheeze_count:0
            })
        }
    }
    basicCheck(tomato, onion, lettuce, sauce){
        const telements = document.getElementsByClassName("tomato");
        const oelements = document.getElementsByClassName("onion");
        const lelements = document.getElementsByClassName("lettuce");
        const selements = document.getElementsByClassName("sauce");
        let id=null;
        for (var i = 0; i < 4; i++) {
            telements[i].style.backgroundColor="white";
            oelements[i].style.backgroundColor="white";
            lelements[i].style.backgroundColor="white";
            selements[i].style.backgroundColor="white";
        }
        if(tomato==2){document.getElementById("mid_tomato").style.backgroundColor = 'yellow';}
        else if(tomato==0){document.getElementById("no_tomato").style.backgroundColor = 'yellow';}

        if(onion==2){document.getElementById("mid_onion").style.backgroundColor = 'yellow';}
        else if(onion==0){document.getElementById("no_onion").style.backgroundColor = 'yellow';}

        if(lettuce==2){document.getElementById("mid_lettuce").style.backgroundColor = 'yellow';}
        else if(lettuce==0){document.getElementById("no_lettuce").style.backgroundColor = 'yellow';}

        if(sauce==2){document.getElementById("mid_sauce").style.backgroundColor = 'yellow';}
        else if(sauce==0){document.getElementById("no_sauce").style.backgroundColor = 'yellow';}

        return;
    }

    neocheck(cla){
        console.log("neocheck");
        const elements = document.getElementsByClassName(cla);
        let id=null;
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        if(cla=="tomato"){
            if(this.state.tomato_state==0){id="no_tomato"}
            else if(this.state.tomato_state==1){id="less_tomato"}
            else if(this.state.tomato_state==2){id="mid_tomato"}
            else if(this.state.tomato_state==3){id="more_tomato"}
        }
        if(cla=="onion"){
            if(this.state.onion_state==0){id="no_onion"}
            else if(this.state.onion_state==1){id="less_onion"}
            else if(this.state.onion_state==2){id="mid_onion"}
            else if(this.state.onion_state==2){id="more_onion"}
        }
        if(cla=="lettuce"){
            if(this.state.lettuce_state==0){id="no_lettuce"}
            else if(this.state.lettuce_state==1){id="less_lettuce"}
            else if(this.state.lettuce_state==2){id="mid_lettuce"}
            else if(this.state.lettuce_state==3){id="more_lettuce"}
        }
        if(cla=="sauce"){
            if(this.state.sauce_state==0){id="no_sauce"}
            else if(this.state.sauce_state==1){id="less_sauce"}
            else if(this.state.sauce_state==2){id="mid_sauce"}
            else if(this.state.sauce_state==3){id="more_sauce"}
        }

        document.getElementById(id).style.backgroundColor = 'yellow';
    }
    menuClick(id, cla){
        //id: much_sa cla: sauce
        const elements = document.getElementsByClassName(cla);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor="white";
        }
        console.log(id);
        console.log(cla);
        document.getElementById(id).style.backgroundColor = 'yellow';
        if(id=="much_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:3});}
            else if(cla=="lettuce"){this.setState({lettuce_state:3});}
            else if(cla=="onion"){this.setState({onion_state:3});}
            else if(cla=="sauce"){this.setState({sauce_state:3});}
        }
        else if(id=="mid_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:2});}
            else if(cla=="lettuce"){this.setState({lettuce_state:2});}
            else if(cla=="onion"){this.setState({onion_state:2});}
            else if(cla=="sauce"){this.setState({sauce_state:2});}
        }
        else if(id=="less_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:1});}
            else if(cla=="lettuce"){this.setState({lettuce_state:1});}
            else if(cla=="onion"){this.setState({onion_state:1});}
            else if(cla=="sauce"){this.setState({sauce_state:1});}
        }
        else if(id=="no_"+cla){
            if(cla=="tomato"){this.setState({tomato_state:0});}
            else if(cla=="lettuce"){this.setState({lettuce_state:0});}
            else if(cla=="onion"){this.setState({onion_state:0});}
            else if(cla=="sauce"){this.setState({sauce_state:0});}
        }
    }

    basicoption(){
        console.log("hihi");
        const {name} = this.props;
        console.log(name);
        let burger_info=null;
        const burger_num=0;
        const burgerlist=(null);
        burgers.map(burger=>{
            //console.log(burger.name);
            if(burger.name==name){
                burger_info=burger;
            }
        });
        //console.log(burger_info);
        return burger_info;   
    }

    render(){
        const {name} = this.props;
        const information=this.basicoption();       //{this.basicoption.bind(this)}
        console.log(information);
        this.state.patty_count=information.patty_num;
        this.state.cheeze_count=information.cheeze;
        if(information.onion==true){this.state.onion_state=2;}
        else{this.state.onion_state=0;}

        if(information.sauce==true){this.state.sauce_state=2;}
        else{this.state.sauce_state=0;}

        if(information.tomato==true){this.state.tomato_state=2;}
        else{this.state.tomato_state=0;}

        if(information.raddish==true){this.state.lettuce_state=2;}
        else{this.state.lettuce_state=0;}
        //각각 양파/토마토/.... 가 있는지 확인해서 있으면 보통에 없으면 기본에 체크. -> 함수를 만들었는데, button이 뒤에 선언되어 있어서 안된다함;
        
        return(
            <div>
                <div  className='dialog'>{name}에서 원하시는 옵션을 선택해주세요.</div>
                <div className='selection'>
                    <img id="patty" className="photo" src={패티}></img>
                    <button id="add_but" className="button" onClick={this.Add_patty.bind(this)}>+</button>
                    <div>{this.state.patty_count}</div>
                    <button id="rem_but" className="button" onClick={this.Rem_patty.bind(this)}>-</button>
                </div>
                <div className='selection'>
                    <img id="cheeze" className="photo" src={치즈}></img>
                    <button id="add_but" className="button" onClick={this.Add_cheeze.bind(this)}>+</button>
                    <div>{this.state.cheeze_count}</div>
                    <button id="rem_but" className="button" onClick={this.Rem_cheeze.bind(this)}>-</button>
                </div>
                <div className='selection'>
                    <img id="onion" className="photo" src={양파}></img>
                    <button id="much_onion" className="onion" onClick={this.menuClick.bind(this,"much_onion","onion")}>양파 많이</button>
                    <button id="mid_onion" className="onion" onClick={this.menuClick.bind(this,"mid_onion","onion")}>양파 기본</button>
                    <button id="less_onion" className="onion" onClick={this.menuClick.bind(this,"less_onion","onion")}>양파 조금</button>
                    <button id="no_onion" className="onion" onClick={this.menuClick.bind(this,"no_onion", "onion")}>양파 없음</button>
                    
                </div>
                <div className='selection'>
                    <img id="tomato" className="photo" src={토마토}></img>
                    <button id="much_tomato" className="tomato" onClick={this.menuClick.bind(this,"much_tomato","tomato")}>토마토 많이</button>
                    <button id="mid_tomato" className="tomato" onClick={this.menuClick.bind(this,"mid_tomato","tomato")}>토마토 기본</button>
                    <button id="less_tomato" className="tomato" onClick={this.menuClick.bind(this,"less_tomato","tomato")}>토마토 조금</button>
                    <button id="no_tomato" className="tomato" onClick={this.menuClick.bind(this,"no_tomato","tomato")}>토마토 없음</button>
                </div>
                <div className='selection'>
                    <img id="lettuce" className="photo" src={양상추}></img>
                    <button id="much_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"much_lettuce","lettuce")}>양상추 많이</button>
                    <button id="mid_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"mid_lettuce","lettuce")}>양상추 기본</button>
                    <button id="less_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"less_lettuce","lettuce")}>양상추 조금</button>
                    <button id="no_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"no_lettuce","lettuce")}>양상추 없음</button>
                </div>
                <div className='selection'>
                    <img id="sauce" className="photo" src={소스}></img>
                    <button id="much_sauce" className="sauce" onClick={this.menuClick.bind(this,"much_sauce","sauce")}>소스 많이</button>
                    <button id="mid_sauce" className="sauce" onClick={this.menuClick.bind(this,"mid_sauce","sauce")}>소스 기본</button>
                    <button id="less_sauce" className="sauce" onClick={this.menuClick.bind(this,"less_sauce","sauce")}>소스 조금</button>
                    <button id="no_sauce" className="sauce" onClick={this.menuClick.bind(this,"no_sauce","sauce")}>소스 없음</button>
                </div>
                
                <div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <button>단품</button><button>세트</button>
            </div>
        )
    }
}
export default OptionChange;