import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  StyleSheet,
	Image, ScrollView,
} from 'react-native';
import {
	Card, ListItem, Icon
} from 'react-native-elements'

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	 message: "hey hot stuff"
 },{
    name: 'brandon',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'andrew',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
	 message: "hey hottie u down to be my thottie ;)"
 },{
    name: 'sarah',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },{
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
]

const styles = {
  headerIcon: {
    margin: 15,
    fontSize: 30
  },
  maker: {
    color: '#75c9f9'
  },
  backer: {
    color: '#c753e0'
  },
  titleMaker: {
    color: '#75C9F9',
    margin: 15,
    fontSize: 40
  },
  titleBacker: {
    color: '#C753E0',
    margin: 15,
    fontSize: 40
  }
};


class MatchesScreen extends Component {

  static navigationOptions = ({ navigation }) => {
  const { user } = navigation.state.params;

  return {
    headerTitle: (
      <Icon
        name='lightbulb'
        type='material-community'
        iconStyle={styles.titleMaker}
        onPress={ () => navigation.navigate("Explore", {user: user}) }
      />
    ),
    headerRight: (
      <Icon
        name='message-text-outline'
        type='material-community'
        iconStyle={styles.headerIcon}
        color='#75C9F9'
      />
    ),
    headerLeft: (
        <Icon
          name='user-o'
          type='font-awesome'
          color='#999999'
          iconStyle={styles.headerIcon}
          onPress={ () => navigation.navigate("MyProfile", {user: user, type: ""}) }
        />
    ),
  };
};

  render() {

    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
      <Button
          onPress={() => navigate("Thread", {receiver: "insertuserhere"})}
          title="Message Thread"
          buttonStyle={{ marginTop: 20 }}
      />
		<Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}}
		  subtitle={u.message}
			onPress={() => navigate("Thread", {receiver: "insertuserhere"})}
        />
      );
    })
  }
</Card>

      </ScrollView>
    );
  }
}

export default MatchesScreen;
