# Gursimran Singh - Product Manager Portfolio

A modern, responsive portfolio website showcasing product management work through detailed case studies, writing, and professional experience.

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **React Router** for client-side routing
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Customizing Content

All content is stored in easy-to-edit data files located in `src/data/`:

### Case Studies (`src/data/caseStudies.ts`)

Add or edit case studies by modifying the `caseStudies` array. Each case study includes:
- `slug` - URL-friendly identifier
- `title` - Case study title
- `category` - Type of work (Launched product, Product analysis, etc.)
- `role` - Your role in the project
- `timeframe` - How long the project took
- `context` - Where this work happened
- `summary` - Brief overview
- `problem` - Problem statement and context
- `goals` - Project goals
- `metrics` - Success metrics
- `research` - Research methods used
- `insights` - Key findings
- `strategy` - Strategic approach
- `solution` - Solution description
- `execution` - How it was executed
- `outcomes` - Results and impact
- `learnings` - Reflections and lessons learned
- `tags` - Relevant tags for filtering
- `featured` - Whether to show on homepage

### Writing/Posts (`src/data/posts.ts`)

Add or edit blog posts/articles in the `posts` array:
- `slug` - URL-friendly identifier
- `title` - Article title
- `description` - Brief description
- `type` - Content type (Product teardown, Opinion, Notes)
- `date` - Publication date (YYYY-MM-DD)
- `external` - (optional) Set to true if linking to external site
- `url` - (optional) External URL if applicable

### Profile Information (`src/data/highlights.ts`)

Update your personal information:
- `hero` - Homepage hero section content
- `valueProps` - What you do section (3 cards)
- `process` - How you work (5-step process)
- `testimonials` - Quotes from colleagues
- `contact` - Email, LinkedIn, GitHub links

### Social Links and Resume

Update contact information in `src/data/highlights.ts`:
```typescript
contact: {
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourprofile'
}
```

To add a resume download link, update the href in `src/pages/Home.tsx` (around line 47):
```tsx
<a href="/path-to-your-resume.pdf" download>
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── CaseStudyCard.tsx # Case study preview card
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── CaseStudies.tsx # Case studies listing
│   ├── CaseStudyDetail.tsx # Individual case study
│   ├── About.tsx       # About page
│   ├── Writing.tsx     # Writing/blog page
│   └── Contact.tsx     # Contact page
├── data/               # Content data files
│   ├── caseStudies.ts  # Case study content
│   ├── posts.ts        # Blog posts/articles
│   └── highlights.ts   # Profile and homepage content
├── App.tsx             # Main app component with routing
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Design System

### Colors
- **Background**: Warm gray (#F5F5F7)
- **Text**: Dark slate (#111827)
- **Accent**: Emerald (customized in Tailwind config)
- **Tags/Chips**: Soft grays

### Typography
- **Headings**: Plus Jakarta Sans (bold, rounded)
- **Body**: Inter (clean, highly readable)

### Components
All components use:
- Generous white space
- Clear visual hierarchy
- Subtle hover effects and transitions
- Responsive layouts (mobile-first)
- Accessible keyboard navigation

## Browser Support

Modern browsers supporting ES2015+:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a personal portfolio project. Feel free to use it as inspiration for your own portfolio!

## Questions?

For questions about customization or technical issues, please open an issue or reach out directly.
