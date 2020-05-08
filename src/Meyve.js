import React, { Component } from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import vegetables from './vegetables.json';

class Meyve extends Component {

      
      increment = (index) =>{
        let localItems = [...vegetables.items];
        localItems[index].counter += 1;
        this.setState({
          ...this.state,
          items:[...localItems]
        })
      }
    
      decrement = (index) =>{
        let localItems = [...vegetables.items];
        localItems[index].counter -= 1;
        this.setState({
          ...this.state,
          items:[...localItems]
        })
      }

  render() {
    const vegetables = require('./vegetables');
    return (
      vegetables.items.map((item,index)=>{
        return (
            <div className="meyve-div">
              <div className="" style={{ marginTop: '50px' }}>
              <Card className="" style={{ width:'250px', filter: 'grayscale(100%)' }}>
                <Card.Img className="cardImage" variant="top" src={item.image} style={{ width: '200px',marginLeft:'30px'}}/>  
                <Card.Body>
                  <Card.Title style={{ textAlign: 'center'  }}>{item.name} - 1 KG 
                  </Card.Title>
                  <Card.Text  style={{ textAlign: 'center'  }}>
                  {item.value}
                  </Card.Text>
                  <div className="ToplamaKısmı" style={{ textAlign: 'center' , display:' inline-flex'}}>
                    <Button style={{marginRight: '30px'}} onClick={()=>item.counter && this.decrement(index)}>-</Button>
                      <h2>{item.counter}</h2>
                    <Button style={{marginLeft: '30px'}} onClick={()=>this.increment(index)}>+</Button>
                  </div>
                  <div>
                  </div>
                  <div className="butondiv">
                  <Button type="submit" className="btn btn-success" style={{backgroundColor:'#2dc44d',borderColor:'#2dc44d'}}>
                  Add to Card
                </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        )
      }):null
    )

  }
} 

export default Meyve;





// import React, { Component } from 'react';
// import './App.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import vegetables from './vegetables.json';

// class Meyve extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//         items:[],

//       };
//   }
      
//       increment = (index) =>{
//         let localItems = [...vegetables.items];
//         localItems[index].counter += 1;
//         this.setState({
//           ...this.state,
//           items:[...localItems]
//         })
//       }
    
//       decrement = (index) =>{
//         let localItems = [...vegetables.items];
//         localItems[index].counter -= 1;
//         this.setState({
//           ...this.state,
//           items:[...localItems]
//         })
//       }

//   render() {
//     const vegetables = require('./vegetables');
//     return (
//         vegetables.items.map((item,index)=>{
//           return (
//             <div class="meyve-div">
//               <div class="" style={{ marginTop: '50px' }}>
//               <Card className="" style={{ width:'250px', filter: 'grayscale(100%)' }}>
//                 <Card.Img className="cardImage" variant="top" src={item.image} style={{ width: '200px',marginLeft:'30px'}}/>  
//                 <Card.Body>
//                   <Card.Title style={{ textAlign: 'center'  }}>{item.name} - 1 KG 
//                   </Card.Title>
//                   <Card.Text  style={{ textAlign: 'center'  }}>
//                   {item.value}
//                   </Card.Text>
//                   <div className="ToplamaKısmı" style={{ textAlign: 'center' , display:' inline-flex'}}>
//                     <Button style={{marginRight: '30px'}} onClick={()=>item.counter && this.decrement(index)}>-</Button>
//                       <h2 value="1">{item.counter}</h2>
//                     <Button style={{marginLeft: '30px'}} onClick={()=>this.increment(index)}>+</Button>
//                   </div>
//                   <div className="butondiv">
//                   <Button type="submit" class="btn btn-success" style={{backgroundColor:'#2dc44d',borderColor:'#2dc44d'}}>
//                   Add to Card
//                 </Button>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           </div>
//     )
//       }):null
//     )

//   }
// } 

// export default Meyve;































// import './App.css';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

// class Meyve extends Component {
//   constructor(props) {
//     super(props);
//       this.state = {
//       items:[{
//         name:"Broccoli",
//         value:10,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/broccoli.jpg'
//       },{
//         name:"Cauliflower",
//         value:20,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg'
//       },{
//         name:"Beetroot",
//         value:30,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beetroot.jpg'
//       },{
//         name:"Carrots",
//         value:40,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/carrots.jpg'
//       },{
//         name:"Tomato",
//         value:40,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/tomato.jpg'
//       },{
//         name:"Beans",
//         value:40,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/beans.jpg'
//       },{
//         name:"Brinjal",
//         value:40,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620045/dummy-products/brinjal.jpg'
//       },{
//         name:"Cucumber",
//         value:40,
//         counter:0,
//         image:'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cucumber.jpg'
//     }]
//       };
//   }
      
//       increment = (index) =>{
//         let localItems = [...this.state.items];
//         localItems[index].counter += 1;
//         this.setState({
//           ...this.state,
//           items:[...localItems]
//         })
//       }
    
//       decrement = (index) =>{
//         let localItems = [...this.state.items];
//         localItems[index].counter -= 1;
//         this.setState({
//           ...this.state,
//           items:[...localItems]
//         })
//       }

//   render() {
//     const { classes } = this.props;
//     return (
//       this.state.items.length ? this.state.items.map((item,index)=>{
//         return (
//           <div class="meyve-div">
//             <div class="" style={{ marginTop: '50px' }}>
//             <Card className="" style={{ width:'250px', filter: 'grayscale(100%)' }}>
//               <Card.Img className="cardImage" variant="top" src={item.image} style={{ width: '200px',marginLeft:'30px'}}/>  
//               <Card.Body>
//                 <Card.Title style={{ textAlign: 'center'  }}>{item.name} - 1 KG 
//                 </Card.Title>
//                 <Card.Text  style={{ textAlign: 'center'  }}>
//                 {item.value}
//                 </Card.Text>
//                 <div className="ToplamaKısmı" style={{ textAlign: 'center' , display:' inline-flex'}}>
//                   <Button style={{marginRight: '30px'}} onClick={()=>item.counter && this.decrement(index)}>-</Button>
//                     <h2 value="1">{item.counter}</h2>
//                   <Button style={{marginLeft: '30px'}} onClick={()=>this.increment(index)}>+</Button>
//                 </div>
//                 <div className="butondiv">
//                 <Button type="button" class="btn btn-success" style={{backgroundColor:'#2dc44d',borderColor:'#2dc44d'}}>
//                 Add to Card
//               </Button>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//     )
//       }):null
//     )

//   }
// } 

// export default Meyve;
// //