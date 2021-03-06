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
            show2:false,
            yes:false,
            clicked: false,
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({show1: true})
         },2000)
         setTimeout(()=>{
            this.setState({show2: true})
         },4000)
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

    Add_state(cla, state){
        if(state<3){
            if(cla=="onion"){this.setState({onion_state: this.state.onion_state+1});}
            if(cla=="tomato"){this.setState({tomato_state: this.state.tomato_state+1});}
            if(cla=="sauce"){this.setState({sauce_state: this.state.sauce_state+1});}
            if(cla=="lettuce"){this.setState({lettuce_state: this.state.lettuce_state+1});}
        }
        
    }
    Rem_state(cla, state){
        if(state>0){
            if(cla=="onion"){this.setState({onion_state: this.state.onion_state-1});}
            if(cla=="tomato"){this.setState({tomato_state: this.state.tomato_state-1});}
            if(cla=="sauce"){this.setState({sauce_state: this.state.sauce_state-1});}
            if(cla=="lettuce"){this.setState({lettuce_state: this.state.lettuce_state-1});}
        }
    }

    neocheck(num){
        let hot_sauce
        if(num==0){
            hot_sauce="없음"
        }else if(num==1){
            hot_sauce="적게"
        }else if(num==2){
            hot_sauce="보통"
        }else if (num==3){
            hot_sauce="많이"
        }
    
        return hot_sauce;
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
    yesoption(){
        this.setState({yes:true, clicked:true});
    }
    nooption(){
        console.log("hi");
        this.setState({yes:false, clicked:true});
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
        let confirm=null;
        let ask=null;

        if(this.state.show1){
            if(this.state.clicked){
                if(this.state.yes){
                    ask=<><div className="dialog">옵션(패티 개수 등)을 바꾸시겠습니까?</div>
                    <div className="dialog2" >옵션 변경을 선택하셨습니다. 설정을 마치시면 확인 버튼을 눌러주세요.</div>
                   </>
                }
                else{
                    ask=<><div className="dialog">옵션(패티 개수 등)을 바꾸시겠습니까?</div>
                    <div className="dialog" id="answer">아니요</div>
                   </>
                }
            }
            else{
                ask=<><div className="dialog">옵션(패티 개수 등)을 바꾸시겠습니까?</div>
                     <div className="dialog"> <button className='button11' onClick={this.yesoption.bind(this)}>네</button><button className='button11' onClick={this.nooption.bind(this)}>아니요</button></div>
                    </>
            }
            
        }

        if(this.state.yes){
            if(this.state.fin){
                confirm=null;
                options=<>
                    <div  className='dialog_long'>{name}에서 원하시는 옵션을 선택해주세요.</div>
                    <div className="dialog2">
                        <table width='100%' text-align="center" >
                            <tr >
                                <td className='selection'>
                                        <img id="patty" className="photo" src={패티} alt="menu_class"></img><div>패티</div>
                                        <div>{this.state.patty_count}장</div>
                                </td>
                                <td className='selection'>
                                        <img id="cheeze" className="photo" src={치즈} alt="menu_class"></img><div>치즈</div>
                                        <div>{this.state.cheeze_count}장</div>
                                </td>
                                <td className='selection'>
                                        <img id="onion" className="photo" src={양파} alt="menu_class"></img><div>양파</div>
                                        <div>{this.neocheck(this.state.onion_state)}</div>
                                </td>
                            </tr>
                            <tr>
                                <td className='selection'>
                                       <img id="tomato" className="photo" src={토마토} alt="menu_class"></img><div>토마토</div>
                                        <div>{this.neocheck(this.state.tomato_state)}</div>
                                </td>
                                <td className='selection'>
                                        <img id="lettuce" className="photo" src={양상추} alt="menu_class"></img><div>양상추</div>
                                        <div>{this.neocheck(this.state.lettuce_state)}</div>
                                </td>
                                <td className='selection'>
                                       <img id="sauce" className="photo" src={소스} alt="menu_class"></img><div>소스</div>
                                        <div>{this.neocheck(this.state.sauce_state)}</div>
                                </td>
                                </tr>
                        </table>
                    </div>
                    
                </>

                console.log(this.state.set);
                if(this.state.set>0){
                    next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                    <div className="dialog"  id="answer">세트</div>
                    </>
                    ifset=<Setmenu set_price={this.state.set_price} name={this.state.name}></Setmenu>
                }
                else if(this.state.set<0){
                    next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                    <div className="dialog"  id="answer">단품</div>
                    </>
                    ifset=<HowMany price={this.state.single_price} menu={this.state.name} drinkOrSide={"burgers"}></HowMany>
                }
                else if(this.state.set==0){
                    next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                    <div id="set" ><button className='button11' onClick={this.singlemenu.bind(this)}>단품</button><button className='button11' onClick={this.setmenu.bind(this)}>세트</button></div></>
                }
            }
            else{
                confirm=<button id="select" onClick={this.confirm.bind(this)}>확인</button>
                options=<>
                <div className='dialog2'>
                    <table width='100%'>
                        <tr>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="patty" className="photo" src={패티} alt="menu_class"></img><div>패티</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td ><button id="rem_but" className="button111" onClick={this.Rem_patty.bind(this)}>-</button></td>
                                    <td text-align="center"><div>{this.state.patty_count}장</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_patty.bind(this)}>+</button></td>
                                </tr></table>
                            </td>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="cheeze" className="photo" src={치즈} alt="menu_class"></img><div>치즈</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td><button id="rem_but" className="button111" onClick={this.Rem_cheeze.bind(this)}>-</button></td>
                                    <td><div>{this.state.cheeze_count}장</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_cheeze.bind(this)}>+</button></td>
                                </tr> </table>
                            </td>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="onion" className="photo" src={양파} alt="menu_class"></img><div>양파</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td ><button id="rem_but" className="button111" onClick={this.Rem_state.bind(this,"onion", this.state.onion_state)}>-</button></td>
                                    <td text-align="center"><div>{this.neocheck(this.state.onion_state)}</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_state.bind(this, "onion", this.state.onion_state)}>+</button></td>
                                </tr></table>
                            </td>
                        </tr>
                        <tr>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="tomato" className="photo" src={토마토} alt="menu_class"></img><div>토마토</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td ><button id="rem_but" className="button111" onClick={this.Rem_state.bind(this,"tomato", this.state.tomato_state)}>-</button></td>
                                    <td text-align="center"><div>{this.neocheck(this.state.tomato_state)}</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_state.bind(this, "tomato", this.state.tomato_state)}>+</button></td>
                                </tr></table>
                            </td>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="lettuce" className="photo" src={양상추} alt="menu_class"></img><div>양상추</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td ><button id="rem_but" className="button111" onClick={this.Rem_state.bind(this,"lettuce", this.state.lettuce_state)}>-</button></td>
                                    <td text-align="center"><div>{this.neocheck(this.state.lettuce_state)}</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_state.bind(this, "lettuce", this.state.lettuce_state)}>+</button></td>
                                </tr></table>
                            </td>
                            <td className='selection'>
                                <table align="center">
                                <tr rowspan="3">
                                    <td></td>
                                    <td><img id="sauce" className="photo" src={소스} alt="menu_class"></img><div>소스</div></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td ><button id="rem_but" className="button111" onClick={this.Rem_state.bind(this,"sauce", this.state.sauce_state)}>-</button></td>
                                    <td text-align="center"><div>{this.neocheck(this.state.sauce_state)}</div></td>
                                    <td><button id="add_but" className="button111" onClick={this.Add_state.bind(this, "sauce", this.state.sauce_state)}>+</button></td>
                                </tr></table>
                            </td>
                            </tr>
                    </table>
                </div>
                
            </>
        }
        }
        if(!(this.state.yes) && this.state.clicked){
            if(this.state.set>0){
                next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <div className="dialog" id="answer">세트</div>
                </>
                ifset=<Setmenu set_price={this.state.set_price} name={this.state.name}></Setmenu>
            }
            else if(this.state.set<0){
                next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <div className="dialog"  id="answer">단품</div>
                </>
                ifset=<HowMany price={this.state.single_price} menu={this.state.name} drinkOrSide={"burgers"}></HowMany>
            }
            else if(this.state.set==0){
                next_step= <><div  className='dialog'>단품과 세트 중에 무엇을 고르시겠습니까?</div>
                <div id="set" ><button className='button11' onClick={this.singlemenu.bind(this)}>단품</button><button className='button11' onClick={this.setmenu.bind(this)}>세트</button></div></>
            }
        }

        return(
            <div>
                {ask}
                {options}
                {confirm}
                {next_step}
                {ifset}
            </div>
        )
    }
}
export default OptionChange;