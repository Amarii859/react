import react from "react";
import { View , Text , StyleSheet, FlatList} from 'react-native';

const students = [
    {name: "Gerti" , surname: ' Calaj' , age:'13'},
    {name: "Deon" , surname: ' Beka' , age:'16'},
    {name: "Amar" , surname: ' Buzoku' , age:'16'},

];

const ListScreen = () => {
      return(
         <View>
         <Text>List Screen:</Text>
         <FlatList
         horizontal={true}
         data={students}
         renderItem={({item}) =>{
             return <Text>{item.name}{item.surname}{item.age}</Text>
        }
      }
        />
        </View>

    
    );
}

const styles = StyleSheet.create({});

export default ListScreen;



import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const students = [
  { name: "Gerti", surname: "Calaj", age: "13" },
  { name: "Deon", surname: "Beka", age: "16" },
  { name: "Amar", surname: "Buzoku", age: "16" },
];



const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
  },

  header: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "#ddd",
  },

  cell: {
    flex: 1,
    padding: 10,
    textAlign: "center",
    borderRightWidth: 1,
    borderColor: "black",
  },
});

export default ListScreen;
