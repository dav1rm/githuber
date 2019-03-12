import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Text, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Header = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" backgroundColor="#EEE" />

    <View style={styles.left} />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.right} onPress={() => {}} />
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
