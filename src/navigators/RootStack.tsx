import React, {FunctionComponent} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Home from "../screens/home";
import Balance from "../screens/balance";
import { colors } from "../components/colors";
import Greeting from "../components/header/greating";
import Profile from "../components/header/profile";

import avi from "./../../assets/avi/avatar.png"
import { CardProps } from "../components/Cards/types";
import { Ionicons } from "@expo/vector-icons";
import ProjectCreate from "../components/Project/ProjectCreate";

export type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
    Balance: CardProps;
    ProjectCreate: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
const RootStack: FunctionComponent = () =>{ 
    return  (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    headerStyle:{
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: 'transparent',
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight:25
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    },
                    headerRight: () => (
                       <Ionicons name="menu" size={25} color={colors.secondary}/>
                    )
                }
                }
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ProjectCreate"
                    component={ProjectCreate}
                    options={{
                        headerTitle: "",
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: "",
                        
                    }}
                
                />
                 <Stack.Screen
                    name="Balance"
                    component={Balance} 
                    options={({route}: any) => ({
                        headerTitle: route?.params?.alias,
                        headerTitleAlign: "center",
                        headerBackImage: (props) => (
                            <Ionicons
                                {...props}
                                name="chevron-back"
                                size={25}
                                color={colors.secondary}
                            >

                            </Ionicons>
                        ),
                        headerLeftContainerStyle: {
                            paddingLeft: 0,
                        }
                    })}
                    />
            </Stack.Navigator>
        </NavigationContainer>)
};

export default RootStack;