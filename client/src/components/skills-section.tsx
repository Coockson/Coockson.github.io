export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "fas fa-code",
      title: "Programming Languages",
      type: "progress",
      skills: [
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 85 },
        { name: "Go", level: 70 },
        { name: "Rust", level: 50 }
      ]
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud & Infrastructure",
      type: "tags",
      skills: [
        { name: "AWS", color: "yellow" },
        { name: "Azure", color: "blue" },
        { name: "Docker", color: "cyan" },
        { name: "Kubernetes", color: "purple" },
        { name: "Terraform", color: "green" }
      ]
    },
    {
      icon: "fas fa-database",
      title: "Data & Streaming",
      type: "tags",
      skills: [
        { name: "Apache Spark", color: "orange" },
        { name: "Kafka", color: "red" },
        { name: "Pulsar", color: "green" },
        { name: "Databricks", color: "cyan" }
      ]
    },
    {
      icon: "fas fa-cogs",
      title: "DevOps & CI/CD",
      type: "tags",
      skills: [
        { name: "GitHub Actions", color: "gray" },
        { name: "Docker", color: "blue" },
        { name: "Terraform", color: "purple" },
        { name: "Git", color: "cyan" }
      ]
    },
    {
      icon: "fas fa-sitemap",
      title: "Architectures",
      type: "list",
      skills: [
        { name: "Event-driven microservices" },
        { name: "Serverless computing" },
        { name: "API design" },
        { name: "Data mesh" }
      ]
    },
    {
      icon: "fas fa-award",
      title: "AWS Certified",
      type: "certifications",
      skills: [
        { name: "Architecting on AWS" },
        { name: "Developing on AWS" },
        { name: "Advanced Developing on AWS" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      yellow: "bg-yellow-500/10 text-yellow-400",
      blue: "bg-blue-500/10 text-blue-400",
      cyan: "bg-tech-cyan/10 text-tech-cyan",
      purple: "bg-purple-500/10 text-purple-400",
      green: "bg-tech-green/10 text-tech-green",
      orange: "bg-orange-500/10 text-orange-400",
      red: "bg-red-500/10 text-red-400",
      gray: "bg-tech-text/10 text-tech-text"
    };
    return colorMap[color] || "bg-tech-cyan/10 text-tech-cyan";
  };

  return (
    <section id="skills" className="py-20 px-6 bg-tech-gray/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-skills">
          <span className="text-tech-cyan">Technical</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-tech-gray border border-tech-border rounded-lg p-6 hover:border-tech-cyan transition-colors"
              data-testid={`skill-category-${index}`}
            >
              <div className="flex items-center mb-4">
                <i className={`${category.icon} text-tech-cyan text-2xl mr-3`}></i>
                <h3 className="text-xl font-bold" data-testid={`text-category-title-${index}`}>
                  {category.title}
                </h3>
              </div>
              
              {category.type === "progress" && (
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span data-testid={`text-skill-name-${index}-${skillIndex}`}>{skill.name}</span>
                      <div className="w-20 bg-tech-border rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            skillIndex % 2 === 0 ? 'bg-tech-cyan' : 'bg-tech-green'
                          }`}
                          style={{ width: `${'level' in skill ? skill.level : 0}%` }}
                          data-testid={`progress-bar-${index}-${skillIndex}`}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {category.type === "tags" && (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${getColorClasses('color' in skill ? skill.color! : 'cyan')}`}
                      data-testid={`skill-tag-${index}-${skillIndex}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
              
              {category.type === "list" && (
                <div className="text-tech-text-muted space-y-2 text-sm">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} data-testid={`text-skill-item-${index}-${skillIndex}`}>
                      • {skill.name}
                    </div>
                  ))}
                </div>
              )}
              
              {category.type === "certifications" && (
                <div className="text-tech-text-muted space-y-2 text-sm">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center" data-testid={`text-certification-${index}-${skillIndex}`}>
                      <i className="fas fa-certificate text-yellow-400 mr-2"></i>
                      {skill.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
