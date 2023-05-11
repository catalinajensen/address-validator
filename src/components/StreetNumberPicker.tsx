import { FC } from 'react';
import { StreetNumber } from '../types';
import './StreetNumberPicker.css';

interface IProps {
  validStreetIds: StreetNumber[];
  setSelectedStreetNumber: (value: StreetNumber) => void;
}

const StreetNumberInput: FC<IProps> = ({
  validStreetIds,
  setSelectedStreetNumber
}: IProps) => {
  const hasItems = validStreetIds.length > 0;

  const handleOnChange = (selectedValue: string): void => {
    const selectedElement = validStreetIds.find(
      ({ addressId }) => +selectedValue === addressId
    );
    if (selectedElement) {
      setSelectedStreetNumber(selectedElement);
    }
  };

  return (
    <div className="street-number-picker-container">
      <form>
        <select
          id="streetNumbers"
          name="streetNumbers"
          data-testid="street-number-picker"
          className="street-number-picker-element"
          onChange={(e) => handleOnChange(e.target.value)}
          disabled={!hasItems}
        >
          <option value="" data-testid="street-number-picker-option">
            Select your street number
          </option>
          {validStreetIds.map(({ streetNo, addressId, entrance }) => {
            return (
              <option
                key={addressId}
                value={addressId}
                data-testid="street-number-picker-option"
              >
                {entrance ? `${streetNo} ${entrance}` : `${streetNo}`}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export default StreetNumberInput;
