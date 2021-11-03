const root = document.querySelector(':root');
const randomButton = document.querySelector('[data-random]');
const authorLink = document.querySelector('[data-author-link]');
const sourceLink = document.querySelector('[data-source-link]');

const setCssVariable = ({ variable, newValue }) => {
  root.style.setProperty(variable, newValue);
}

randomButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * images.length);

  setCssVariable({ variable: '--background', newValue: `url(/assets/${images[randomNumber].url})` });
  setCssVariable({ variable: '--background-blur', newValue: `url(/assets/${images[randomNumber].urlBlur})` });

  authorLink.setAttribute('href', images[randomNumber].authorUrl);
  sourceLink.setAttribute('href', images[randomNumber].sourceUrl);

  authorLink.innerHTML = images[randomNumber].author;
  sourceLink.innerHTML = images[randomNumber].source;
})
