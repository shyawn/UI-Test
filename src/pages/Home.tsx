import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

export default function Home() {
  const tickets = [
    {
      title: 'My e-tickets',
      icon: '',
      description: "There aren't any yet.",
      active: false,
      linkText: 'Retrieve here',
    },
    {
      title: 'Park hours',
      icon: '',
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
          // alignItems: 'center',
        }}>
        <Text
          style={{
            // position: 'absolute',
            // bottom: 16,
            // left: 16,
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}>
          Don't miss our {'\n'}
          <Text style={{fontSize: 23}}>daily </Text>
          <Text style={{fontSize: 25}}>Dive Feeding!</Text>
        </Text>
      </View>

      <View style={{paddingLeft: 20}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 16,
          }}>
          {['Map', 'Inhabitants', 'Shows', 'Shopping'].map(item => (
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
        </View>
        <View
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
        </View>

        {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <View
          style={{
            flex: 1,
            padding: 16,
            backgroundColor: '#f8f8f8',
            borderRadius: 12,
            marginRight: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>My e-tickets</Text>
          <Text>There aren't any yet.</Text>
          <TouchableOpacity>
            <Text style={{color: '#007BFF'}}>Retrieve here</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            padding: 16,
            backgroundColor: '#f8f8f8',
            borderRadius: 12,
            marginLeft: 8,
          }}>
          <Text style={{fontWeight: 'bold'}}>Park hours</Text>
          <Text>Today, 13 Feb 10am - 5pm</Text>
          <TouchableOpacity>
            <Text style={{color: '#007BFF'}}>Plan my visit</Text>
          </TouchableOpacity>
        </View>
      </View> */}
        <SwiperFlatList
          index={0}
          showPagination
          data={tickets}
          renderItem={({item}) => (
            <View style={styles.child}>
              <Text style={styles.title}>{item.title}</Text>
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
      </View>

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
          showPagination
          data={shows}
          renderItem={({item}) => (
            <View style={styles.showContainer}>
              <View style={styles.timeContainer}>
                {/* <Image source={}> */}
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
    marginVertical: 20,
    justifyContent: 'center',
    elevation: 4,
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
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 8,
    maxWidth: 70,
  },
  timeText: {
    fontWeight: 'bold',
    fontSize: 12,
    // alignSelf: 'flex-start',
  },
});
