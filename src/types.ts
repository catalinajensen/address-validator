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

export interface StreetNumber {
  streetNo: number;
  addressId: number;
  entrance: string;
  houseType: string;
  deliveryPointId: number;
  postalCode: string;
  duplicateNumberAndEntrance: boolean;
  latitude: number;
  longitude: number;
  showHouseholds: boolean;
}

export interface StreetNumberResponse {
  streetNumbers: StreetNumber[];
}
