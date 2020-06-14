import { app } from '../../index';
import { header } from '../header/header';

export const render = (data) => {
  app.innerHTML = app.innerHTML = `
    <header class="header">${header()}</header>
    <div class="container">
        ${data
          .map(({ flag, name, capital, region, population, timezones, currencies, translations }) => {
            return `
              <section class="country-card">
                <div class="country-flag">
                    <img class="flag-img" src=${flag} alt="flag"/>
                </div>
                <h1 class="country-name">${name}</h1>
                <div class="country-info">
                  <div class="country-capital">Capital: ${capital}</div>
                  <div class="country-region">Region: ${region}</div>
                  <div class="country-population">Population: ${population}</div>
                  <div class="country-timezones">Timezone: ${timezones}</div>
                  <div class="country-currencies">Currency: ${currencies.map(
                    ({ code, symbol }) => `<span>${code} ${symbol}</span>`
                  )}</div>
                  <div>Translations:</div>
                  <ul class="country-translations-list">
                    <li class="translations-item">${translations.de}</li>
                    <li class="translations-item">${translations.es}</li>
                    <li class="translations-item">${translations.it}</li>
                  </ul>
                </div>
              </section>
            `;
          })
          .join('')}
    </div>
  `;
};
