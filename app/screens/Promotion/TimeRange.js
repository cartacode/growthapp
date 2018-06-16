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
import moment from 'moment';

class DateRange extends React.Component {

  render () {
    let  date = new Date (),days;
    let  dateStrat = moment(date).startOf('day').toDate();
    let startDate = moment(dateStrat).add(8, 'hours').toDate();
    let endate = moment(dateStrat).add(20, 'hours').toDate();
    let diff = moment(endate).diff(moment(startDate), 'hours') +1
    days = startDate;
    let times = [days] ;
    for (var i = 0; i < 23; i++) {
      days = moment(days).add(30, 'minutes').toDate();
      times =  [ ...times ,days]
    }
    return (
      <View>
        {times.map((dates,i) =>(
          <TouchableOpacity>
          <Text>{moment(dates).format("hA")}</Text>
          </TouchableOpacity>
        ))}
      </View>
    )
  }
}

export default DateRange
