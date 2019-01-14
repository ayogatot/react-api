import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "ZCOOL QingKe HuangYou", cursive;
  font-size: 25pt;
  padding: 20pt;
  background: #ef6c57;
  color: #ffffff;
`;


class App extends Component {
  render() {
    return (
      <Header>
        Pokémon Card Battle
      </Header>
    );
  }
}

export default App;
