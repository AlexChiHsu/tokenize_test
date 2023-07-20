export interface Markets {
  status: string;
  message: string;
  data: MarketsData[];
}

export interface MarketsData {
  title: string;
  list: MarketsDataList[];
}

export interface MarketsDataList {
  id: number;
  marketId: string;
  marketName: string;
  baseCurrency: string;
  marketCurrency: string;
  marketCurrencyLong: string;
  ceiling: string;
  floor: string;
  baseIncrement: null;
  quoteIncrement: null;
  baseMinSize: null;
  baseMaxSize: null;
  tradingStatus: string;
  listRoles: null;
}

export interface MarketsSummary {
  status: string;
  message: string;
  data: MarketsSummariesData[];
}

export interface MarketsSummariesData {
  marketId: number;
  market: string;
  askPrice: number;
  bidPrice: number;
  lastPrice: number;
  openPrice: number;
  prevPrice: number;
  high: number;
  low: number;
  volume: number;
  listRoles: null;
}
