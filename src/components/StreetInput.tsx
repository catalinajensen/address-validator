import { FC } from 'react';
import './StreetInput.css';

interface IProps {
  setStreetName: (value: string) => void;
  validateAddress: () => void;
}

const StreetInput: FC<IProps> = ({
  setStreetName,
  validateAddress
}: IProps) => {
  return (
    <div className="streetInputContainer">
      <input
        type="text"
        className="inputElement"
        placeholder="Enter your street name "
        onChange={(event) => setStreetName(event.target.value)}
      />
      <button className="validateButton" onClick={() => validateAddress()}>
        Validate
      </button>
    </div>
  );
};

export default StreetInput;
