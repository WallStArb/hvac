# HVAC Dashboard

A modern, AI-powered HVAC management platform built with Next.js, Supabase, and cutting-edge web technologies.

## 🚀 Features

- **AI-Powered Chat Assistant** - Get instant help with HVAC-related questions and troubleshooting
- **User Authentication** - Secure login/signup with Supabase Auth
- **Interactive Dashboard** - Real-time analytics and monitoring
- **Settings Management** - Comprehensive user and system configuration
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

## 🛠 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features and concurrent rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library
- **Supabase** - PostgreSQL database with real-time subscriptions
- **OpenAI/OpenRouter** - AI chat functionality

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **Supabase account** and project
- **OpenAI API key** OR **OpenRouter API key** (for AI chat)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/WallStArb/hvac.git
cd hvac
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# AI Configuration (choose at least one)
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key

# Application Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | ✅ |
| `NEXT_PUBLIC_OPENAI_API_KEY` | OpenAI API key | ⚠️ |
| `NEXT_PUBLIC_OPENROUTER_API_KEY` | OpenRouter API key | ⚠️ |
| `NEXT_PUBLIC_SITE_URL` | Application URL | ✅ |

> **Note:** You need at least one AI API key (OpenAI or OpenRouter) for the chat functionality to work.

## 📱 Features Overview

### Dashboard
- Real-time HVAC system monitoring
- Interactive charts and analytics
- System alerts and notifications
- Equipment status tracking

### AI Chat Assistant
- **Multi-Provider AI Support** - Choose between OpenAI and OpenRouter
- **Multiple AI Models** - GPT, Claude, Gemini, Llama, and more
- Natural language HVAC troubleshooting
- Maintenance scheduling assistance
- Technical documentation search
- Smart recommendations

### User Management
- Secure authentication with Supabase
- Role-based access control
- User profile management
- Team collaboration features

## 🔄 Recent Updates

### Latest Package Updates (v3.0.0)
- ✅ **React 19** - Latest React features and concurrent rendering
- ✅ **Next.js 15** - Latest App Router features
- ✅ **TypeScript 5.8.3** - Enhanced type safety
- ✅ **OpenAI 5.8.3** - Latest AI capabilities
- ✅ **OpenRouter Integration** - Multi-provider AI model access
- ✅ **Supabase 2.30.4** - Latest database features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for the HVAC industry** 