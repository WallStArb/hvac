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
- **Next.js 15.1** - React framework with App Router
- **React 19** - Latest React features and concurrent rendering
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library
- **Framer Motion** - Smooth animations and transitions

### Backend & Database
- **Supabase** - PostgreSQL database with real-time subscriptions
- **Supabase Auth** - Authentication and user management
- **Stripe** - Payment processing
- **OpenAI API** - AI chat functionality

### Development Tools
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Supabase account** and project
- **Stripe account** (for payment features)
- **OpenAI API key** (for AI chat)

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

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

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
│   └── stripe/           # Stripe integration
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

### Stripe
- `npm run stripe:listen` - Listen for webhooks
- `npm run stripe:fixtures` - Load test data

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
| `OPENAI_API_KEY` | OpenAI API key | ✅ |
| `NEXT_PUBLIC_SITE_URL` | Application URL | ✅ |

## 📱 Features Overview

### Dashboard
- Real-time HVAC system monitoring
- Interactive charts and analytics
- System alerts and notifications
- Equipment status tracking

### AI Chat Assistant
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