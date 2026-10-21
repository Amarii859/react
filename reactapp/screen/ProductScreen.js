import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import data from '../data/products.json';
import Product from '../components/Product';

class ProductScreen extends React.Component {

    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({
            products: data
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Top products of 2020</Text>
                    <FlatList
                        data={this.state.products}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View>
                                <Product 
                                    name={item.name}
                                    category={item.category}
                                    price={item.price}
                                    stock={item.stock}
                                    img={item.image}
                                    desc={item.description}
                                />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        );
    }
}