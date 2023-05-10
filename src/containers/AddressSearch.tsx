import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAddresses } from '../api/addresses';
import CountryPicker from '../components/CountryPicker';
import StreetInput from '../components/StreetInput';
import { Street } from '../types';
import './AddressSearch.css';

const AddressSearch: FC = () => {
  const [country, setCountry] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [validStreets, setValidStreets] = useState<Street[]>([]);

  const { data: addressesData, refetch } = useQuery(
    ['addresses', country, streetName],
    () => getAddresses(country, streetName),
    {
      enabled: false
    }
  );

  useEffect(() => {
    if (addressesData?.totalResults) {
      setValidStreets(addressesData.streets);
    }
  }, [addressesData]);

  useEffect(() => {
    setStreetName('');
  }, [country]);

  useEffect(() => {
    if (!streetName) {
      return;
    }

    if (country) {
      refetch();
    }
  }, [streetName]);

  return (
    <div className="container">
      <div className="addressSearch">
        <h2 className="title">Address validator</h2>
        <div className="addressContainer">
          <CountryPicker setCountry={setCountry} />
          <StreetInput
            country={country}
            setStreetName={setStreetName}
            validStreets={validStreets}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressSearch;
