# Portfolio Website — Part 3 Changelog & Documentation

## Overview
This section outlines the enhancements made for **Part 3 — Enhancing Functionality and SEO** for the T&T Paparazzi website.

---

## Summary of Changes

### 1. Form Validation & Processing (`contact.html` & `enquiries.html`)
- **Contact Form Validation**: Implemented client-side JavaScript (`js/script.js`) to validate required fields (Name, Phone Number, Email, Message) using regular expressions. Added real-time inline error handling to guide user inputs.
- **Enquiry Cost Estimator**: Replaced the previous external iframe embed with a native HTML/JS cost estimation tool, providing users with instant feedback regarding hourly rate calculations.

### 2. Dynamic Functionality & Interactive Elements
- **Service Search & Filter**: Built a real-time JavaScript search feature on `services.html` allowing users to quickly search and filter services based on keywords.
- **Lightbox Gallery Feature**: Added an interactive lightbox pop-up viewer for portfolio images.

### 3. On-Page & Technical Search Engine Optimization (SEO)
- **Meta Descriptions & Dynamic Titles**: Updated all page `<head>` blocks with keyword-rich meta descriptions tailored to South African photography queries.
- **Image Accessibility**: Standardized descriptive `alt` tags on all `<img>` tags across all pages to improve SEO ranking and screen reader accessibility.
- **Robots & Sitemap Technical Integration**: Added `robots.txt` and `sitemap.xml` to the project root directory to instruct search engine crawlers.

---

## Deployment Details
- **Hosting Platform**: Netlify / GitHub Pages
- **Live URL**: `https://your-site-name.netlify.app/`
