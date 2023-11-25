import React, { useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import MainStackNavigator from './navigation';

const App = () => {
  const toastRef = useRef();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showToast('No hay conexión a Internet', 'error');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const showToast = (message, type) => {
    toastRef.current?.show({
      type: type,
      text1: message,
      visibilityTime: 5000,
    });
  };

  return (
    <View style={styles.container}>
      <MainStackNavigator />
      <Toast ref={toastRef} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
