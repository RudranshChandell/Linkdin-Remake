#!/bin/bash

echo "🚀 Setting up LinkedIn Remake Project"
echo "====================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd Server
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.example .env
    echo "⚠️  Please edit Server/.env with your database credentials"
fi

cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd client
npm install
cd ..

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Set up your PostgreSQL database"
echo "2. Edit Server/.env with your database credentials"
echo "3. Run the database setup: psql -U postgres -d linkedin_remake -f Server/setup-db.sql"
echo "4. Start the backend: cd Server && npm run dev"
echo "5. Start the frontend: cd client && npm run dev"
echo ""
echo "Demo accounts:"
echo "- Email: john@demo.com | Password: password"
echo "- Email: jane@demo.com | Password: password" 