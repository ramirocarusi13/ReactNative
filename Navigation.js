import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/tabScreens/Feed";

const Tab = createBottomTabNavigator();

function TabGroup() {
    
}

export default function Navigation() {
    return <NavigationContainer>
        <Feed />
    </NavigationContainer>
}