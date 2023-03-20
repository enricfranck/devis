import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/navigators/RootStack';
import {TailwindProvider} from 'tailwindcss-react-native'
import { useFonts } from 'expo-font'
import  AppLoading  from 'expo-app-loading'
import  SplashScreen from 'expo-splash-screen';

export default function App() {

  let [fontLoaded] = useFonts({
    "Lato-Bold": require('./assets/fonts/Lato-Bold.ttf'),
    "Lato-Regular": require('./assets/fonts/Lato-Regular.ttf')
  })

  if (!fontLoaded){
    return null
  }
  return (
    <TailwindProvider>
      <RootStack />
    </TailwindProvider>
  );
}
