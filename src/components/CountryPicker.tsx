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
    <div className="country-picker-container">
      <form>
        <select
          id="countries"
          name="countries"
          data-testid="country-picker"
          className="country-picker-element"
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="" data-testid="country-picker-option">
            Select your country
          </option>
          {Object.values(countries).map(({ label, code }) => {
            return (
              <option
                key={code}
                value={code}
                data-testid="country-picker-option"
              >
                {label}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default CountryPicker;
