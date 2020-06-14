import { HTTPservices } from '../HTTPservices/HTTPservices';
import { app } from '../index';
import { spinner } from '../components/spinner/spinner';

export const initial = async () => {
  try {
    app.innerHTML = spinner();
    const countries = await HTTPservices.getAllCountries();
    return countries;
  } catch (e) {
    console.log(e);
  }
};
