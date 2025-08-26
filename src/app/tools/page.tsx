'use client';

import React, { useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateContentIdeas, generateHashtags } from '@/ai/flows/tool-flows';
import { Bot, Lightbulb, Hash, Loader2 } from 'lucide-react';
import ScrollAnimationWrapper from '@/components/animations/scroll-animation-wrapper';

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState('content-ideas');

  return (
    <div className="flex min-h-screen w-full flex-col bg-black">
      <Header />
      <main className="flex-1">
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
                  <Bot className="mr-2 h-4 w-4" /> AI Powered
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl">
                  Creator Tools
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                  Supercharge your content strategy with our AI-powered tools designed for creators and marketers.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-black">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-3xl mx-auto">
              <ScrollAnimationWrapper>
                <TabsList className="grid w-full grid-cols-2 bg-gray-800/50 backdrop-blur-2xl border border-white/10">
                  <TabsTrigger value="content-ideas">
                    <Lightbulb className="mr-2 h-4 w-4" />
                    Content Idea Generator
                  </TabsTrigger>
                  <TabsTrigger value="hashtag-generator">
                    <Hash className="mr-2 h-4 w-4" />
                    Hashtag Generator
                  </TabsTrigger>
                </TabsList>
              </ScrollAnimationWrapper>

              <TabsContent value="content-ideas">
                <ContentIdeaGenerator />
              </TabsContent>
              <TabsContent value="hashtag-generator">
                <HashtagGenerator />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const ContentIdeaGenerator = () => {
  const [topic, setTopic] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    setIsLoading(true);
    setIdeas([]);
    try {
      const result = await generateContentIdeas(topic);
      setIdeas(result.ideas);
    } catch (error) {
      console.error('Error generating content ideas:', error);
      // You can add a toast notification here for the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ToolCard
      title="AI Content Idea Generator"
      description="Enter a topic or keyword to get a list of fresh content ideas for your next video, blog post, or social media update."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., 'digital marketing for startups'"
          className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300"
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading || !topic}>
          {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Ideas...</> : 'Generate Ideas'}
        </Button>
      </form>
      <ResultsDisplay results={ideas} isLoading={isLoading} emptyMessage="Your content ideas will appear here." />
    </ToolCard>
  );
};

const HashtagGenerator = () => {
  const [topic, setTopic] = useState('');
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;
    setIsLoading(true);
    setHashtags([]);
    try {
      const result = await generateHashtags(topic);
      setHashtags(result.hashtags);
    } catch (error) {
      console.error('Error generating hashtags:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ToolCard
      title="AI Hashtag Generator"
      description="Input a keyword or topic to get a set of relevant hashtags for Instagram, YouTube, and TikTok to boost your reach."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g., 'personal branding'"
          className="h-12 bg-gray-500/10 border-white/10 backdrop-blur-2xl focus:ring-white text-white placeholder:text-gray-300"
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading || !topic}>
          {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating Hashtags...</> : 'Generate Hashtags'}
        </Button>
      </form>
      <ResultsDisplay results={hashtags} isLoading={isLoading} emptyMessage="Your generated hashtags will appear here." />
    </ToolCard>
  );
};

const ToolCard = ({ title, description, children }: { title: string, description: string, children: React.ReactNode }) => (
  <ScrollAnimationWrapper>
    <Card className="mt-8 border-white/10 bg-gray-900/50 backdrop-blur-2xl text-white">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-gray-400 pt-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
      </CardContent>
    </Card>
  </ScrollAnimationWrapper>
);

const ResultsDisplay = ({ results, isLoading, emptyMessage }: { results: string[], isLoading: boolean, emptyMessage: string }) => {
  if (isLoading) {
    return (
      <div className="mt-6 flex justify-center items-center h-40 bg-gray-500/10 rounded-lg">
        <Loader2 className="h-8 w-8 text-white animate-spin" />
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="mt-6 flex justify-center items-center h-40 bg-gray-500/10 rounded-lg">
        <p className="text-gray-400 text-center">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-gray-500/10 rounded-lg border border-white/10">
      <div className="flex flex-wrap gap-2">
        {results.map((item, index) => (
          <Badge key={index} variant="secondary" className="text-sm bg-gray-700 text-gray-300">
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
};
