import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

export default function App() {
  let x = 1;

 
  return (
    <SafeAreaView >
      
      <Text style = {styles.title}>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available
      </Text>
      <Button title='click me'></Button>
     
    </SafeAreaView>
     

  );
}
const styles = StyleSheet.create({
 title:{
 
  fontWeight: 'bold',
  fontSize:40,
  textAlign: 'center',
  backgroundColor: 'yellow',
  
 }
})  

