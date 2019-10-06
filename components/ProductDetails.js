import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { RFPercentage as fp, RFValue } from "react-native-responsive-fontsize";

class ProductDetails extends Component {

  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View>
        <Text style={{fontSize: fp(4), fontWeight: 'bold'}}>{data}</Text>
      </View>
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


export default ProductDetails;
