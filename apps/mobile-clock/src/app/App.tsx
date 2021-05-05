import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import { Button, Input, Label, Text } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// @ts-ignore
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <View style={styles.body}>
            <Label>
              <Text>Employee Id</Text>
            </Label>
            <Input style={styles.input} />
            <Button>
              <Text>LogOn</Text>
            </Button>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: { borderColor: Colors.black, borderWidth: 1 },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  header: {
    backgroundColor: '#143055',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  logo: {
    width: 200,
    height: 180,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  link: {
    color: '#45bc98',
  },
});

export default App;
