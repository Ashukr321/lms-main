type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Online Learning in 2024",
    excerpt: "Discover how AI and virtual reality are transforming the educational landscape...",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop&q=60",
    date: "Feb 15, 2024",
    author: "Dr. Sarah Johnson",
    category: "EdTech"
  },
  {
    id: 2, 
    title: "10 Tips for Effective Remote Learning",
    excerpt: "Master the art of studying from home with these proven strategies...",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
    date: "Feb 12, 2024",
    author: "James Wilson",
    category: "Study Tips"
  },
  {
    id: 3,
    title: "Understanding Learning Styles",
    excerpt: "Learn how to identify and leverage your unique learning style...",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=60",
    date: "Feb 10, 2024",
    author: "Emma Thompson",
    category: "Learning"
  },
  {
    id: 4,
    title: "The Rise of Microlearning",
    excerpt: "Why bite-sized learning is becoming increasingly popular...",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&auto=format&fit=crop&q=60",
    date: "Feb 8, 2024",
    author: "Michael Brown",
    category: "Trends"
  },
  {
    id: 5,
    title: "Building a Learning Community",
    excerpt: "The importance of peer learning and knowledge sharing...",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    date: "Feb 5, 2024",
    author: "Lisa Chen",
    category: "Community"
  },
  {
    id: 6,
    title: "Digital Tools for Students",
    excerpt: "Essential software and apps for modern learners...",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=60",
    date: "Feb 3, 2024",
    author: "Tom Davis",
    category: "Resources"
  }
]

export default blogPosts;