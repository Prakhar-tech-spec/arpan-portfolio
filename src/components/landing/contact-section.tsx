'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ScrollAnimationWrapper from '../animations/scroll-animation-wrapper';
import { Mail, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(1, { message: 'Message is required.' }),
});

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Here you would typically send the form data to your backend
      console.log(values);
      toast({
        title: 'Message Sent!',
        description: "We've received your message and will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request. Please try again.',
      });
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <ScrollAnimationWrapper>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">Let's Build Together</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
              Ready to start your next adventure? Drop us a line.
            </p>
          </div>
        </ScrollAnimationWrapper>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollAnimationWrapper>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                Our team is ready to answer your questions and help you get started on your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-gray-400" />
                  <a href="mailto:hello@adventure.com" className="text-lg text-white hover:underline">
                    hello@adventure.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-gray-400" />
                  <a href="tel:+1234567890" className="text-lg text-white hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="h-12 bg-gray-800/50 border-gray-700 focus:ring-white"
                        />
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
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          {...field}
                          className="h-12 bg-gray-800/50 border-gray-700 focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Your Message"
                          rows={5}
                          {...field}
                          className="bg-gray-800/50 border-gray-700 focus:ring-white"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-lg font-semibold bg-white text-black hover:bg-gray-200 relative overflow-hidden group"
                  disabled={form.formState.isSubmitting}
                >
                  <span className="relative z-10">{form.formState.isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </form>
            </Form>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}
