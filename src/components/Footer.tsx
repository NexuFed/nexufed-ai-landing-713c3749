import { Linkedin, Github } from "lucide-react";
import logo from "@/assets/logo.png";
import { trackEvent } from "@/hooks/useAnalytics";
const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              alt="NexuFed AI"
              className="h-12 mb-4 w-auto object-contain"
              src="/lovable-uploads/7025a1c1-ca50-4929-af21-c5cc852a3286.png"
            />
            <p className="text-sm text-muted-foreground">
              Enabling condition monitoring where data cannot be shared.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="/imprint" className="text-foreground hover:text-primary transition-colors">
                  Imprint
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    trackEvent("click", "Footer", "Cookie Settings");
                    window.dispatchEvent(new Event("openCookieSettings"));
                  }}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-primary">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/nexufed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                onClick={() => trackEvent("click", "Footer", "LinkedIn")}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/NexuFed"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                onClick={() => trackEvent("click", "Footer", "GitHub")}
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm mt-4 text-muted-foreground">
              Zentrum für das Engineering Smarter Produkt-Service Systeme (ZESS)
              <br />
              Hans-Dobbertin-Str. 8<br />
              44803 Bochum, Germany
            </p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2026 NexuFed AI</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
