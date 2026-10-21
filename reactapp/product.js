import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const Product = (props) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: `${props.img}` }} style={styles.img} />
            <View style={styles.cardDesc}>
                <Text>{props.name}</Text>
                <Text>{props.desc}</Text>
                <View style={styles.footer}>
                    <Text>Stock: {props.stock}</Text>
                    <Text>Price: {props.price}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
        borderRadius: 10,
    },
    img: {
        width: 250,
        height: 180,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});