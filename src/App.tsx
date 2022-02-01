import './styles/main.scss';
import { TitleSocialMedia } from './components/home/Title';
import { SocialMediaDash } from './components/home/SocialMedia';
import { Footer } from './components/Footer';

const App = () => {

  return (
    <div className='home'>
      <TitleSocialMedia />
      <SocialMediaDash />
      <Footer />
    </div>

  );
}

export default App;
