import { useState, createContext, PropsWithChildren} from 'react';

export const CurrecnyContext = createContext<any>(null);

const CurrencyProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [fromCurrency, setFromCurrency] = useState("🇬🇪 GEL - Georgia")
    const [toCurrency, setToCurrency] = useState("🇺🇸 USD - United States")
    const [firstAmount, setFirstAmount] = useState("")

    const value = {
        fromCurrency, 
        setFromCurrency,
        toCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount
    }
  return (
    <CurrecnyContext.Provider value={value}>
      {children}
    </CurrecnyContext.Provider>
  );
};

export default CurrencyProvider;
