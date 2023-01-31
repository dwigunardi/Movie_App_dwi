import { useColorMode, useColorModeValue } from 'native-base';
import {createContext, useEffect, useState} from 'react';

export const ColorContext = createContext({
  dark : false
});

export const ColorProvider = ({children}) => {
  const [colorScheme, setColorScheme] = useState('dark');
  const [enabled, setEnabled] = useState(false)
  const {toggleColorMode} = useColorMode()
  const text = useColorModeValue("Light", "Dark");
 const bg = useColorModeValue("warmGray.50", "coolGray.800");
  useEffect(() => {
    enabled ? setColorScheme('dark') : setColorScheme('light')
  
    
  }, [enabled])
  
  const Setter = {
    changeColor: toggleColorMode,
    colorScheme: colorScheme,
    setColor: setColorScheme,
    textColor: text,
    bgColor: bg,
    setEnabled: setEnabled,
    isEnabled: enabled,
    // useColorMode: () => useColorMode("Light", "Dark"),
    // useColorModeValue : () => useColorModeValue("warmGray.50", "coolGray.800")
  };
  return (
    <ColorContext.Provider value={Setter}>{children}</ColorContext.Provider>
  );
};
