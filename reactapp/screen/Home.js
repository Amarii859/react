import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';




const Home = ({navigattion}) => {
        return (
            <View>
                <Text>
                    <Button
                    title='Go to About screen'
                    onPress={()=> mavigation.navigate('about')}
                    />
                </Text>

            </View>
        );
};




//const styles = StyleSheet.create({});



export default Home;