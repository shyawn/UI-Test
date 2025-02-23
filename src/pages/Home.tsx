import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

export default function Home() {
  const tickets = [
    {
      title: 'My e-tickets',
      icon: require('../assets/e-ticket.png'),
      description: "There aren't any yet.",
      active: false,
      linkText: 'Retrieve here',
    },
    {
      title: 'Park hours',
      icon: require('../assets/park-hour.png'),
      description: 'Today, 13 Feb 10am - 5pm',
      active: true,
      linkText: 'Plan my visit',
    },
  ];
  const shows = [
    {
      title: 'Dive Feeding @ Shipwreck',
      time: '2:30 PM',
    },
    {
      title: 'Say Cheese with The Shark',
      time: '2.40 PM',
    },
  ];
  return (
    <ScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: '#1b5185',
          marginBottom: 16,
          padding: 20,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Don't miss our {'\n'}
          <Text style={{fontSize: 23}}>daily </Text>
          <Text style={{fontSize: 25}}>Dive Feeding!</Text>
        </Text>
      </View>

      <View style={{paddingLeft: 10}}>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            marginBottom: 16,
            flexWrap: 'wrap',
            // marginHorizontal: 'auto',
            // alignContent: 'center',
            // width: 200,
          }}>
          {[
            {title: 'Map', icon: require('../assets/map.png')},
            {title: 'Inhabitants', icon: require('../assets/fish.png')},
            {title: 'Shows', icon: require('../assets/movie.png')},
            {title: 'Shopping', icon: require('../assets/shopping.png')},
            {title: 'Dine', icon: require('../assets/dining.png')},
            {title: 'Meet & Greets', icon: require('../assets/meet-greet.png')},
          ].map(item => (
            <TouchableOpacity
              key={item.title}
              style={{
                alignItems: 'center',
                marginHorizontal: 12,
                marginVertical: 5,
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#eee',
                  borderRadius: 25,
                  marginBottom: 4,
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={item.icon} style={{width: 22, height: 22}} />
              </View>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: '',
            marginBottom: 16,
          }}>
          {['Dine', 'Meet & Greets'].map(item => (
            <TouchableOpacity key={item} style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#eee',
                  borderRadius: 25,
                  marginBottom: 4,
                }}
              />
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View> */}
      </View>
      <SwiperFlatList
        index={0}
        showPagination={false}
        data={tickets}
        style={{paddingLeft: 20, paddingVertical: 10}}
        renderItem={({item}) => (
          <View style={styles.child}>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              source={item.icon}
              style={{
                position: 'absolute',
                top: 11,
                right: 10,
                width: 22,
                height: 22,
              }}
            />
            <Text
              style={[
                item.active ? styles.activeDescription : styles.description,
              ]}>
              {item.description}
            </Text>
            <Text style={styles.link}>{item.linkText}</Text>
          </View>
        )}
      />

      <View style={{paddingLeft: 20}}>
        <View style={styles.upcomingHeader}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'semibold',
              color: '#838383',
            }}>
            Upcoming Shows
          </Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <SwiperFlatList
          index={0}
          showPagination={false}
          data={shows}
          renderItem={({item}) => (
            <View style={styles.showContainer}>
              <View style={styles.timeContainer}>
                <Image
                  source={require('../assets/park-hour.png')}
                  style={{width: 14, height: 14}}
                />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
              <Text style={styles.showTitle}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  child: {
    width: 150,
    height: 120,
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    paddingVertical: 3,
    marginRight: 13,
    marginBottom: 20,
    justifyContent: 'center',
    elevation: 9,
    position: 'relative',
  },
  title: {
    fontSize: 12,
    marginBottom: 7,
  },
  description: {
    fontSize: 16,
    color: '#b8b7b7',
    marginBottom: 5,
  },
  activeDescription: {
    color: '#656565',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 500,
  },
  link: {
    fontSize: 13,
    color: '#e47171',
    marginTop: 5,
    fontWeight: 500,
  },
  upcomingHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  viewAll: {
    color: '#e47171',
    fontSize: 13,
  },
  showContainer: {
    backgroundColor: '#1b5185',
    width: 200,
    height: 150,
    borderRadius: 12,
    padding: 7,
    paddingBottom: 15,
    marginRight: 10,
    marginTop: 6,
    marginVertical: 20,
    marginBottom: 50,
    flex: 1,
    justifyContent: 'space-between',
  },
  showTitle: {
    color: 'white',
    // fontSize: 1,
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 5,
    gap: 5,
    maxWidth: 78,
    maxHeight: 23,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
});
