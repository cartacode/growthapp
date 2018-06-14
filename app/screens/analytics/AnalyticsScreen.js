import React from 'react'
import * as shape from 'd3-shape'
import { AreaChart, Path ,Grid,LineChart,XAxis, YAxis } from 'react-native-svg-charts'
import {
  View,
  Text,TextInput,
  ImageBackground,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  MainContainer,
  CardContainer,
  TitleContainer,
  HeaderText,
  TitleText,
  ChartContainer,
  ChartInnerContainer,
  RoundContentContainer,
  DetailCardContainer,
  ButtonContainer,
DateText} from './style.js';
import CustomButton from '../../components/button/CustomButton';
  import RowComponent from './RowComponent.js'
  class AnalyticsScreen extends React.PureComponent {


    render() {
      const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

      const axesSvg = { fontSize: 10, fill: 'grey' };
      const verticalContentInset = { top: 10, bottom: 10 }
      const xAxisHeight = 30
      const datas = [10,60,70,80,90,100]
      const data1= [ 49, 30, 60, 35, 53, 24, 50]
      const data2=[ 24, 60, 20, 55, 43, 35, 60]
      const data3 = [25,33,30,22,30,22,35]

      const Shadow = ({ line }) => (
        <Path
          key={'shadow'}
          y={2}
          d={line}
          fill={'none'}
          strokeWidth={4}
          stroke={'rgba(10,150,136, 0.2)'}
          />
      )
      return (
          <View>
            <TitleContainer>
              <TitleText>The French Cuisine</TitleText>
            </TitleContainer>
            <RoundContentContainer>
              <RowComponent color={'rgba(230,61,48,0.7)'} text="Reach" />
              <RowComponent color={Theme.colors.redBalehu} text="Engagement" />
              <RowComponent color={'#009688'} text="Redeem" />
            </RoundContentContainer>
            <ChartContainer>
              <YAxis
                data={datas}
                numberOfTicks={5}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
                />
              <ChartInnerContainer>
                <AreaChart
                  style={{ height: 260 }}
                  data={ data1 }
                  yMin={20}
                  yMax={60}
                  contentInset={{ top: 30, bottom: 20 }}
                  curve={ shape.curveLinear }
                  svg={{ fill: 'rgba(230,61,48,0.7)' }}
                  >
                  <Grid belowChart={false}/>

                </AreaChart>
                <AreaChart
                  style={ StyleSheet.absoluteFill}
                  data={ data2 }
                  yMin={20}
                  yMax={60}
                  contentInset={{ top: 30, bottom: 30 }}
                  curve={ shape.curveLinear }
                  svg={{ fill: 'rgb(230,61,48,0.3)' }}
                  >
                </AreaChart>
                <LineChart
                  style={ StyleSheet.absoluteFill }
                  data={ data3 }
                  yMin={20}
                  yMax={60}
                  svg={{ stroke: 'rgb(0,150,136)' }}
                  >
                  <Shadow/>
                </LineChart>
                <XAxis
                  style={{ marginHorizontal: -10, height: xAxisHeight }}
                  data={datas}
                  formatLabel={(value, index) => index}
                  contentInset={{ left: 40, right: 40 }}
                  svg={axesSvg}
                  />
              </ChartInnerContainer>
            </ChartContainer>
            <DetailCardContainer>
              <DateText>Mar 4, 2018</DateText>
              <RowComponent color={'rgba(230,61,48,0.7)'} text="Reach" value='49' />
              <RowComponent color={Theme.colors.redBalehu} text="Engagement" value='38' />
              <RowComponent color={'#009688'} text="Redeems" value='12' />
            </DetailCardContainer>
            <ButtonContainer>
            <CustomButton
              fill={Theme.colors.skyBlue}
              width={300}
              text={"View All Analytics"}  />
            </ButtonContainer>
          </View>
      )
    }
  }
  export default AnalyticsScreen;
