import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon } from 'react-native-elements'

import IntroSlider from './components/IntroSlider.js';
import Home from './components/Home.js';
import CategoryDetails from './components/CategoryDetails.js';
import ProductDetails from './components/ProductDetails.js';


const AppInterface = createStackNavigator({
    Home: { screen: Home, navigationOptions: ({ navigation }) => ({
      title: 'Categories' ,
       headerRight: (
        <View style={{flexDirection: 'row'}}>
          <View>
            <Icon
              name='magnify'
              type='material-community'
              color='black'
              size={30}
              containerStyle={{marginRight: 20}}
            />
          </View>
          <View>
            <Icon
              name='cart-minus'
              type='material-community'
              color='black'
              size={30}
              containerStyle={{marginRight: 30}}
            />
          </View>
        </View>
      ),
      headerLeft: (
        <Icon
          name='table-of-contents'
          type='material-community'
          color='black'
          size={35}
          containerStyle={{marginLeft: 30}}
        />
      )
    })
  },
    CategoryDetails: { screen: CategoryDetails, navigationOptions: ({ navigation }) => { return { headerTintColor: 'white', headerTransparent: true, headerStyle: { borderBottomWidth: 0, } } } },
    ProductDetails: { screen: ProductDetails, navigationOptions: ({ navigation }) => ({ title: 'Product Details' }) },
  },
{
  initialRouteName: 'Home',
})

const RootNavigator = createSwitchNavigator({
    Intro: IntroSlider,
    App: AppInterface
},
  {
    initialRouteName: 'Intro',
  })

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
  return (
    <AppContainer/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
