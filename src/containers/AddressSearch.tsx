import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAddresses, getAddressNumbers } from '../api/addresses';
import CoordinatesDisplay from '../components/CoordinatesDisplay';
import CountryPicker from '../components/CountryPicker';
import StreetInput from '../components/StreetInput';
import StreetNumberPicker from '../components/StreetNumberPicker';
import { Street, StreetNumber } from '../types';
import './AddressSearch.css';

const AddressSearch: FC = () => {
  const [country, setCountry] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');
  const [validStreets, setValidStreets] = useState<Street[]>([]);
  const [streetIds, setStreetIds] = useState<number[]>([]);
  const [validStreetIds, setValidStreetIds] = useState<StreetNumber[]>([]);
  const [selectedStreetNumber, setSelectedStreetNumber] =
    useState<StreetNumber>();

  const { data: addressesData, refetch: refetchStreets } = useQuery(
    ['addresses', country, streetName],
    () => getAddresses(country, streetName),
    {
      enabled: false
    }
  );

  const { data: streetNumbersData, refetch: refetchStreetNumbers } = useQuery(
    ['streetNumbers', country, streetIds],
    () => getAddressNumbers(country, streetIds),
    {
      enabled: false
    }
  );

  useEffect(() => {
    if (addressesData?.totalResults) {
      setValidStreets(addressesData.streets);
    } else {
      setValidStreets([]);
    }
  }, [addressesData]);

  useEffect(() => {
    if (!streetNumbersData) {
      return;
    }

    setValidStreetIds(streetNumbersData.streetNumbers);
  }, [streetNumbersData]);

  useEffect(() => {
    setValidStreetIds([]);
    setSelectedStreetNumber(undefined);
  }, [country]);

  useEffect(() => {
    if (!streetName) {
      return;
    }

    setValidStreetIds([]);
    setSelectedStreetNumber(undefined);

    if (country) {
      refetchStreets();
    }
  }, [streetName]);

  useEffect(() => {
    if (!streetIds) {
      return;
    }

    if (country) {
      refetchStreetNumbers();
    }
  }, [streetIds]);

  return (
    <div className="container">
      <div className="address-search">
        <h2 className="title">Address validator</h2>
        <div className="address-container">
          <CountryPicker setCountry={setCountry} />
          <StreetInput
            country={country}
            validStreets={validStreets}
            setStreetName={setStreetName}
            setStreetIds={setStreetIds}
          />
          {validStreetIds.length > 0 && (
            <StreetNumberPicker
              validStreetIds={validStreetIds}
              setSelectedStreetNumber={setSelectedStreetNumber}
            />
          )}

          {selectedStreetNumber && (
            <CoordinatesDisplay
              latitude={selectedStreetNumber.latitude}
              longitude={selectedStreetNumber.longitude}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressSearch;
