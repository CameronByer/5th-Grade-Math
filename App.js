import { StatusBar } from 'expo-status-bar';
import React, { Component, Fragment } from 'react'
import {
  Pressable,
  StyleSheet,
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

const greatestFactor = (x, y) => {
  if (x*y == 0) {
    return x+y
  }
  return greatestFactor(y, Math.abs(x-y));
}

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = this.generate(1, ['Unit 3']);
    this.state = {...this.state,
      'guess':'',
      'streak':0,
      'problemTypes': {'Addition': true, 'Subtraction': true, 'Multiplication': true, 'Division': true, 'Rounding': true, 'GCF': true, 'Unit 3': true},
      };
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keyHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyHandler, false);
  }

  changeGuess = (guess) => {
    this.setState({'guess': guess});
  }

  submitGuess = () => {
    if (this.state.guess != '') // Prevent blank guesses
    {
      let newStreak = this.state.streak;
      if (this.state.guess == this.state.answer.toString()) {
        newStreak++;
        this.setState({...this.generate(newStreak+1, this.getSelectedProblems()), 'guess':''});
      } else {
        newStreak = 0;
      }
      this.setState({'streak': newStreak});
    }
  }

  updateCheckbox(problemType, value) {
    var updatedProblemTypes = this.state.problemTypes;
    updatedProblemTypes[problemType] = value;
    this.setState({'problemTypes': updatedProblemTypes});
  }

  getSelectedProblems() {
    var selected = [];
    for (var problemType in this.state.problemTypes) {
      if (this.state.problemTypes[problemType]) {
        selected.push(problemType);
      }
    }
    return selected;
  }

  generate(level=1, options=['Addition', 'Subtraction', 'Multiplication', 'Division', 'Rounding', 'GCF', 'Unit 3'], modifiers=["Decimals"]) {
    if (options.includes("Unit 3")) {
      options.push("complex add");
      options.push("complex sub");
      options.push("complex mult");
      //options.push("factor a=1");
    }
    const type = choice(options).toLowerCase();
    let question = '0';
    let answer = '0';
    if (type == 'addition') {
      let x = randomInt(level, 5*level);
      let y = randomInt(level, 5*level);
      let shift = 0;
      if (modifiers.includes("Decimals")) {
        const maxDigits = Math.floor(Math.log10(Math.max(x, y)))+1;
        shift = randomInt(0, maxDigits);
      }
      question = (x/10**shift).toString() + '+' + (y/10**shift).toString();
      answer = (x + y)/10**shift;
      console.log(answer);
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
    } else if (type == 'gcf') {
      let baseMultiple = randomInt(1, level+3);
      let multiples = randomInt(2, level<10 ? 2 : 3);
      let numMax = 5*level;
      let nums = [];
      let maxMultiple = numMax/baseMultiple;
      for (let i=0; i<multiples; i++) {
        nums.push(baseMultiple*randomInt(1, maxMultiple))
      }
      question = "GCF of the terms: " + nums.join(", ");
      while (nums.length > 1) {
        console.log(nums.length);
        console.log(nums);
        nums[1] = greatestFactor(nums[0], nums[1]);
        console.log(nums);
        nums = nums.slice(1);
        console.log(nums);
        console.log('XXX');
      }
      answer = nums[0];
    } else if (type == 'complex add') {
      let a=0;
      let b=0;
      let c=0;
      let d=0;
      while(a*b*c*d==0) {
        a = randomInt(-(level+5), level+5);
        b = randomInt(-(level+5), level+5);
        c = randomInt(-(level+5), level+5);
        d = randomInt(-(level+5), level+5);
      }
      question = "("+a.toString()+(b>=0?"+":"")+(b==1?"":b.toString())+"i)+"+"("+c.toString()+(d>=0?"+":"")+d.toString()+"i)";
      let realpart = a+c;
      let imagpart = b+d;
      if (realpart == 0) {
        answer = imagpart.toString()+"i";
      } else if (imagpart == 0) {
        answer = realpart.toString();
      } else {
        answer = realpart.toString()+(imagpart>0?"+":"")+imagpart.toString()+"i";
      }
      console.log(answer);
    } else if (type == 'complex sub') {
      let a=0;
      let b=0;
      let c=0;
      let d=0;
      while(a*b*c*d==0) {
        a = randomInt(-(level+5), level+5);
        b = randomInt(-(level+5), level+5);
        c = randomInt(-(level+5), level+5);
        d = randomInt(-(level+5), level+5);
      }
      question = "("+a.toString()+(b>=0?"+":"")+(b==1?"":b.toString())+"i)-"+"("+c.toString()+(d>=0?"+":"")+d.toString()+"i)";
      let realpart = a-c;
      let imagpart = b-d;
      if (realpart == 0) {
        answer = imagpart.toString()+"i";
      } else if (imagpart == 0) {
        answer = realpart.toString();
      } else {
        answer = realpart.toString()+(imagpart>0?"+":"")+imagpart.toString()+"i";
      }
      console.log(answer);
    } else if (type == 'complex mult') {
      let a=0;
      let b=0;
      let c=0;
      let d=0;
      while(a*b*c*d==0) {
        a = randomInt(-(level+3), level+3);
        b = randomInt(-(level+3), level+3);
        c = randomInt(-(level+3), level+3);
        d = randomInt(-(level+3), level+3);
      }
      question = "("+a.toString()+(b>=0?"+":"")+(b==1?"":b.toString())+"i)*"+"("+c.toString()+(d>=0?"+":"")+d.toString()+"i)";
      console.log(a, b, c, d)
      let realpart = a*c-b*d;
      let imagpart = a*d+b*c;
      if (realpart == 0) {
        answer = imagpart.toString()+"i";
      } else if (imagpart == 0) {
        answer = realpart.toString();
      } else {
        answer = realpart.toString()+(imagpart>0?"+":"")+imagpart.toString()+"i";
      }
      console.log(answer);
    } else if (type == "factor a=1") {
      let a = 0;
      let b = 0;
      while(a*b==0) {
        a = randomInt(-(level+3), level+3);
        b = randomInt(-(level+3), level+3);
      }
      let x = a+b;
      let unit = a*b;
      question = "Factor x^2"
    }
    if (question == 0) {
      return this.generate(level, options, modifiers);
    }
    return {'question': question, 'answer': answer}
  }

  keyHandler = (e) => {
    if (e.nativeEvent.key === 'Enter') {
      this.submitGuess();
    }
    if (e.nativeEvent.key === 'Backspace') {
      this.changeGuess(this.state.guess.slice(0, -1));
    }
    if ('.0123456789-+i'.includes(e.nativeEvent.key)) {
      this.changeGuess(this.state.guess + e.nativeEvent.key);
    }
  };

  checkSubmit = (e) => {
    console.log(e);
    if (e.nativeEvent.key === 'Enter') {
      this.submitGuess();
    }
  };

  render() {
    return (
      <Fragment>
        <View style = {{flexDirection:"row", flexWrap:"wrap"}}>
        {
          Object.keys(this.state.problemTypes).map(problemType =>
            <Pressable
                key={problemType}
                onPress={() => this.updateCheckbox(problemType, !this.state.problemTypes[problemType])} 
              >
              <Text style={styles.toggleable}>
                <Text style={{color: this.state.problemTypes[problemType] ? 'green':'red'}}>
                  {problemType}
                </Text>
              </Text>
            </Pressable>
          )
        }
        </View>
        <Text style={styles.bigCenter}>
          {this.state.question}
        </Text>
        <TextInput
          style={styles.bigCenter}
          onChangeText={this.changeGuess}
          onKeyPress={this.checkSubmit}
          value={this.state.guess}
          placeholder="Answer"
          keyboardType="numeric"
        />
        <Pressable style={styles.submitContainer} onPress={this.submitGuess}>
          <Text style={styles.submit}>
            Submit
          </Text>
        </Pressable>
        <Text style={styles.bigCenter}>
          Streak: {this.state.streak}
        </Text>
      </Fragment>
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
    fontSize: '4vw',
    fontWeight: 'bold',
    padding: '2vw',
    textAlign: 'center',
  },
  submit: {
    fontSize: '3vw',
    color: 'white',
  },
  submitContainer: {
    backgroundColor: 'purple',
    borderRadius: '1vw',
    paddingHorizontal: '3vw',
    paddingVertical: '0.5vw'
  },
  toggleable: {
    fontSize: '1.5vw',
    fontWeight: 'bold',
    padding: '.5vw',
    textAlign: 'center',
  }
});
