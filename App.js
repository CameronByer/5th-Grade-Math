import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native'

const Question = () => {
  const [answer, changeAnswer] = React.useState('');

  const randomInt = (x, y) => {
    return x + Math.floor((y-x+1)*Math.random());
  }

  const [correct, setcorrect] = React.useState(0);
  const [a, seta] = React.useState(randomInt(10, 50));
  const [b, setb] = React.useState(randomInt(10, 50));

  const submitAnswer = () => {
    let localCorrect = 0;
    if ((a+b).toString() == answer) {
      localCorrect = correct+1;
      setcorrect(correct+1);
    } else {
      setcorrect(0);
    }
    seta(randomInt(10, 50*(localCorrect+1)));
    setb(randomInt(10, 50*(localCorrect+1)));
    changeAnswer('');
  }


  return (
    <View>
      <Text style={styles.bigCenter}>
        {a} + {b}
      </Text>
      <TextInput
        style={styles.bigCenter}
        onChangeText={changeAnswer}
        value={answer}
        placeholder="Answer"
        keyboardType="numeric"
      />
      <Button
        onPress={submitAnswer}
        title="Submit"
        color="#841584"
      />
      <Text style={styles.bigCenter}>
        Streak: {correct}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Question/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigCenter: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
