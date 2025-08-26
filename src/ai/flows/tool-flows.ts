'use server';
/**
 * @fileOverview AI flows for the creator tools page.
 *
 * - generateContentIdeas - Generates content ideas based on a topic.
 * - generateHashtags - Generates hashtags for social media based on a topic.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

// Content Ideas Flow
const ContentIdeasInputSchema = z.object({
  topic: z.string().describe('The topic or keyword to generate content ideas for.'),
});

const ContentIdeasOutputSchema = z.object({
  ideas: z.array(z.string()).describe('A list of 10-15 creative content ideas.'),
});

export type ContentIdeasInput = z.infer<typeof ContentIdeasInputSchema>;
export type ContentIdeasOutput = z.infer<typeof ContentIdeasOutputSchema>;

const contentIdeasPrompt = ai.definePrompt({
  name: 'contentIdeasPrompt',
  input: { schema: ContentIdeasInputSchema },
  output: { schema: ContentIdeasOutputSchema },
  prompt: `You are an expert social media strategist and content creator.
Given the topic "{{topic}}", generate a list of 10 to 15 engaging and creative content ideas.
The ideas should be suitable for platforms like Instagram, YouTube, and TikTok.
Each idea should be a short, actionable title or concept.`,
});

const generateContentIdeasFlow = ai.defineFlow(
  {
    name: 'generateContentIdeasFlow',
    inputSchema: ContentIdeasInputSchema,
    outputSchema: ContentIdeasOutputSchema,
  },
  async (input) => {
    const { output } = await contentIdeasPrompt(input);
    return output!;
  }
);

export async function generateContentIdeas(topic: string): Promise<ContentIdeasOutput> {
  return generateContentIdeasFlow({ topic });
}


// Hashtag Generator Flow
const HashtagInputSchema = z.object({
  topic: z.string().describe('The topic or keyword to generate hashtags for.'),
});

const HashtagOutputSchema = z.object({
  hashtags: z.array(z.string()).describe('A list of 20-30 relevant hashtags, including the # prefix.'),
});

export type HashtagInput = z.infer<typeof HashtagInputSchema>;
export type HashtagOutput = z.infer<typeof HashtagOutputSchema>;

const hashtagPrompt = ai.definePrompt({
  name: 'hashtagPrompt',
  input: { schema: HashtagInputSchema },
  output: { schema: HashtagOutputSchema },
  prompt: `You are an expert social media marketing assistant.
Given the topic "{{topic}}", generate a list of 20-30 highly relevant and popular hashtags.
The hashtags should be suitable for platforms like Instagram, YouTube, and TikTok.
Mix popular, niche, and location-specific hashtags if applicable.
Ensure every item in the list starts with a #.`,
});

const generateHashtagsFlow = ai.defineFlow(
  {
    name: 'generateHashtagsFlow',
    inputSchema: HashtagInputSchema,
    outputSchema: HashtagOutputSchema,
  },
  async (input) => {
    const { output } = await hashtagPrompt(input);
    return output!;
  }
);

export async function generateHashtags(topic: string): Promise<HashtagOutput> {
  return generateHashtagsFlow({ topic });
}