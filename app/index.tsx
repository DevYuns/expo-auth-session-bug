import * as WebBrowser from 'expo-web-browser';

import { Button, StyleSheet, Text, View } from 'react-native';
import {makeRedirectUri, startAsync} from 'expo-auth-session';

import { StatusBar } from 'expo-status-bar';

/* For web */
WebBrowser.maybeCompleteAuthSession();
const SUPABASE_URL = 'https://teuskafgypacyiapgjud.supabase.co';

export default function App() {
  const redirectUrl = makeRedirectUri({
    path: '/auth/callback',
  })

  console.log('redirect', redirectUrl)

  const handleSignIn = async () => {
    const response = await startAsync({
      authUrl: `${SUPABASE_URL}/auth/v1/authorize?provider=facebook&redirect_to=${redirectUrl}`,
      returnUrl: redirectUrl,
    });

    if (response.type === 'success') {
      /* 
        process login
      */
    }
  }

  return (
    <View style={styles.container}>
      <Text>Auth session bug report</Text>
      <Button title='auth login' onPress={handleSignIn}/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
