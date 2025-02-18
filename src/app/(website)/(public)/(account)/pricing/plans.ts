export const PLANS: {
  name: string
  label: string
  price: {
    monthly: number
    annually: number
  }
  details: string[]
}[] = [
  {
    name: 'enterpreneur',
    label: 'Enterpreneur',
    price: {
      monthly: 59,
      annually: 39,
    },
    details: [
      'Trends Database',
      '100 Tracked Trends',
      'Trending Products',
      'Meta Trends',
      'Channel Breakdown',
      '10 Trend Analyses',
      '1 user Seat',
    ],
  },
  {
    name: 'investor',
    label: 'Investor',
    price: {
      monthly: 108,
      annually: 99,
    },
    details: [
      'Trends Database',
      '500 Tracked Trends',
      'Trending Products',
      'Meta Trends',
      'Channel Breakdown',
      'Trend Forecasting',
      '100 Trend Analyses',
      'CSV Export',
      '4 user Seat',
    ],
  },
  {
    name: 'business',
    label: 'Business',
    price: {
      monthly: 350,
      annually: 249,
    },
    details: [
      'Trends Database',
      '500 Tracked Trends',
      'Trending Products',
      'Meta Trends',
      'Channel Breakdown',
      'Trend Forecasting',
      '500 Trend Analyses',
      'CSV Export',
      'Trends Export',
      'API Access',
      '100 user Seat',
    ],
  },
]
