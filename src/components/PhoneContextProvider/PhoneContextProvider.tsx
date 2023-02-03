import { useState } from "react";
import PhoneContext from "../../store/context/PhoneContext";

export interface PhoneContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const PhoneContextProvider = ({
  children,
}: PhoneContextProviderProps): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isCalling, setIsCalling] = useState(false);

  const addNumber = (key: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }
    setPhoneNumber(phoneNumber + key);
  };

  const deleteNumber = (phoneNumber: string) => {
    if (phoneNumber.length <= 0) return;

    return phoneNumber.slice(0, -1);
  };

  const setIsCallingTrue = (): void => {
    setIsCalling(true);
  };

  const setIsCallingFalse = (): void => {
    setIsCalling(false);
    setPhoneNumber("");
  };

  const setLimitCallTime = (): void => {
    if (isCalling) {
      setTimeout(() => {
        setIsCallingFalse();
      }, 5000);
    }
  };

  return (
    <PhoneContext.Provider
      value={{
        isCalling,
        phoneNumber,
        addNumber,
        deleteNumber,
        setIsCallingTrue,
        setLimitCallTime,
        setIsCallingFalse,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};

export default PhoneContextProvider;
