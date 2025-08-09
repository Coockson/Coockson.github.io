export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Senior Data Platform Engineer",
      company: "LEGO System A/S",
      location: "Billund, Denmark",
      period: "April 2023 - Present",
      current: true,
      responsibilities: [
        "Main contributor to LEGO's self-service data platform using Databricks",
        "Hosted, maintained and configured Databricks workspaces using Terraform for hundreds of users",
        "Developed and maintained infrastructure containerized applications such as Apache Airflow using Kubernetes",
        "Designed development tools for users to facilitate the use and integration of the data platform"
      ],
      skills: ["Databricks", "Terraform", "Kubernetes", "Apache Airflow"]
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "LEGO System A/S",
      location: "Copenhagen, Denmark",
      period: "Sept 2021 - April 2023",
      current: false,
      responsibilities: [
        "Key role in establishing the LEGO Copenhagen digital office as the first internal employee",
        "Developed event-based microservice architecture handling millions of inventory events globally",
        "Main contributor for global inventory and availability management system",
        "Integrated event streaming systems with AWS SNS, Kafka, and Pulsar"
      ],
      skills: ["AWS", "Kafka", "Go", "TypeScript", "Terraform"]
    },
    {
      id: 3,
      title: "Junior Software Engineer",
      company: "LEGO System A/S",
      location: "Billund, Denmark",
      period: "Feb 2020 - Sept 2021",
      current: false,
      responsibilities: [
        "Developed high-performance data processing solution using Apache Spark on AWS Glue",
        "Engineered data pipelines with Python (PySpark) for scalable data transformations",
        "Built integrations with internal systems (SAP) and third-party applications"
      ],
      skills: ["Python", "Apache Spark", "AWS Glue", "SAP"]
    },
    {
      id: 4,
      title: "Software Developer",
      company: "Bolo Software",
      location: "Aarhus, Denmark",
      period: "Sept 2018 - Nov 2019",
      current: false,
      responsibilities: [
        "Contributed to LaTeX Math plugin for Atlassian Confluence",
        "Developed Numbered Heading feature for automatic header numbering",
        "Built backend plugins for Atlassian Confluence Servers using Java"
      ],
      skills: ["Java", "Atlassian", "LaTeX"]
    }
  ];

  const getStatusColor = (current: boolean) => {
    if (current) return "bg-tech-green";
    return "bg-tech-text-muted";
  };

  const getSkillColor = (index: number) => {
    const colors = [
      "bg-tech-cyan/10 text-tech-cyan",
      "bg-tech-green/10 text-tech-green",
      "bg-orange-500/10 text-orange-400",
      "bg-purple-500/10 text-purple-400",
      "bg-yellow-500/10 text-yellow-400"
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-experience">
          <span className="text-tech-cyan">Work</span> Experience
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-tech-border hidden md:block"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative" data-testid={`experience-item-${exp.id}`}>
                <div className="md:ml-20">
                  <div className="bg-tech-gray border border-tech-border rounded-lg p-8 hover:border-tech-cyan transition-colors">
                    <div className={`absolute -left-12 top-8 w-6 h-6 ${getStatusColor(exp.current)} rounded-full border-4 border-tech-dark hidden md:block`}></div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-tech-cyan mb-2" data-testid={`text-job-title-${exp.id}`}>
                          {exp.title}
                        </h3>
                        <p className="text-xl text-tech-green font-medium" data-testid={`text-company-${exp.id}`}>
                          {exp.company}
                        </p>
                        <p className="text-tech-text-muted" data-testid={`text-location-${exp.id}`}>
                          {exp.location}
                        </p>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <span className={`px-3 py-1 rounded-full text-sm font-mono ${
                          exp.current ? 'bg-tech-green/20 text-tech-green' : 'bg-tech-text-muted/20 text-tech-text-muted'
                        }`} data-testid={`text-period-${exp.id}`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-tech-text-muted mb-4">
                      {exp.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start" data-testid={`text-responsibility-${exp.id}-${respIndex}`}>
                          <i className="fas fa-chevron-right text-tech-cyan mt-1 mr-3 text-sm"></i>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-2 py-1 rounded text-xs ${getSkillColor(skillIndex)}`}
                          data-testid={`skill-tag-${exp.id}-${skillIndex}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
