import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { Timer } from './src/features/Timer';

function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [historyItems, setHistoryItems] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        // if input field does not have any value (which means the button is not pressed yet) (because the input value is only sent on button press)
        // then render Focus, else render Timer
        // <Focus addSubject={(value) => setCurrentSubject(value)} /> === <Focus addSubject={setCurrentSubject} />
        // addSubject is a Focus props
        <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory historyItems={historyItems} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(value) => {
            setHistoryItems([...historyItems, value]);
          }}
          clearSubject={(value) => {
            // value is gonna be 'null', received from Timer.js
            setCurrentSubject(value);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});

export default App;
