import {View} from 'react-native';
import React, {useState} from 'react';
import {Image, Tab, Text} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';

const BottomNavBar = () => {
  const [index, setIndex] = useState(1);
  const navigation = useNavigation();
  const navBarList = [
    {title: 'Home', image: require('../asset/image/home.png')},
    {title: 'Markets', image: require('../asset/image/Markets.png')},
    {title: 'Wallets', image: require('../asset/image/wallets_icon.png')},
    {title: 'Portfolio', image: require('../asset/image/portfolio_icon.png')},
    {title: 'More', image: require('../asset/image/more.png')},
  ];
  return (
    <View style={{paddingVertical: 10, paddingTop: 6}}>
      <Tab
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        value={index}
        onChange={e => {
          setIndex(e);
          navigation.navigate(navBarList[e].title);
        }}
        indicatorStyle={{
          backgroundColor: 'transparent',
          height: 0,
        }}>
        {navBarList.map((item, itemIndex) => (
          <Tab.Item
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
            }}>
            <Image
              onPress={() => {}}
              source={item.image}
              style={{width: 26, height: 23}}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 13,
                fontWeight: '500',
                fontFamily: 'Roboto',
                lineHeight: 15,
                color: itemIndex === index ? '#597AF4' : '#9194BB',
                marginTop: 3,
              }}>
              {item.title}
            </Text>
          </Tab.Item>
        ))}
      </Tab>
    </View>
  );
};

export default BottomNavBar;
