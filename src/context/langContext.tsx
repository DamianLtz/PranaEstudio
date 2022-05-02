import React, { useState, createContext } from "react";
import { IntlProvider } from "react-intl";
import TraduccionIngles from "../lang/en-US.json";
import TraduccionEsp from "../lang/es-AR.json";

type TLangContext = {
  changeLanguage: (actualLanguage: languages) => void;
  lang: string;
};
type languages = "es-AR" | "en-US";

const langContext = createContext<TLangContext>({
  changeLanguage: () => {},
  lang: "",
});
langContext.displayName = "Ver Lenguaje";

interface IMessageProps {
  children: JSX.Element | JSX.Element[];
}

interface IMessage {
  [text: string]: string;
}

const LangProvider = ({ children }: IMessageProps) => {
  const [lang, setLang] = useState<languages>("es-AR");
  const [messages, setMessages] = useState<IMessage>(TraduccionEsp);

  const changeLanguage = (actualLanguage: languages) => {
    if (actualLanguage === "es-AR") {
      setLang(actualLanguage);
      setMessages(TraduccionEsp);
    } else {
      setLang(actualLanguage);
      setMessages(TraduccionIngles);
    }
  };

  return (
    <langContext.Provider value={{ changeLanguage, lang }}>
      <IntlProvider locale={lang} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
