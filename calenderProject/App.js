/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React, { Component } from 'react'
 import {View} from 'react-native';
 import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
 import {LocaleConfig} from 'react-native-calendars';
 //ToastAndroid 추가
import {View, ToastAndroid} from 'react-native';

 
 LocaleConfig.locales['fr'] = {
   monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
   monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
   dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
   dayNamesShort: ['일', '월','화','수','목','금','토'],
   today: 'Aujourd\'hui'
 };
 LocaleConfig.defaultLocale = 'fr';
 
 class App extends Component {
   render() {
      return (
       <View style={{ paddingTop: 50, flex: 1 }}>
         <Calendar
         // 가장 초기에 보이는 화면의 디폴트 데이트 값
         current={'2021-11-09'}
         minDate={'2021-01-01'}
         maxDate={'2021-12-31'}

         // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          console.log('selected day', day)
          ToastAndroid.showWithGravity(
          day.dateString,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
          );   
        }}

         onDayLongPress={(day) => {console.log('selected day', day)}}
         monthFormat={'yyyy MM'}
         onMonthChange={(month) => {console.log('month changed', month)}}

         hideArrows={true}
         renderArrow={(direction) => (<Arrow/>)}
         hideExtraDays={true}
         disableMonthChange={true}
         firstDay={1}
         hideDayNames={false}
         showWeekNumbers={false}

         onPressArrowLeft={substractMonth => substractMonth()}
         onPressArrowRight={addMonth => addMonth()}
         
         disableArrowLeft={true}
         disableArrowRight={true}
         disableAllTouchEventsForDisabledDays={true}
         />
       </View>
      )
    }
  }
 
 export default App;