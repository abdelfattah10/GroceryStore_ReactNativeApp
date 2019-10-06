import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp, RFValue } from "react-native-responsive-fontsize";
import Grid from 'react-native-grid-component';
import axios from 'axios';


class Home extends Component {

  state = {
    loading: false,
    data: []
  }

  componentDidMount = () => {
    this.setState({loading: true})
    axios('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
      .then(({data}) => {
        this.setState({data, loading: false})
       })
      .catch((e) => {this.setState({loading: false})})
  }


  _renderItem = (data, i) => {
    return (
        <View style={styles.item} key={i}>
          <TouchableOpacity style={{flex: 1}} onPress={()=> this.props.navigation.navigate('CategoryDetails', {data})} activeOpacity={0.5}>
            <View style={{flex: 1}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                source={{uri: data.name === 'Vegetables' ? 'https://i.ibb.co/0yF3rb2/1528666979514.jpg' : data.category_img}}
              />
              <View style={{position: 'absolute', bottom: 10, left: 20, zIndex: 999}}>
                <Text style={{fontSize: fp(2.5), fontWeight: 'bold', color: 'white'}}>{data.name}</Text>
              </View>
              <View style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(52, 52, 52, 0.15)'}}></View>
            </View>
          </TouchableOpacity>
        </View>
    )
  }

  _renderView = () => {
    if(this.state.loading){
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#FD6768" />
        </View>
      )
    } else {
      return (
        <ScrollView bounces={false}>
          <Image
            style={{width: wp('100%'), height: hp('25%')}}
            source={require('../assets/pic4.png')}
          />
          <Grid
            bounces={false}
            style={styles.list}
            renderItem={this._renderItem}
            data={this.state.data.slice(0,2)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={{width: wp('100%'), justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: wp('95%'), height: hp('8%')}}
              source={require('../assets/pic5.png')}
            />
          </View>
          <Grid
            bounces={false}
            style={styles.list}
            renderItem={this._renderItem}
            data={this.state.data.slice(2,this.state.data.length)}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      )
    }
  }

  render(){
    return (
      <View style={{flex: 1, backgroundColor: '#F1F1F1'}}>
        {this._renderView()}
      </View>
    )
  }
}


const styles = {
  item: {
    flex: 1,
    height: hp('25%'),
    margin: 2
  },
  list: {
    margin: fp(0.7)
  },
  buttomView: {
    marginTop: hp('4%')
  }
}

export default Home;
