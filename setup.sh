#!/bin/bash

echo "🚀 FriendFinder Quick Setup Script"
echo "=================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v14 or higher."
    exit 1
fi

echo "✅ Node.js $(node --version) detected"
echo ""

# Check if MongoDB is running
if ! command -v mongod &> /dev/null; then
    echo "⚠️  MongoDB not found. You'll need MongoDB to run this application."
    echo "   Options:"
    echo "   1. Install MongoDB locally"
    echo "   2. Use MongoDB Atlas (cloud)"
    echo "   3. Use Docker: docker-compose up -d mongodb"
    echo ""
fi

# Install dependencies
echo "📦 Installing dependencies..."
echo ""

echo "Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install backend dependencies"
    exit 1
fi
cd ..

echo ""
echo "Installing frontend dependencies..."
cd frontend
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install frontend dependencies"
    exit 1
fi
cd ..

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Create .env file if it doesn't exist
if [ ! -f backend/.env ]; then
    echo "📝 Creating .env file..."
    cp backend/.env.example backend/.env
    echo "✅ .env file created. Please update it with your configuration."
    echo ""
fi

echo "=================================="
echo "✅ Setup Complete!"
echo ""
echo "Next steps:"
echo "1. Update backend/.env with your MongoDB URI and other settings"
echo "2. Start MongoDB (if not already running)"
echo "3. Run 'npm run dev' from the root directory to start both servers"
echo ""
echo "Backend will run on: http://localhost:5000"
echo "Frontend will run on: http://localhost:3000"
echo ""
echo "For more information, see README.md"
echo "=================================="
