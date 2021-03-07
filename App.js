import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { tailwind } from './lib/tailwind';
import { 
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto'
import { 
  Poppins_600SemiBold,
  useFonts
} from '@expo-google-fonts/poppins'


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_600SemiBold, 
    Roboto_500Medium, 
    Roboto_400Regular,
  });
  console.log(fontsLoaded)
  if(!fontsLoaded){
    return null;
  }else{
    console.log(fontsLoaded)
    return (
      <SafeAreaView style={tailwind('flex-1 items-center justify-center')}>
        <View style={tailwind('bg-blue-500 px-5 py-3 rounded-full')}>
          <Text style={tailwind('text-white font-semibold text-lg')}>
            Hello RN with Tailwind 👋
          </Text>
          <StatusBar style="auto" />
        </View>
        <TouchableOpacity style={styles.btnChingon} onPress={() => alert('Hola')}>
          <Text style={styles.title}>
            Lista
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  btnChingon: {
    ...tailwind('bg-yellow-500 px-5 py-3 rounded-full my-5'),
  },
  title: {
    fontFamily:'Poppins_600SemiBold',
    fontSize: 60,
  },
  subtitle: {
    fontFamily:'Roboto_500Medium',
    fontSize: 32,
  },
  body: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 16,
  },
});