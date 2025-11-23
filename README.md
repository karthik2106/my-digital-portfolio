# Karthik Adharsh - Portfolio

A modern, animated portfolio website showcasing my projects, skills, and experience as a Computer Engineering student at NTU.

## Technologies Used

This portfolio is built with modern web technologies and libraries:

### Core Stack
- **React** - UI library for building interactive components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for responsive design

### UI Components & Animations
- **Framer Motion** - Production-ready animation library for smooth, professional animations
  - Scroll-triggered animations
  - Text scramble effects
  - Typewriter animations
  - Smooth transitions and transforms
- **shadcn/ui** - High-quality, accessible UI components built with Radix UI
- **Lucide React** - Beautiful icon library

### Key Features
- **Text Scramble Effect** - Custom animation for the hero section name reveal
- **Typewriter Effect** - Animated section headings that type out on scroll
- **Scroll Animations** - Sections animate into view as you scroll
- **Hover Effects** - Interactive hover states with gradient glows and transforms
- **Responsive Design** - Fully responsive across all device sizes
- **Dark Mode Support** - Built-in theme support

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```sh
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd my-digital-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```sh
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # Reusable UI components (text-scramble, typewriter, etc.)
│   ├── Hero.tsx      # Landing section
│   ├── Resume.tsx    # Resume section
│   ├── Experience.tsx # Work experience
│   ├── Projects.tsx  # Project showcase
│   ├── Skills.tsx    # Technical skills
│   └── Contact.tsx   # Contact section
├── assets/           # Images and static assets
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── pages/            # Page components
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace images in the `src/assets` folder
3. Modify the projects array in `Projects.tsx`
4. Update skills in `Skills.tsx`
5. Change color scheme in `tailwind.config.ts`

## License

This project is open source and available for personal use.

## Contact

Karthik Adharsh - [karthikadharsh.work@gmail.com](mailto:karthikadharsh.work@gmail.com)

GitHub: [github.com/karthik2106](https://github.com/karthik2106)

LinkedIn: [linkedin.com/in/karthik-adharsh-selvakumar-85ba5b230](https://www.linkedin.com/in/karthik-adharsh-selvakumar-85ba5b230)
