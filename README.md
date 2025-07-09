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