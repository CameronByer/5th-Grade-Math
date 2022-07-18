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

function choice(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const randomInt = (x, y) => {
  return x + Math.floor((y-x+1)*Math.random());
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = this.generate();
    this.state = {...this.state, 'guess':'', 'streak':0};
  }

  changeGuess = (guess) => {
    if (parseFloat(guess)!= NaN) {
      this.setState({'guess': guess});
    }
  }

  submitGuess = () => {
    if (this.state.guess != '') // Prevent blank guesses
    {
      let newStreak = this.state.streak;
      if (this.state.guess == this.state.answer.toString()) {
        newStreak++;
      } else {
        newStreak = 0;
      }
      this.setState({...this.generate(newStreak+1), 'guess':'', 'streak': newStreak});
    }
  }

  generate(level=1, options=['addition', 'subtraction', 'multiplication', 'division', 'rounding']) {
    const type = choice(options);
    let question = '0+0';
    let answer = 0;
    if (type == 'addition') {
      const x = randomInt(level, 5*level);
      const y = randomInt(level, 5*level);
      question = x.toString() + '+' + y.toString();
      answer = x + y
    } else if (type == 'subtraction') {
      const x = randomInt(level, 5*level);
      const y = randomInt(level, 5*level);
      question = Math.max(x, y).toString() + '-' + Math.min(x, y).toString();
      answer = Math.abs(x - y);
    } else if (type == 'multiplication') {
      const x = randomInt(2, 2+2*level);
      const y = randomInt(2, 2+2*level);
      question = x.toString() + '*' + y.toString();
      answer = x * y;
    } else if (type == 'division') {
      const x = randomInt(2, 2+2*level);
      answer = randomInt(2, 2+2*level);
      question = (x*answer).toString() + '/' + x.toString();
    } else if (type == 'rounding') {
      const place = randomInt(-3, 3);
      const negPlaceNames = ["ones", "tenths", "hundredths", "thousandths"];
      const posPlaceNames = ["ones", "tens", "hundreds", "thousands"];
      const placeName = place > 0 ? posPlaceNames[place] : negPlaceNames[-place];
      const digits = (place > 0 ? randomInt(place+1, place+Math.floor(level/10)) : randomInt(2-place, 2-place + Math.floor(level/10)));
      const decimalIndex = place > 0 ? 0 : randomInt(1, digits+place-1);
      let decimalString = randomInt(1,9).toString();
      for (let digit = 1; digit < digits; digit++) {
        if (digit == decimalIndex) {
          decimalString += '.';
        }
        decimalString += randomInt(digit != digits-1 ? 0 : 1, 9).toString();
      }
      if (decimalString.slice(-1) == "5") {
        if (place > 0) {
          decimalString += ".";
        }
        decimalString += randomInt(1,9).toString();
      }
      question = "Round " + decimalString + " to the " + placeName + " place";
      answer = Math.round(parseFloat(decimalString)/10**place)/10**(-place);
      if (place >= 0) {
        answer = Math.round(answer)
      }
    }
    return {'question': question, 'answer': answer}
  }

  render() {
    return (
      <View>
        <Text style={styles.bigCenter}>
          {this.state.question}
        </Text>
        <TextInput
          style={styles.bigCenter}
          onChangeText={this.changeGuess}
          value={this.state.guess}
          placeholder="Answer"
          keyboardType="numeric"
        />
        <Button
          onPress={this.submitGuess}
          title="Submit"
          color="#841584"
        />
        <Text style={styles.bigCenter}>
          Streak: {this.state.streak}
        </Text>
      </View>
    )
  }
}

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
