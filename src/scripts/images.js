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
    url: 'clark-van-der-beken-chcyjyRQV74-unsplash.jpg',
    urlBlur: 'clark-van-der-beken-chcyjyRQV74-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/patterns?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"',
    author: 'Clark Van Der Beken',
    authorUrl: 'https://unsplash.com/@snapsbyclark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),

  createImage({
    url: 'wengang-zhai-GU4F3Gbts_A-unsplash.jpg',
    urlBlur: 'wengang-zhai-GU4F3Gbts_A-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/pattern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Wengang Zhai',
    authorUrl: 'https://unsplash.com/@wgzhai?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),

  createImage({
    url: 'omar-flores-lQT_bOWtysE-unsplash.jpg',
    urlBlur: 'omar-flores-lQT_bOWtysE-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/pattern?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Omar Flores',
    authorUrl: 'https://unsplash.com/@__itsflores?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  }),

  createImage({
    url: 'geran-de-klerk-bKhETeDV1WM-unsplash.jpg',
    urlBlur: 'geran-de-klerk-bKhETeDV1WM-unsplash-blur.jpg',
    source: 'Unsplash',
    sourceUrl: 'https://unsplash.com/s/photos/animals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    author: 'Geran de Klerk',
    authorUrl: 'https://unsplash.com/@gerandeklerk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  })
]
