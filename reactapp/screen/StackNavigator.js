import React from 'react';
import { createStackNavigator, Header} form "@react-navigation/stack";
import Home from "../screen/Home";
import About from "../screen/About";

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerStyle:{
        backgroundColor:"orange",
    },
}

const MainStackNavigator = ({navigation})=>{
    return(
        <Stack.Navigator screenOption={screenOptionStyle}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    );
}

export default MainStackNavigator; 