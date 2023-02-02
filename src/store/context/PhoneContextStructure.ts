interface PhoneContextStructure {
  isCalling: boolean;
  phoneNumber: string;
  addNumber: (key: string) => void;
  deleteNumber: (phoneNumber: string) => void;
  setIsCallingTrue: () => void;
  setLimitCallTime: () => void;
  setIsCallingFalse: () => void;
}

export default PhoneContextStructure;
