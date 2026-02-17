import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { RootStackParamsList } from "../components/navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamsList, 'Home'>;

export default function HomeScreen({route}:Props){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    const {email} = route.params
return(
    <View>
        <Text>Bienvendio, {email}</Text>
    </View>
);

}