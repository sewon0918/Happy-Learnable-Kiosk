import React from 'react';
import './index.css';
import 치즈 from '../../images/cheeze.png';
import 패티 from '../../images/patty.png';
import 양파 from '../../images/onion.png';
import 토마토 from '../../images/tomato.png';
import 양상추 from '../../images/lettuce.png';
import 소스 from '../../images/sauce.png';
import Setmenu from '../Setmenu';
import Payment from '../Payment'
import HowMany from '../HowMany'

class OptionChange extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            name : this.props.name,
            patty_count:this.props.patty_count,
            cheeze_count:this.props.cheeze_count,
            onion_state:this.props.onion_state,
            tomato_state:this.props.tomato_state,
            lettuce_state:this.props.lettuce_state,
            sauce_state:this.props.sauce_state,
            set: 0,
            single_price: this.props.single_price,
            set_price: this.props.set_price,
            fin:false,
            show1:false,
            show2:false
        }
    }
    componentDidMount(){
        this.basicCheck(this.state.tomato_state, this.state.onion_state, this.state.lettuce_state, this.state.sauce_state)
        setTimeout(()=>{
            this.setState({show1: true})
         },200)
         setTimeout(()=>{
            this.setState({show2: true})
         },500)
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
        /*const telements = document.getElementsByClassName("tomato");
        const oelements = document.getElementsByClassName("onion");
        const lelements = document.getElementsByClassName("lettuce");
        const selements = document.getElementsByClassName("sauce");
        for (var i = 0; i < 4; i++) {
            telements[i].style.backgroundColor="white";
            oelements[i].style.backgroundColor="white";
            lelements[i].style.backgroundColor="white";
            selements[i].style.backgroundColor="white";
        }
        if(tomato===2){document.getElementById("mid_tomato").style.backgroundColor = 'yellow';}
        else if(tomato===0){document.getElementById("no_tomato").style.backgroundColor = 'yellow';}

        if(onion===2){document.getElementById("mid_onion").style.backgroundColor = 'yellow';}
        else if(onion===0){document.getElementById("no_onion").style.backgroundColor = 'yellow';}

        if(lettuce===2){document.getElementById("mid_lettuce").style.backgroundColor = 'yellow';}
        else if(lettuce===0){document.getElementById("no_lettuce").style.backgroundColor = 'yellow';}

        if(sauce===2){document.getElementById("mid_sauce").style.backgroundColor = 'yellow';}
        else if(sauce===0){document.getElementById("no_sauce").style.backgroundColor = 'yellow';}

        return;*/
    }

    neocheck(){
        let tom="";
        let lett="";
        let oni="";
        let hot_sauce="";
        let pat="패티 "+this.state.patty_count+"장";
        let che="치즈 "+this.state.cheeze_count+"장";
        if(this.state.tomato_state==0){
            tom="토마토 없음"
        }else if(this.state.tomato_state==1){
            tom="토마토 적게"
        }else if(this.state.tomato_state==2){
            tom="토마토 보통"
        }else if (this.state.tomato_state==3){
            tom="토마토 많이"
        }
        if(this.state.lettuce_state==0){
            lett="양상추 없음"
        }else if(this.state.lettuce_state==1){
            lett="양상추 적게"
        }else if(this.state.lettuce_state==2){
            lett="양상추 보통"
        }else if (this.state.lettuce_state==3){
            lett="양상추 많이"
        }
        if(this.state.onion_state==0){
            oni="양파 없음"
        }else if(this.state.onion_state==1){
            oni="양파 적게"
        }else if(this.state.onion_state==2){
            oni="양파 보통"
        }else if (this.state.onion_state==3){
            oni="양파 많이"
        }
        if(this.state.sauce_state==0){
            hot_sauce="소스 없음"
        }else if(this.state.sauce_state==1){
            hot_sauce="소스 적게"
        }else if(this.state.sauce_state==2){
            hot_sauce="소스 보통"
        }else if (this.state.sauce_state==3){
            hot_sauce="소스 많이"
        }
    
        return <>{pat}    {che}<br></br>{tom}    {lett}<br></br>{oni}    {hot_sauce}<br></br>을 주문하셨습니다.</>;
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
        if(id==="much_"+cla){
            if(cla==="tomato"){this.setState({tomato_state:3});}
            else if(cla==="lettuce"){this.setState({lettuce_state:3});}
            else if(cla==="onion"){this.setState({onion_state:3});}
            else if(cla==="sauce"){this.setState({sauce_state:3});}
        }
        else if(id==="mid_"+cla){
            if(cla==="tomato"){this.setState({tomato_state:2});}
            else if(cla==="lettuce"){this.setState({lettuce_state:2});}
            else if(cla==="onion"){this.setState({onion_state:2});}
            else if(cla==="sauce"){this.setState({sauce_state:2});}
        }
        else if(id==="less_"+cla){
            if(cla==="tomato"){this.setState({tomato_state:1});}
            else if(cla==="lettuce"){this.setState({lettuce_state:1});}
            else if(cla==="onion"){this.setState({onion_state:1});}
            else if(cla==="sauce"){this.setState({sauce_state:1});}
        }
        else if(id==="no_"+cla){
            if(cla==="tomato"){this.setState({tomato_state:0});}
            else if(cla==="lettuce"){this.setState({lettuce_state:0});}
            else if(cla==="onion"){this.setState({onion_state:0});}
            else if(cla==="sauce"){this.setState({sauce_state:0});}
        }
    }

    setmenu(){
        this.setState({set: 1});
    }
    singlemenu(){
        this.setState({set: -1});
    }

    confirm(){
        this.setState({fin:true});
    }
    render(){
        const {name} = this.props;
        let intro=null;
        let options=null;
        let ifset=null;
        let next_step=null;
        //let result=this.neocheck();
        console.log(this.state.set_price);
        if(this.state.fin){
            //options=<div className='dialog' id='answer'>{result}</div>;
            next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
            <div className="dialog2"><button className='button' onClick={this.singlemenu.bind(this)}>단품</button><button className='button' onClick={this.setmenu.bind(this)}>세트</button></div></>

            if(this.state.set>0){
                ifset=<Setmenu set_price={this.state.set_price} name={this.state.name}></Setmenu>
            }
            if(this.state.set<0){
                ifset=<HowMany price={this.state.single_price} menu={this.state.name} drinkOrSide={"Burger"}></HowMany>
            }
        }
        if(this.state.show1){
            intro=<><div  className='dialog'>{name}에서 원하시는 옵션을 선택해주세요.</div></>
        }
        if(this.state.show2){
            options=<>
            <div>
                <table width='100%'>
                    <tr>
                        <td className='selection'>
                            <tr rowspan="3">
                                <td></td>
                                <td><img id="patty" className="photo" src={패티} alt="menu_class"></img><div>패티</div></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><button id="add_but" className="button" onClick={this.Add_patty.bind(this)}>+</button></td>
                                <td text-align="center"><div>{this.state.patty_count}</div></td>
                                <td ><button id="rem_but" className="button" onClick={this.Rem_patty.bind(this)}>-</button></td>
                            </tr>
                        </td>
                        <td className='selection'>
                            <tr rowspan="3">
                                <td></td>
                                <td><img id="cheeze" className="photo" src={치즈} alt="menu_class"></img><div>치즈</div></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><button id="add_but" className="button" onClick={this.Add_cheeze.bind(this)}>+</button></td>
                                <td><div>{this.state.cheeze_count}</div></td>
                                <td><button id="rem_but" className="button" onClick={this.Rem_cheeze.bind(this)}>-</button></td>
                            </tr> 
                        </td>
                        <td className='selection'>
                            <tr><img id="onion" className="photo" src={양파} alt="menu_class"></img><div>양파</div></tr>
                            <tr margin="auto">
                                <button id="much_onion" className="onion" onClick={this.menuClick.bind(this,"much_onion","onion")}>많이</button>
                                <button id="less_onion" className="onion" onClick={this.menuClick.bind(this,"less_onion","onion")}>조금</button>
                                <button id="mid_onion" className="onion" onClick={this.menuClick.bind(this,"mid_onion","onion")}>기본</button>
                                <button id="no_onion" className="onion" onClick={this.menuClick.bind(this,"no_onion", "onion")}>없음</button>      
                            </tr>
                        </td>
                        <td className='selection'>
                            <tr><img id="tomato" className="photo" src={토마토} alt="menu_class"></img><div>토마토</div></tr>
                            <tr>
                                <button id="much_tomato" className="tomato" onClick={this.menuClick.bind(this,"much_tomato","tomato")}>많이</button>
                                <button id="mid_tomato" className="tomato" onClick={this.menuClick.bind(this,"mid_tomato","tomato")}>기본</button>
                                <button id="less_tomato" className="tomato" onClick={this.menuClick.bind(this,"less_tomato","tomato")}>조금</button>
                                <button id="no_tomato" className="tomato" onClick={this.menuClick.bind(this,"no_tomato","tomato")}>없음</button>
                            </tr>
                            
                        </td>
                        <td className='selection'>
                            <tr><img id="lettuce" className="photo" src={양상추} alt="menu_class"></img><div>양상추</div></tr>
                            <tr>
                                <button id="much_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"much_lettuce","lettuce")}>많이</button>
                                <button id="mid_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"mid_lettuce","lettuce")}>기본</button>
                                <button id="less_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"less_lettuce","lettuce")}>조금</button>
                                <button id="no_lettuce" className="lettuce" onClick={this.menuClick.bind(this,"no_lettuce","lettuce")}>없음</button>
                            </tr>
                            
                        </td>
                        <td className='selection'>
                            <tr><img id="sauce" className="photo" src={소스} alt="menu_class"></img><div>소스</div></tr>
                            <tr>
                                <button id="much_sauce" className="sauce" onClick={this.menuClick.bind(this,"much_sauce","sauce")}>많이</button>
                                <button id="mid_sauce" className="sauce" onClick={this.menuClick.bind(this,"mid_sauce","sauce")}>기본</button>
                                <button id="less_sauce" className="sauce" onClick={this.menuClick.bind(this,"less_sauce","sauce")}>조금</button>
                                <button id="no_sauce" className="sauce" onClick={this.menuClick.bind(this,"no_sauce","sauce")}>없음</button>
                            </tr>
                        </td>
                        </tr>
                </table>
                <button className="confirm" onClick={this.confirm.bind(this)}>확인</button>
            </div>
            
            </>
        }
        
        
        
        return(
            <div>
                {intro}
                {options}
                {next_step}
                {ifset}
            </div>
        )
    }
}
export default OptionChange;