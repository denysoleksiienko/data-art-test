## DataArt Open Day Test Task

### `npm i`
### `npm start`

##

#### Show the list of all countries from API (https://restcountries.eu/#api-endpoints-all).
While countries are not loaded yet show loader.
Display country as a card with next info:
- flag
- country name
- capital
- region
- population
- list of all timezones that country has (example: &quot;Timezones: UTC+07:00,
UTC+08:00, UTC+10:00&quot;)
- list of all currencies for the country ( code + symbol, example: &quot;Currencies: USD $,
EUR €&quot;)
- list of country name translation - only for languages &quot;de&quot;, &quot;es&quot;, &quot;it&quot; (example:
&quot;Translations:
de: Ukraine,
es: Ucrania,
it: Ucraina
&quot;)
Add sidebar on the left side of the page. It should contain radiobuttons for filtering
countries by region. List of regions: Africa, Americas, Asia, Europe, Oceania.
Behaviour: when I click on radiobutton with label Europe, I want to see the list of
countries only from Europe region (Check https://restcountries.eu/#api-endpoints-
region).
