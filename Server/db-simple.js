// Simple in-memory database for development
// This allows the app to work without PostgreSQL setup

class SimpleDB {
  constructor() {
    this.users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@demo.com',
        password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password"
        bio: 'Software Developer passionate about creating meaningful applications.',
        created_at: new Date()
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@demo.com',
        password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password"
        bio: 'UX Designer focused on user-centered design principles.',
        created_at: new Date()
      }
    ];
    
    this.posts = [
      {
        id: 1,
        user_id: 1,
        content: 'Just finished building this amazing LinkedIn-like platform! The tech stack is Next.js + Express + PostgreSQL. What do you think?',
        created_at: new Date()
      },
      {
        id: 2,
        user_id: 2,
        content: 'Excited to share my latest design project! User experience is everything in modern applications.',
        created_at: new Date()
      },
      {
        id: 3,
        user_id: 1,
        content: 'Learning new technologies is always exciting. Today I explored some advanced React patterns.',
        created_at: new Date()
      },
      {
        id: 4,
        user_id: 2,
        content: 'Collaboration and community are key to success in tech. Happy to be part of this amazing community!',
        created_at: new Date()
      }
    ];
  }

  // User methods
  async findUserByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  async findUserById(id) {
    return this.users.find(user => user.id === parseInt(id));
  }

  async createUser(userData) {
    const newUser = {
      id: this.users.length + 1,
      ...userData,
      created_at: new Date()
    };
    this.users.push(newUser);
    return newUser;
  }

  // Post methods
  async getAllPosts() {
    return this.posts.map(post => {
      const user = this.users.find(u => u.id === post.user_id);
      return {
        ...post,
        author_name: user ? user.name : 'Unknown User'
      };
    }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  async createPost(postData) {
    const newPost = {
      id: this.posts.length + 1,
      ...postData,
      created_at: new Date()
    };
    this.posts.push(newPost);
    return newPost;
  }

  async getPostsByUserId(userId) {
    return this.posts.filter(post => post.user_id === parseInt(userId));
  }
}

// Create a singleton instance
const db = new SimpleDB();

module.exports = db; 