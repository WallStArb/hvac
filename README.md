# HVAC Dashboard

A modern, AI-powered HVAC management platform for real-time monitoring, analytics, and smart assistance.

---

## 🚀 Features

- **AI Chat Assistant:** Get instant help with HVAC questions and troubleshooting
- **User Authentication:** Secure login/signup with Supabase Auth
- **Interactive Dashboard:** Real-time analytics and system monitoring
- **Settings Management:** User and system configuration
- **Responsive Design:** Works on desktop, tablet, and mobile

## 🛠 Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Supabase** (PostgreSQL, Auth, Realtime)
- **OpenAI / OpenRouter** (AI chat)

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/WallStArb/hvac.git
cd hvac
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run the App
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Environment Variables

| Variable                        | Description                  | Required |
|----------------------------------|------------------------------|----------|
| NEXT_PUBLIC_SUPABASE_URL         | Supabase project URL         | ✅       |
| NEXT_PUBLIC_SUPABASE_ANON_KEY    | Supabase anon key            | ✅       |
| SUPABASE_SERVICE_ROLE_KEY        | Supabase service role key    | ✅       |
| NEXT_PUBLIC_OPENAI_API_KEY       | OpenAI API key               | ⚠️       |
| NEXT_PUBLIC_OPENROUTER_API_KEY   | OpenRouter API key           | ⚠️       |
| NEXT_PUBLIC_SITE_URL             | Application URL              | ✅       |

> **Note:** At least one AI API key (OpenAI or OpenRouter) is required for chat features.

## 📊 Main Modules

- **Dashboard:** Real-time HVAC monitoring, analytics, and alerts
- **AI Chat:** Multi-provider support (OpenAI, OpenRouter), troubleshooting, recommendations
- **User Management:** Auth, roles, profiles
- **Settings:** User/system preferences

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

---

**Built with ❤️ for the HVAC industry**

---

## 🧰 Offered HVAC Services

### Basic HVAC Maintenance (Annual)

- **Comprehensive Inspection:**
  - Checking all major components, including the thermostat, coils, refrigerant levels, electrical connections, and ductwork, ensuring everything is in good working order.
- **Air Filter Replacement:**
  - Changing or cleaning air filters to maintain proper airflow and prevent dust and debris buildup.
- **Minor Repairs:**
  - Addressing minor issues like tightening loose connections or clearing condensate lines.

### Additional Services (Optional)

- **Duct Cleaning:**
  - Cleaning air ducts to remove dust, allergens, and debris, which can improve air quality and system efficiency.
- **Refrigerant Recharge:**
  - Ensuring proper refrigerant levels for optimal cooling performance, with costs ranging from $200 to $450 for a recharge (source: This Old House).
- **System Energy Audit:**
  - Assessing the energy efficiency of the HVAC system and identifying areas for improvement, typically costing $100 to $300.

### Cost Factors

- **System Type:**
  - Different systems (e.g., central AC, furnace, heat pump, mini-split) may have varying maintenance requirements and associated costs (source: Angie's List).
- **Maintenance Plan:**
  - Some HVAC companies offer comprehensive maintenance plans that include regular service visits, priority scheduling, and discounts on repairs (source: FieldEdge).
- **Location:**
  - Service costs can vary based on geographic location and the local market rates (source: Angie's List).

### Benefits of Preventative Maintenance

- **Extended Lifespan:**
  - Regular maintenance can help extend the lifespan of your HVAC equipment, delaying the need for costly replacements (source: Waconia Comfort).
- **Improved Efficiency:**
  - Proper maintenance ensures the system operates at peak efficiency, reducing energy consumption and lowering utility bills (source: Cielo WiGle).
- **Reduced Repair Costs:**
  - By identifying and addressing minor issues early on, you can prevent them from escalating into major, expensive repairs.
- **Enhanced Comfort:**
  - Regular maintenance ensures consistent and reliable heating and cooling, improving overall comfort in your home or business. 