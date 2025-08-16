# RUM AI - AI-Powered WhatsApp Business Solutions

Transform your business with intelligent AI chatbots that drive sales, provide 24/7 support, and revolutionize WhatsApp marketing to skyrocket your growth.

## 🚀 Features

- **AI Sales Chatbot**: Intelligent conversations that convert visitors into customers automatically
- **WhatsApp Marketing**: Reach customers where they are with personalized WhatsApp campaigns
- **24/7 AI Support**: Never miss a customer inquiry with round-the-clock intelligent support
- **Analytics Dashboard**: Track performance and optimize your customer engagement

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📱 Live Demo

Visit: [https://yourusername.github.io/rum-ai-site](https://yourusername.github.io/rum-ai-site)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/rum-ai-site.git
cd rum-ai-site

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# The static files will be generated in the `out` directory
```

## 🌐 Deploy to GitHub Pages

### 1. Create GitHub Repository
- Go to [GitHub](https://github.com) and create a new repository
- Name it `rum-ai-site` (or your preferred name)
- Make it public (required for GitHub Pages)

### 2. Update Configuration
Update `next.config.ts` with your repository name:
```typescript
basePath: '/your-repo-name', // Replace with your actual repo name
assetPrefix: '/your-repo-name',
```

### 3. Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: RUM AI website"

# Add remote origin (replace with your repo URL)
git remote add origin https://github.com/yourusername/rum-ai-site.git

# Push to main branch
git push -u origin main
```

### 4. Enable GitHub Pages
- Go to your repository on GitHub
- Click **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- The GitHub Actions workflow will automatically build and deploy your site

### 5. Access Your Site
Your site will be available at: `https://yourusername.github.io/rum-ai-site`

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Customization
- **Logo**: Replace `/public/Rum.AI.png` with your logo
- **Colors**: Update Tailwind CSS variables in `tailwind.config.ts`
- **Content**: Modify components in `src/components/`

## 📁 Project Structure

```
rum-ai-site/
├── src/
│   ├── app/           # Next.js app router
│   ├── components/    # React components
│   └── styles/        # Global styles
├── public/            # Static assets
├── .github/           # GitHub Actions workflows
└── README.md          # This file
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Website**: [https://yourusername.github.io/rum-ai-site](https://yourusername.github.io/rum-ai-site)
- **Email**: contact@rumai.com
- **GitHub**: [@yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS
