import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useQuery} from 'react-query';
import {distributionOfAnswers} from '../../services/apiServices';
import {LoadingView, MainView} from './styles';
import {Table, Row, Rows} from 'react-native-table-component';
import {theme} from '../../styles/theme';

const AnswerDistributionScreen = (props) => {
  const {
    isLoading,
    data: response,
    isError,
  } = useQuery('distributionOfAnswers', distributionOfAnswers);

  if (isLoading)
    return (
      <LoadingView>
        <ActivityIndicator size="large" color="grey"></ActivityIndicator>
      </LoadingView>
    );
  else if (!isError) {
    const {data} = response;
    const answers = Object.keys(data);
    return (
      <MainView>
        {answers.map((answer) => {
          let title = answer.split('_').join(' ');
          title = title[0].toLocaleUpperCase() + title.slice(1);
          const answerRows = Object.keys(data[answer]).map((key) => [
            key,
            data[answer][key],
          ]);
          return (
            <View style={{margin: 10}}>
              <Table
                borderStyle={{
                  borderWidth: 2,
                  borderColor: '#c8e1ff',
                }}>
                <Row
                  style={{
                    backgroundColor: theme.blue,
                  }}
                  textStyle={{
                    fontFamily: theme.mainFontBold,
                    color: theme.mainWhite,
                  }}
                  data={[title, 'Frequency']}
                />
                <Rows
                  data={answerRows}
                  textStyle={{
                    fontFamily: theme.mainFontRegular,
                  }}
                />
              </Table>
            </View>
          );
        })}
      </MainView>
    );
  }
};

export default AnswerDistributionScreen;
