import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, Gambar, images } from './Data';

function Gallerys() {
  return (
    <>
      {/* <Pricing /> */}
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} /> */}
      <InfoSection {...Gambar} />
    </>
  );
}

export default Gallerys;