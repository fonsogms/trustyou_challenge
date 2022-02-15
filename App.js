import React from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './containers/Home';
import AnswerDistributionScreen from './containers/AnswerDistribution';
import ChatBotScreen from './containers/Chatbot';
const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="AnswerDistributionScreen"
              title="Answers"
              options={{title: 'Answers'}}
              component={AnswerDistributionScreen}
            />
            <Stack.Screen
              name="ChatBotScreen"
              options={{title: 'Chat bot'}}
              component={ChatBotScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
};

export default App;
