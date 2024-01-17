import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView,FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [yourGoals, setYourGoals] = useState([]);
  function goalInputHandler(enteredText) {
    // console.log(enteredText)
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    // console.log(enteredGoalText);
    setYourGoals(currentGoals => [...currentGoals, {text: enteredGoalText , key: Math.random().toString()}])
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Enter your goal' style={styles.textInput} onChangeText={goalInputHandler} />
        <Button title='Add Goals' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.listHeading}>List of Goals...</Text>
        <FlatList data={yourGoals} renderItem={(itemData) => {
          return <View style={styles.goalItems}>
          <Text style={styles.goalItemText} >{itemData.item.text}</Text>
          </View>
        }} 
        alwaysBounceVertical={false}
        keyExtractor={(item,index) => {
          return item.key
        }}
        />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'


  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    marginRight: 5,
    padding: 5,
    width: '70%',
    borderRadius:5,
  },
  goalsContainer: {
    flex: 5,
  },
  listHeading:{
    margin:8,
    padding:8,
    borderRadius: 6,
    backgroundColor: '#f6538f',
    color:'white',
    fontSize: 18,
  },
  goalItems:{
    margin:8,
    borderRadius: 6,
    backgroundColor: '#18224b',
    padding: 10,
  },
  goalItemText:{
    color:'white',
  }
});
