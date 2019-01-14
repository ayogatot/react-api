import React, { Component } from "react";
import styled from "styled-components";

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

const Body = styled.section`
  display: flex;
  padding: 25px;
  flex-wrap: wrap;
  justify-content: center;
  background: #eeeeee;
`;

const Card = styled.span`
  margin: 20px;
  box-shadow: 0 4px 8px 0 #66687452;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    border: 5px solid #f1662169;
    border-radius: 15px;
  }
`;

class App extends Component {
  constructor() {
    super();

    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch("https://api.pokemontcg.io/v1/cards");
    const data = await response.json();
    const result = data.cards.slice(0 , 16);

    this.setState({ data: result });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Header>Pokémon Card Battle</Header>

        <Body>
          {this.state.data.map(e => {
            return (
              <Card>
                <img src={e.imageUrl} alt={e.name} />
              </Card>
            );
          })}
        </Body>
        
      </div>
    );
  }
}

export default App;
