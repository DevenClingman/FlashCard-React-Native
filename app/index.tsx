import { View, Text, StyleSheet, Button} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Amanda, am I alive?</Text>
      <Button title='Create Deck'></Button>
      <Button title='View Decks'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'black',
    fontSize: 24,
  }
});
