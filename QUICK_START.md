# 🚀 Quick Start Guide

## ✅ What's Already Done

Your project foundation is ready with:
- ✅ Next.js 14 configuration
- ✅ Tailwind CSS with Charcoal & Rose Gold theme
- ✅ TypeScript setup
- ✅ Complete data architecture (services, cities, navigation, etc.)
- ✅ Analytics tracking utilities
- ✅ Helper functions and utilities

## 📋 Immediate Next Steps

### Step 1: Install Dependencies (2 minutes)

```bash
cd premium-auto-alim
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- All required dependencies

### Step 2: Create Environment File (1 minute)

```bash
cp .env.example .env.local
```

Then open `.env.local` and add your tracking IDs. For now, you can use dummy values to test:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Otomoto Alım
NEXT_PUBLIC_PHONE=+905551234567
NEXT_PUBLIC_PHONE_DISPLAY=0555 123 45 67
NEXT_PUBLIC_WHATSAPP=905551234567
NEXT_PUBLIC_EMAIL=info@otomotoalim.com.tr
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL=XXXXX
NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL=XXXXX
NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL=XXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXX
```

### Step 3: Create Remaining Files (30-60 minutes)

Open `SETUP_GUIDE.md` and follow the instructions to create:

**Priority 1 - Core Files (Required to run)**:
1. `src/app/layout.tsx` - Root layout
2. `src/app/page.tsx` - Homepage
3. Analytics components (3 files)
4. Layout components (3 files - Header, Footer, FloatingButtons)

**Priority 2 - Section Components (For homepage)**:
5. `src/components/sections/HeroSection.tsx`
6. `src/components/sections/ServicesGrid.tsx`
7. `src/components/sections/ProcessSteps.tsx`
8. `src/components/sections/StatsSection.tsx`
9. `src/components/sections/TestimonialsSection.tsx`
10. `src/components/sections/CTASection.tsx`

**Priority 3 - Service & City Pages**:
11. Service pages (4 files)
12. City dynamic page (1 file)

### Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser!

## 🎯 Development Strategy

### Option A: Build Component by Component (Recommended)
1. Create core files (layout, page, analytics)
2. Start dev server to see errors
3. Create one section component at a time
4. Refresh browser to see progress
5. Fix any errors as they appear

### Option B: Create All Files First
1. Create all files from SETUP_GUIDE.md
2. Then start dev server
3. Fix all errors at once

## 📁 File Creation Order

For fastest results, create in this order:

```
1. src/app/layout.tsx (CRITICAL)
2. src/app/page.tsx (CRITICAL)
3. src/components/analytics/*.tsx (3 files)
4. src/components/layout/*.tsx (3 files)
5. src/components/sections/*.tsx (6 files)
6. src/app/[service]/page.tsx (4 service pages)
7. src/app/sehirler/[city]/page.tsx (1 dynamic city page)
```

## 💡 Pro Tips

1. **Copy-Paste from SETUP_GUIDE.md**: All code is ready - just copy and paste!

2. **Test Early**: Start the dev server after creating the first few files to catch errors early

3. **One Component at a Time**: Don't try to create everything at once

4. **Use VS Code**: The TypeScript intellisense will help catch errors

5. **Check Data Files**: All content is in `src/data/` - modify there, not in components

## 🎨 Customization Points

Before going live, customize:

1. **Contact Info** (`src/data/site.ts`):
   - Phone number
   - WhatsApp number
   - Email
   - Address

2. **Services Content** (`src/data/services.ts`):
   - Descriptions
   - Features
   - FAQs

3. **Cities** (`src/data/cities.ts`):
   - Add more cities
   - Update coverage areas
   - Local testimonials

4. **Colors** (if needed - `tailwind.config.ts`):
   - Currently: Charcoal (#2C2C2C) + Rose Gold (#B76E79)

## 🆘 Troubleshooting

### "Cannot find module" errors
- Make sure you created the file in the exact path
- Check for typos in import statements

### "Unexpected token" errors
- Check for syntax errors in TSX
- Make sure you're using client components ('use client') when needed

### Styles not working
- Make sure `globals.css` is imported in `layout.tsx`
- Check Tailwind classes are correct

### Analytics not firing
- Check `.env.local` has correct IDs
- Open browser DevTools → Console
- Look for tracking logs

## 📞 Support

If you get stuck:
1. Read the error message carefully
2. Check SETUP_GUIDE.md for that component
3. Review similar components for patterns
4. Check README.md for general info

## 🎉 You're Ready!

Once you've created the core files and started the dev server, you'll see your website come to life!

The data-driven architecture means you can easily:
- Add more services
- Add more cities  
- Update content
- Change colors
- Customize everything

**Good luck! You've got this! 🚀**
