import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text, Button } from "react-native";
import { RootStackParamsList } from "../components/navigation/StackNavigator";
import { TabsParamList } from "../components/navigation/TabsNavigator";
import CustomButton from "../components/CustomButton";
import { useLanguage } from "../contexts/LanguageContext";

type Props = NativeStackScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen({navigation}: any){
    //destructuring de parametro de ruta: sacando una propiedad de un objeto
    //const {email} = route.params

    const handleOnSettings = () => {
    navigation.navigate("Tabs", {screen: "Settings"})
  }

    const {changeLanguage, language} = useLanguage();
return(
    <View>
        <Text>Bienvenido a Home</Text>
        <Text>Tu idioma actual es: {language}</Text>
        <Button title="EN" onPress={() => changeLanguage('en')}/>
        <Button title="ES" onPress={() => changeLanguage('es')}/>
        <Button title="DE" onPress={() => changeLanguage('de')}/>
        <Button title="FR" onPress={() => changeLanguage('fr')}/>
        
        {/*
        <CustomButton 
             title={'Settings'} 
            onClick={handleOnSettings}
        />
        */}
    </View>
);

}