import React from 'react';
import styled from 'styled-components';

const List = styled.div<{}>`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, 1fr);
  transition: .6s ease;
  
  @media all and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media all and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media all and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media all and (min-width: 1600px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ListItem = styled.div<{ bg: string }>`
  background: ${({ bg }) => bg || 'transparent'};
  padding: 15px;
  text-align: center;
`;

const mockData = [
  { name: 'test 01', color: '#33ddee'},
  { name: 'test 02', color: '#40ee80'},
  { name: 'test 03', color: '#3268ee'},
  { name: 'test 04', color: '#eee245'},
  { name: 'test 05', color: '#a529ee'},
  { name: 'test 06', color: '#ee2d6b'},
  { name: 'test 07', color: '#33ddee'},
  { name: 'test 08', color: '#40ee80'},
  { name: 'test 09', color: '#3268ee'},
  { name: 'test 10', color: '#eee245'},
  { name: 'test 11', color: '#a529ee'},
  { name: 'test 12', color: '#ee2d6b'}
];

class BalanceList extends React.Component {
  public render() {
    return (
      <List>
        {mockData.map((item, key) => {
          return (
            <ListItem bg={item.color}>
              {item.name}
            </ListItem>
          );
        })}
      </List>
    );
  }
}

export default BalanceList;
