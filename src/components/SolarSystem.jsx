import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard
            planetImage={ planet.image }
            planetName={ planet.name }
            key={ planet.name }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
