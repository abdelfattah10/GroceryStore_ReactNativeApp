import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFPercentage as fp, RFValue } from "react-native-responsive-fontsize";
import { Button } from 'react-native-elements';
import Grid from 'react-native-grid-component';


class CategoriesDetails extends Component {


  _renderItem = (data, i) => {
    console.log(1, data);
    return (
        <View style={styles.item} key={i}>
          <TouchableOpacity style={{flex: 1, borderColor: '#f5f5f5', borderWidth: 1}} onPress={()=> this.props.navigation.navigate('ProductDetails', {data: data.name})} activeOpacity={0.5}>
            <View style={{flex: 1}}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'cover'}}
                source={{uri: data.product_img}}
              />
            </View>
            <View style={{marginLeft: wp('2.5%')}}>
              <Text style={{fontSize: fp(2.5), fontWeight: '500'}}>{data.name}</Text>
              <Text>{data.weight}</Text>
              <Text>{data.price}</Text>
            </View>
          </TouchableOpacity>
        </View>
    )
  }

  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={{flex: 1}}>
        <View>
          <Image
            style={{width: '100%', height: hp('25%'), resizeMode: 'cover'}}
            source={{uri: data.name === 'Vegetables' ? 'https://i.ibb.co/0yF3rb2/1528666979514.jpg' : data.category_img}}
          />
        <View style={{position: 'absolute', height: '100%', width: '100%', backgroundColor: 'rgba(52, 52, 52, 0.5)'}}></View>
        </View>
        <ScrollView bounces={false}>
          <Grid
            bounces={false}
            style={styles.list}
            renderItem={this._renderItem}
            data={data.products}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
        <View style={{flexDirection: 'row', position: 'absolute', bottom: 0,width: '100%'}}>
          <View style={{flex: 1}}>
            <Button title="Sort by" titleStyle={{fontWeight: 'bold'}} buttonStyle={{backgroundColor: '#FD6768', padding: fp(2.5), borderRadius: 0, borderTopLeftRadius: fp(1)}}/>
          </View>
          <View style={{flex: 1}}>
            <Button title="Filter" titleStyle={{fontWeight: 'bold'}} buttonStyle={{backgroundColor: '#FD6768', padding: fp(2.5), borderRadius: 0, borderTopRightRadius: fp(1)}}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  item: {
    flex: 1,
    height: hp('25%'),
  },
  list: {
    margin: fp(0.7)
  },
  buttomView: {
    marginTop: hp('4%')
  }
}


export default CategoriesDetails;
