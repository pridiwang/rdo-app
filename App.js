import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={
          {uri: 'https://simplep-wegfa5.cdn.byteark.com/fleetstream/simplepradio/720p/index.m3u8'}      
      }
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video:{
    flex:1,
    width:320,
    height:200,
  },
  buttons:{
    flex:1,
  }
});
