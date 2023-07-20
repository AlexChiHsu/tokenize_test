import {SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import BottomNavBar from '../../common/BottomNavBar';
import Header from './Header';
import {getMarkets, getMarketsSummaries} from '../../api/market/market';
import {Markets, MarketsSummary} from '../../types/markets';
import Content from './Content';

const Market = () => {
  const [markets, setMarkets] = useState<Markets>();
  const [marketsSummaries, setMarketsSummaries] = useState<MarketsSummary>();
  useEffect(() => {
    getMarkets().then((res: Markets) => res !== undefined && setMarkets(res));
    getMarketsSummaries().then(
      (res: MarketsSummary) => res !== undefined && setMarketsSummaries(res),
    );
  }, []);
  const [tab, setTab] = useState(0);
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 0, paddingBottom: 15}}>
          <Header data={markets?.data} tab={tab} setTab={setTab} />
          <Content data={markets?.data[tab]} />
        </ScrollView>
      </SafeAreaView>
      <BottomNavBar />
    </>
  );
};

export default Market;
