import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlaskConical, Rocket, TrendingUp, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { trackEvent } from "@/hooks/useAnalytics";
import Partners from "@/components/Partners";
const RoadmapAndContact = () => {
  const roadmapSteps = [{
    icon: FlaskConical,
    title: "Today – Research & prototypes",
    description: "Active research on federated learning and anomaly detection, lab-scale proof-of-concepts."
  }, {
    icon: Rocket,
    title: "Next – Prototypes & pilots with partners",
    description: "Build robust prototype implementations with selected OEM and industrial partners."
  }, {
    icon: TrendingUp,
    title: "Later – Scalable privacy-preserving condition monitoring platform",
    description: "Towards a production-ready platform for fleets of industrial assets."
  }];
  return <section id="roadmap" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From research to <span className="text-brand-blue-bright">real-world deployments</span>
          </h2>
        </div>

        {/* Roadmap Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {roadmapSteps.map((step, index) => <Card key={index} className="p-8 border-2">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-accent/10 rounded-lg mb-4">
                  <step.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>)}
        </div>

        {/* Ecosystem Note */}
        <div className="mb-16 text-center">
          
        </div>

        {/* Partners Section */}
        <Partners />

        {/* Contact Section */}
        <div id="contact" className="text-center mb-12 pt-8 scroll-mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-brand-blue-bright">connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Ready to transform condition monitoring with federated learning?</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-6">Contact Information</h4>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Mail className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Email</div>
                      <a className="text-foreground hover:text-accent transition-colors font-medium" href="mailto:info@nexufed.ai">
                        info@nexufed.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Phone</div>
                      <a href="tel:+492343218591" className="text-foreground hover:text-accent transition-colors font-medium">
                        +49 234 32 18591
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Location</div>
                      <div className="text-foreground font-medium">
                        Zentrum für das Engineering Smarter Produkt-Service Systeme (ZESS)
                        <br />
                        Hans-Dobbertin-Str. 8<br />
                        44803 Bochum, Germany
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

              <div className="bg-gradient-to-br from-primary to-brand-blue rounded-xl p-8 text-primary-foreground flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-2xl font-bold mb-4">Contact the NexuFed Team</h4>
                  <p className="text-lg opacity-90">We're here to answer your questions.</p>
                </div>

                <div className="flex justify-center my-6">
                  <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8" asChild>
                    <a onClick={() => trackEvent('click', 'Contact', 'Send Email')} href="mailto:info@nexufed.ai">
                      <Mail className="mr-2 w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button variant="outline" size="icon" asChild className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                    <a href="https://linkedin.com/company/nexufed" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" onClick={() => trackEvent('click', 'Contact', 'LinkedIn')}>
                      <Linkedin className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="border-2 border-primary-foreground bg-transparent hover:bg-primary-foreground/10">
                    <a href="https://github.com/NexuFed" target="_blank" rel="noopener noreferrer" aria-label="GitHub" onClick={() => trackEvent('click', 'Contact', 'GitHub')}>
                      <Github className="w-5 h-5 text-primary-foreground" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>;
};
export default RoadmapAndContact;