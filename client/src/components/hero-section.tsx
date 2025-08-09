import { useEffect, useState } from "react";

export default function HeroSection() {
  const [typingText, setTypingText] = useState("");
  const fullText = "Senior Data Platform Engineer @ LEGO";

  useEffect(() => {
    let i = 0;
    const typeText = () => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeText, 100);
      }
    };
    typeText();
  }, []);

  const downloadCV = () => {
    // Create a simple CV download
    const cvData = `
KHAAN CLAASZ COOCKSON
Senior Data Platform Engineer

Contact:
Email: khaancc@gmail.com
Phone: +45 6025 2061
Location: Vejle, Denmark
LinkedIn: https://linkedin.com/in/khaancc

EXPERIENCE:
• Senior Data Platform Engineer at LEGO (April 2023 - Present)
• Software Engineer at LEGO (September 2021 - April 2023)
• Junior Software Engineer at LEGO (February 2020 - September 2021)
• Software Developer at Bolo Software (September 2018 - November 2019)

EDUCATION:
• Master of Science, Electrical Engineering - Aarhus University (2018-2020)
• Bachelor of Science, Electrical and Electronics Engineering - Bilkent University (2014-2018)

SKILLS:
• Languages: TypeScript, Rust, Python, Go
• Cloud: AWS, Azure
• Data: Apache Spark, Kafka, Pulsar, Databricks
• DevOps: Docker, Kubernetes, Terraform, GitHub Actions
`;

    const blob = new Blob([cvData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Khaan_Claasz_Coockson_CV.txt';
    link.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-tech-cyan to-tech-green animate-float">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Khaan Claasz Coockson" 
              className="w-32 h-32 rounded-full object-cover"
              data-testid="img-profile-photo"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-name">
          <span className="text-tech-cyan">Khaan</span>{" "}
          <span className="text-tech-green">Claasz</span>{" "}
          <span className="text-tech-text">Coockson</span>
        </h1>
        
        <div className="font-mono text-xl md:text-2xl text-tech-text-muted mb-8">
          <span className="typing" data-testid="text-job-title">
            {typingText}
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-tech-text-muted max-w-3xl mx-auto leading-relaxed mb-12" data-testid="text-description">
          Building scalable data platforms and cloud-native solutions at LEGO. Passionate about event-driven architectures, 
          infrastructure as code, and empowering teams with self-service data tools.
        </p>
        
        {/* Terminal-style info box */}
        <div className="bg-tech-gray border border-tech-border rounded-lg p-6 font-mono text-left max-w-2xl mx-auto mb-8" data-testid="terminal-info">
          <div className="flex items-center mb-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-tech-green rounded-full"></div>
            </div>
            <span className="ml-4 text-tech-text-muted text-sm">khaancc@terminal:~$</span>
          </div>
          <div className="space-y-1">
            <div><span className="text-tech-cyan">Location:</span> Vejle, Denmark</div>
            <div><span className="text-tech-cyan">Email:</span> khaancc@gmail.com</div>
            <div><span className="text-tech-cyan">Phone:</span> +45 6025 2061</div>
            <div><span className="text-tech-cyan">Status:</span> <span className="text-tech-green">Available for opportunities</span></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://linkedin.com/in/khaancc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-border hover:animate-glow transition-all"
            data-testid="link-linkedin"
          >
            <div className="gradient-border-inner px-6 py-3 flex items-center space-x-2">
              <i className="fab fa-linkedin text-tech-cyan"></i>
              <span>LinkedIn</span>
            </div>
          </a>
          
          <a 
            href="https://github.com/khaancc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="gradient-border hover:animate-glow transition-all"
            data-testid="link-github"
          >
            <div className="gradient-border-inner px-6 py-3 flex items-center space-x-2">
              <i className="fab fa-github text-tech-green"></i>
              <span>GitHub</span>
            </div>
          </a>
          
          <button 
            onClick={downloadCV}
            className="gradient-border hover:animate-glow transition-all"
            data-testid="button-download-cv"
          >
            <div className="gradient-border-inner px-6 py-3 flex items-center space-x-2">
              <i className="fas fa-download text-tech-cyan"></i>
              <span>Download CV</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
