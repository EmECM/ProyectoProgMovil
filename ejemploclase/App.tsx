import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a mi App!</Text>
      <StatusBar style="auto" />
      <CustomButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccf4f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
