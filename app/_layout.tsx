import '@/styles/global.css';
import { Stack } from 'expo-router/stack';

const Layout: React.FunctionComponent = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default Layout
