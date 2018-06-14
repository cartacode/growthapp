import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native'
import { MainContainer, DropdownContainer,PromotionContainer,BitTextInput,MainWrapper, MarketPlaceContainer, ImageButtonContainer, DropContainer, IconContainer, ButtonContainer, ToolBar, Container, RadioContainer, InputContainer, CommonContainer, DayContainer, DayBoxView, DayText, TitleText, HeadingText,ModalIconContainer } from './style';
import CustomButton from '../../components/button/CustomButton';
import TextInputBox from '../../components/textfield/CustomTextField';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";
import SelectInput from '@tele2/react-native-select-input';
import { Dropdown } from 'react-native-material-dropdown';
import { RichTextEditor, RichTextToolbar, actions } from 'react-native-zss-rich-text-editor';
import CustomIcon from '../../components/icon/svgicon'
import ImagePicker from 'react-native-image-crop-picker';
import HeaderRightIcon from '../../components/header/HeaderRightIcon';
import HeaderLeftIcon from '../../components/header/HeaderLeftIcon';
import Card from '../../components/giftCardPopup/giftCard';
import SaveChanges from './SaveChanges';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

let radio_props = [
  { label: "Balehu Coin", value: 0 },
  { label: "Balehu Promotion", value: 1 }
];

let pause_props = [
  { label: "I will pause it manually", value: 0 },
  { label: "Schedule automatic pause", value: 1 }
];

let location_props = [
  { label: "Business location", value: 0 },
  { label: "My current location", value: 1 }
];

class PromotionScreen extends React.Component {
  static navigationOptions = (navigation) => ({
    headerTitle:(<View/>),
    headerLeft: (<HeaderLeftIcon icon={'left-arrow'} {...navigation}/>),
    headerRight: (<View/>),
  })

  constructor() {
    super();
    this.state = {
      date:[
        {day:"Sun",selected:false,id:1},{day:"Mon",selected:false,id:2}, {day:"Tus",selected:false,id:3},{day:"Wed",selected:false,id:4}
      ],
      date2 : [
        { day:"Thu",selected:false,id:5},{ day:"Fri",selected:false,id:6},{ day:"Sat",selected:false,id:7},
      ],
      value: null,
      selectedOptionOffer: null,
      selectedOptionPause:null,
      selectedOptionLocation:null,
      text:'',
      DataProps:'',
      mode:true,
      htmlText:'',
      updatedHTMLText:'',
      modalVisible: false,
      modalName:'',
      selectedTime:'All Day',
      openTimePicker:false,
      openCalendar:false,
      selectedDate:null,
      latitude:'',
      longitude:'',
    };
  }

  componentWillMount() {
    if(this.props.navigation.state.params){
      this.setState({
        DataProps:this.props.navigation.state.params.index
      })
    }
  }
  showTimePicker = () => this.setState({ openTimePicker: true });

  hideTimePicker = () => this.setState({ openTimePicker: false });

  showCalendar = () => this.setState({ openCalendar: true });

  hideCalendar = () => this.setState({ openCalendar: false });

  selectedDays = (value,index) => {
    if (value === 'pick hours')
    {
      this.showTimePicker()
    }
    else{
      this.hideTimePicker()
    }
    this.setState({
      selectedTime: value,
    });
  }
  ChangeDate  = (time) => {
    this.setState({selectedDate: date})
    this.hideCalendar();

  }
  ChangeTime  = (date) => {
    alert(moment(date).format('LT'))
    this.hideTimePicker();

  }
  handleRadioClick = e => {
    this.setState({
      selectedOptionOffer: e
    });
  };

  handleRadioClickPause = e => {
    if(e == 1 ){
      this.showCalendar()
    }
    else{
      this.hideCalendar()
    }
    this.setState({
      selectedOptionPause: e
    });
  };

  handleRadioClickLocation = e => {
    if(e == 1 )
    {
      navigator.geolocation.getCurrentPosition(
       (position) => {
         this.setState({latitude:position.coords.latitude,longitude:position.coords.longitude})
       },
       (error) => {alert(JSON.stringify(error))
       },
       {enableHighAccuracy: Platform.OS != 'android', timeout: 20000, maximumAge: 2000 }
     );
    }
    this.setState({
      selectedOptionLocation: e
    });
  };

  uploadImage = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      compressImageQuality: 0.5
    })
    .then(image => {
      let imageSrc = `data:${image.mime};base64,${image.data}`;
      console.log(imageSrc);
    });
  }

  imagePicker = () => {
    ImagePicker.openPicker({
      includeBase64: true,
      compressImageQuality: 0.5
    })
    .then(image => {
      let imageSrc = `data:${image.mime};base64,${image.data}`;
      this.richtext.prepareInsert();
      this.richtext.insertImage({ src: imageSrc });
    });
  }

  handleDay = e => {
    if(e.id<=4){
      let date = this.state.date;
      for (var i = 0; i <= date.length; i++) {
        if(date[i].id == e.id){
          date[i].selected = !e.selected;
          break;
        }
      }
      this.setState({
        date
      });
    }else{
      let date = this.state.date2;
      for (var i = 0; i <= date.length; i++) {
        if(date[i].id == e.id){
          date[i].selected = !e.selected;
          break;
        }
      }
      this.setState({
        date2:date
      });
    }
  }

  getHtml = () => {
    if (this.state.mode === true){
      this.richtext.getContentHtml().then((html)=>{
        this.setState({
          mode:!this.state.mode,
          updatedHTMLText:html
        })
      })
    }
    else{
      this.setState({
        mode:!this.state.mode
      })

      setTimeout(()=>{
        this.richtext.setContentHTML(this.state.updatedHTMLText);
      }, 500)
    }
  }
  setModalVisible = (visible,modal) => {
    this.setState({modalVisible: visible,modalName:modal});
  }

  render () {
    let catagory = [{
      value: 'Food',
    }, {
      value: 'Drink',
    }, {
      value: 'Shopping',
    },{
      value: 'Health',
    },{
      value:'Music',
    }];
    let days = [{
      value: 'All Day',id:0,
    }, {
      value: 'mornings until 2pm'
    }, {
      value: 'afternoon/evening12-30pm'
    },{
      value:'after 7pm '
    },
    ,{
      value:'pick hours'
    }
  ];
    let DataProps = this.state.DataProps
    return(
      <MainWrapper>
        <ScrollView>
          <PromotionContainer>
            <TitleText>{DataProps ? 'Edit Promotion' : 'Create New Promotion'}</TitleText>
            {
              DataProps.picture ?
              <CommonContainer>
                <ImageBackground
                  source={require('../../../assets/images/layer-1.png')}
                  resizeMode="cover"
                  style={{ height: 130, position: "relative",width:320}}
                  >
                  <ImageButtonContainer>
                    <CustomButton
                      border={"#ffffff"}
                      width="145"
                      height="38"
                      text="Change Picture"
                      onPress={this.uploadImage}
                      />
                  </ImageButtonContainer>
                </ImageBackground>
              </CommonContainer>
              :
              <CommonContainer>
                <HeadingText>Picture</HeadingText>
                <CustomButton
                  fill={Theme.colors.twitterBlue}
                  width="120"
                  text="Upload file"
                  onPress={this.uploadImage}
                  />
              </CommonContainer>
            }

            <CommonContainer>
              <TextInputBox
                label={"Headline"}
                width={280}
                placeholder="Enter Promotion’s Title"
                onChangeText={(text) => this.setState({headline:text})}
                value={DataProps.title ? DataProps.title : ''}
                />
            </CommonContainer>

            <CommonContainer>
              <HeadingText>Details</HeadingText>
              <ToolBar>
                <IconContainer activeOpacity={this.state.mode ? 0.2 : 1} onPress={() => this.state.mode ? this.richtext.setBold() : ()=>{}}>
                  <CustomIcon
                    name="bold"
                    height="14"
                    width="14"
                    />
                </IconContainer>
                <IconContainer activeOpacity={this.state.mode ? 0.2 : 1}  italic onPress={() => this.state.mode ? this.richtext.setItalic() : ()=>{}}>
                  <CustomIcon
                    name="italic"
                    height="12"
                    width="12"
                    />
                </IconContainer>
                <IconContainer activeOpacity={this.state.mode ? 0.2 : 1} onPress={() => this.state.mode ? this.richtext.setUnderline() : ()=>{}}>
                  <CustomIcon
                    name="underline"
                    height="14"
                    width="14"
                    />
                </IconContainer>

                <IconContainer>
                  <CustomIcon
                    name="line"
                    height="16"
                    width="16"
                    />
                </IconContainer>

                <IconContainer onPress={this.getHtml}>
                  <CustomIcon
                    name="code"
                    height="14"
                    width="14"
                    />
                </IconContainer>

                <IconContainer activeOpacity={this.state.mode ? 0.2 : 1} onPress={this.state.mode ?  this.imagePicker : ()=>{}}>
                  <CustomIcon
                    name="picture"
                    height="14"
                    width="14"
                    />
                </IconContainer>
                <IconContainer activeOpacity={this.state.mode ? 0.2 : 1} onPress={this.state.mode ?  () => {this.richtext.prepareInsert(),this.richtext.showLinkDialog(optionalTitle = '', optionalUrl = '')} : ()=>{}}>
                  <CustomIcon
                    name="link"
                    height="14"
                    width="14"
                    />
                </IconContainer>
              </ToolBar>
              {
                this.state.mode ?
                <RichTextEditor
                  ref={(r) => this.richtext = r}
                  hiddenTitle={true}
                  style={{height:100,backgroundColor:Theme.colors.inputBackgroundColor}}
                  contentPlaceholder="Enter Promotion’s Description"
                  initialContentHTML={DataProps.description? DataProps.description : '' }
                  customCSS={{fontSize:10,fontFamily:Theme.fontFamily.regular,color:Theme.colors.warmGrey}}
                  editorInitializedCallback={() => this.onEditorInitialized()}
                  />
                :
                <TextInput
                  onChangeText={(updatedHTMLText) => this.setState({updatedHTMLText})}
                  value={this.state.updatedHTMLText}
                  multiline = {true}
                  numberOfLines = {4}
                  underlineColorAndroid="transparent"
                  style={{backgroundColor:Theme.colors.inputBackgroundColor,height:100}}
                  />}
                </CommonContainer>

                <CommonContainer>
                  <HeadingText>Offer</HeadingText>
                  <Container>
                    <RadioContainer>
                      <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
                        {radio_props.map((obj, i) => {
                          return (
                            <RadioButton key={i} style={{padding:this.state.selectedOptionOffer == 0 ? 8 : 2}} >
                              <RadioButtonInput
                                obj={obj}
                                index={i}
                                initial={1}
                                isSelected={this.state.selectedOptionOffer === i}
                                onPress={this.handleRadioClick}
                                borderWidth={1}
                                buttonSize={5}
                                buttonOuterSize={15}
                                buttonStyle={{ borderWidth: 1 }}
                                />
                              <RadioButtonLabel
                                obj={obj}
                                index={i}
                                onPress={this.handleRadioClick}
                                labelStyle={{
                                  fontSize: Theme.fontSize.midregular,
                                  fontFamily: Theme.fontFamily.regular,
                                  color: Theme.colors.darkGray,
                                  marginLeft: 10
                                }}
                                />
                            </RadioButton>
                          );
                        })}
                      </RadioForm>
                    </RadioContainer>
                    <InputContainer>
                      {
                        this.state.selectedOptionOffer == 0 ?
                        <BitTextInput
                          onChangeText={(text) => this.setState({text})}
                          value={this.state.text}
                          placeholder="Coin amount"
                          placeholderTextColor={Theme.colors.warmGrey}
                          underlineColorAndroid="transparent"
                          />: null}
                        </InputContainer>
                      </Container>
                    </CommonContainer>
                  </PromotionContainer>

                  <MarketPlaceContainer>
                    <TitleText>Balehu Marketplace</TitleText>

                    <CommonContainer>
                      <HeadingText>Category</HeadingText>
                      <DropdownContainer>
                        <Dropdown
                          data={catagory}
                          inputContainerStyle={{ borderBottomColor: 'transparent',marginTop:-15}}
                          placeholder={"Select catgory"}
                          />
                      </DropdownContainer>
                    </CommonContainer>

                    <CommonContainer>
                      <HeadingText>Discoverable</HeadingText>
                      <DayContainer>
                        {
                          this.state.date.map((e)=>{
                            return(
                              <DayBoxView selected={e.selected}  onPress={() => this.handleDay(e)}>
                                <DayText selected={e.selected}>{e.day}</DayText>
                              </DayBoxView>
                            )
                          })
                        }
                      </DayContainer>

                      <DayContainer row>
                        {
                          this.state.date2.map((e)=>{
                            return(
                              <DayBoxView selected={e.selected} day={e.day} onPress={() => this.handleDay(e)}>
                                <DayText selected={e.selected} day={e.day}>{e.day}</DayText>
                              </DayBoxView>
                            )
                          })
                        }
                      </DayContainer>
                      <DropContainer>
                        <DropdownContainer>
                          <Dropdown
                            data={days}
                            placeholder={"All Day"}
                            value={this.state.selectedTime}
                            onChangeText={(value,index) => this.selectedDays(value,index)}
                            inputContainerStyle={{ borderBottomColor: 'transparent',marginTop:-15}}
                            />
                        </DropdownContainer>
                      </DropContainer>
                    </CommonContainer>
                    { this.state.openTimePicker ?
                      <CommonContainer>
                        <DateTimePicker
                          isVisible={this.state.openTimePicker}
                          onCancel={this.hideTimePicker}
                          style={{width: 290}}
                          mode="time"
                          placeholder="select time"
                          onConfirm={this.ChangeTime}
                          />
                      </CommonContainer>
                      : null }
                      <CommonContainer>
                        <HeadingText>Pause</HeadingText>
                        <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
                          {pause_props.map((obj, i) => {
                            return (
                              <RadioButton key={i} style={{padding:4}}>
                                <RadioButtonInput
                                  obj={obj}
                                  index={i}
                                  isSelected={this.state.selectedOptionPause === i}
                                  onPress={this.handleRadioClickPause}
                                  borderWidth={1}
                                  buttonSize={5}
                                  buttonOuterSize={15}
                                  buttonStyle={{ borderWidth: 1 }}
                                  />
                                <RadioButtonLabel
                                  obj={obj}
                                  index={i}
                                  onPress={this.handleRadioClickPause}
                                  labelStyle={{
                                    fontSize: Theme.fontSize.midregular,
                                    fontFamily: Theme.fontFamily.regular,
                                    color: Theme.colors.darkGray,
                                    marginLeft: 10
                                  }}
                                  />
                              </RadioButton>
                            );
                          })}
                        </RadioForm>
                      </CommonContainer>
                      { this.state.openCalendar ?
                        <CommonContainer>
                          <DateTimePicker
                            isVisible={this.state.openCalendar}
                            onCancel={this.hideCalendar()}
                            mode="date"
                            placeholder="select Date"
                            onConfirm={this.ChangeDate}
                            />
                        </CommonContainer>
                        : null }
                        <CommonContainer>
                          <HeadingText>Location</HeadingText>
                          <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
                            {location_props.map((obj, i) => {
                              return (
                                <RadioButton key={i} style={{padding:4}}>
                                  <RadioButtonInput
                                    obj={obj}
                                    index={i}
                                    isSelected={this.state.selectedOptionLocation === i}
                                    onPress={this.handleRadioClickLocation}
                                    borderWidth={1}
                                    buttonSize={5}
                                    buttonOuterSize={15}
                                    buttonStyle={{ borderWidth: 1 }}
                                    />
                                  <RadioButtonLabel
                                    obj={obj}
                                    index={i}
                                    onPress={this.handleRadioClickLocation}
                                    labelStyle={{
                                      fontSize: Theme.fontSize.midregular,
                                      fontFamily: Theme.fontFamily.regular,
                                      color: Theme.colors.darkGray,
                                      marginLeft: 10
                                    }}
                                    />
                                </RadioButton>
                              );
                            })}
                          </RadioForm>
                        </CommonContainer>
                      </MarketPlaceContainer>
                      <ButtonContainer>
                        <CustomButton
                          onPress={() => {
                            this.props.navigation.goBack(null);
                            //this.setModalVisible(true,'Save Changes');
                          }}
                          fill={Theme.colors.lightBlue}
                          width="310"
                          text="Save Promotion"
                          />
                      </ButtonContainer>
                    </ScrollView>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={this.state.modalVisible}
                      >
                      <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.6)',paddingTop:50,paddingBottom:50,paddingLeft:27,paddingRight:27}}>
                        <ModalIconContainer onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                          }}>
                          <CustomIcon
                            name="cross"
                            fill='#000000'
                            height="15"
                            width="15"
                            />
                        </ModalIconContainer>
                        <ScrollView>
                          <Card title={this.state.modalName}>
                            {
                              this.state.modalName=='Save Changes'?
                              <SaveChanges  setModalVisible={this.setModalVisible}/>
                              :
                              null
                            }
                          </Card>
                        </ScrollView>
                      </View>
                    </Modal>
                  </MainWrapper>
                )
              }
            }

            export default PromotionScreen;
