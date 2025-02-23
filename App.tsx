import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';

// const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    // <View>
    //   <Home />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: null,
            headerTitle: () => (
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingLeft: 20,
                }}>
                <Image
                  style={{marginLeft: 80}}
                  source={require('../app/src/assets/logo.png')}
                />
                <Image
                  style={{width: 22, height: 22}}
                  source={require('../app/src/assets/notification.png')}
                />
              </View>
            ),

            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                {/* <TouchableOpacity style={styles.signinheader} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.signincolor}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10}} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.signincolor}>Press Me</Text>
              </TouchableOpacity> */}
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator
    //   // screenOptions={({route}) => ({
    //   //   tabBarIcon: ({color, size}) => {
    //   //     let iconName;
    //   //     if (route.name === 'Home') {
    //   //       iconName = 'home';
    //   //     } else if (route.name === 'Wallet') {
    //   //       iconName = 'wallet';
    //   //     } else {
    //   //       iconName = 'ellipsis-horizontal';
    //   //     }
    //   //     // return <Ionicons name={iconName} size={size} color={color} />;
    //   //     return <Text></Text>;
    //   //   },
    //   //   tabBarActiveTintColor: '#007BFF',
    //   //   tabBarInactiveTintColor: 'gray',
    //   // })}
    //   >
    //     <Tab.Screen name="Home" component={Home} />
    //     {/* <Tab.Screen name="Wallet" component={() => <View />} />
    //     <Tab.Screen name="More" component={() => <View />} /> */}
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

export default App;
