import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatList from './screens/chatlessScreenn';
import Conversation from './screens/conversational';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChatList">
        <Stack.Screen
          name="ChatList"
          component={ChatList}
        />

        <Stack.Screen
          name="Conversation"
          component={Conversation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}