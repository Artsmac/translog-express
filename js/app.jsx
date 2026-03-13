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

            {/* Mobile Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={isScrolled ? 'text-slate-900' : 'text-white'}
              >
                {isMobileMenuOpen ? <X/> : <Menu/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: 'auto' }}
              exit={{opacity: 0, height: 0}}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-4">
                  <button className="w-full bg-emerald-600 text-white px-5 py-3 rounded-xl font-semibold">
                    Solicitar Cotação
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>

  );
};

// Componente Hero

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000"
          alt="Logistics Werehouse"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widset test-emerald-400 uppercase bg-emerald-400/10 border border-emerald-400/20 rounded-full">
            Logística Inteligente & Segura
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6">
            Sua carga em boas mãos, <span className="text-emerald-400">em qualquer lugar.</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
            Oferecemos soluções completas de transporte rodoviário e logística integrada para empresas que buscam eficiência, pontualidade e segurança total.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all group">
              Começar Agora 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              Nossos Serviços
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats Card */}
      <motion.div
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.5, duration: 0.8}}
        className="hidden lg:block absolute right-8 bottom-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl w-72"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-emerald-500/20 p-3 rounded-2xl">
              <Globe className="text-emerald-400 w-6 h-6"/>
            </div>
            <div>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-slate-300 text-ts uppercase tracking-wider">Cobertura Nacional</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-500/20 p-3 rounded-2xl">
              <Clock className="text-blue-400 w-6 h-6"/>
            </div>
            <div>
              <p className="text-white font-bold text-xl">24/7</p>
              <p className="text-slate-300 text-xs uppercase tracking-wider">Suporte ao Cliente</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-amber-500/20 p-3 rounded-2xl">
              <ShieldCheck className="text-amber-400 w-6 h-6"/>
            </div>
            <div>
              <p className="text-white font-bold text-xl">Seguro</p>
              <p className="text-slate-300 text-xs uppercase tracking-wider">Garantia Total</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};