import { lazy } from 'react';

const Signed = lazy(() => import('./components/Signed'));
const FlashScreen = lazy(() => import('./components/FlashScreen'));

const Section1 = lazy(() => import('./components/Section1'));
const Section2 = lazy(() => import('./components/Section2'));
const Section3 = lazy(() => import('./components/Section3'));
const Section4 = lazy(() => import('./components/Section4'));
const Section5 = lazy(() => import('./components/Section5'));
const MusicPlayer = lazy(() => import('./components/MusicPlayer'));
const BubbleForm = lazy(() => import('./components/BubbleForm'));

const App: React.FC = () => {
  return (
    <div className='pageview p-relative'>
      <FlashScreen />

      <Signed />

      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />

      <Section5 />

      <MusicPlayer />

      <BubbleForm />
    </div>
  );
};

export default App;
