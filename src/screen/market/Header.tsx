import {ScrollView, View} from 'react-native';
import React from 'react';
import {Image, Tab, Text} from '@rneui/themed';
import {MarketsData} from '../../types/markets';

const Header = ({
  data,
  tab,
  setTab,
}: {
  data: MarketsData[] | undefined;
  tab: number;
  setTab: Function;
}) => {
  const buttonList = data?.map(item => item.title);
  return (
    <>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 5,
        }}>
        <Text
          style={{
            fontSize: 16,
            lineHeight: 16,
            letterSpacing: 0.5,
            fontFamily: 'Roboto',
            fontWeight: '700',
            color: '#3D436C',
            marginLeft: 23,
          }}>
          Markets
        </Text>
        <Image
          source={require('../../asset/image/search_icon.png')}
          style={{width: 16, height: 16, marginEnd: 20}}
          resizeMode="cover"
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingEnd: 15,
          marginTop: 15,
          paddingStart: 15,
        }}>
        <Tab
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          value={tab}
          onChange={e => {
            setTab(e);
          }}
          indicatorStyle={{
            backgroundColor: 'transparent',
            height: 0,
          }}>
          {buttonList?.map((item, index) => (
            <Tab.Item
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
                backgroundColor: tab === index ? '#597AF4' : '#9194BB',
                borderRadius: 5,
                width: 78,
                height: 32,
                marginEnd: 8,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '500',
                  fontFamily: 'Roboto',
                  lineHeight: 15,
                  color: '#FFFFFF',
                }}>
                {item}
              </Text>
            </Tab.Item>
          ))}
        </Tab>
      </ScrollView>
    </>
  );
};

export default Header;
