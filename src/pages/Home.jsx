import Hero from '../sections/Hero';
import SocialProof from '../sections/SocialProof';
import HowItWorks from '../sections/HowItWorks';
import Solution from '../sections/Solution';
import Transformation from '../sections/Transformation';
import FeatureSecretary from '../sections/FeatureSecretary';
import FeatureQuotes from '../sections/FeatureQuotes';
import Testimonials from '../sections/Testimonials';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import FinalCTA from '../sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Solution />
      <Transformation />
      <FeatureSecretary />
      <FeatureQuotes />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  );
}
