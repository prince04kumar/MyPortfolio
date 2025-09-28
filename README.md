# Prince Kumar's Portfolio

A modern, responsive 3D portfolio website built with React.js, Three.js, and Framer Motion. This portfolio showcases my projects, skills, experience, and provides an interactive way to learn more about my work as a Full Stack Developer.

## 🌟 Features

- **3D Interactive Elements**: Three.js powered 3D models and animations
- **Smooth Animations**: Framer Motion for fluid page transitions and scroll animations
- **Responsive Design**: Optimized for all device sizes
- **GitHub Integration**: Real-time GitHub statistics and activity
- **Contact Form**: Functional contact form with EmailJS integration
- **Modern UI/UX**: Clean, professional design with gradient effects
- **Fast Performance**: Optimized build with Vite

## 🛠️ Built With

- **React.js** - Frontend framework
- **Three.js** - 3D graphics library
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and development server
- **EmailJS** - Email service for contact form
- **React Router** - Client-side routing

## 🚀 Projects Featured

### 1. Health Record App
- **Tech Stack**: React, Node.js, MongoDB, Express
- **Description**: Comprehensive healthcare management system with patient records, appointment scheduling, and hospital locator
- **Features**: MERN stack, Real-time data, Interactive maps, Secure authentication

### 2. Restaurant Management System  
- **Tech Stack**: React, SQLite, Node.js, Express
- **Description**: Complete digital menu and restaurant management with admin/employee dashboards
- **Features**: Order management, Inventory tracking, Employee attendance, KOT generation

### 3. WebRTC Video Call Application
- **Tech Stack**: WebRTC, Socket.io, JavaScript, HTML/CSS
- **Description**: Real-time peer-to-peer video calling with screen sharing capabilities
- **Features**: P2P communication, Screen sharing, Audio/video controls, Room management

## 📊 GitHub Statistics

The portfolio dynamically fetches and displays:
- Public repositories count
- Followers and following
- Contribution streaks
- Most used programming languages
- GitHub activity stats

## 🎯 Skills & Technologies

**Frontend Development**
- React.js, JavaScript, TypeScript
- HTML5, CSS3, Tailwind CSS
- Three.js, Framer Motion
- Responsive Web Design

**Backend Development**  
- Node.js, Express.js
- MongoDB, SQLite
- REST APIs, WebRTC
- Socket.io, Real-time communication

**Tools & Technologies**
- Git, GitHub
- Vite, Webpack
- VS Code
- Postman, Docker

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/prince04kumar/MyPortfolio.git
cd MyPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── canvas/         # Three.js 3D components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact form
│   ├── Experience.jsx  # Work experience
│   ├── Hero.jsx        # Landing section
│   ├── Navbar.jsx      # Navigation
│   ├── Works.jsx       # Projects showcase
│   ├── Tech.jsx        # Technologies
│   ├── GitHubStats.jsx # GitHub integration
│   └── Footer.jsx      # Footer component
├── constants/          # Static data and configuration
├── hoc/               # Higher-order components
├── utils/             # Utility functions
├── assets/            # Images and static files
└── styles.js          # Tailwind CSS styles
```

## 🎨 Customization

### Adding New Projects
Edit `src/constants/index.js` and add your project to the `projects` array.

### Updating Personal Information
- Update contact details in `src/components/Contact.jsx`
- Modify GitHub username in `src/components/GitHubStats.jsx`
- Edit experience in `src/constants/index.js`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Prince Kumar** - NIT Raipur Student & Full Stack Developer
