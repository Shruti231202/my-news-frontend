# AST Consulting – Front Page News Assignment  
### Built with Next.js, TailwindCSS, ISR, Dynamic Routing & SEO
## **Part A – Implementation Summary**

This project is a simplified front-page clone of LiveHindustan.com built using **Next.js**.  
It includes:

- **Responsive layout** (mobile, tablet, desktop)
- **Dynamic routing** for article pages (`/articles/[id]`)
- **Static Generation + ISR** using `getStaticProps` (revalidate every 60s)
- **Image Optimization** using Next.js `<Image>`
- **SEO Optimization** using `<Head>` + OpenGraph + JSON-LD
- **Fallback UI** for missing data & error handling

---

# **Part B – Design Document**

## 1. **Wireframe / Layout Structure**

### **Homepage Layout**
| Nav Bar |
| HERO ARTICLE (large) |
| Grid of Top Stories (3-column desktop) |
| 2-column tablet | 1-column mobile |
| Footer |

### **Article Page Layout**
| Nav Bar |
| Article Title |
| Meta Info |
| Large Feature Image (Next.js optimized) |
| Full Content |
| Footer |


---

## 2. **Layout Decisions**

- **Hero section** highlights the top story using a large image and headline.
- **Three-column grid** chosen for desktop because news readers scan many stories quickly.
- **Two columns on tablets**, **one column on mobile** — ensures readability.
- **Cards use line-clamp** to avoid layout break with long titles.
- Chose clean, modern typography consistent with news websites.

---

## 3. **Data Fetching Strategy**

### ✔ Selected Method: **`getStaticProps` + ISR (Incremental Static Regeneration)**

### Why?
- Fastest performance (static HTML served)
- SEO-friendly (pre-rendered content)
- Auto regenerates every 60 seconds → fresh news without full redeploy
- Safe fallback UI if data fails

### Trade-offs
- Updates only reflect after revalidation window  
- But ideal for this assignment (news-like, but demo scale)

---

## 4. **Component Architecture**

### **Hero Component**
- Displays the main article
- Uses `<Image>` with `fill` for optimization
- Responsive heights for mobile/tablet/desktop

### **Card Component**
- Displays article previews
- Uses `line-clamp-2` for long titles
- Fully responsive

### **Nav Component**
- Category-based navigation using `router.query`
- Simple, clean tabs

### **ErrorBanner Component**
- Shown on error states (e.g., data fetch failure)

### **Layout Component**
- Global wrapper for `<Head>` metadata & page structure

### **pages/articles/[id].js**
- Dynamic routing for articles
- SEO tags and JSON-LD schema for structured data

---

## 📌 **Part C – Testing & Edge Cases**

### ✔ Missing Image
- If `image: null`, fallback image `/fallback.jpg` loads.
- No broken icons → consistent UI.

### ✔ API Returns No Articles
Shows a friendly fallback UI:
- Illustration  
- Heading: **“No news available”**
- Message explaining the situation

### ✔ Long Titles
- Cards use `.line-clamp-2` to avoid overflow.
- Hero uses `.break-words` for clean wrapping.

### ✔ Error States
If JSON file fails or fetch errors:
- `ErrorBanner` displays:
  > “Failed to load news. Showing fallback data.”

### ✔ Loading State
Even though SSG loads instantly:
- Skeleton components prepared for future API usage.

### ✔ 404 Case
Opening `/articles/999` correctly shows Next.js 404 page.

---

# 📌 **Part D – AI Use & Reflection**

### 1. **Where AI Was Used**
- Generating component boilerplate (Card, Hero, Nav)
- Debugging hydration mismatch & Link issues
- Writing SEO metadata + JSON-LD schema
- Refactoring `Image` usage for Next.js 13+
- Creating documentation & code explanations

### 2. **Incorrect or Suboptimal AI Suggestions**
- Wrong image paths (`/public/...` instead of `/images/...`)
- Provided deprecated `<Image layout="fill">` syntax
- Suggested Nav.js toggle without defining `open` state
- Early date formatting caused hydration mismatches

### 3. **How I Fixed Them**
- Corrected all image paths manually
- Updated `<Image>` to modern syntax (`fill`, `sizes`)
- Added required `useState` for mobile nav toggle
- Standardized date formatting to avoid SSR mismatches

### 4. **Custom Improvements Made Beyond AI**
- Implemented category filtering using query parameters
- Added complete error fallback + banner
- Made layout cleaner & more responsive
- Wrote paragraphs handling (`split("\n\n")`) for article content

---

# 📌 **Conclusion**

This assignment demonstrates:

- Solid understanding of the Next.js framework  
- Practical responsive UI development  
- SEO implementation skills  
- Ability to handle edge cases gracefully  
- Responsible & effective use of AI for development  

**Thank you for reviewing my assignment!**

