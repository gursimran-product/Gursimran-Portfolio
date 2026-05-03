# Content Editing Guide

This guide shows you exactly where to edit content for your portfolio.

## Quick Start: Most Common Edits

### 1. Update Your Name and Tagline
**File:** `src/data/highlights.ts`

```typescript
hero: {
  name: 'Gursimran Singh',  // Change this
  title: 'Product Manager – Turning complex workflows into simple products',  // Change this
  tagline: 'I build and improve B2B products...',  // Change this
}
```

### 2. Update Contact Information
**File:** `src/data/highlights.ts`

```typescript
contact: {
  email: 'gursimran@example.com',  // Change to your real email
  linkedin: 'https://linkedin.com/in/gursimran-singh',  // Your LinkedIn
  github: 'https://github.com/gursimran'  // Your GitHub
}
```

### 3. Add a New Case Study
**File:** `src/data/caseStudies.ts`

Copy the structure of an existing case study and fill in your content:

```typescript
{
  slug: 'my-new-project',  // URL-friendly name
  title: 'My Project Title',
  category: 'Launched product',  // or 'Product analysis', 'Concept / redesign'
  role: 'Product Manager',
  timeframe: '3 months',
  context: 'B2B SaaS Platform',
  type: 'Launched product',
  summary: 'One-line description of what you did',
  problem: 'Detailed problem statement...',
  goals: ['Goal 1', 'Goal 2'],
  metrics: ['Metric 1', 'Metric 2'],
  // ... fill in all other fields
  featured: true  // Set to true to show on homepage
}
```

### 4. Add a Writing/Blog Post
**File:** `src/data/posts.ts`

```typescript
{
  slug: 'my-article',
  title: 'My Article Title',
  description: 'Brief description of the article',
  type: 'Opinion',  // or 'Product teardown', 'Notes'
  date: '2024-03-15',  // YYYY-MM-DD format
  external: false,  // Set to true if linking to external site
  url: 'https://medium.com/@you/article'  // Only needed if external: true
}
```

### 5. Update Your Experience
**File:** `src/pages/About.tsx`

Find the `experience` array (around line 5) and edit:

```typescript
{
  role: 'Your Job Title',
  period: '2022 - Present',
  description: 'What you did in this role...',
  highlights: [
    'Achievement 1',
    'Achievement 2',
    'Achievement 3'
  ]
}
```

### 6. Update Resume Download Link
**File:** `src/pages/Home.tsx`

Find line ~47 and update:

```tsx
<a
  href="/resume.pdf"  // Change to your resume path
  download
  className="..."
>
```

Place your resume PDF file in the `public/` folder (create it if it doesn't exist).

## Content Fields Explained

### Case Study Fields

| Field | What it is | Example |
|-------|-----------|---------|
| `slug` | URL-friendly ID | `invoice-automation` |
| `title` | Project name | `Automating Invoice Management` |
| `category` | Project type | `Launched product` |
| `role` | Your role | `Product Manager` |
| `timeframe` | Duration | `6 months` |
| `summary` | 1-2 sentence overview | Quick description |
| `problem` | Problem context (paragraph) | What problem existed |
| `goals` | List of objectives | `['Reduce time by 40%']` |
| `metrics` | How you measured success | `['Processing time']` |
| `research` | Research approach (paragraph) | Methods you used |
| `insights` | Key findings | List of 3-5 insights |
| `strategy` | Your approach (paragraph) | How you framed it |
| `solution` | What you built (paragraph) | The solution |
| `execution` | How you worked (paragraph) | Team collaboration |
| `outcomes` | Results | List of achievements |
| `learnings` | Reflection (paragraph) | What you learned |
| `tags` | Categories | `['B2B SaaS', 'Discovery']` |
| `featured` | Show on homepage? | `true` or `false` |

### Writing Post Fields

| Field | What it is | Example |
|-------|-----------|---------|
| `slug` | URL-friendly ID | `product-discovery` |
| `title` | Article title | `Five Discovery Mistakes` |
| `description` | Brief summary | 2-3 sentence overview |
| `type` | Content category | `Opinion`, `Product teardown`, `Notes` |
| `date` | Publication date | `2024-03-15` (YYYY-MM-DD) |
| `external` | External link? | `true` or `false` |
| `url` | External URL | Only if external is true |

## Styling Tips

### Colors
The site uses an emerald green accent color. You can change this in `tailwind.config.js` if you prefer a different color.

### Images
To add images to case studies:
1. Create a `public/images/` folder
2. Add your images there
3. Reference them in your case study content as `/images/your-image.png`

### Testimonials
Update testimonials in `src/data/highlights.ts`:

```typescript
testimonials: [
  {
    quote: 'What they said about you...',
    author: 'Their Name',
    role: 'Their Job Title'
  }
]
```

## Testing Your Changes

After making changes:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npm run typecheck
```

## Common Questions

**Q: How do I change the accent color from green to something else?**
A: Edit `tailwind.config.js` and change the `emerald` color definitions, or replace `emerald` with another Tailwind color like `blue`, `purple`, etc.

**Q: How do I remove a case study?**
A: Delete it from the array in `src/data/caseStudies.ts`

**Q: Can I add more pages?**
A: Yes! Create a new file in `src/pages/`, then add a route in `src/App.tsx`

**Q: How do I add images to case studies?**
A: Create a `public/images/` folder, add images, and reference them in your content as `/images/filename.jpg`

**Q: The site is not reflecting my changes**
A: Make sure the dev server is running (`npm run dev`). If it is, try stopping and restarting it.

## Need Help?

- Check the main README.md for setup instructions
- Review existing data files for examples
- All content uses standard TypeScript objects - just follow the pattern!
