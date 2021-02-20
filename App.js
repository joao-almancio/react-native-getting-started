import React, { useState } from 'react';
import { TextInput, Text, View, Button, ScrollView, FlatList } from 'react-native';

import styles from "./App.styles"

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  const addGoalHandler = () => {
    setCourseGoals((current) => {
      return [...current, enteredGoal]
    });
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          onChangeText={goalInputHandler}
          style={styles.courseGoalInput}
          value={enteredGoal} />
        <Button
          title="Add"
          onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        keyExtractor={(item, index) => item+index}
        renderItem={(itemData) => {
          return (
            <View style={styles.listItem}>
              <Text>{itemData.item}</Text>
            </View>
          )
        }} />
    </View>
  );
}

