import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import NavBar from "./components/Navbar";
import Banner from './components/Banner';
import CartsContainer from "./components/CartsContainer";
import LoginPage from "./pages/Login";
import Homepage from "./pages/Homepage";
import AddCartPage from "./pages/AddCart";
import SpecificCart from "./pages/SpecificCart";
import SingleCategory from "./pages/SingleCategory";
import API from "./utils/API";
import Carts from './components/Carts';
import { Link } from "react-router-dom";


const fbAppId = '141088316668315';
let fbCookie = document.cookie;

const divStyle = {
  'position': 'relative',
  'top':'30px',
  'width':'100%',
  'padding': '50px 0',
  'background-color': 'transparent',
  'height': '270px',
  'overflow-x': 'auto',
  'overflow-y': 'hidden',
  // 'background-color': 'rgba(0, 35, 102, 0.9)'
}

const middleStyle = {
  'position': 'absolute',
  'top':'0',
  'left':'350px',
  'width': '1445px',
};

const homepageStyle = {
  'width':'100%'
};

const overflowStyle = {
  'width':'200%'
};

const addCartInputStyle = {
  'width':'288px'
};

const button = {
  'position': 'absolute',
  'left' : '3px',
  'top' : '3px',
  'opacity' : 1,
  'background-color' : 'black',
  'color': "white"
};

const relative = {
  'position': 'relative'
};


//Put all login fb cookie checking here?
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isLoggedIn: false,
      testData: 'Initial Data',
      userId:'999999999',
      name:'Jane Doe',
      profileImg:'',
      userCarts: [],
      clickedCart: []
    };
  }


  // RETRIEVES USER DATA FROM LOGIN PAGE
  pullUserData(dataFromLogin){
    console.log('Data From Login:', dataFromLogin);

    if(dataFromLogin === undefined){
      console.log('Should change this to keep user data forever, but we can do that with a server up');
    } else {
      //Set State, does not immediately set state.
      // OPTIONS: SETSTATE HAS BUILT IN CALLBACK OR USE componentDidUpdate
      this.setState({ 
        userId: dataFromLogin.id,
        name: dataFromLogin.name, 
        profileImg: dataFromLogin.picture.data.url
      });
    }
  }

  checkIfLoggedIn(){
    fbCookie = document.cookie;

    console.log('FB Login Cookie:', fbCookie);
    // reuse to check cookies for other parts of page
    // NEED CALLBACK FOR AFTER COOKIES CHANGE
    if (fbCookie === "fblo_" + fbAppId + "=y"){ //OR UNDEFINED
      //IF NOT LOGGED IN LOGIC
      console.log('Log Out Successful');
      this.setState({ isLoggedIn: false });
    } else {
      // IF ALREADY LOGGED IN LOGIC
      console.log('Log In Successful');
      this.setState({ isLoggedIn: true });
    }
  }
  //NEED LOGIC FOR WHEN LOGOUT, TURNS isLoggedIn STATE TO FALSE

  componentWillMount(){
    this.checkIfLoggedIn();
  }

  componentDidMount(){
    this.pullUserData();
    this.loadUserCarts();
  }

  componentDidUpdate(){
    console.log('COMPONENT DID UPDATE:',this.state)
  }

  loadUserCarts = () => {
    API.getUserCarts()
      .then(res => 
        this.setState({ userCarts: res.data}))

      .catch(err => console.log(err));
  };

  deleteCart = (id) => {
    API.deleteCart(id)
      .then(res => {
        console.log(res.data);
        let newCartArray = this.state.userCarts.filter(function(item) {
          return item._id !== res.data._id;
        })

        this.setState({ userCarts: newCartArray});
      })
      .catch(err => console.log(err));
  };
 

  render(){
    if(this.state.isLoggedIn === false){
      //If not logged in, forces any URL typed after / to change to /login
      window.history.pushState('', '', '/login');
      return (
        <LoginPage 
          // wantedState={this.state.isLoggedIn} 
          cWM={()=>this.componentWillMount()}
          passDataFromLoginToApp={this.pullUserData.bind(this)}
        />
      )
    } else {
      return (
        <Router>
          <div>
            <Redirect to="/home" />
            <NavBar cWM ={()=>this.componentWillMount()}/>
            <div style={divStyle}>
              <div style={overflowStyle}>
                <div style={homepageStyle}>
                  <Carts 
                    description="Add Cart +" 
                  />
                </div>
                  {this.state.userCarts.map(cart => (
                  <div className="item" data-id={cart._id}>
                    <Link to={"/single/" + cart._id}>
                      <div>
                        <img className="item item-image" 
                          src={cart.bg_url} 
                        />
                        <div className="description" style={this.style}>{cart.cart_name}</div>

                      </div>

                    </Link>
                    <button style={button} onClick={() => this.deleteCart(cart._id)}>Remove</button>
                  </div>
                  ))}
                </div>
              </div>
              <div>
                <Switch>
                  <Route 
                    exact path="/home" 
                    render = {() => 
                      <Homepage 
                        user={this.state.name}
                        profileSrc= {this.state.profileImg}
                      /> }
                  />
                  <Route exact path="/add" component={AddCartPage} />
                  <Route exact path="/single/:id" component={SpecificCart} />
                </Switch> 
              </div>
            </div>
        </Router>  
      )
    }
  }
}


export default App;