import { connect } from 'react-redux';
import Axios from 'axios'
// Imports: Redux Actions
// Imports: Redux Actions
import { login } from '../../redux/actions/authActions';
import { increaseCounter, decreaseCounter } from '../../redux/actions/counterActions';
import { jwt } from '../../redux/actions/tokenAction'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import { ActivityIndicator,    
  ScrollView } from 'react-native'
import {AsyncStorage} from 'react-native';

import { 
    Container, 
    Header, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    Left, 
    Body, 
    Right, 
    Title, 
    Button, 
    Text,
    View,
    Picker,
    Icon,
    Footer, 
    FooterTab,
    Card, 
    CardItem, 
    Accordion,
    Badge 
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

let isLogin = 0;

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state={
      MyProfile: ''
    }
  }

  componentDidMount(){
    this.getMyData();
  }

  async getMyData(){
   try{
    Axios.defaults.headers.common['Authorization'] = this.props.token;
    const profile = await Axios.get('http://18.233.99.1:3000/myhire/by/')
    
    await this.setState({ 
      MyProfile: profile.data.result[0]
      
    });
   }catch(error){
    console.log(error);
   } 
  }


    render() {
      return (
        <Container>
          <Header />
          <Grid>

            <Col style={{ backgroundColor: '', height: 240 }}>
              
                <Image 
                  source={{uri: `http://18.233.99.1:3000/myhire/file/${this.state.MyProfile.photo}`}} 
                  style={{height: 200, width: 180}}
                />
              
            
            </Col>
            <Col style={{ backgroundColor: '', height: 240 }}>
              
              <View>
               <Body style={{flex: 1}}>
               </Body>
                
              </View>
            </Col>
          </Grid>
          <Text>My Profile:</Text>
          <Grid>

            <Col style={{ backgroundColor: '', height: 200 }}>
              
            <ScrollView >

                <Text>Name:</Text>
                <Text>{this.state.MyProfile.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                <Text>t</Text>
                <Text>{this.props.name}</Text>
                
                </ScrollView>
            
            </Col>
          </Grid>
        </Container>
      );
    }
  }


//   const AppNavigator = createStackNavigator(
//     {
//       Home: Home,
//       SignUp: SignUp,
//       SignIn: SignIn,
//       Profile: Profile,
//       Project: Project  
//     },
//     {
//       initialRouteName: 'Home',
//     }
//   );

const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
    token: state.tokenReducer.token,
    engineerList: state
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
    return {
      // Increase Counter
      reduxIncreaseCounter: () => dispatch(increaseCounter()),
      // Decrease Counter
      reduxDecreaseCounter: () => dispatch(decreaseCounter()),
      // Login
      reduxLogin: (trueFalse) => dispatch(login(trueFalse)),

      reduxToken: (token) => dispatch(jwt(token)),

      reduxEngineer: () => dispatch(getEngineer())
   };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
  // Exports