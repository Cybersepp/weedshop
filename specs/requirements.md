# Woody Weedpecker — Requirements

## Overview

Static mockup website for a premium cannabis shop and cannabis sommelier service in Koh Phangan, Thailand. No backend, no database, no payments. Orders are placed via Instagram or Telegram.

## Pages

### 1. Home
- Hero section with brand name, tagline, and CTA buttons (Shop, Book Sommelier)
- Featured products (3–6 highlighted items)
- "Why Woody Weedpecker" section (lab-certified, premium partners, expert sommelier)
- Instagram + Telegram order CTAs

### 2. Product Catalog
- Grid of all products, filterable by category (Flower, Pre-roll, Edibles, Extracts, Accessories)
- Each card shows: name, category, THC/CBD %, short description, price, "Order via Telegram" button

### 3. Product Detail Page
- Full strain/product info: name, type, THC/CBD %, terpenes, effects, flavour profile
- Lab certification badge/info
- "Order via Instagram" and "Order via Telegram" buttons
- Related products

### 4. Cannabis Sommelier
- About the sommelier service (what it is, what to expect)
- Booking CTA (links to Instagram DM or Telegram)
- Testimonials / quotes (static)

### 5. About
- Brand story
- Location info (Koh Phangan, Thailand)
- Emphasis on lab-certified, reputable supply partners
- Contact links

### 6. Age Verification Gate
- Modal on first visit
- "I am 18 or older" confirm button
- "I am under 18" exit button (redirects to google.com or similar)
- Remembered in localStorage — not shown again once confirmed

## Components

- `Navbar` — logo, nav links, Instagram + Telegram icon links
- `Footer` — links, social icons, legal disclaimer
- `ProductCard` — used in catalog and featured section
- `AgeGate` — modal overlay for 18+ confirmation
- `OrderCTA` — reusable Instagram/Telegram order button pair
- `LabBadge` — "Lab Certified" badge component
- `SommelierCard` — for the sommelier page

## Data

All product and strain data lives in `src/data/products.ts` as a static TypeScript array.

### Product shape

```ts
interface Product {
  id: string;
  name: string;
  category: 'flower' | 'pre-roll' | 'edible' | 'extract' | 'accessory';
  thc?: number;       // percentage
  cbd?: number;       // percentage
  terpenes?: string[];
  effects?: string[];
  flavours?: string[];
  description: string;
  price: number;      // THB
  labCertified: boolean;
  featured?: boolean;
  imageUrl?: string;
}
```

## Out of Scope (V1)

- User accounts / login
- Shopping cart or checkout
- Payment processing
- Real-time inventory
- CMS or admin panel
- Database or backend of any kind
