import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
//import tailwind from 'tailwind-rn'
import { tailwind } from './lib/tailwind';

export default function App() {
  return (
    <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
      <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
        <Text style={tailwind('text-white font-semibold text-lg')}>
          Hello RN with Tailwind 👋
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */