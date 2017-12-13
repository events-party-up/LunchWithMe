import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import PropTypes from 'prop-types';

class Login extends React.Component {

  user = {
    name: '',
    password: '',
  }

  static propTypes = {
    setUserState: PropTypes.func.isRequired,
  }

  logIn = () => {
    //This should send collected user info to server to validate, get back full user item to pass back to the App component

    this.user = {
      ...this.user,
      id: 42,
    };

    this.props.setUserState(this.user);
  }

  render() {
    return(
      <View style={styles.container}>

        <Image style={styles.logo} source={require('../images/lunchwithlogo_small.png')} />

        <View style={styles.accountInput}>
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="UserName"
            onChangeText={(text) => {this.user.name = text;}}
          />
          <TextInput
            style={styles.input}
            placeholderTextColor='white'
            placeholder="Password"
            onChangeText={(text) => {this.user.password = text;}}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={this.logIn}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#42b3f4'
  },
  header: {
    fontSize: 30,
  },
  accountInput: {
    },
  input: {
    width: 300,
    fontSize: 18,
    fontFamily: 'Avenir',
    color: 'white',
    padding: 10,
    margin: 5,
    borderRadius: 2,
    borderColor: 'white',
    borderWidth: .3,
    textAlign: 'center'  },
  footer: {
    fontSize: 30,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Avenir',
  }

});

export default Login;
