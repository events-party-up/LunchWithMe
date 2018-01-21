import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions/index';
import PropTypes from 'prop-types';

import Swiper from 'react-native-swiper';

import styles from './styles';

class SwiperScreen extends React.Component {

  makeCardNameLine(cards) {
    let message = '';
    cards.map(card => {
      message += `${card.name} ,`;
    });
    return message;
  }

  renderCards(cards) {
    const stuff = [];
    cards.map(card => {
      stuff.push(
        <View style={styles.slide1} key={card.key}>
          <Text style={styles.text}>{card.name}</Text>
        </View>
      );
    });
    return stuff;
  }

  render() {
    console.log(this.makeCardNameLine(this.props.cards));
    return(
      <Swiper style={styles.wrapper} showsButtons={true}>
        {/* <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View> */}
        {this.renderCards(this.props.cards)}
      </Swiper>
    );
  }
}

SwiperScreen.defaultProps = {
  cards: []
};

SwiperScreen.propTypes = {
  cards: PropTypes.array.isRequired
};


const mapStatetoProps = state => (state);

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}


export default connect(mapStatetoProps, mapDispatchToProps)(SwiperScreen);