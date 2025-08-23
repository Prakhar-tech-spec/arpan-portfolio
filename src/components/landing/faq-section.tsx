'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';

const faqs = [
  {
    question: 'What types of businesses do you work with?',
    answer:
      "We work with a diverse range of clients, from startups and small businesses to large enterprises across various industries. Our strategies are tailored to meet the unique needs and goals of each business.",
  },
  {
    question: 'How long does it take to see results?',
    answer:
      "The timeline for results varies depending on the services and your specific goals. For SEO, it can take 3-6 months to see significant organic growth, while social media and PPC campaigns can show results much faster. We focus on sustainable, long-term growth.",
  },
  {
    question: 'How do you measure the success of a campaign?',
    answer:
      "We use a variety of key performance indicators (KPIs) to measure success, including website traffic, conversion rates, lead generation, engagement metrics, and return on investment (ROI). We provide regular, transparent reports to track progress.",
  },
  {
    question: 'What is your pricing model?',
    answer:
      "Our pricing is customized based on the scope of the project and the services required. We offer project-based pricing as well as monthly retainers. Contact us for a detailed proposal tailored to your needs.",
  },
  {
    question: "Do you offer one-time projects or only long-term contracts?",
    answer:
      "We are flexible and offer both one-time projects (like a website redesign or a specific campaign) and long-term partnerships for ongoing services like SEO, content marketing, and social media management.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Have questions? We've got answers.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper>
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-800">
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}
