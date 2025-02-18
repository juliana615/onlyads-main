interface IReport {
  _id: string
  path: string
  timestamp: number
  subject: string
  highlights: string[]
}

interface IMetaTrend {
  background_and_analysis: string
  categories: string
  created_at: string
  published: boolean
  meta: { id: number }
  related_meta_trends: Array<
    | Pick<
        IMetaTrend,
        | 'background_and_analysis'
        | 'categories'
        | 'created_at'
        | 'meta'
        | 'published'
        | 'related_meta_trends'
        | 'related_topics'
        | 'timeframe'
        | 'title'
        | 'topics'
        | 'url'
      >
    | string
  >
  related_topics: string
  timeframe: string
  title: string
  topics: string
  url: string
  __v?: number
  _id: string
}
