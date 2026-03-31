import { motion } from "motion/react";
import { ShoppingBag, ChevronRight, Instagram, Mail, MapPin } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-white">
    <div className="text-2xl font-serif tracking-widest uppercase">Latees</div>
    <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium">
      <a href="#collections" className="hover:opacity-60 transition-opacity">Collections</a>
      <a href="#about" className="hover:opacity-60 transition-opacity">The Artisan</a>
      <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
    </div>
    <button className="p-2 hover:opacity-60 transition-opacity">
      <ShoppingBag size={20} />
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    <motion.div 
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0"
    >
      <img 
        src="https://images.unsplash.com/photo-1541675154750-0444c7d51e8e?q=80&w=1920&auto=format&fit=crop" 
        alt="Artisan at work" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
    
    <div className="relative text-center text-white px-4">
      <motion.span 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="block text-sm uppercase tracking-[0.3em] mb-6 font-medium"
      >
        Handcrafted with intention
      </motion.span>
      <motion.h1 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-7xl md:text-9xl font-serif mb-8 italic"
      >
        Latees Fine Crafts
      </motion.h1>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <a 
          href="#collections" 
          className="inline-flex items-center gap-3 px-8 py-4 border border-white/50 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs tracking-widest"
        >
          Explore Collections <ChevronRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

const CollectionCard = ({ title, image, category }: { title: string, image: string, category: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group cursor-pointer"
  >
    <div className="overflow-hidden rounded-3xl aspect-[3/4] mb-6">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
    </div>
    <span className="text-[10px] uppercase tracking-widest text-brand-olive font-bold mb-2 block">{category}</span>
    <h3 className="text-2xl font-serif">{title}</h3>
  </motion.div>
);

const Collections = () => (
  <section id="collections" className="py-32 px-6 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      <div className="max-w-xl">
        <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Curated objects for the modern home.</h2>
        <p className="text-brand-ink/60 leading-relaxed">
          Each piece in our collection is born from a dialogue between material and maker. We celebrate the imperfections that tell the story of the hand.
        </p>
      </div>
      <div className="text-right">
        <span className="text-8xl font-serif text-brand-wood/10 absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none">01</span>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <CollectionCard 
        category="Ceramics"
        title="The Earth Series"
        image="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=800&auto=format&fit=crop"
      />
      <CollectionCard 
        category="Woodwork"
        title="Heritage Oak"
        image="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop"
      />
      <CollectionCard 
        category="Textiles"
        title="Woven Silence"
        image="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop"
      />
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-brand-olive text-brand-cream overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="rounded-full overflow-hidden aspect-square border-8 border-brand-cream/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" 
            alt="The Artisan" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="absolute -bottom-10 -right-10 bg-brand-wood p-12 rounded-full hidden lg:block">
          <p className="text-sm uppercase tracking-widest font-bold">Est. 2012</p>
        </div>
      </div>
      
      <div>
        <h2 className="text-5xl md:text-6xl font-serif mb-10 italic">The Hand Behind the Craft</h2>
        <div className="space-y-6 text-brand-cream/80 leading-relaxed text-lg">
          <p>
            Latees was founded on the belief that the objects we surround ourselves with should possess a soul. Our studio is a sanctuary where tradition meets contemporary design.
          </p>
          <p>
            Master artisan Latee has spent over two decades perfecting the art of slow craft. Every curve, every texture, and every finish is a deliberate choice, resulting in pieces that are as functional as they are sculptural.
          </p>
          <button className="pt-6 text-brand-cream border-b border-brand-cream/30 pb-2 hover:border-brand-cream transition-colors uppercase text-xs tracking-widest font-bold">
            Read the full story
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-20 px-6 bg-brand-ink text-brand-cream/40">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="md:col-span-2">
        <h2 className="text-4xl font-serif text-brand-cream mb-8 italic">Let's create something timeless.</h2>
        <p className="max-w-sm mb-12">
          For commissions, inquiries, or studio visits, please reach out. We welcome collaborations that push the boundaries of craft.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-brand-cream transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-brand-cream transition-colors"><Mail size={24} /></a>
          <a href="#" className="hover:text-brand-cream transition-colors"><MapPin size={24} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="text-brand-cream uppercase text-xs tracking-widest font-bold mb-6">Studio</h4>
        <ul className="space-y-4 text-sm">
          <li>124 Artisans Way</li>
          <li>Heritage District</li>
          <li>Portland, OR 97201</li>
        </ul>
      </div>
      
      <div>
        <h4 className="text-brand-cream uppercase text-xs tracking-widest font-bold mb-6">Newsletter</h4>
        <p className="text-sm mb-6 text-brand-cream/40">Join our mailing list for studio updates and new collection releases.</p>
        <div className="flex border-b border-brand-cream/20 pb-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className="bg-transparent border-none outline-none text-sm w-full text-brand-cream placeholder:text-brand-cream/20"
          />
          <button className="text-brand-cream hover:opacity-60 transition-opacity">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em]">
      <p>© 2026 Latees Fine Crafts. All rights reserved.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-brand-cream transition-colors">Privacy</a>
        <a href="#" className="hover:text-brand-cream transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default function LateesWebsite() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Collections />
      <About />
      <Footer />
    </div>
  );
}
