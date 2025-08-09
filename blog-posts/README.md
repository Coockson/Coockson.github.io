# Blog Posts

This directory contains information about how to add new blog posts to your portfolio website.

## How to Add a New Blog Post

1. Open the file `client/src/pages/blog.tsx`
2. Find the `BLOG_POSTS` array (around line 13)
3. Add a new blog post object following this structure:

```javascript
{
  id: "unique-blog-post-id",
  title: "Your Blog Post Title",
  excerpt: "A short description of your post that will appear in the blog list.",
  content: `
# Your Blog Post Title

Your markdown content goes here. You can use:

## Headers
### Subheaders

- Bullet points
- More bullet points

**Bold text** for emphasis
*Italic text* for style

---

Horizontal lines for sections

Regular paragraphs work great too.
  `,
  date: "2024-12-21", // Use YYYY-MM-DD format
  author: "Khaan Claasz Coockson",
  tags: ["tag1", "tag2", "tag3"] // Add relevant tags
}
```

## Example Blog Post Entry

Here's a complete example you can copy and modify:

```javascript
{
  id: "building-data-platforms",
  title: "Building Self-Service Data Platforms with Databricks",
  excerpt: "Key lessons learned from implementing Databricks-based data platforms at scale, including infrastructure setup, user onboarding, and governance strategies.",
  content: `
# Building Self-Service Data Platforms with Databricks

At LEGO, I've been working on building self-service data platforms that serve hundreds of users. Here are some key insights from this journey.

## The Challenge

Modern organizations need to democratize data access while maintaining governance and performance. This requires:

- **Scalable Infrastructure**: Supporting hundreds of concurrent users
- **Self-Service Capabilities**: Enabling teams to work independently
- **Governance**: Maintaining data quality and security
- **Cost Management**: Optimizing resource usage

## Our Approach

### Infrastructure as Code
We use Terraform to manage our Databricks workspaces, ensuring consistency and reproducibility.

### Asset Bundles
Customized Databricks asset bundles help different user personas get started quickly with pre-configured templates.

### Kubernetes Integration
Containerized applications like Apache Airflow run on Kubernetes, providing scalability and reliability.

## Key Lessons

**Start with the User Experience**: The best platform is one that people actually use. Focus on making common tasks simple.

**Automate Everything**: From workspace provisioning to monitoring, automation reduces errors and improves efficiency.

**Measure and Iterate**: Use metrics to understand usage patterns and continuously improve the platform.

---

*What challenges have you faced building data platforms? I'd love to hear your experiences!*
  `,
  date: "2024-12-21",
  author: "Khaan Claasz Coockson",
  tags: ["databricks", "data-platform", "aws", "terraform", "kubernetes"]
}
```

## Markdown Support

The blog supports basic markdown formatting:

- `# Header 1` → Large cyan header
- `## Header 2` → Medium green header  
- `### Header 3` → Small white header
- `**bold text**` → Bold cyan text
- `*italic text*` → Italic muted text
- `- bullet point` → Styled bullet points
- `---` → Horizontal line separator

## Tips

1. **Use descriptive IDs**: Make them URL-friendly (lowercase, hyphens instead of spaces)
2. **Write compelling excerpts**: This is what draws readers to click on your post
3. **Choose relevant tags**: They help categorize your content
4. **Use proper dates**: Follow YYYY-MM-DD format for consistent sorting
5. **Keep content focused**: Each post should have a clear theme or lesson

## File Location

Blog posts are defined in: `client/src/pages/blog.tsx`

Look for the `BLOG_POSTS` constant and add your new posts there.