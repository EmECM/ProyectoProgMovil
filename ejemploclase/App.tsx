import { NavigationContainer } from '@react-navigation/native';
import {View} from 'react-native';
import StackNavigator from './src/components/navigation/StackNavigator';


export default function App() {

  return (
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
  );
}

