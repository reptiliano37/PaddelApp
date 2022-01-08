import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity,Button,Image, ImageBackground, } from 'react-native';

import styles from './calendar.styles'
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigatorParams} from '../../config/navigator'
import ButtonComponent from '../../components/button/button'
import {useAuth} from '../../contexts/auth-context';
import {Auth} from 'aws-amplify'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


type CalendarProps = {
  navigation: NativeStackNavigationProp<StackNavigatorParams, "Calendar">
}

export default function CalendarFunction({navigation}: CalendarProps) {
  const { user } = useAuth();
  const [signingOut, setSigningOut] = useState(false);
  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
        //   current={'2012-03-01'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2012-05-10'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2023-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'yyyy MM'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={true}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
  );
}
