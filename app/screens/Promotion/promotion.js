import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { MainContainer, PromotionContainer, MarketPlaceContainer, ImageButtonContainer, DropContainer, IconContainer, ButtonContainer, ToolBar, Container, RadioContainer, InputContainer, CommonContainer, DayContainer, DayBoxView, DayText, TitleText, HeadingText } from './style';
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

let data=[
  {day:"Sun"},{day:"Mon"},{ day:"Tus"},{ day:"Wed"}
]

let data2 = [
  { day:"Thu"},{ day:"Fri"},{ day:"Sat"},
]

class PromotionScreen extends React.Component {
  static navigationOptions = {
    headerVisible:false,
    headerStyle:{
      width:0,
      height:0,
    },
  }

  constructor() {
    super();
    this.state = {
      value: null,
      selectedOptionOffer: null,
      selectedOptionPause:null,
      selectedOptionLocation:null,
      selectedDay:'',
      text:''
    };
  }
  handleRadioClick = e => {
    this.setState({
      selectedOptionOffer: e
    });
  };

  handleRadioClickPause = e => {
    this.setState({
      selectedOptionPause: e
    });
  };

  handleRadioClickLocation = e => {
    this.setState({
      selectedOptionLocation: e
    });
  };

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
    console.warn(e);
    this.setState({
      selectedDay:this.state.selectedDay == e ?'': e
    })
  }

  render () {
    let data1 = [{
      value: 'First',
    }, {
      value: 'Seconde',
    }, {
      value: 'Third',
    }];

    return(
      <MainContainer>
      <ScrollView>
        <PromotionContainer>
          <TitleText>Create New Promotion</TitleText>
          <CommonContainer>
            <HeadingText>Picture</HeadingText>
            <CustomButton
              fill={Theme.colors.twitterBlue}
              width="120"
              text="Upload file"
              />
          </CommonContainer>

          <CommonContainer>
        {
            this.props.image ?
            <ImageBackground
              source={require('../../../assets/images/layer-1.png')}
              resizeMode="cover"
              style={{ height: 130, position: "relative",width:500}}
              >
              <ImageButtonContainer>
                <CustomButton
                  border={"#ffffff"}
                  width="150"
                  text="Change Picture"
                  />
              </ImageButtonContainer>
            </ImageBackground>: null}
          </CommonContainer>

          <CommonContainer>
            <TextInputBox
            label={"Headline"}
            width={320}
            placeholder="Enter Promotion’s Title"
            />
          </CommonContainer>

          <CommonContainer>
            <HeadingText>Details</HeadingText>
            <ToolBar>
              <IconContainer onPress={() => this.richtext.setBold()}>
                <CustomIcon
                  name="bold"
                  height="14"
                  width="14"
                />
                </IconContainer>
                <IconContainer italic onPress={() => this.richtext.setItalic()}>
                  <CustomIcon
                    name="italic"
                    height="12"
                    width="12"
                  />
                  </IconContainer>
                  <IconContainer onPress={() => this.richtext.setUnderline()}>
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

                  <IconContainer>
                    <CustomIcon
                      name="code"
                      height="14"
                      width="14"
                    />
                  </IconContainer>

                <IconContainer onPress={this.imagePicker}>
                  <CustomIcon
                      name="picture"
                      height="14"
                      width="14"
                  />
                 </IconContainer>
                 <IconContainer onPress={() => {this.richtext.prepareInsert(),this.richtext.showLinkDialog(optionalTitle = '', optionalUrl = '')}}>
                  <CustomIcon
                      name="link"
                      height="14"
                      width="14"
                    />
                  </IconContainer>
            </ToolBar>
            <RichTextEditor
              ref={(r) => this.richtext = r}
              hiddenTitle
              style={{height:100,backgroundColor:Theme.colors.inputBackgroundColor}}
              contentPlaceholder="Enter Promotion’s Description"
              customCSS={{flex:1,flexDirection: 'column-reverse'}}
              editorInitializedCallback={() => this.onEditorInitialized()}
            />

          </CommonContainer>

          <CommonContainer>
            <HeadingText>Offer</HeadingText>
            <Container>
              <RadioContainer>
                <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
                  {radio_props.map((obj, i) => {
                    return (
                      <RadioButton key={i} style={{padding:8}} >
                        <RadioButtonInput
                          obj={obj}
                          index={i}
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
                  <TextInput
                    style={{height: 40, backgroundColor: Theme.colors.inputBackgroundColor}}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder="Enter bit coin"
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
            <Dropdown
              data={data1}
              placeholder={"Select catgory"}
            />
          </CommonContainer>

          <CommonContainer>
            <HeadingText>Discoverable</HeadingText>
            <DayContainer>
            {
              data.map((e)=>{
              return(
                <DayBoxView selectedDay={this.state.selectedDay} day={e.day} onPress={() => this.handleDay(e.day)}>
                  <DayText selectedDay={this.state.selectedDay} day={e.day}>{e.day}</DayText>
                </DayBoxView>
                )
              })
            }
            </DayContainer>

            <DayContainer row>
            {
              data2.map((e)=>{
              return(
                <DayBoxView selectedDay={this.state.selectedDay} day={e.day} onPress={() => this.handleDay(e.day)}>
                  <DayText selectedDay={this.state.selectedDay} day={e.day}>{e.day}</DayText>
                </DayBoxView>
                )
              })
            }
            </DayContainer>
            <DropContainer>
            <Dropdown
              data={data1}
              placeholder={"All Day"}
              underlineColorAndroid="transparent"
            />
            </DropContainer>
          </CommonContainer>

          <CommonContainer>
            <HeadingText>Pause</HeadingText>
            <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
              {pause_props.map((obj, i) => {
                return (
                  <RadioButton key={i} style={{padding:5}}>
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

          <CommonContainer>
          <HeadingText>Pause</HeadingText>
          <RadioForm animation={false} style={{ alignItems: "flex-start" }}>
            {location_props.map((obj, i) => {
              return (
                <RadioButton key={i} style={{padding:5}}>
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
            fill={Theme.colors.lightBlue}
            width="310"
            text="Save Promotion"
            />
        </ButtonContainer>
        </ScrollView>
      </MainContainer>
    )
  }
}

export default PromotionScreen;
