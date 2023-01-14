import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splesh';

function Router() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen name="Front" component={Splash} options={{
                    headerShown:true


                }} />
          
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;