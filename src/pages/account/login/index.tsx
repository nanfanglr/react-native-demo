import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import request from '../../../utils/request';
import {ACCOUNT_LOGIN,ACCOUNT_LOGOUT} from '../../../utils/pathMap';

class Index extends Component {
  state = {
    account: '',
    password: '',
  };

  accountChangeText = (account: String) => {
    this.setState({account});
  };

  passwordChangeText = (password:String) => {
    this.setState({password});
  };

  logout = async () => {
    const res = await request.get(ACCOUNT_LOGOUT);
    console.log(res);
  };

  login = async () => {
    const {account, password} = this.state;
    const res = await request.post(ACCOUNT_LOGIN, {
      username: account,
      password: password,
    });
    console.log(res);
  };

  render() {
    return (
      <View>
        <Text>登陆</Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="You can type account in me"
          keyboardType="default"
          onChangeText={this.accountChangeText}
        />
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder="You can type password in me"
          keyboardType="default"
          onChangeText={this.passwordChangeText}
        />
        <Button onPress={this.login} title="Login" color="#841584" />
        <Button onPress={this.logout} title="Logout" color="#841000" />
      </View>
    );
  }
}

export default Index;
