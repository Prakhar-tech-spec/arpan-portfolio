import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero-section';
import ServicesSection from '@/components/landing/services-section';
import PortfolioSection from '@/components/landing/portfolio-section';
import StatsSection from '@/components/landing/stats-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import FaqSection from '@/components/landing/faq-section';
import ContactSection from '@/components/landing/contact-section';
import Footer from '@/components/landing/footer';
import ConsultationSection from '@/components/landing/consultation-section';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div id="services">
          <ServicesSection />
        </div>
        <div id="stats">
         <StatsSection />
        </div>
        <div id="portfolio">
         <PortfolioSection />
        </div>
        <div id="testimonials">
         <TestimonialsSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <div id="consultation">
         <ConsultationSection />
        </div>
        <div id="contact">
         <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
