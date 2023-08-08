import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Card = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.row}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{item.cardLabel}</Text>
        </View>
        <Text style={styles.endTime}>
          Discount ends in 10:05:45 <Text style={styles.rupee}>₹60</Text>
        </Text>
      </View>
      <View style={styles.rowMargin}>
        <Text style={styles.prize}>{item.prize}</Text>
        <View style={styles.rupeeGreen}>
          <Text style={styles.greenCash}>₹55</Text>
        </View>
      </View>
      <View style={styles.rowMargin}>
        <View style={styles.prizeContainer}>
          <View style={styles.prize}>
            <Text style={styles.text}>{item.totalPrize}</Text>
          </View>
          <View style={styles.prize}>
            <Text style={styles.text}>{item.winners} winners</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.teams}>{item.teams}</Text>
        <View style={styles.iconRow}>
          <Image
            style={styles.img}
            source={require('../../assets/images/frame.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/booster_v1.png')}
          />
          <Image
            style={styles.img}
            source={require('../../assets/images/single.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Card;
