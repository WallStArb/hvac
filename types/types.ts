import { ComponentType, ReactNode, ReactElement } from 'react';

export type OpenAIModel =
  | 'gpt-3.5-turbo'
  | 'gpt-4'
  | 'gpt-4-1106-preview'
  | 'gpt-4o';

export type OpenRouterModel =
  | 'qwen/qwq-32b:free'
  | 'deepseek/deepseek-chat-v3-0324:free'
  | 'deepseek/deepseek-r1:free'
  | 'deepseek/deepseek-r1-0528-qwen3-8b'
  | 'google/gemma-3-27b-it:free'
  | 'tngtech/deepseek-r1t2-chimera:free';

export type AIModel = OpenAIModel | OpenRouterModel;

export interface TranslateBody {
  // inputLanguage: string;
  // outputLanguage: string;
  topic: string;
  paragraphs: string;
  essayType: string;
  model: AIModel;
  type?: 'review' | 'refactor' | 'complexity' | 'normal';
}
export interface ChatBody {
  inputMessage: string;
  model: AIModel;
  apiKey?: string | undefined | null;
  provider?: 'openai' | 'openrouter';
}
export interface TranslateResponse {
  code: string;
}

export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Customer {
  id: string /* primary key */;
  stripe_customer_id?: string;
}

export interface Product {
  id: string /* primary key */;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Record<string, any>;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface UserDetails {
  id: string /* primary key */;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: Record<string, any>;
  payment_method?: Record<string, any>;
}

export interface Price {
  id: string /* primary key */;
  product_id?: string /* foreign key to products.id */;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: 'one_time' | 'recurring';
  interval?: 'day' | 'week' | 'month' | 'year';
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Record<string, any>;
  products?: Product;
}

export interface PriceWithProduct extends Price {}

export interface Subscription {
  id: string /* primary key */;
  user_id: string;
  status?: 'trialing' | 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'unpaid' | 'paused';
  metadata?: Record<string, any>;
  price_id?: string /* foreign key to prices.id */;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}

export interface IRoute {
  path: string;
  name: string;
  layout?: string;
  exact?: boolean;
  component?: ComponentType;
  disabled?: boolean;
  icon?: ReactElement;
  secondary?: boolean;
  collapse?: boolean;
  items?: IRoute[];
  rightElement?: boolean;
  invisible?: boolean;
}

export interface EssayBody {
  topic: string;
  words: '300' | '200';
  essayType: '' | 'Argumentative' | 'Classic' | 'Persuasive' | 'Critique';
  model: AIModel;
  apiKey?: string | undefined;
  provider?: 'openai' | 'openrouter';
}
export interface PremiumEssayBody {
  words: string;
  topic: string;
  essayType:
    | ''
    | 'Argumentative'
    | 'Classic'
    | 'Persuasive'
    | 'Memoir'
    | 'Critique'
    | 'Compare/Contrast'
    | 'Narrative'
    | 'Descriptive'
    | 'Expository'
    | 'Cause and Effect'
    | 'Reflective'
    | 'Informative';
  tone: string;
  citation: string;
  level: string;
  model: OpenAIModel;
  apiKey?: string | undefined;
}
