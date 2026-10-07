import react from "react";
import { View, Text , StyleSheet, FlatList} from "react-native";

class PostScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }

    async componentDidMount(){
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await data.json();
        this.state({posts: jsonData});
    }

    render(){
        const {posts} = this.state
        return(
            <View>
                <Text>Posts:</Text>
                <FlatList
               keyExtractor={(item) => item.id.toString()}
data={posts}
renderItem={({ item }) => (
  <View style={styles.postItem}>
    <Text style={styles.postID}>ID: {item.id}</Text>
    <Text style={styles.postTitle}>{item.title}</Text>
  </View>
)}
/>
</View>
);
}
}

