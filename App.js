import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';

import Row from './components/Row';
import Button from './components/Button';
import calculator, { initialState } from './util/calculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
    justifyContent: 'flex-end',
  },
  calculate: {
    color: '#DD0000',
    fontSize: 50,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
  value: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'right',
    marginRight: 20,
    marginBottom: 10,
  },
});

export default class App extends Component {
  state = initialState;

  handleTap = (type, value) => {
    this.setState((state) => calculator(type, value, state));
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <Text style={styles.value}>{this.state.currentValue}</Text>
          <Text style={styles.calculate}>{this.state.answer}</Text>

          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap('clear')}
            />
            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.handleTap('posneg')}
            />
            <Button
              text="%"
              theme="secondary"
              onPress={() => this.handleTap('percentage')}
            />
            <Button
              text="/"
              theme="accent"
              onPress={() => this.handleTap('operator', '/')}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap('number', 7)} />
            <Button text="8" onPress={() => this.handleTap('number', 8)} />
            <Button text="9" onPress={() => this.handleTap('number', 9)} />
            <Button
              text="x"
              theme="accent"
              onPress={() => this.handleTap('operator', '*')}
            />
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap('number', 4)} />
            <Button text="5" onPress={() => this.handleTap('number', 5)} />
            <Button text="6" onPress={() => this.handleTap('number', 6)} />
            <Button
              text="-"
              theme="accent"
              onPress={() => this.handleTap('operator', '-')}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap('number', 1)} />
            <Button text="2" onPress={() => this.handleTap('number', 2)} />
            <Button text="3" onPress={() => this.handleTap('number', 3)} />
            <Button
              text="+"
              theme="accent"
              onPress={() => this.handleTap('operator', '+')}
            />
          </Row>

          <Row>
            <Button
              text="0"
              size="double"
              onPress={() => this.handleTap('number', 0)}
            />
            <Button text="." onPress={() => this.handleTap('number', '.')} />
            <Button
              text="="
              theme="buttonEqual"
              onPress={() => this.handleTap('equal')}
            />
          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
