import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { FC,useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { RootStackParams } from '../../App';



const Home = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [numOfLots, setNumOfLots] = useState('')  

  const handleCreateLots = () => {
    navigation.navigate('Booking', {numOfLots: numOfLots})  
  }

  return (
    <View style={styles.container}>
      <TextInput
       placeholder='Enter number of Lots'
       style={{
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#707070',
        marginBottom: 20
       }}
      
       onChangeText={(text)=>setNumOfLots(text)}
      />
      <View>
        <Button
          title="Create Lots"
          //accessibilityLabel="increment"
          onPress={handleCreateLots}
          color="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default Home;