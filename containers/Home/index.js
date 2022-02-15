import React from 'react';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

import {
  BodyView,
  ButtonSection,
  Header,
  MainView,
  Title,
  TitleSection,
} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <MainView>
        <Header />
        <BodyView>
          <TitleSection>
            <Title>
              Welcome to the sample app please select what you want to do{' '}
            </Title>
          </TitleSection>
          <ButtonSection>
            <PrimaryButton
              onPress={() => {
                navigation.navigate('AnswerDistributionScreen');
              }}>
              Answers distribution
            </PrimaryButton>
            <PrimaryButton
              onPress={() => {
                navigation.navigate('ChatBotScreen');
              }}>
              Chat Bot
            </PrimaryButton>
          </ButtonSection>
        </BodyView>
      </MainView>
    </>
  );
};

export default HomeScreen;
