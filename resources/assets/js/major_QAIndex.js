import React, { Component } from 'react';
import {Card,CardDeck,Container,Row,CardGroup} from 'react-bootstrap';
import './css/major_QAIndex.css';
import Icon from './icon';
class major_QAIndex extends Component {
    constructor(props) {
    super(props);
    this.state = {
      row:1,
      cardWidth:"100vw",
      cardHeight:"auto",
      cardPadding:"0rem",
      btnHeight:"15rem",
      cardTextHeight:"auto",
      wordsNumber: 35,
    };
    this.sponCard=this.sponCard.bind(this);
    this.sponSingleCard=this.sponSingleCard.bind(this);
    this.sponManyCard=this.sponManyCard.bind(this);
    this.changeRowCard=this.changeRowCard.bind(this);
    this.handleOpenContent=this.handleOpenContent.bind(this);
    //this.handleCardSize=this.handleCardSize.bind(this);
  }
  
  handleOpenContent(id){
    this.props.onClick(id);
  }

  //handleCardSize(is_mobile){
    //if(is_mobile)
      //this.setState({btnHeight:"11rem",cardWidth:"100vw",cardHeight:"16.5rem",cardPadding:"0rem",cardTextHeight:"2.06rem",wordsNumber: 20});
    //else
      //this.setState({btnHeight:"15rem",cardWidth:"20rem",cardHeight:"20rem",cardPadding:"3rem",cardTextHeight:"6.06rem",wordsNumber: 35});
  //}

  componentDidMount() {
    this.changeRowCard();
    window.addEventListener('resize', this.changeRowCard);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.changeRowCard);
  }

  changeRowCard(){
    //if(window.innerWidth>1400){
      //this.setState({row:5});
      //this.props.handleRWD(false);
      //this.handleCardSize(false);
    //}
    //else if(window.innerWidth>=1140){
      //this.setState({row:4});
      //this.props.handleRWD(false);
      //this.handleCardSize(false);
    //}
    //else if(window.innerWidth>=870){
      //this.setState({row:3});
     /// this.props.handleRWD(false);
      //this.handleCardSize(false);
    //}
    //else if(window.innerWidth>=596){
      //this.setState({row:2});
      //this.props.handleRWD(true);
      //this.handleCardSize(false);
    //}
    //else{
      //this.setState({row:1});
      //this.handleCardSize(true);
      //this.props.handleRWD(true);
    //}
  }



  sponCard(){
    if(this.props.is_fetch){
    const datas=this.props.datas;
    var output=[];
    for(var i=0;i<=datas.length/1;++i){
        output.push(this.sponManyCard(i,datas));
    }
    return <div style={{ width: '100vw',maxWidth:"100%" }}>{output}</div >;
  }
    else
      return <Icon style={{ position: 'absolute',left: "40%",top: "200px" }}/> ;
  }

  sponSingleCard(number,datas){
    var comment=datas[number]["answer"];
    return(
      <Card style={{ width: this.state.cardWidth,height:"auto",maxWidth:"100%" }}>
      <Card.Body style={{width:"100vw",height:"auto",maxWidth:"100%"}}>
      <Card.Title style={{fontSize: '2.5rem',height:"auto",maxWidth: "87%" }}><div className="circle" style={{fontSize: '2.5rem',lineHeight:"4.5rem",textAlign:"center",color:"white",height:"50px",width:"50px",borderRadius:"50px",backgroundColor: "rgb(229,68,109)"}}>{"#"+datas[number]["id"]}</div><div style={{position:"relative",top:"-50px",left:"60px",maxWidth: "95%",textAlign:"justify"}}>{datas[number]["question"]}</div></Card.Title>
      <button className="showBtn" onClick={this.handleOpenContent.bind(this,datas[number]["id"])} style={{ position:"absolute",top:"0",left:"0",width:"100%",height:"75%",backgroundColor: "rgba(0, 0, 0,0)",border: "none",outline:"none"}}></button>
      <Card.Link style={{ color: 'rgb(30,144,255)' }}>{"#"+datas[number]["id"]}</Card.Link>
      </Card.Body>
      </Card>
    );
  }

  sponManyCard(numberRow,datas){
      var output=[];
      for(var i=0;numberRow*this.state.row+i<datas.length && i<this.state.row;++i)
        output.push(this.sponSingleCard(datas.length-numberRow*this.state.row-i-1,datas));
      if(this.state.row>1)
        return <Row style={{paddingBottom:this.state.cardPadding,maxWidth:"100%" }}><CardDeck style={{ height:this.state.cardHeight }}>{output}</CardDeck></Row>;
      else
        return <Row style={{paddingBottom:this.state.cardPadding,maxWidth:"100%",marginLeft:"0", marginRight:"0"}}>{output}</Row>
  }


  
  render() {
    return (
      <div className="QAIndex">     
          {this.sponCard()}
      </div>
    );
  }
}

export default major_QAIndex;