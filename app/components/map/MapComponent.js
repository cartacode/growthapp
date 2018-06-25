import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,StyleSheet,
  TextInput,
  Modal,
  ScrollView,
  Dimensions,
  Platform,
  ActivityIndicator
} from 'react-native';
import Svg,{
  LinearGradient,
  Defs,
  Stop,
  Rect
} from 'react-native-svg';
import Theme from '../../../theme';
import { Container, PromotionText, LabelText, IconContainer,CheckboxContainer,ModelIconContainer} from "./mapStyle";
import CheckBox from 'react-native-checkbox';
import MapView, { Marker, Callout,PROVIDER_GOOGLE } from 'react-native-maps';
import CompanyDetail from '../companyDetail/companyDetailCard';
import CustomIcon from '../icon/svgicon';
import BottomTab from '../tab/BottomTab';
import Card from '../giftCardPopup/giftCard';
import BuyGiftCard from '../buyGiftCard/buyGiftCard';
var {height, width} = Dimensions.get('window');

import { connect } from "react-redux";
import { fetchBusinessesByLocation, togglePromotionFlag } from "../../screens/map/action";
import { bindActionCreators } from "redux";


const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      modalName:'',
      latitude: null,
      longitude: null,
      error: null,
      activeTab:null,
      promotion:props.promotionFlag,
      km:0
    }
    this.map = null;
  }

  componentDidMount() {
    //get geo location
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
        navigator.geolocation.clearWatch(this.watchId)
      },
      (error) => {console.log(JSON.stringify(error))
        this.setState({latitude:23.0225,longitude:72.5714})
      },
      {enableHighAccuracy: Platform.OS != 'android', timeout: 20000, maximumAge: 2000 }
    );
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.promotionFlag!=this.props.promotionFlag){
      this.setState({
        promotion:nextProps.promotionFlag
      })
    }
  }

  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }

  handleTabPress = (tabData) => {
    console.log(tabData)
    const mapData = {
      Categories:[tabData.id],
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      "radius-km":this.state.km,
      promotion:this.state.promotion
    }
    this.props.fetchBusinessesByLocation(mapData);
    this.setState({
      activeTab:tabData.id
    })
  }

  renderBusinessesMarker = ()=>{
    if(!this.props.businesses){return null}
      return this.props.businesses.map((data,i)=>{
        return <Marker
          key={i}
          coordinate={{
            latitude: data.latitude,
            longitude:data.longitude
          }}
          onPress={() => {
            this.setModalVisible(true);
          }}>
        </Marker>
      })
  }
  renderPromotionMarker = () =>{
    if(!this.props.promotion){return null}
      return this.props.promotion.map((data,i)=>{
        return(
        <Marker
          key={i}
          coordinate={{
            latitude: data.latitude,
            longitude:data.longitude
          }}
          onPress={() => {
            this.setModalVisible(true);
          }}>
        </Marker>
      )})
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  distance = (lat1, lon1, lat2, lon2, unit) => {
  	var radlat1 = Math.PI * lat1/180
  	var radlat2 = Math.PI * lat2/180
  	var theta = lon1-lon2
  	var radtheta = Math.PI * theta/180
  	var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  	dist = Math.acos(dist)
  	dist = dist * 180/Math.PI
  	dist = dist * 60 * 1.1515
  	if (unit=="K") { dist = dist * 1.609344 }
  	if (unit=="N") { dist = dist * 0.8684 }
    if(this.state.km != dist){
      this.setState({
        km:dist
      });
      setTimeout(()=>{
        this.callApi()
      }, 1000);
    }
}

callApi = () => {
  if(!this.state.activeTab){return;}
  const mapData = {
    Categories:[this.state.activeTab],
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    "radius-km":this.state.km,
    promotion:!this.state.promotion
  }
  console.log(mapData);
  this.props.fetchBusinessesByLocation(mapData);
}

  render () {
    const { region } = this.props;
    return(
      <View style ={styles.container}>
        {this.props.businessesCategories?
          <BottomTab data={this.props.businessesCategories} activeTab={this.state.activeTab} handleTabPress={this.handleTabPress}/>
          :null
        }
        {this.state.latitude && this.state.longitude ?
          <MapView
            ref={(ref) => { this.map = ref; }}
            provider={ PROVIDER_GOOGLE }
            style={styles.map}
            showsUserLocation={true}
            showsMyLocationButton={false}
            onRegionChangeComplete={(center) => {
              let northeast = {
                  latitude: center.latitude + center.latitudeDelta / 2,
                  longitude: center.longitude + center.longitudeDelta / 2,
                }
                , southwest = {
                  latitude: center.latitude - center.latitudeDelta / 2,
                  longitude: center.longitude - center.longitudeDelta / 2,
                };
                this.distance(center.latitude,center.longitude,northeast.latitude,northeast.longitude,'K')
              }}
            initialRegion={{
              latitude:this.state.latitude ,
              longitude: this.state.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            >
            {this.renderBusinessesMarker()}
            {this.renderPromotionMarker()}
            </MapView>
            : <ActivityIndicator color={'#000'}/> }
            <IconContainer>
              <CheckboxContainer>
                <CheckBox
                  onChange={()=>{
                    this.props.togglePromotionFlag();
                    this.callApi();
                  }}
                  checked={this.state.promotion}
                  label=' '
                  checkedImage={require('../../../assets/images/check-sign-in-a-rounded-black-square.png')}
                  uncheckedImage={require('../../../assets/images/black-check-box.png')}
                  checkboxStyle={{width:16, height:16}}
                  labelStyle={{color:'#47525E',fontSize:16}}
                  />
              </CheckboxContainer>
              <PromotionText>Show promotion only</PromotionText>
            </IconContainer>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              >
              <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
                <ModelIconContainer onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <CustomIcon
                    name="cross"
                    fill='#000000'
                    height="15"
                    width="15"
                    />
                </ModelIconContainer>
                <ScrollView>
                  {
                    this.state.modalName=='Buy Gift Card'?
                    <Card title={this.state.modalName}>
                      <BuyGiftCard  setModalVisible={this.setModalVisible}/>
                    </Card>
                    :
                    <CompanyDetail
                      businesses={this.props.businesses}
                      promotion={this.props.promotion}
                      setModalVisible={this.setModalVisible}
                      promotion={this.props.promotion}
                     />
                  }
                </ScrollView>
              </View>
            </Modal>
            <View style={{position:'absolute',bottom:-70}}>
              <CustomIcon
                name="gradient"
                />
            </View>
          </View>
        )
      }
    }
    const styles = StyleSheet.create({
      container: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    });


function mapDispatchToProps(dispatch) {
  return Object.assign(
    { dispatch: dispatch },
    bindActionCreators({
      fetchBusinessesByLocation,
      togglePromotionFlag
    }, dispatch)
  );
}

const mapStateToProps = state => {
  let mapReducer = state.mapReducer
  return {
    promotionFlag:state.commonReducer.promotionFlag,
    businesses:mapReducer.businesses,
    promotion:mapReducer.promotion,
    businessesCategories:mapReducer.businessesCategories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapComponent);
