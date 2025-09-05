import { FC, Fragment } from 'react';

import './index.css';

const Signed: FC = () => {
  return (
    <Fragment>
      <div id='theWeddingDay' className='p-fixed' />
      <div id='weddingTop' className='img-wedding p-fixed' />
      <div id='weddingBottom' className='img-wedding p-fixed' />
      <div id='ring' className='p-fixed' />

      <div id='t-hpw' className='p-fixed'>
        Happy Wedding
      </div>

      <div id='t-cd-cr' className='p-fixed'>
        Chú Rể & Cô Dâu
      </div>
    </Fragment>
  );
};

export default Signed;
