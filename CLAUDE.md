# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a marketing support landing page for 관악구 소상공인 (Gwanak-gu Small Business Owners) built with Next.js 15, TypeScript, and Tailwind CSS. The application is deployed on Vercel and serves as an application portal for small business marketing support programs.

## Essential Commands

```bash
# Development
npm run dev        # Start development server on http://localhost:3000

# Build & Production
npm run build      # Build for production
npm run start      # Start production server

# Code Quality
npm run lint       # Run ESLint checks
```

## Architecture & Key Design Decisions

### Mobile-First Responsive Design Pattern
The application uses a specific pattern for mobile optimization while preserving desktop designs:
- Desktop versions use inline styles (preserved as-is)
- Mobile versions use Tailwind CSS classes
- Conditional rendering based on `mounted` and `isMobile` state to avoid hydration mismatches
- Pattern example in `/app/application-form/page.tsx`:
  ```typescript
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // Renders desktop first, then switches to mobile after mount if needed
  {mounted && isMobile ? <MobileVersion /> : <DesktopVersion />}
  ```

### Component Structure
- **Original Components**: `InformationSectionOriginal.tsx`, `SupportSectionOriginal.tsx` - Used in main landing page with mobile-responsive hamburger menu
- **Standard Components**: `InformationSection.tsx`, `SupportSection.tsx` - Used in sub-pages
- Choice between Original vs Standard depends on whether the page needs hamburger menu functionality

### Routing Structure
- `/` - Main landing page with hero section and support information
- `/about` - About page with information and support sections
- `/apply` - Application questions page
- `/application-form` - Full application form with personal information consent

### Deployment Configuration
- **Region**: Seoul (icn1) as specified in `vercel.json`
- **GitHub Repository**: `https://github.com/wjb127/marketing-support-landing-page.git`
- Automatic deployment on push to main branch

## Critical Implementation Notes

1. **Hydration Issues**: Always use the `mounted` pattern when implementing client-side-only features to prevent Next.js hydration mismatches

2. **Mobile Optimization Rule**: When optimizing for mobile, NEVER modify desktop inline styles. Create separate mobile versions with conditional rendering

3. **Image Assets**: Public images are stored in `/public/images/` and referenced as `/images/filename`

4. **Form Validation**: Application form includes comprehensive validation for all required fields before submission

5. **Korean Language**: All user-facing content is in Korean. Maintain proper Korean typography and honorifics

## Project Context

This is a government support program application site requiring:
- Professional, trustworthy design
- Clear information hierarchy
- Accessible form interfaces
- Mobile-friendly experience for small business owners