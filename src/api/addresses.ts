import axios from 'axios';
import { StreetResponse, StreetNumberResponse } from '../types';

export const API = 'https://staging-ws.di.no/ws/json/addressHelper/v-2';
export const apiKey = '905679e0-2da7-4be1-94a2-23646d8d3488';

export const getAddresses = async (
  country: string,
  streetName: string
): Promise<StreetResponse> => {
  const { data } = await axios.get(
    `${API}/${country}/streetSearch/${streetName}`,
    {
      params: {
        apiKey
      }
    }
  );

  return data;
};

export const getAddressNumbers = async (
  country: string,
  streetIds: number[]
): Promise<StreetNumberResponse> => {
  const streetIdsString = streetIds.toString();

  const { data } = await axios.get(
    `${API}/${country}/streetNumberSearch/${streetIdsString}`,
    {
      params: {
        apiKey
      }
    }
  );

  return data;
};
