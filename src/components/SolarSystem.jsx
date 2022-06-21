import React from 'react';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <h1>Sistema Solar</h1>
        <Title headline="Planetas" />
      </div>
    );
  }
}

export default SolarSystem;
