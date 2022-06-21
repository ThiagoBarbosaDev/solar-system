import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import Missions from './Missions';

class SolarSystem extends React.Component {
  // Function renderPlanetCards(name, image) = {

  // }

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
        <Missions />
      </div>
    );
  }
}

export default SolarSystem;
