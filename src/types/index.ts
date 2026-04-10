export type Category = 'flower' | 'pre-roll' | 'edible' | 'extract' | 'accessory';

export interface Product {
  id: string;
  name: string;
  category: Category;
  thc?: number;
  cbd?: number;
  terpenes?: string[];
  effects?: string[];
  flavours?: string[];
  description: string;
  price: number; // THB
  labCertified: boolean;
  featured?: boolean;
  emoji: string;
}

export type Page = 'home' | 'products' | 'sommelier' | 'about';
