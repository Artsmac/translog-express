import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {
  Truck,
  Package,
  Clock,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Menu,
  X,
  Search,
  Globe,
  BarChart3,
  Users
} from 'lucide-react';

//Componentes

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {name: 'Início', href: '#'},
    {name: 'Serviços', href: '#servicos'},
    {name: 'Rastreamento', href: '#rastreamento'},
    {name: 'Sobre Nós', href: '#sobre'},
    {name: 'Contato', href: '#contato'},
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-full">
              <Truck className="text-white w-6 h-6"/>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Trans<span className="text-emerald-500">Log</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>(
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all">
              Solicitar Cotação
            </button>
          </div>
        </div>
      </div>
    </nav>

  )
}