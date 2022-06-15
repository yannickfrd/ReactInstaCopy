import {Ionicons} from "@expo/vector-icons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../../../screen/home/HomeScreen";
import SearchScreen from "../../../screen/search/SearchScreen";
import ReelScreen from "../../../screen/reel/ReelScreen";
import ShopScreen from "../../../screen/shop/ShopScreen";
import ProfilScreen from "../../../screen/profil/ProfilScreen";

const {Navigator, Screen} = createBottomTabNavigator();
const MyTheme = {
    dark: false,
    colors: {
        primary: 'white',
        background: 'white',
        card: 'black',
        text: 'white',
        border: 'white',
        notification: 'rgb(255, 69, 58)',
    },
};

export default function BottomTab() {
    return (
        <NavigationContainer theme={MyTheme}>
            <Navigator screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = focused ? 'home' : 'home';
                            break;
                        case 'Search':
                            iconName = focused ? 'search' : 'search';
                            break;
                        case 'Reel':
                            iconName = focused ? 'film' : 'film';
                            break;
                        case 'Shop':
                            iconName = focused ? 'basket' : 'basket';
                            break;
                        case 'Profil':
                            iconName = focused ? 'sad' : 'sad';
                            break;
                    }
                    iconName += focused ? '-sharp' : '-outline';

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
            })}>
                <Screen name="Home" component={HomeScreen} />
                <Screen name="Search" component={SearchScreen} />
                <Screen name="Reel" component={ReelScreen} />
                <Screen name="Shop" component={ShopScreen} />
                <Screen name="Profil" component={ProfilScreen} />
            </Navigator>
        </NavigationContainer>
    );
}
