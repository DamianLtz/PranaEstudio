import React, { useState, createContext } from "react";
import { IntlProvider } from "react-intl";
import TraduccionIngles from "../lang/en-US.json";
import TraduccionEsp from "../lang/es-AR.json";

const langContext = createContext<any | undefined>(undefined);

interface IMessageProps {
  children: JSX.Element | JSX.Element[];
}

const LangProvider = ({ children }: IMessageProps) => {
  const [lang, setLang] = useState<string>("es-AR");
  const [messages, setMessages] = useState<any>(TraduccionEsp);

  const changeLanguage = (actualLenguage: any) => {
    if (actualLenguage === "es-AR") {
      setLang(actualLenguage);
      setMessages(TraduccionEsp);
    } else {
      setLang(actualLenguage);
      setMessages(TraduccionIngles);
    }
  };

  return (
    <langContext.Provider value={{ changeLanguage: changeLanguage }}>
      <IntlProvider locale={lang} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
