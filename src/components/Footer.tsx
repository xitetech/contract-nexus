import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ContractHub</h3>
            <p className="text-sm text-muted-foreground">
              Professional contract templates for your business needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Templates</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/templates" className="hover:text-primary transition-colors">
                  All Templates
                </Link>
              </li>
              <li>
                <Link to="/templates/employment" className="hover:text-primary transition-colors">
                  Employment
                </Link>
              </li>
              <li>
                <Link to="/templates/nda" className="hover:text-primary transition-colors">
                  NDA
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ContractHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};