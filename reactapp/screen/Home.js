import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icons from '../componets/Icons';




const Home = ({navigation}) => {
        return (
            <View style={StyleSheet.iconContainer} >

               <Icons name="cellphone-iphone" iconsText="Iphone"/>
               <Icons name="android" iconsText="Android"/>
               <Icons name="laptop" iconsText="Laptop"/>



            </View>
        );
};


const styles = StyleSheet.create({
 iconContainer:{
        alignSelf:"center",
        width : "100%",
        marginTop:30,
        flexDirection: "row",
        justifyContent:"space-between"

    }
})








export default Home;