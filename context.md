Fiscus Max — Project Context for Claude Code
Project Overview
This is the Fiscus Max website — a bold, lead-generation site for a tax preparation and tax resolution service serving working families (B2C). The primary goal is to get visitors to book a free consultation via a Monday.com CRM embedded form.

File Location
~/Desktop/grantelyceking/fiscusmax/website/
├── v1/
│   └── index_fiscusmax_v1.html   ← original site, do not touch
└── v2/
    ├── index.html                ← active build, all work goes here
    ├── assets/
    │   ├── images/
    │   └── icons/
    ├── css/
    └── blog/
Always work in: ~/Desktop/grantelyceking/fiscusmax/website/v2/index.html Never modify: anything inside the v1/ folder

Tech Stack
	•	Plain HTML, CSS, JavaScript only
	•	No frameworks, no libraries, no npm
	•	Single file: all CSS in <style> tags, all JS in <script> tags
	•	Google Fonts via <link> in <head>

Fonts
Import both from Google Fonts:
	•	DM Serif Display — weight 400
	•	Funnel Display — weights 300 and 400
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Funnel+Display:wght@300;400&display=swap" rel="stylesheet">
Type System
Element
Font
Size
Weight
Hero Headline
DM Serif Display
45px
400
H1 Section Titles
DM Serif Display
32px
400
H2 Sub-titles
Funnel Display
22px
400
Body Text
Funnel Display
18px
300
Buttons & Labels
Funnel Display
16px
400

Brand Colors
Official Brand System:
	•	Primary 1 — Deep Green: #114b1c
	•	Primary 2 — Navy: #211057
	•	Secondary 1 — Gold Accent (non-gradient text): #d6b12f
	•	Secondary 2 — Cream (backgrounds & body text): #f8f4e5
	•	Dark depth shade: #0a2910
	•	Mid green (gradients): #1a6b2e

Gradient headers — preserved unchanged:
	•	Gold metallic: linear-gradient(180deg, #d6b661, #fbf7a0, #b5923b, #edac0c)
	•	Dark metallic: linear-gradient(180deg, #000000, #064212, #000000, #070707)

CSS Variables (:root):
	•	--color-primary: #114b1c
	•	--color-navy: #211057
	•	--color-gold: #d6b12f
	•	--color-cream: #f8f4e5
	•	--color-dark: #0a2910
	•	--green / --mid / --deep / --gold / --white — legacy aliases updated to match above

Logo Assets
	•	Tree logo files located in v2/assets/images/
	•	footer logo tree.png — used in footer brand column and Last Chance section header (60px)
	•	coin tree logo.png — used inside gold coin face (80px, replaces $ symbol)
	•	Nav subtext updated to "THE FUTURE OF FAMILY & FINANCE" (Funnel Display 11px, letter-spacing 2px, white 70% opacity)

Contact Information
	•	Phone: 469-966-9071
	•	Email: consult@fiscusmax.com
	•	Hours: Monday–Sunday, 9am–9pm
	•	Coverage: Available Nationwide / Serving Families Nationwide

Gradient System
Headings on LIGHT backgrounds (dark metallic):
background: linear-gradient(180deg, #000000, #064212, #000000, #070707);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block;
Headings on DARK GREEN backgrounds (gold metallic):
background: linear-gradient(180deg, #d6b661, #fbf7a0, #b5923b, #edac0c);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
display: inline-block;
Hero background:
background: radial-gradient(ellipse at 60% 40%, #0d3d1f 0%, #064212 40%, #020c05 100%);
With faint gold SVG grid overlay at 7% opacity via ::before (hidden on mobile).

Page Color Flow (final)
Cream #f8f4e5       → Body default, #coin (Tax Gap), #about, #book
Deep Green #114b1c  → #hero, #stats-bar
Navy #211057        → #painpoints, #services, #quote-banner, #testimonials, #credentials, #lastchance
Near Black #0a2910  → footer

Page Sections (in order)
	1	Sticky Navigation — logo, nav links, mobile hamburger; urgency banner below nav (navy, April 15 deadline, pulse clock)
	2	Hero — headline, subheadline, 2 CTAs, stats bar, animated cards
	3	Pain Points — 4 tall dark-green cards with navy bullet pills, CTA buttons; bg navy #211057
	4	Services — 4-tab interface (Tax Prep, Tax Resolution, Tax Planning, Business); bg navy #211057
	5	Quote Banner — gold gradient quote on navy; bg navy #211057
	6	Gold Coin / Tax Gap — spin on hover, pie chart, coin stat text; bg cream #f8f4e5
	7	About Us — empathy-first copy, team photo placeholder; bg cream #f8f4e5
	8	Careers — two job cards with modal quick view; apply via office@fiscusmax.com
	9	Credentials — 3 cards on navy, gold rule above each title, grad-gold headline; bg navy #211057
	10	Social Proof Bar — 4 count-up stats; bg deep green #114b1c
	11	Testimonials — 3 client quote cards + 5-star rating line; bg navy #211057
	12	Book a Consultation — two-column cream layout, left: copy/checks/risk pill, right: logo + gold CTA button; bg cream #f8f4e5
	13	FAQ — 7 accordion items; bg deep green #114b1c
	14	Blog / Resources — 3 article preview cards with quick view modals
	15	Last Chance Intake — navy bg, gold gradient headline, contact pill bar, CTA
	16	Footer — tree logo, links, contact info, copyright; bg near-black #0a2910

Updated Copy Notes
	•	Tax Resolution panel: empathy-first language ("hundreds of families…finally breathe again")
	•	About section: opens with "We've sat across from families who were embarrassed, scared…"
	•	FAQ expanded to 7 items (added: scam recovery, state taxes)
	•	Testimonials: 5-star rating line added below cards
	•	Book section: complete redesign — two-column cream layout, no iframe, gold CTA button

Key Interactions
	•	Hero cards — scroll-triggered spring bounce reveal (Intersection Observer), ongoing float animation, gold hover glow
	•	Gold coin — CSS drawn, spins on hover (rotateY), tree logo image on coin face, reveals stat text, triggers Canvas pie chart fade-in. Click on mobile.
	•	Pie chart — Canvas API only, no libraries. Animated slice draw-in. Hover tooltips.
	•	Services — 4-tab interface, vanilla JS aria-selected toggling
	•	All sections — fade-in-up on scroll via Intersection Observer, staggered 150ms
	•	Book section — left column slides in from left, right column from right (translateX, 0.6s ease-out)
	•	FAQ — vanilla JS accordion, one item open at a time, arrow rotates
	•	Job card modals — click "View Full Description" to open full-screen overlay; mailto:office@fiscusmax.com CTA
	•	Blog quick view modals — click "Read article" to open article preview modal; close on overlay click or Escape

Copy Tone
Caring expert — warm, professional, credible. Speaks directly to working families. Uses "you / your family" language. Zero jargon.

How to Continue a Session
When starting a new Claude Code session always say:
"Read CONTEXT.md and continue building the Fiscus Max v2 website at ~/Desktop/grantelyceking/fiscusmax/website/v2/index.html. Do not start over — continue from where the file currently is."
Then describe what you need to add or fix.
