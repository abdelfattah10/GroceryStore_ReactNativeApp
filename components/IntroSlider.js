import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Button, Icon} from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp, RFValue } from "react-native-responsive-fontsize";


class IntroSlider extends Component {

  slides = [
  {
    key: 'somethun',
    title: 'Mauris pharentra nisl eget',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('../assets/pic1.png')
  },
  {
    key: 'somethun-dos',
    title: 'Aliquam erat volutpat',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('../assets/pic2.png')
  },
  {
    key: 'somethun1',
    title: 'Aresh bimarst delivery',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    image: require('../assets/pic3.png')
  }
];

_renderItem = ({item}) => {
  return (
    <View style={styles.cnt}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Image source={item.image}/>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-start', padding: fp(2)}}>
        <View style={{marginTop: hp('1%')}}>
          <Text style={{fontSize: fp(3), textAlign: 'center'}}>{item.title}</Text>
        </View>
        <View style={{marginTop: hp('1%')}}>
          <Text style={{fontSize: fp(2), textAlign: 'center'}}>{item.text}</Text>
        </View>
      </View>
    </View>

  );
}

_renderNextButton = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginRight: wp('5%')}}>
      <Text style={{fontSize: fp(3)}}>Next</Text>
    </View>
  );
};

_renderDoneButton = () => {
  return (
    <View style={{
      width: fp(7),
      height: fp(7),
      backgroundColor: '#FD6768',
      borderRadius: fp(5),
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: wp('5%'),
      marginTop: hp('-1.5%')
  }}>
      <Ionicons
        name="md-checkmark"
        color="rgba(255, 255, 255, .9)"
        size={24}
        style={{ backgroundColor: 'transparent' }}
      />
    </View>
  );
};

_onDone = () => {
  this.props.navigation.navigate('App');
}

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={this.slides}
        activeDotStyle={{backgroundColor: '#FD6768'}}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
        onDone={this._onDone}/>
    )
  }
}

const styles = {
  cnt: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1'
  }
}


export default IntroSlider;
