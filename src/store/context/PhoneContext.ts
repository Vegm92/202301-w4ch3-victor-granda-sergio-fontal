import { createContext } from "react";

interface PhoneContextStructure {
  isCalling: boolean;
  phoneNumber: number;
}

const PhoneContext = createContext({} as PhoneContextStructure);

export default PhoneContext;
