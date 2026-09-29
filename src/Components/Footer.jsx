import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link to="/" className="text-xl font-bold text-indigo-600">
          Job Portal
        </Link>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link to="/" className="text-sm text-slate-600 hover:text-indigo-600">
            About
          </Link>
          <Link to="/login" className="text-sm text-slate-600 hover:text-indigo-600">
            Carrer
          </Link>
          <Link to="/signup" className="text-sm text-slate-600 hover:text-indigo-600">
            Contact
          </Link>
        </nav>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Job Portal
        </p>
      </div>
    </footer>
  );
}

export default Footer;