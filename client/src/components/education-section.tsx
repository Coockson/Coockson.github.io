export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science",
      field: "Electrical Engineering",
      school: "Aarhus University",
      location: "Aarhus",
      period: "2018 - 2020",
      type: "masters"
    },
    {
      degree: "Bachelor of Science",
      field: "Electrical and Electronics Engineering",
      school: "Bilkent University",
      location: "Ankara",
      period: "2014 - 2018",
      type: "bachelors"
    }
  ];

  const languages = [
    {
      name: "English",
      level: "Advanced (Professional Proficiency)",
      icon: "fas fa-globe",
      color: "tech-cyan"
    },
    {
      name: "Turkish",
      level: "Advanced (Native Proficiency)",
      icon: "fas fa-globe",
      color: "tech-green"
    },
    {
      name: "Danish",
      level: "Beginner (DU3.5 Level)",
      icon: "fas fa-globe",
      color: "yellow-400"
    }
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16" data-testid="heading-education">
          <span className="text-tech-cyan">Education</span>
        </h2>
        
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-tech-gray border border-tech-border rounded-lg p-8 hover:border-tech-cyan transition-colors"
              data-testid={`education-item-${index}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-tech-cyan mb-2" data-testid={`text-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-tech-green mb-2" data-testid={`text-field-${index}`}>
                    {edu.field}
                  </p>
                  <p className="text-tech-text-muted" data-testid={`text-school-${index}`}>
                    {edu.school}, {edu.location}
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-sm font-mono ${
                    edu.type === "masters" ? 'bg-tech-cyan/20 text-tech-cyan' : 'bg-tech-green/20 text-tech-green'
                  }`} data-testid={`text-period-${index}`}>
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-tech-cyan" data-testid="heading-languages">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div 
                key={index}
                className="bg-tech-gray border border-tech-border rounded-lg p-6 text-center"
                data-testid={`language-item-${index}`}
              >
                <i className={`${lang.icon} text-${lang.color} text-2xl mb-3`}></i>
                <h4 className="font-bold mb-2" data-testid={`text-language-name-${index}`}>
                  {lang.name}
                </h4>
                <p className="text-tech-text-muted" data-testid={`text-language-level-${index}`}>
                  {lang.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
