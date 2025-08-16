#!/bin/bash

echo "🚀 RUM AI Website Deployment Script"
echo "=================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized. Please run 'git init' first."
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if remote origin exists
if git remote get-url origin > /dev/null 2>&1; then
    echo "✅ Remote origin already configured"
    ORIGIN_URL=$(git remote get-url origin)
    echo "🔗 Remote URL: $ORIGIN_URL"
else
    echo "❌ No remote origin configured"
    echo ""
    echo "📝 Please run the following commands:"
    echo "1. Create a new repository on GitHub named 'rum-ai-site'"
    echo "2. Run: git remote add origin https://github.com/YOUR_USERNAME/rum-ai-site.git"
    echo "3. Replace YOUR_USERNAME with your actual GitHub username"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Extract username and repo name from origin URL
if [[ $ORIGIN_URL =~ github\.com/([^/]+)/([^/]+)\.git ]]; then
    USERNAME=${BASH_REMATCH[1]}
    REPO_NAME=${BASH_REMATCH[2]}
    echo "👤 GitHub Username: $USERNAME"
    echo "📦 Repository Name: $REPO_NAME"
else
    echo "❌ Could not parse GitHub URL. Please check your remote origin."
    exit 1
fi

# Update next.config.ts with correct basePath
echo ""
echo "🔧 Updating Next.js configuration..."
sed -i.bak "s|basePath: '/rum-ai-site'|basePath: '/$REPO_NAME'|g" next.config.ts
sed -i.bak "s|assetPrefix: '/rum-ai-site'|assetPrefix: '/$REPO_NAME'|g" next.config.ts

# Remove backup files
rm -f next.config.ts.bak

echo "✅ Configuration updated for repository: $REPO_NAME"

# Build the project
echo ""
echo "🏗️  Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please fix any errors and try again."
    exit 1
fi

# Commit configuration changes
echo ""
echo "💾 Committing configuration changes..."
git add next.config.ts
git commit -m "Update basePath for GitHub Pages deployment"

# Push to GitHub
echo ""
echo "🚀 Pushing to GitHub..."
git push -u origin $CURRENT_BRANCH

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 Deployment Complete!"
    echo "======================"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://$USERNAME.github.io/$REPO_NAME"
    echo ""
    echo "📋 Next steps:"
    echo "1. Go to your GitHub repository: https://github.com/$USERNAME/$REPO_NAME"
    echo "2. Click Settings → Pages"
    echo "3. Under Source, select 'GitHub Actions'"
    echo "4. Wait for the GitHub Actions workflow to complete (5-10 minutes)"
    echo "5. Your site will be live at the URL above"
    echo ""
    echo "🔄 Future updates:"
    echo "   Just push to the main branch and your site will automatically update!"
    echo ""
else
    echo "❌ Push failed. Please check your GitHub credentials and try again."
    exit 1
fi
