export interface Street {
  countryCode: string;
  city: string;
  streetName: string;
  streetIds: number[];
  isAliasMatch: string;
}

export interface StreetResponse {
  streets: Street[];
  totalResults: number;
}
