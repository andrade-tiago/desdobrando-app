import '@/styles/global.css';
import { Stack } from 'expo-router/stack';
import { StatusBar } from 'react-native';

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

export default Layout
