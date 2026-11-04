import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';




const Home = ({navigation}) => {
        return (
            <View style={StyleSheet.container}>
                <Text>Welcome to home Screen</Text>
                <Button
                title="Go to About Screen"
                onPress={() => navigation.navigate('About')}
                />
                <Button
                title="Opern Drawer"
                onPress={() => navigation.opernDrawer()}
                />

            </View>
        );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})







export default Home;