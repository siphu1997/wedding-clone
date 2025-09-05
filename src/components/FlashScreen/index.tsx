import { FC, Fragment } from 'react';

import './index.css';

const FlashScreen: FC = () => {
  return (
    <Fragment>
      {/* Close Flash screen */}
      <div id='bg1p4pqv' className='com-image-block p-fixed animation'>
        <div className='image-block-css p-absolute full-width full-height full-mask-size mask-position'>
          <div className='image-background p-absolute lazy' />
        </div>
      </div>
      <div id='qj4x3hhd' className='com-image-block p-fixed animation'>
        <div className='full-width full-height'>
          <div className='image-block-css p-absolute full-width full-height full-mask-size mask-position'>
            <div className='image-background p-absolute lazy' />
          </div>
        </div>
      </div>
      {/* Close Flash screen */}
    </Fragment>
  );
};

export default FlashScreen;
