# The Roasted Bean - Cafe Connect

A modern, full-stack web application for The Roasted Bean cafe, featuring a premium design, interactive menu, and robust backend.

## 🚀 Features

- **Premium UI/UX**: Cozy cafe aesthetic with "Nano Banana" color scheme (Dark Brown, Cream, Warm Tan)
- **Interactive Menu**: Carousel-based menu navigation for Coffee, Tea, and Bakery items
- **Animations**: Smooth scroll reveal and element animations using Framer Motion
- **Responsive Design**: Fully responsive layout optimized for mobile and desktop
- **Backend Integration**: Express server with PostgreSQL database (Drizzle ORM)

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, TailwindCSS, Framer Motion, shadcn/ui
- **Backend**: Express.js, Passport.js authentication
- **Database**: PostgreSQL with Drizzle ORM
- **Tools**: Biome (linting), PostCSS

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MizanShaikh19/CafeConnect.git
   cd CafeConnect
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Copy the example environment file and configure your database credentials:
   ```bash
   cp .env.example .env
   ```
   Update `.env` with your PostgreSQL connection string:
   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/your_database_name
   ```

4. **Database Migration**
   Push the schema to your database:
   ```bash
   npm run db:push
   ```

5. **Run Development Server**
   Start the application in development mode:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`.

## 📁 Project Structure

```
├── client/             # Frontend source code
│   ├── src/
│   │   ├── components/ # React components (UI, Sections, Layout)
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utilities (QueryClient, utils)
│   │   └── pages/      # Route pages (Home, NotFound)
│   └── index.html      # Entry point
├── server/             # Backend source code
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Database storage interface
├── shared/             # Shared code (Schema, Types)
└── drizzle.config.ts   # Database configuration
```

## 📜 License

MIT License