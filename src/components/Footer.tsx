import logo from "@/assets/ihelp-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} iHelp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
