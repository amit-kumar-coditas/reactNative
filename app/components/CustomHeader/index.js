import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import styles from './styles';
import Capsule from '../Capsule';

const CustomHeader = () => {
  return (
    <View
      style={styles.containerStyle}>
      <View>
        <View>
          <Text style={styles.headerTxt}>
            IND vs AUS {'\n'}
            <Text style={styles.headerBoldTxt}>02h 34m 56s</Text>
          </Text>
        </View>
      </View>
      <View
        style={styles.rightContainer}>
        <Capsule label={'99,999'} />
        <Capsule label={'₹ 99,99,99'} />
      </View>
    </View>
  );
};

export default CustomHeader;
