import React from 'react';
import TechCard from '../techCard';
import * as _icons from '../icons/icons';

export default function ReactCard() {
  return ( 
      <TechCard name="React">
        { _icons.reactIcon({ width: '100px'}) }
      </TechCard>
  )
}
