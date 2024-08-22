// import React from 'react';
// import {View, Text, Button} from 'react-native';
// import Toast from 'react-native-toast-message';
// import {toast, Toasts} from '@backpackapp-io/react-native-toast';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// const ToastExp = () => {
//   const handleProductPress = () => {
//     console.log('Product pressed');
//     // <Toast />
//     // Toast.show({
//     //   type: 'success', // 'success' | 'error' | 'info'
//     //   text1: 'Hello',
//     //   text2: 'This is a toast message!',
//     //   position: 'top', // 'top' | 'bottom' | 'center'
//     //   visibilityTime: 4000,
//     //   autoHide: true,
//     // });
//     toast('Hello');
//   };
//   return (
//     // <View className='flex-1 '>
//     <SafeAreaProvider>
//     <View style={{flex: 1}}>
//       {/* <Toast /> */}
//       <Toasts />
//       <Text style={{fontSize: 40, color: 'black', margin: 20}}>
//         This is some text
//       </Text>
//       <View style={{flex: 1, justifyContent: 'center'}}>
//         <Text>ToastExp</Text>
//         <Button title="Press me for Toast" onPress={handleProductPress} />
//       </View>
//     </View>
//     </SafeAreaProvider>
//   );
// };

// export default ToastExp;

// // import { View, StyleSheet, Text } from 'react-native';
// // import { GestureHandlerRootView } from 'react-native-gesture-handler';
// // import { SafeAreaProvider } from 'react-native-safe-area-context';
// // import { toast, Toasts } from '@backpackapp-io/react-native-toast';
// // import { useEffect } from 'react';

// // export default function App() {
// //   useEffect(() => {
// //     toast('Hello');
// //   }, []);

// //   return (
// //     <SafeAreaProvider>
// //       <GestureHandlerRootView style={styles.container}>
// //         <View>{/*The rest of your app*/}</View>
// //         <Toasts /> {/* <---- Add Here */}
// //       </GestureHandlerRootView>
// //     </SafeAreaProvider>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
