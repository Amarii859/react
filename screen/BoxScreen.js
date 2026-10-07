import react from "react";
import { View , Text , StyleSheet} from 'react-native';

const BoxScreen= () => {
  return(
    <View style={{
      flex:1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    }}>
      <View style={{width:50, height:50, backgroundColor:'lightblue'}}/>
      <View style={{width:50,  backgroundColor:'skyblue'}}/>
      <View style={{width:100, height:50, backgroundColor:'steelblue'}}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoxScreen;
