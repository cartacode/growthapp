import React from 'react';
import {View,Text} from 'react-native'
import {
  createNavigationPropConstructor,       // handles #1 above
  createNavigationReducer,               // handles #2 above
  createReactNavigationReduxMiddleware,  // handles #4 above
  initializeListeners,                   // handles #4 above
} from 'react-navigation-redux-helpers';

import { connect } from "react-redux";
import { ActionCreators } from "../action";
import { bindActionCreators } from "redux";
import MainStack from './mainstack'
const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.navReducer
);

const navigationPropConstructor = createNavigationPropConstructor("root");

class MainContainer extends React.Component{
  componentWillMount() {
    this.props.checkUserToken();
  }
  render(){
    if(this.props.tokenLoading){
      return <View style={{flex: 1,alignItems:'center',justifyContent: 'center'}}>
        <Text>loading...</Text>
      </View>
    }else{
      return(
        <MainStack
          navigation={navigationPropConstructor(
               this.props.dispatch,
               this.props.navReducer,
             )}
        />
      )
    }
  }
}
function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators(ActionCreators, dispatch)
  );
}

const mapStateToProps = state => {
  return {
    navReducer: state.navReducer,
    tokenLoading: state.commonReducer.tokenLoading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
