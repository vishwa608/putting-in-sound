import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      //change the green stuff after uri in the brackets with a different url sound effect
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="Sound Button" color="red" onPress={this.playSound} />
    );
  }
}
class SoundButton2 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      //change the green stuff after uri in the brackets with a different url sound effect
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="Sound Button2" color="blue" onPress={this.playSound} />
    );
  }
}
class SoundButton3 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      //change the green stuff after uri in the brackets with a different url sound effect
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="Sound Button" color="green" onPress={this.playSound} />
    );
  }
}
class SoundButton4 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      //change the green stuff after uri in the brackets with a different url sound effect
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <Button title="Sound Button2" color="yellow" onPress={this.playSound} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
        <SoundButton2 />
        <SoundButton3 />
        <SoundButton4 />
      </View>
    );
  }
}
