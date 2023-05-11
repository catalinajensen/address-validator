import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import { Street } from '../types';
import './StreetInput.css';

interface IProps {
  country: string;
  validStreets: Street[];
  setStreetName: (value: string) => void;
  setStreetIds: (value: number[]) => void;
}

const getDisplayName = (value: string): string => {
  const str = value.toLowerCase();
  const displayStreetName = str.charAt(0).toUpperCase() + str.slice(1);
  return displayStreetName;
};

const StreetInput: FC<IProps> = ({
  country,
  validStreets,
  setStreetName,
  setStreetIds
}: IProps) => {
  const hasItems = validStreets.length > 0;
  const [isFocused, setIsFocused] = useState<boolean>(hasItems);
  const [inputValue, setInputValue] = useState<string>('');

  const handleOnBlur = (): void => {
    setIsFocused(false);
  };

  const handleOnFocus = (): void => {
    if (inputValue) {
      setStreetName(inputValue);
      setIsFocused(true);
    }
  };

  const handleOnChange = (searchQuery: string): void => {
    if (!isFocused) {
      setIsFocused(true);
    }

    if (!searchQuery) {
      setIsFocused(false);
    }

    setInputValue(searchQuery);

    setStreetName(searchQuery);
  };

  const handleOnMouseDown = (
    event: React.MouseEvent<Element, MouseEvent>
  ): void => {
    const target = event.target as HTMLButtonElement;

    const selectedId = target.getAttribute('id');

    const selectedElement = validStreets.find(
      ({ city, streetName }) => selectedId === `${streetName}-${city}`
    );

    const selectedElementStreetName = selectedElement?.streetName || '';
    const selectedElementStreetIds = selectedElement?.streetIds || [];

    setInputValue(getDisplayName(selectedElementStreetName));
    setStreetIds([...selectedElementStreetIds]);
  };

  useEffect(() => {
    setInputValue('');
  }, [country]);

  return (
    <div className="street-input-container">
      <form className="street-input-element">
        <input
          type="text"
          className="input-element"
          data-testid="item-input"
          placeholder="Enter your street name"
          onChange={(event) => handleOnChange(event.target.value)}
          value={inputValue}
          disabled={!country}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
        {isFocused && (
          <div
            className={cn('result-list', {
              'one-result-list': validStreets.length === 1,
              'no-result-list': !validStreets.length
            })}
          >
            <ul className="scrollable-list">
              {validStreets.map(({ city, streetName }, index) => (
                <li
                  key={index}
                  className="scrollable-element"
                  onMouseDown={(event) => handleOnMouseDown(event)}
                  data-testid="scrollable-element"
                >
                  <div className="element-details">
                    <span
                      className="element-title"
                      data-testid="element-title"
                      id={`${streetName}-${city}`}
                    >
                      {getDisplayName(streetName)}
                    </span>
                    <span
                      className="element-subtitle"
                      id={`${streetName}-${city}`}
                    >
                      {getDisplayName(city)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
};

export default StreetInput;
