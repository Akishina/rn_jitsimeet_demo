/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { JitsiMeetView, RNJitsiMeetViewManager } from 'react-native-jitsi-lib';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      roomName: 'topica12344'
    }
  }

  joinRoom = () => {
    RNJitsiMeetViewManager.joinRoom();
  }

  updateRoom = () => {
    RNJitsiMeetViewManager.muteAudio();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to JitsiMeet!</Text>
        <TouchableOpacity onPress={this.joinRoom} style={{backgroundColor: '#9e84e8', marginBottom: 20}}>
          <Text style={styles.instructions}>Press me to Join room</Text>
        </TouchableOpacity>

        <JitsiMeetView
          showToolBox={true}
          room={'topica123'}
          bgColor={'#a2d662'}
          localHeight={250}
          localFlex={1}
          remoteFlex={1}
          remoteHeight={250}
          remoteWidth={250}
          toolBoxBottom={0}
          spacing={0}
          serverURL={'https://meet.jit.si'}
          style={{ width: 600, height: 800 }} />

        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 20
  },
});
