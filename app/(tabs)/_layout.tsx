import Octicons from '@expo/vector-icons/Octicons';
import { Tabs } from 'expo-router';
import { red } from 'tailwindcss/colors';

const TAB_ICONS_SIZE = 26

const TabLayout: React.FunctionComponent = () => {
  return (
    <Tabs screenOptions={{
      headerTitleAlign: 'center',
      tabBarActiveTintColor: red[800],
      tabBarStyle: { height: 60 },
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Octicons name="home" size={TAB_ICONS_SIZE} color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabLayout
