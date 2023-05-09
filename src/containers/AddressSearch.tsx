import { FC, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAddresses } from '../api/addresses';
import './AddressSearch.css';

const AddressSearch: FC = () => {
  const [country, setCountry] = useState<string>('');
  const [streetName, setStreetName] = useState<string>('');

  const { data: addressesData, refetch } = useQuery(
    ['addresses', country, streetName],
    () => getAddresses(country, streetName),
    {
      enabled: false
    }
  );

  useEffect(() => {
    if (country && streetName) {
      refetch();
    }
  }, [country, streetName]);

  return (
    <div className="container">
      <div className="addressSearch">
        <h2 className="title">Address validator</h2>
      </div>
    </div>
  );
};

export default AddressSearch;
