import IdGenScreen from "./pages/IdGenScreen";
import EnGenScreen from "./pages/EnGenScreen";
import AboutScreen from "./pages/AboutScreen";
import Area15Screen from "./member/Area15Screen";
import HoloroScreen from "./member/HoloroScreen";
import HoloheroScreen from "./member/HoloheroScreen";
import DetailArea15Screen from "./detail/DetailArea15Screen";
import DetailHoloroScreen from "./detail/DetailHoloroScreen";
import DetailHoloheroScreen from "./detail/DetailHoloheroScreen";
import HolomythScreen from "./memberEN/HolomythScreen";
import HolocouncilScreen from "./memberEN/HolocouncilScreen";
import HolohopeScreen from "./memberEN/HolohopeScreen";
import DetailHolomythScreen from "./detailEN/DetailHolomythScreen";
import DetailHolocouncilScreen from "./detailEN/DetailHolocouncilScreen";
import DetailHolohopeScreen from "./detailEN/DetailHolohopeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import "react-native-gesture-handler";

const MyTheme = {
  colors: {
    primary: 'rgb(95, 221, 239)',
    background: 'rgb(48, 48, 48)',
    card: 'rgb(66,66,66)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(39,199,255)',
  },
};

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return(
    <BottomTab.Navigator screenOptions={{ headerShown: false }}>
        <BottomTab.Screen 
          name="Hololive ID" 
          component={IdGenScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="triforce" color={color} size={26} />
            ),
          }} />
        <BottomTab.Screen 
          name="Hololive EN" 
          component={EnGenScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="triangle-outline" color={color} size={26} />
            ),
          }} />
          <BottomTab.Screen 
          name="About" 
          component={AboutScreen} 
          options={{
            tabBarIcon: ({ color }) => (
              <Icon name="information" color={color} size={26} />
            ),
          }} />
      </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: true  }}>
        <Stack.Screen name="Hololive Member" component={TabNavigator} />
        <Stack.Screen name="Gen ID" component={IdGenScreen} />
        <Stack.Screen name="Gen EN" component={EnGenScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="AREA 15" component={Area15Screen} />
        <Stack.Screen name="holoro" component={HoloroScreen} />
        <Stack.Screen name="holoh3ro" component={HoloheroScreen} />
        <Stack.Screen name="Detail AREA 15" component={DetailArea15Screen} />
        <Stack.Screen name="Detail holoro" component={DetailHoloroScreen} />
        <Stack.Screen name="Detail holoh3ro" component={DetailHoloheroScreen} />
        <Stack.Screen name="holoMyth" component={HolomythScreen} />
        <Stack.Screen name="holoCouncil" component={HolocouncilScreen} />
        <Stack.Screen name="holoHope" component={HolohopeScreen} />
        <Stack.Screen name="Detail holoMyth" component={DetailHolomythScreen} />
        <Stack.Screen name="Detail holoCouncil" component={DetailHolocouncilScreen} />
        <Stack.Screen name="Detail holoHope" component={DetailHolohopeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}