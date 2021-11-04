const createImage = ({
  url,
  urlBlur,
  source,
  sourceUrl,
  author,
  authorUrl,
}) => {
  return {
    url,
    urlBlur,
    source,
    sourceUrl,
    author,
    authorUrl,
  }
}

const images = [
  createImage({
    url: 'wengang-zhai-GU4F3Gbts_A-unsplash.jpg',
    urlBlur: 'wengang-zhai-GU4F3Gbts_A-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/pattern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Wengang Zhai',
    authorUrl: 'https://unsplash.com/@wgzhai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),

  createImage({
    url: 'geran-de-klerk-bKhETeDV1WM-unsplash.jpg',
    urlBlur: 'geran-de-klerk-bKhETeDV1WM-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Geran de Klerk',
    authorUrl: 'https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),

  createImage({
    url: 'alex-shutin-kKvQJ6rK6S4-unsplash.jpg',
    urlBlur: 'alex-shutin-kKvQJ6rK6S4-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Alex Shutin',
    authorUrl: 'https://unsplash.com/@fiveamstories?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),
]
