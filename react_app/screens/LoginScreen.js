import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { Card, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../auth.js'

class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: "test_user"
    };
  }

  render() {

    const { navigate } = this.props.navigation;

    return (

      //TODO if user successfully logins with credentials, pass in user from database.

      <View style={{ paddingVertical: 20, paddingHorizontal: 20 }}>
      <Text>"BACK.R"</Text>

          <Card>
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Email address..." />
            <FormLabel>Password</FormLabel>
            <FormInput secureTextEntry placeholder="Password..." />

            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Sign In"
              onPress={() => {
                onSignIn().then(() => navigate("SignedIn", {user: this.state.user}));
              }}
            />
	    <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Sign In with Facebook"
              onPress={() => {
                onSignIn().then(() => navigate("SignedIn", {user: "USER"}));
              }}
            />
	  </Card>

	  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Forgot Password?"
            onPress={() => {
                onSignIn().then(() => navigate("SignedIn", {user: "USER"}));
	    }}
          />

  	  <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Create Account"
            onPress={() => navigate("SignUp")}
          />
	  </View>

        </View>

    );
  }
}

export default LoginScreen;
