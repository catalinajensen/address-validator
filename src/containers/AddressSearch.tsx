import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAddresses } from '../api/addresses';
import CountryPicker from '../components/CountryPicker';
import StreetInput from '../components/StreetInput';
import './AddressSearch.css';

const AddressSearch: FC = () => {
  const [country, setCountry] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [isAddressValid, setIsAddressValid] = useState<boolean>(false);

  const { data: addressesData, refetch } = useQuery(
    ['addresses', country, streetName],
    () => getAddresses(country, streetName),
    {
      enabled: false
    }
  );

  const validateAddress = () => {
    if (country && streetName) {
      refetch();
    }
  };

  useEffect(() => {
    if (addressesData?.totalResults) {
      setIsAddressValid(true);
    }
  }, [addressesData]);

  return (
    <div className="container">
      <div className="addressSearch">
        <h2 className="title">Address validator</h2>
        <div className="addressContainer">
          <CountryPicker setCountry={setCountry} />
          <StreetInput
            setStreetName={setStreetName}
            validateAddress={() => validateAddress()}
          />
        </div>

        {isAddressValid && <div>Valid address</div>}
      </div>
    </div>
  );
};

export default AddressSearch;
