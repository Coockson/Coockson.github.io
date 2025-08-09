import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

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

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-tech-dark text-tech-text">
      <Navigation />
      
      <div className="pt-20">
        {!selectedPost ? (
          // Blog List View
          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4" data-testid="heading-blog">
                <span className="text-tech-cyan">Tech</span> Blog
              </h1>
              <p className="text-xl text-tech-text-muted max-w-2xl mx-auto" data-testid="text-blog-description">
                Thoughts and insights on data engineering, cloud architecture, and building scalable platforms.
              </p>
            </div>

            <div className="space-y-8">
              {BLOG_POSTS.map((post) => (
                <article 
                  key={post.id}
                  className="bg-tech-gray border border-tech-border rounded-lg p-8 hover:border-tech-cyan transition-colors cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                  data-testid={`blog-post-${post.id}`}
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-tech-cyan mb-2 hover:text-tech-green transition-colors" data-testid={`text-post-title-${post.id}`}>
                        {post.title}
                      </h2>
                      <p className="text-tech-text-muted mb-4" data-testid={`text-post-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 rounded text-xs bg-tech-cyan/10 text-tech-cyan"
                        data-testid={`tag-${post.id}-${index}`}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center text-tech-text-muted text-sm">
                    <span data-testid={`text-post-author-${post.id}`}>
                      By {post.author}
                    </span>
                    <span data-testid={`text-post-date-${post.id}`}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {BLOG_POSTS.length === 0 && (
              <div className="text-center py-16">
                <p className="text-tech-text-muted text-lg" data-testid="text-no-posts">
                  No blog posts yet. Check back soon for updates!
                </p>
              </div>
            )}
          </div>
        ) : (
          // Single Post View
          <div className="max-w-4xl mx-auto px-6 py-12">
            <button 
              onClick={() => setSelectedPost(null)}
              className="mb-8 text-tech-cyan hover:text-tech-green transition-colors flex items-center"
              data-testid="button-back-to-blog"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </button>

            <article className="bg-tech-gray border border-tech-border rounded-lg p-8">
              <header className="mb-8 border-b border-tech-border pb-8">
                <h1 className="text-4xl font-bold text-tech-cyan mb-4" data-testid="text-single-post-title">
                  {selectedPost.title}
                </h1>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedPost.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 rounded text-xs bg-tech-cyan/10 text-tech-cyan"
                      data-testid={`single-post-tag-${index}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center text-tech-text-muted">
                  <span data-testid="text-single-post-author">
                    By {selectedPost.author}
                  </span>
                  <span data-testid="text-single-post-date">
                    {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
              </header>

              <div 
                className="prose prose-invert prose-cyan max-w-none"
                data-testid="content-single-post"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-tech-cyan mb-6 mt-8">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-tech-green mb-4 mt-6">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold text-tech-text mb-3 mt-4">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="text-tech-text-muted mb-2">${line.slice(2)}</li>`;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="text-tech-text mb-4"><strong class="text-tech-cyan">${line.slice(2, -2)}</strong></p>`;
                      }
                      if (line.startsWith('*') && line.endsWith('*')) {
                        return `<p class="text-tech-text-muted italic mb-4">${line.slice(1, -1)}</p>`;
                      }
                      if (line.trim() === '---') {
                        return `<hr class="border-tech-border my-8">`;
                      }
                      if (line.trim()) {
                        return `<p class="text-tech-text-muted mb-4 leading-relaxed">${line}</p>`;
                      }
                      return '<br>';
                    })
                    .join('')
                }}
              />
            </article>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}