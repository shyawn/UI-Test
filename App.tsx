import React from 'react';
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {NavigationContainer} from '@react-navigation/native';
import Home from './src/pages/Home';

// const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <View>
      <Home />
    </View>
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
