import TestimonialsSection from './components/Sections/testimonials';
import BenefitsSection from './components/Sections/benefits';
import AboutSection from './components/Sections/about';
import HeroSection from './components/Sections/hero';
import { HomeContainer } from '../../components/styled';
import UploadForm from '../UploadPage/components/UploadForm/UploadForm';
import { ErrorHandlerType } from '../../components/errors/helpers/getErrorMessage';
import { FormSection } from './components/Sections/hero/styled';
import TierSection from './components/Sections/tier/TierSection';
import { useSettingsCardsOptions } from '../../components/modals/SettingsModal/useSettingsCardsOptions';

interface HomePageProps {
  setErrorMessage: ErrorHandlerType;
  isLoggedIn: boolean;
}

export function HomePage({
  setErrorMessage,
  isLoggedIn,
}: Readonly<HomePageProps>) {
  // Load the default settings cards options for backend compatibility
  useSettingsCardsOptions(null);

  return (
    <HomeContainer>
      <HeroSection />
      <FormSection>
        <UploadForm setErrorMessage={setErrorMessage} />
      </FormSection>
      <TierSection isLoggedIn={isLoggedIn} />
      <AboutSection />
      <TestimonialsSection />
      <BenefitsSection />
    </HomeContainer>
  );
}
