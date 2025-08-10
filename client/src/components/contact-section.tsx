export default function ContactSection() {
  const contactInfo = [
    {
      icon: "fas fa-envelope",
      title: "Email",
      value: "khaancc@gmail.com",
      href: "mailto:khaancc@gmail.com",
      color: "tech-cyan"
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Location",
      value: "Vejle, Denmark",
      href: null,
      color: "tech-green"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/khaan-claasz-coockson-75344b123/",
      color: "tech-cyan",
      hoverBg: "tech-cyan"
    },
    {
      icon: "fab fa-github",
      href: "https://github.com/khaancc",
      color: "tech-green",
      hoverBg: "tech-green"
    },
    {
      icon: "fas fa-envelope",
      href: "mailto:khaancc@gmail.com",
      color: "yellow-400",
      hoverBg: "yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-tech-gray/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" data-testid="heading-contact">
          <span className="text-tech-cyan">Get In</span> Touch
        </h2>
        <p className="text-xl text-tech-text-muted mb-12 max-w-2xl mx-auto" data-testid="text-contact-description">
          I'm always interested in hearing about new opportunities and interesting projects. 
          Let's connect and discuss how we can work together!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-tech-gray border border-tech-border rounded-lg p-6 hover:border-tech-cyan transition-colors"
              data-testid={`contact-info-${index}`}
            >
              <i className={`${info.icon} text-${info.color} text-3xl mb-4`}></i>
              <h3 className="font-bold mb-2" data-testid={`text-contact-title-${index}`}>
                {info.title}
              </h3>
              {info.href ? (
                <a 
                  href={info.href}
                  className="text-tech-text-muted hover:text-tech-cyan transition-colors"
                  data-testid={`link-contact-${index}`}
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-tech-text-muted" data-testid={`text-contact-value-${index}`}>
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-tech-gray border border-tech-border rounded-lg flex items-center justify-center hover:border-${social.hoverBg} hover:bg-${social.hoverBg}/10 transition-colors`}
              data-testid={`link-social-${index}`}
            >
              <i className={`${social.icon} text-${social.color}`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
