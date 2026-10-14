import React from "react";
// Fixed capitalization: FlatList instead of Flatlist
import { View, Text, StyleSheet, FlatList } from 'react-native'; 
import data from '../assets/data.json';

class UserScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        this.setState({
            users: data
        });
    }

    render() {
        return (
            <View>
                <Text>Random Users</Text>
                <FlatList
                    data={this.state.users}
                    keyExtractor={user => user.id.toString()} // Good practice to ensure keys are strings
                    renderItem={({ item }) => ( // Fixed: Using parentheses for implicit return
                        <View>
                            <Text>Name {item.name}</Text>
                            <Text>Email: {item.email}</Text>
                            <Text>Age: {item.age}</Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default UserScreen;
