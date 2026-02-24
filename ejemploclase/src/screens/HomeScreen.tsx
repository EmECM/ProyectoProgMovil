import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamsList } from "../components/navigation/StackNavigator";
import { TabsParamList } from "../components/navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";

type Props = NativeStackScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen({navigation}: any){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    //const {email} = route.params

    const handleOnSettings = () => {
    navigation.navigate("Tabs", {screen: "Settings"})
  }
return(
    <View>
        <Text>Bienvenido a Home</Text>
        <CustomButton 
             title={'Settings'} 
            onClick={handleOnSettings}
        />
    </View>
);

}