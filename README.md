# HVAC Dashboard

A modern, AI-powered HVAC management platform built with Next.js, Supabase, and cutting-edge web technologies.

## 🚀 Features

### Core Functionality
- **AI-Powered Chat Assistant** - Get instant help with HVAC-related questions and troubleshooting
- **User Authentication** - Secure login/signup with Supabase Auth
- **Interactive Dashboard** - Real-time analytics and monitoring
- **Settings Management** - Comprehensive user and system configuration
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### Technical Features
- **Real-time Data Streaming** - Live updates for critical HVAC metrics
- **Stripe Integration** - Payment processing and subscription management
- **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- **Dark/Light Mode** - Complete theme customization
- **TypeScript Support** - Full type safety throughout the application

## 🛠 Tech Stack

### Frontend
- **Next.js 15.1.6** - React framework with App Router
- **React 19.0.0-rc.1** - Latest React features and concurrent rendering
- **TypeScript 5.8.3** - Type-safe development
- **Tailwind CSS 3.4.17** - Utility-first styling
- **shadcn/ui 0.9.5** - Modern component library
- **Framer Motion 12.23.0** - Smooth animations and transitions
- **Radix UI** - Accessible component primitives
- **Lucide React 0.525.0** - Beautiful icons

### Backend & Database
- **Supabase 2.30.4** - PostgreSQL database with real-time subscriptions
- **Supabase Auth** - Authentication and user management
- **Stripe 18.3.0** - Payment processing with latest API
- **OpenAI API 5.8.3** - AI chat functionality
- **OpenRouter API** - Multi-provider AI model access (GPT, Claude, Gemini, etc.)

### Charts & Data Visualization
- **ApexCharts 4.7.0** - Interactive charts and analytics
- **Recharts 3.1.0** - Composable charting library
- **React ApexCharts 1.7.0** - React wrapper for ApexCharts

### Development Tools
- **ESLint 9.3.0** - Code linting and formatting
- **Prettier 3.2.5** - Code formatting
- **TypeScript 5.8.3** - Type checking and IntelliSense

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** and project
- **Stripe account** (for payment features)
- **OpenAI API key** (for AI chat) OR **OpenRouter API key** (for multi-provider AI)

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

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# AI Configuration (Choose one or both)
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_OPENROUTER_API_KEY=your_openrouter_api_key

# Application Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Database Setup
```bash
# Start Supabase locally (optional)
npm run supabase:start

# Or link to your remote Supabase project
npm run supabase:link

# Generate TypeScript types
npm run supabase:generate-types
```

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
hvac/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard-specific components
│   ├── ui/               # shadcn/ui components
│   └── charts/           # Chart components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── utils/                # Helper utilities
│   ├── auth-helpers/     # Authentication utilities
│   ├── supabase/         # Supabase client setup
│   ├── stripe/           # Stripe integration
│   └── streams/          # Real-time data streaming
├── styles/               # Global styles
└── public/               # Static assets
```

## 🔧 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Database Management
- `npm run supabase:start` - Start local Supabase
- `npm run supabase:stop` - Stop local Supabase
- `npm run supabase:reset` - Reset database
- `npm run supabase:generate-types` - Generate TypeScript types
- `npm run supabase:link` - Link to remote project
- `npm run supabase:push` - Push migrations
- `npm run supabase:pull` - Pull latest schema

### Stripe
- `npm run stripe:listen` - Listen for webhooks
- `npm run stripe:fixtures` - Load test data
- `npm run stripe:login` - Login to Stripe CLI

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
This Next.js application can be deployed to any platform that supports Node.js:
- **Netlify**
- **Railway**
- **DigitalOcean App Platform**
- **AWS Amplify**

## 🔐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | ✅ |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | ✅ |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | ✅ |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key | ✅ |
| `STRIPE_SECRET_KEY` | Stripe secret key | ✅ |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | ✅ |
| `OPENAI_API_KEY` | OpenAI API key | ⚠️ |
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

### Payment Integration
- Subscription management
- Service billing
- Payment history
- Invoice generation

## 🔄 Recent Updates

### Latest Package Updates (v3.0.0)
- ✅ **React 19** - Latest React features and concurrent rendering
- ✅ **Next.js 15.1.6** - Latest App Router features
- ✅ **TypeScript 5.8.3** - Enhanced type safety
- ✅ **Stripe 18.3.0** - Latest payment processing features
- ✅ **OpenAI 5.8.3** - Latest AI capabilities
- ✅ **OpenRouter Integration** - Multi-provider AI model access
- ✅ **Supabase 2.30.4** - Latest database features
- ✅ **ApexCharts 4.7.0** - Enhanced charting capabilities
- ✅ **Framer Motion 12.23.0** - Improved animations
- ✅ **All UI components** - Updated to latest versions

### Compatibility Fixes
- ✅ Fixed TypeScript compilation issues
- ✅ Updated ReactMarkdown component usage
- ✅ Fixed JSX.Element type definitions
- ✅ Updated Stripe API version compatibility
- ✅ Enhanced Supabase SSR integration
- ✅ Added OpenRouter multi-provider AI support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Contact the development team
- Check the documentation in `/docs`

## 🎯 Roadmap

- [ ] Mobile app development
- [ ] IoT device integration
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] API documentation
- [ ] Performance optimizations

---

**Built with ❤️ for the HVAC industry** 

## OpenRouter Integration

The dashboard now supports OpenRouter as an alternative AI provider, giving you access to multiple AI models from different providers:

### Available Models via OpenRouter:
- **GPT-3.5 Turbo** (OpenAI)
- **Claude 3.5 Sonnet** (Anthropic)
- **Gemini Pro** (Google)
- **DeepSeek R1T2 Chimera** (TNGTech) - Free model with excellent performance

### Setup:
1. Get your OpenRouter API key from [OpenRouter](https://openrouter.ai/)
2. Add to your `.env.local`:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```
3. Select "OpenRouter" as your provider in the AI chat interface
4. Choose from the available models including the free DeepSeek R1T2 Chimera model 