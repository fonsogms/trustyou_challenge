import React, {useState} from 'react';
import {ActivityIndicator, Text, TextInput} from 'react-native';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {chatSocket} from '../../services/apiServices';
import {LoadingView} from './styles';
import {
  AddUserTitle,
  AddUserView,
  MainView,
  NotConnectedView,
  TextInputView,
} from './styles';

const ChatBotScreen = (props) => {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('Add user');
  const [loading, setLoading] = useState(false);
  const [messageList, setMessageList] = useState([]);
  const [chatNewText, setChatNewText] = useState('');
  const chatConnection = React.useRef();

  const connect = () => {
    setLoading(true);
    const serverMessagesList = [];

    chatConnection.current = chatSocket(username);
    chatConnection.current.onopen = () => {
      setIsConnected(true);
      setLoading(false);
    };
    chatConnection.current.onclose = (e) => {
      setIsConnected(false);
      setLoading(false);
    };
    chatConnection.current.onerror = (e) => {
      setIsConnected(false);
      setLoading(false);
    };
    chatConnection.current.onmessage = (e) => {
      const newEvent = e.data;
      serverMessagesList.push(newEvent);
      setMessageList(serverMessagesList);
    };
  };
  const sendMessage = (text) => {
    chatConnection.current.send(text);
    setChatNewText('');
  };
  if (!isConnected)
    return (
      <NotConnectedView>
        <AddUserView>
          <AddUserTitle>
            {' '}
            Please type your username for the chatbot
          </AddUserTitle>
          <TextInputView>
            <TextInput
              style={{width: 200}}
              onFocus={() => setUsername('')}
              onChangeText={(text) => {
                setUsername(text);
              }}>
              {username}
            </TextInput>
          </TextInputView>
          <PrimaryButton onPress={() => connect()} style={{height: 30}}>
            Connect
          </PrimaryButton>
        </AddUserView>
      </NotConnectedView>
    );
  if (loading)
    return (
      <LoadingView>
        <ActivityIndicator size="large" color={'grey'}></ActivityIndicator>
      </LoadingView>
    );
  else {
    return (
      <MainView>
        <Text>done</Text>
        <TextInput onChangeText={(text) => setChatNewText(text)}>
          {chatNewText}
        </TextInput>
        {messageList.map((message) => {
          return <Text>{message}</Text>;
        })}
        <TextInput style={{}} onChangeText={(text) => setChatNewText(text)}>
          {chatNewText}
        </TextInput>
        <PrimaryButton
          onPress={() => sendMessage(chatNewText)}
          style={{height: 30}}>
          Send messages
        </PrimaryButton>
      </MainView>
    );
  }
};

export default ChatBotScreen;
