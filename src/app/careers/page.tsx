
'use client';

import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import ScrollAnimationWrapper from '@/components/animations/scroll-animation-wrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Mail, Phone, Upload, User, Briefcase } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';

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

const applicationSchema = z.object({
  fullName: z.string().min(1, { message: 'Full name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  position: z.string().min(1, { message: 'Position is required.' }),
  resume: z.any().optional(),
  coverLetter: z.string().optional(),
});

export default function CareersPage() {
   const form = useForm<z.infer<typeof applicationSchema>>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
    },
  });

  async function onSubmit(values: z.infer<typeof applicationSchema>) {
    try {
      // Here you would typically handle form submission, e.g., upload files and send data to your backend
      console.log(values);
      toast.success('Application Sent!', {
        description: "We've received your application and will be in touch if there's a good fit.",
      });
      form.reset();
    } catch (error) {
      toast.error('Uh oh! Something went wrong.', {
        description: 'There was a problem submitting your application. Please try again.',
      });
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />
      <main className="flex-1">
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
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
              <div className="mx-auto max-w-4xl">
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
           <ScrollAnimationWrapper className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
            <Link href="#open-positions">
              <ArrowDown className="h-8 w-8 text-white animate-bounce" />
            </Link>
          </ScrollAnimationWrapper>
        </section>

        <section id="open-positions" className="py-20 md:py-32 bg-black text-white">
          <div className="container mx-auto px-4">
            <ScrollAnimationWrapper>
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                  {openPositions.length > 0 ? 'Open Positions' : 'Apply Now'}
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                  {openPositions.length > 0
                    ? 'Find your next adventure. Check out our current openings.'
                    : "We're always looking for talented people. Submit your application below."}
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="mx-auto max-w-3xl">
              {openPositions.length > 0 ? (
                <ScrollAnimationWrapper>
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
                </ScrollAnimationWrapper>
              ) : (
                <ScrollAnimationWrapper>
                  <Card className="border-white/10 bg-gray-900/50 backdrop-blur-2xl text-white p-6 md:p-8">
                     <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john.doe@example.com" {...field} className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                           <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number (Optional)</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="+1 (555) 123-4567" {...field} className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="position"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Position Applying For</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g., Video Editor" {...field} className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                            control={form.control}
                            name="resume"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Resume (Optional)</FormLabel>
                                <FormControl>
                                   <Input
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                                    className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300 file:text-gray-300 file:border-0 file:bg-gray-500/20 file:mr-4 file:py-3 file:px-4"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        <FormField
                          control={form.control}
                          name="coverLetter"
                          render={({ field }) => (
                            <FormItem>
                               <FormLabel>Cover Letter / Message (Optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us why you'd be a great fit for our team..."
                                  rows={5}
                                  {...field}
                                  className="bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          type="submit"
                          size="lg"
                          className="w-full h-12 text-lg font-semibold bg-white text-black hover:bg-gray-200"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </Button>
                      </form>
                    </Form>
                  </Card>
                </ScrollAnimationWrapper>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
