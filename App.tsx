import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigation/RootNavigator';
import { PersonProvider } from './src/context/PersonContext';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <PersonProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersonProvider>
    </TamaguiProvider>
  )
}
