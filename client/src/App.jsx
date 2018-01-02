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

// TEAMNAME: WNATN, MAHIRA,AIRHAM,ARMAIH, harmia
// NAMES: Shopkeep, Vender
// Tyrian Purple + Royal Blue

const fbAppId = '141088316668315';
let fbCookie = document.cookie;

const divStyle = {
  'position': 'relative',
  'top':'80px',
  'width':'320px',
  'padding': '50px 50px 30px 30px',
  'background-color': 'rgba(102, 2, 60, 0.85)',
  // 'background-color': 'rgba(0, 35, 102, 0.9)'
}

const middleStyle = {
  'position': 'absolute',
  'top':'0',
  'left':'350px',
  'padding': '50px',
  'background-color': 'rgba(102, 2, 60, 0.85)',
  // 'background-color': 'rgba(0, 35, 102, 0.9)'
}

const cartsArray = [
  {
    src: "https://www.thedailymeal.com/sites/default/files/styles/hero_image_breakpoints_theme_tdmr_lg_1x/public/story/MAIN-skillsperfect-istock_thinkstock.jpg?itok=lBPpfbNb&timestamp=1418658115",
    description: "Cooking"
  },  
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
    description: "Foods"
  },  
  {
    src: "https://citelighter-cards.s3.amazonaws.com/p17d98f5st15qd1tsv1m9c1sbu11uo0_64674.jpg",
    description: "Tech"
  },  
  {
    src: "http://www.frador.com/wp-content/uploads/2015/04/gardening_in_mn.jpg",
    description: "Gardening"
  },  
  {
    src: "http://trendingallday.com/wp-content/uploads/2017/05/GordonRamsay.jpg",
    description: "Gordon Ramsay"
  },  
  {
    src: "asdfasdf",
    description: "don say"
  }
];


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
      cart:'',
      item:'',
      specificCart:{
        src:'',
        description:''
      }
    };
  }

  pullCartInfo(cartData){
    //this.setState is IMMUTABLE, SHOULD BE MESSIN WITH
    //NESTED OBJECTS DIRECTLY
    // SOLUTION: create and mutate new object then set that object to state
    var cartInfo = Object.assign({}, this.state.specificCart, {src:cartData.src, description:cartData.description});
    this.setState({specificCart:cartInfo}, console.log(cartInfo));
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
  }

  componentDidUpdate(){
    console.log('COMPONENT DID UPDATE:',this.state)
  }

// this.state.isLoggedIn === true

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
              <Banner 
                name={this.state.name} 
                profileSrc={this.state.profileImg}
              />
              <CartsContainer carts={cartsArray} passCartData={this.pullCartInfo.bind(this)}/>
              <div style={middleStyle}>
                <Switch>
                  <Route 
                    exact path="/home" 
                    component= {Homepage}
                  />
                  <Route exact path="/add" component={AddCartPage} />
                  <Route 
                    exact path="/single" 
                    render={ ()=>
                      <SpecificCart 
                        src={this.state.specificCart.src} 
                        description={this.state.specificCart.description}
                      />
                    } 
                  />
                </Switch> 
              </div>
            </div>
          </div>
        </Router>  
      )
    }
  }
}

export default App;

  // render() {
  //   return (
  //     <div>
  //       <p>Go team!</p>
  //       <FacebookLogin
		// 	    appId={fbAppId}
		// 	    autoLoad={true}
		// 	    fields="name,email,picture"
		// 	    onClick={console.log('fb')}
		// 	    callback={responseFacebook} 
		// 	    icon="fa-facebook"
		// 	  />
  //     </div>
  //   );
  // }
