
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ScrollAnimationWrapper from '@/components/animations/scroll-animation-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const openPositions = [
  // {
  //   title: 'Senior Video Editor',
  //   location: 'Remote',
  //   type: 'Full-time',
  // },
  // {
  //   title: 'Social Media Manager',
  //   location: 'Remote',
  //   type: 'Part-time',
  // },
];

export default function CareersPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />
      <main className="flex-1">
        <section className="relative py-40 md:py-56 overflow-hidden">
          <video
            src="https://res.cloudinary.com/dj88p3xio/video/upload/v1755988879/background_gy5z5d.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover -z-10"
          />
          <div className="absolute inset-0 bg-black/70 -z-10" />
          <div className="container mx-auto px-4 relative z-10">
            <ScrollAnimationWrapper>
              <div className="mx-auto max-w-4xl text-center">
                <Badge
                  variant="outline"
                  className="mb-4 border-gray-600 bg-gray-800/50 text-gray-300 backdrop-blur-2xl"
                >
                  Join Our Team
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
                  Build the Future with ADVENTURE
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                  We're looking for passionate, creative, and driven individuals to join us on our mission to transform businesses.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        <section id="open-positions" className="py-20 md:py-32 bg-black text-white">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">Open Positions</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                  Find your next adventure. Check out our current openings.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="mx-auto max-w-3xl">
                {openPositions.length > 0 ? (
                  <div className="space-y-6">
                    {openPositions.map((position, index) => (
                      <div key={index} className="flex flex-col md:flex-row justify-between items-center p-6 rounded-lg border border-white/10 bg-gray-500/10 backdrop-blur-2xl">
                        <div>
                          <h3 className="text-2xl font-bold">{position.title}</h3>
                          <p className="text-gray-400 mt-1">{position.location} &middot; {position.type}</p>
                        </div>
                        <Button asChild className="mt-4 md:mt-0">
                          <Link href="#">Apply Now</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-8 rounded-lg border-2 border-dashed border-gray-700 bg-gray-500/10">
                    <h3 className="text-2xl font-bold">No Openings... For Now!</h3>
                    <p className="mt-2 text-gray-400">
                      We're not currently hiring, but we're always on the lookout for great talent.
                      <br />
                      Check back soon or send us a speculative application.
                    </p>
                     <Button asChild variant="outline" className="mt-6 rounded-full border-gray-600 hover:bg-white hover:text-black">
                       <Link href="/#contact">
                         Contact Us
                       </Link>
                     </Button>
                  </div>
                )}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
