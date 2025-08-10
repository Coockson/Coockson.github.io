// import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

/* COMMENTED OUT - BLOG FUNCTIONALITY FOR FUTURE USE

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

// This is where you can easily add new blog posts
const BLOG_POSTS: BlogPost[] = [
  {
    id: "welcome-to-my-blog",
    title: "Welcome to My Blog",
    excerpt: "Starting my journey of sharing insights about data engineering, cloud architecture, and building scalable platforms.",
    content: `
# Welcome to My Blog

Hi! I'm Khaan, and I'm excited to start sharing my thoughts and experiences in the world of data engineering and cloud architecture.

## What You'll Find Here

In this blog, I'll be writing about:

- **Data Platform Engineering**: Lessons learned from building self-service data platforms at LEGO
- **Cloud-Native Solutions**: Best practices for AWS and Azure deployments
- **Event-Driven Architecture**: How to design scalable microservices
- **Infrastructure as Code**: Terraform, Kubernetes, and automation strategies
- **Team Building**: Growing engineering teams and fostering collaboration

## My Background

Currently, I'm a Senior Data Platform Engineer at LEGO, where I work on Databricks-based data platforms serving hundreds of users. Previously, I helped establish LEGO's Copenhagen digital office and built inventory management systems handling millions of events globally.

I'm passionate about:
- Building tools that empower other engineers
- Creating self-service platforms that scale
- Event-driven architectures and real-time data processing
- Infrastructure automation and DevOps practices

## Let's Connect

I'd love to hear from you! Whether you have questions about data engineering, want to discuss cloud architecture, or just want to share your own experiences, don't hesitate to reach out.

Thanks for reading, and I look forward to sharing this journey with you!

---

*Happy coding!*  
Khaan
    `,
    date: "2024-12-20",
    author: "Khaan Claasz Coockson",
    tags: ["welcome", "data-engineering", "cloud"]
  }
  // Add new blog posts here following the same structure
  // Example:
  // {
  //   id: "building-data-platforms",
  //   title: "Building Self-Service Data Platforms with Databricks",
  //   excerpt: "Key lessons learned from implementing Databricks-based data platforms at scale.",
  //   content: "Your markdown content here...",
  //   date: "2024-12-21",
  //   author: "Khaan Claasz Coockson",
  //   tags: ["databricks", "data-platform", "aws"]
  // }
];

*/

export default function Blog() {
  return (
    <div className="min-h-screen bg-tech-dark text-tech-text">
      <Navigation />
      
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4" data-testid="heading-blog">
              <span className="text-tech-cyan">Tech</span> Blog
            </h1>
            <p className="text-xl text-tech-text-muted max-w-2xl mx-auto mb-12" data-testid="text-blog-description">
              Thoughts and insights on data engineering, cloud architecture, and building scalable platforms.
            </p>
            
            {/* Under Construction Message */}
            <div className="bg-tech-gray border border-tech-border rounded-lg p-12 max-w-2xl mx-auto">
              <div className="text-center">
                <i className="fas fa-tools text-tech-cyan text-6xl mb-6"></i>
                <h2 className="text-2xl font-bold text-tech-cyan mb-4">
                  Under Construction
                </h2>
                <p className="text-tech-text-muted text-lg mb-6 leading-relaxed">
                  The blog is currently being prepared. Check back soon for insights on data engineering, 
                  cloud architecture, and platform development.
                </p>
                <div className="flex items-center justify-center text-tech-text-muted">
                  <i className="fas fa-code text-tech-green mr-2"></i>
                  <span>Coming Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

/* 

TO RESTORE BLOG FUNCTIONALITY LATER:

1. Uncomment the imports at the top:
   import { useState, useEffect } from "react";

2. Uncomment the BlogPost interface and BLOG_POSTS array (lines 4-76)

3. Replace the simple function above with the full blog functionality:
   - Add state: const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
   - Replace the current return statement with the full blog list/detail view
   - The full functionality includes:
     * Blog post listing with cards
     * Click to view individual posts  
     * Back navigation
     * Tag display
     * Date formatting
     * Markdown-like content rendering

4. To add new blog posts, just add objects to the BLOG_POSTS array following this structure:
   {
     id: "unique-post-id",
     title: "Your Post Title", 
     excerpt: "Brief description of the post",
     content: "Full markdown-style content with # headers, ## subheaders, etc.",
     date: "YYYY-MM-DD",
     author: "Khaan Claasz Coockson",
     tags: ["tag1", "tag2", "tag3"]
   }

The blog system includes:
- GitHub Pages compatible (no server needed)
- Client-side routing with SPA fallback
- Responsive design with dark tech theme
- Tag filtering and categorization
- Markdown-style content with custom styling
- SEO-friendly meta tags and structure

*/