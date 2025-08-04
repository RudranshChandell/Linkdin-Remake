-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert demo users
INSERT INTO users (name, email, password, bio) VALUES
('John Doe', 'john@demo.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Software Developer passionate about creating meaningful applications.'),
('Jane Smith', 'jane@demo.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'UX Designer focused on user-centered design principles.')
ON CONFLICT (email) DO NOTHING;

-- Insert demo posts
INSERT INTO posts (user_id, content) VALUES
(1, 'Just finished building this amazing LinkedIn-like platform! The tech stack is Next.js + Express + PostgreSQL. What do you think?'),
(2, 'Excited to share my latest design project! User experience is everything in modern applications.'),
(1, 'Learning new technologies is always exciting. Today I explored some advanced React patterns.'),
(2, 'Collaboration and community are key to success in tech. Happy to be part of this amazing community!')
ON CONFLICT DO NOTHING; 