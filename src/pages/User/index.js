/* eslint-disable react/prop-types */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Header, Avatar, Name, Bio } from './styles';

export default class User extends Component {
  state = {
    stars: [],
  };

  async componentDidMount() {
    const { route } = this.props;
    const { user } = route.params;

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data });
  }

  render() {
    const { stars } = this.state;
    const { route } = this.props;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }}>
            <Name>{user.name}</Name>
            <Bio>{user.bio}</Bio>
          </Avatar>
        </Header>
      </Container>
    );
  }
}
