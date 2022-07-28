import { Contacts } from '../Contacts/Contacts';
import { Information } from '../PersonalInfo/PersonalInfo';

export const App = () => {
  return (
    <div id="root">
      <Contacts />
      <Information />
    </div>
  );
};
