import React from 'react';
import {Card, Image, Text} from '@rneui/themed';
import {View} from 'react-native';

const CardComponent = ({
  dataName,
  title,
  subtitle,
  value,
  parsent,
}: {
  dataName: string;
  title: string;
  subtitle: string;
  value: number;
  parsent: number;
}) => {
  const uri = `https://tokenize-dev.com/assets/images/currency-logos/${dataName.toLowerCase()}.png`;

  return (
    <>
      <Card
        containerStyle={{
          borderRadius: 10,
          height: 74,
          shadowOffset: {width: 0, height: 3},
          shadowColor: '#EBEDFB',
          shadowOpacity: 1,
          shadowRadius: 6,
          elevation: 6,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={{uri: uri}}
            style={{width: 38, height: 38}}
            resizeMode="cover"
          />
          <View style={{marginStart: 15, flex: 1}}>
            <Card.Title
              style={{
                fontFamily: 'Roboto',
                fontWeight: '700',
                fontSize: 15,
                lineHeight: 18,
                letterSpacing: 0.3,
                textAlign: 'left',
                color: '#3D436C',
              }}>
              {title}
            </Card.Title>
            <Card.FeaturedSubtitle
              style={{
                color: '#8E92B2',
                fontFamily: 'Roboto',
                fontSize: 14,
                lineHeight: 18,
                fontWeight: '500',
                marginTop: -12,
              }}>
              {subtitle}
            </Card.FeaturedSubtitle>
          </View>
          <View>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: '##3D436C',
              }}>
              ${value}
            </Text>
            <Text
              style={{
                fontFamily: 'Roboto',
                fontWeight: '500',
                fontSize: 15,
                lineHeight: 18,
                color: '#3BBA7D',
                marginTop: 5,
              }}>
              +0.14%
            </Text>
          </View>
        </View>
      </Card>
    </>
  );
};

export default CardComponent;
