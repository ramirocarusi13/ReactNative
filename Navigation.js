import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Feed from "./screens/tabScreens/Feed";
import Search from "./screens/tabScreens/Search";
import Settings from "./screens/tabScreens/Settings";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabGroup() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                /* tabBarShowLabel: false, */
                tabBarIcon: ({color, focused, size}) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "home" : "home-outline";
                    } else if (route.name === "Settings") {
                        iconName = focused ? "settings" : "ios-settings-sharp";
                    } else if (route.name === "Search") {
                        iconName = focused ? "search" : "search-outline";
                    }
                    return <Ionicons name={iconName} color={color} size={size} />
                }
            })}
            tabBarOptions={{
                activeTintColor: 'blue', // Establece el color activo a azul
                inactiveTintColor: 'black', // Color inactivo
            }}
        >
            <Tab.Screen name="Feed" component={Feed}  />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return <NavigationContainer>
        <TabGroup />
    </NavigationContainer>
}