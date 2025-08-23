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
    question: 'How is We Brand You different?',
    answer:
      "We focus on a holistic approach, combining data-driven strategies with creative execution. Our team becomes an extension of your team, dedicated to achieving your business objectives with a transparent and collaborative process.",
  },
  {
    question: 'What kind of results can I expect?',
    answer:
      "You can expect measurable improvements in key metrics such as brand visibility, lead generation, and ROI. We set clear goals from the outset and provide regular reports to track our progress towards achieving them.",
  },
  {
    question: 'How do we communicate?',
    answer:
      "We believe in transparent and frequent communication. You'll have a dedicated account manager and we will set up a shared channel (like Slack) for real-time updates. We also provide weekly and monthly reports, and are always available for a call.",
  },
  {
    question: 'If I cancel, do I get a refund?',
    answer:
      "Our services are billed on a monthly basis. If you choose to cancel, your service will continue until the end of the current billing cycle. While we don't offer refunds for services already rendered, you are free to cancel at any time without any long-term commitment.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      <video
        src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755988879/background_gy5z5d.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
      />
      <div className="absolute inset-0 bg-black/70 -z-10" />
      <div className="container mx-auto px-4 relative z-0">
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
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-gray-500/10 backdrop-blur-2xl rounded-lg mb-2 px-4">
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
