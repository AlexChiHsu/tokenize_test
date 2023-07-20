import {View} from 'react-native';
import React from 'react';
import Card from './CardComponent';
import {MarketsData} from '../../types/markets';

const Content = ({data}: {data: MarketsData | undefined}) => {
  return (
    <View>
      {data !== undefined &&
        data.list.map(item => (
          <Card
            dataName={item.marketCurrency}
            title={item.marketCurrency}
            subtitle={item.marketCurrencyLong}
            value={0}
            parsent={0}
          />
        ))}
    </View>
  );
};

export default Content;
