import React from 'react';
import './index.css';
import UploadOrder from '../UploadOrder';
import firebase from '../../Firebase';

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false, show2: false, paywith:'', price: this.props.total_price, phone_number:''};
        this.card = this.card.bind(this);
        this.cash = this.cash.bind(this);
        this.getphonenum = this.getphonenum.bind(this);
    }
    componentDidMount(){
        setTimeout(()=>{
           this.setState({show: true})
        },500)
        setTimeout(()=>{
            this.setState({show2: true})
        },1000) 
        this.getphonenum();
     }
    
    getphonenum(){
        var p = '';
        firebase.database().ref('phonenumber/').on('value', function(snapshot){
            var myValue = snapshot.val();
            if(myValue!=null){
                var keyList = Object.keys(myValue);
            }
            if(keyList!=null){
                p = myValue[0];
            }
        })
        setTimeout(() => {
            console.log(p);
            this.setState({phone_number:p});
        }, 1000);
    }

    card(){
        this.setState({paywith: '카드'});
    }

    cash(){
        this.setState({paywith: '현금'});
    }

    render(){
        const paywith = this.state.paywith;
        var price=0;
        var choice=<> <div className="dialog2_cart"><button className="button" onClick={this.card}>카드</button><button className="button" onClick={this.cash}>현금</button></div></>;
        let last = null;
        let upload = null;
        let check = 0;
        if (paywith !== ''){
            choice=null;
            last = <div className = 'dialog_cart'>{paywith}(으)로 결제합니다.</div>
            upload = <UploadOrder phone_number={this.state.phone_number}/>
        }

        let pricelist = null;
        firebase.database().ref('menu/').on('value', function(snapshot) {
  
            var myValue = snapshot.val();
            if (myValue!=null){
                var keyList = Object.keys(myValue)
            }
            if (keyList != null){
                pricelist = keyList.map((i) =>{
                    return (Number(myValue[i].price * myValue[i].num))
                });
                for (var i = 0; i < pricelist.length; i++) {
                    price += pricelist[i];
                }
            }
        })
        return(
            <div className='finishing'>
                <div className="dialog_cart" >총 {price}원 입니다.</div>
                {this.state.show && <div className = 'dialog_cart'>결제 방법을 선택해주세요.</div>}
                {this.state.show2 && <div>{choice}</div>}
                {last}
                {upload}
            </div>
        )
    }
}

export default Payment;