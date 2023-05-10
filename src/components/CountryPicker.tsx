import { FC } from 'react';
import './CountryPicker.css';

const countries = {
  norway: {
    label: 'Norway',
    code: 'NO'
  },
  denmark: {
    label: 'Denmark',
    code: 'DK'
  },
  sweden: {
    label: 'Sweden',
    code: 'SE'
  },
  finland: {
    label: 'Finland',
    code: 'FI'
  }
};

interface IProps {
  setCountry: (value: string) => void;
}

const CountryPicker: FC<IProps> = ({ setCountry }: IProps) => {
  return (
    <div className="countryPickerContainer">
      <select
        id="countries"
        name="countries"
        className="countryPickerElement"
        onChange={(e) => setCountry(e.target.value)}
      >
        <option value="">Select your country</option>
        {Object.values(countries).map(({ label, code }) => {
          return (
            <option key={code} value={code}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountryPicker;
