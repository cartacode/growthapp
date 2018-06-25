import React from 'react'
import {View,Text} from 'react-native'
import {TabItem,
        FoodIconContainer,
        TabText} from './style.js'
import CustomIcon from '../icon/svgicon';

class Tab extends  React.Component {
  renderIcons = ()=>{
    tabaviable = false;
    ['Food','Music','Drink','Shopping','Health'].map((data)=>{
      if(data==this.props.name){
        tabaviable = true
      }
    })
    // console.log(this.props.name+this.props.active);
    if(tabaviable){
      return <CustomIcon name={this.props.name}/>
    }else{
      return <CustomIcon name={'Food'}/>
    }
  }
  render(){
    return (
      <View>
        <TabItem onPress={()=>{this.props.handleTabPress(this.props.data)}}>
          <FoodIconContainer background={this.props.active=='Active'?'#ffa000':''} height={this.props.height} width={this.props.width}>
            {
              this.renderIcons()
            }
          </FoodIconContainer>
        </TabItem>
        <TabText>
          {this.props.text}
        </TabText>
      </View>
    )
  }
}
export default Tab
