import React, { useEffect, useState } from 'react';

const servicesData = [
  { id: 1, category: 'Landscaping', image: '/land1.jpg', title: 'Landscaping Design', desc: 'Premium custom estate gardening and modern hardscaping.', price: '₹75,000' },
  { id: 2, category: 'Landscaping', image: '/land2.jpg', title: 'Premium Garden Design', desc: 'Lush greenery tailored to your property boundaries.', price: '₹1,25,000' },
  { id: 3, category: 'Landscaping', image: '/land3.jpg', title: 'Vertical Green Walls', desc: 'Eco-friendly modern living with biological aesthetics.', price: '₹90,000' },
  { id: 4, category: 'Landscaping', image: '/land4.jpg', title: 'Night Lighting Design', desc: 'Illuminated pathways and dramatic garden highlights.', price: '₹1,10,000' },
  { id: 5, category: 'Landscaping', image: '/land5.jpg', title: 'Luxury Estate Gardens', desc: 'Expansive floral and structured botanical environments.', price: '₹1,50,000' },
  { id: 6, category: 'Water Bodies & Fountains', image: '/water1.jpg', title: 'Luxury Fountain Design', desc: 'Architectural water walls and cascading features.', price: '₹1,50,000' },
  { id: 7, category: 'Water Bodies & Fountains', image: '/water2.jpg', title: 'Artificial Water Body Design', desc: 'Biological koi ponds and infinity pool systems.', price: '₹2,00,000' },
  { id: 8, category: 'Water Bodies & Fountains', image: '/water3.jpeg', title: 'Tranquil Oasis Ponds', desc: 'Calming water fixtures integrated with natural stone.', price: '₹1,80,000' },
  { id: 9, category: 'Water Bodies & Fountains', image: '/water4.jpg', title: 'Modern Cascade', desc: 'Sleek, continuous flow fountains for luxury patios.', price: '₹1,60,000' },
  { id: 10, category: 'Interior Design', image: '/interior1.jpg', title: 'Modern Interior Design', desc: 'Minimalism aesthetics and lighting choreography.', price: '₹2,50,000' },
  { id: 11, category: 'Interior Design', image: '/interior2.jpg', title: 'Luxury Interior Design', desc: 'Bespoke furniture sourcing and luxury material palette.', price: '₹4,00,000' },
  { id: 12, category: 'Interior Design', image: '/interio3.png', title: 'Premium Living Spaces', desc: 'Tailored environments that redefine modern comfort.', price: '₹3,50,000' },
  { id: 13, category: 'Interior Design', image: '/interior4.jpg', title: 'Classic Elegance', desc: 'Timeless interior remodeling with sophisticated finishes.', price: '₹3,00,000' },
];

const categories = ['All', 'Landscaping', 'Water Bodies & Fountains', 'Interior Design'];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, [filter]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4); // 4 slides
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCount = (cat: string) => cat === 'All' ? servicesData.length : servicesData.filter(s => s.category === cat).length;
  const filteredServices = servicesData.filter(s => filter === 'All' || s.category === filter);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 bg-white/3 backdrop-blur-xl dark:bg-black/3 border-b border-white/10 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'}`} id="main-nav">
        <div className="flex justify-between items-center px-6 md:px-20 max-w-container-max mx-auto">
          <div className="font-display-xl text-body-lg font-bold tracking-tighter text-on-surface dark:text-on-background uppercase">PROSPER DESIGNS</div>
          <div className="hidden md:flex gap-12">
            <a className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-tertiary border-b border-tertiary pb-1" href="#home">Home</a>
            <a className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface/60 hover:text-on-surface transition-colors duration-300" href="#about">About</a>
            <a className="font-label-caps text-label-caps tracking-[0.15em] uppercase text-on-surface/60 hover:text-on-surface transition-colors duration-300" href="#services">Services</a>
          </div>
          <a className="scale-95 active:scale-100 transition-transform bg-on-surface text-surface px-8 py-3 font-label-caps text-label-caps tracking-widest uppercase hover:text-tertiary transition-all duration-500" href="#booking">
            Book Consultation
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="home">
        <div className="carousel-container z-0">
          <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('/land1.jpg')" }}></div>
          <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('/water1.jpg')" }}></div>
          <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''}`} style={{ backgroundImage: "url('/interior1.jpg')" }}></div>
          <div className={`carousel-slide ${currentSlide === 3 ? 'active' : ''}`} style={{ backgroundImage: "url('/land2.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-20 relative z-10 grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-8 reveal-on-scroll">
            <span className="font-label-caps text-label-caps text-tertiary tracking-[0.3em] uppercase mb-6 block">Est. 2014</span>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl mb-8 leading-[0.9]">
              Designing Spaces <br /><span className="text-tertiary">That Inspire</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface/70 mb-12 max-w-xl">
              Luxury Landscaping, Water Features, and Interior Design Solutions Crafted With Precision. Where modernist architecture meets the serenity of nature.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a className="bg-on-surface text-surface px-10 py-5 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-tertiary transition-colors duration-500 text-center" href="#services">
                View Gallery
              </a>
              <a className="border border-white/20 px-10 py-5 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:border-white transition-colors duration-500 text-center backdrop-blur-sm" href="#booking">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:flex col-span-4 justify-end items-start reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <img alt="Prosper Designs Logo" className="w-64 object-contain drop-shadow-2xl" src="/logo.png" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-on-surface/40">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Stats / About Section */}
      <section className="py-stack-xl bg-surface-container-lowest relative" id="about">
        <div className="max-w-container-max mx-auto px-6 md:px-20">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-5 reveal-on-scroll">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Design Beyond <br />Boundaries</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
                At Prosper Designs, we don't just build structures; we curate atmospheres. Our philosophy integrates the rigidity of modern lines with the organic flow of water and greenery, creating living masterpieces that transcend standard living.
              </p>
              <div className="grid grid-cols-2 gap-stack-md">
                <div>
                  <div className="font-display-xl text-headline-lg text-tertiary mb-2">150+</div>
                  <div className="font-label-caps text-label-caps text-on-surface/50 uppercase tracking-widest">Projects Completed</div>
                </div>
                <div>
                  <div className="font-display-xl text-headline-lg text-tertiary mb-2">50+</div>
                  <div className="font-label-caps text-label-caps text-on-surface/50 uppercase tracking-widest">Luxury Estates</div>
                </div>
                <div>
                  <div className="font-display-xl text-headline-lg text-tertiary mb-2">10+</div>
                  <div className="font-label-caps text-label-caps text-on-surface/50 uppercase tracking-widest">Years Experience</div>
                </div>
                <div>
                  <div className="font-display-xl text-headline-lg text-tertiary mb-2">95%</div>
                  <div className="font-label-caps text-label-caps text-on-surface/50 uppercase tracking-widest">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-start-7 md:col-span-6 mt-12 md:mt-0 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="relative group overflow-hidden glass-effect p-2 rounded-lg">
                <img alt="Luxury Interior" className="w-full aspect-[4/5] object-cover rounded-sm transition-all duration-1000 group-hover:scale-105" src="/about.jpg" />
                <div className="absolute top-8 right-8">
                  <img alt="Prosper Designs Logo" className="w-24 object-contain bg-white/10 backdrop-blur-md p-2 rounded" src="/logo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery Section */}
      <section className="py-stack-xl bg-surface relative" id="services">
        <div className="max-w-container-max mx-auto px-6 md:px-20 text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4 reveal-on-scroll">Our Design Services</h2>
          <p className="font-body-lg text-on-surface-variant reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            Explore our completed design works by category.
          </p>
          <div className="w-20 h-px bg-tertiary mx-auto mt-6 mb-12 reveal-on-scroll" style={{ transitionDelay: '200ms' }}></div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full font-label-caps text-label-caps tracking-widest uppercase transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-tertiary text-on-tertiary-fixed shadow-[0_0_20px_rgba(233,195,73,0.3)] scale-105' 
                    : 'glass-effect text-on-surface/70 hover:text-on-surface hover:bg-white/5'
                }`}
              >
                {cat} {cat !== 'All' && `(${getCount(cat)})`}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-container-max mx-auto px-6 md:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={service.id} 
              className="glass-effect rounded-2xl overflow-hidden group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${(index % 10) * 50}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-label-caps tracking-widest uppercase bg-black/50 backdrop-blur-md rounded-full text-white/90 border border-white/10">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-8 relative">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                <h3 className="font-headline-lg text-xl mb-3 text-on-surface group-hover:text-tertiary transition-colors duration-300">{service.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">{service.desc}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-on-surface/50 mb-1 font-label-caps">Starting From</div>
                    <div className="font-body-lg font-bold text-tertiary">{service.price}</div>
                  </div>
                  <span className="material-symbols-outlined text-on-surface/30 group-hover:text-tertiary transition-colors duration-300 transform group-hover:translate-x-1">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-stack-xl bg-surface-container-lowest relative">
        <div className="max-w-container-max mx-auto px-6 md:px-20">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-20 text-center reveal-on-scroll">Investment Framework</h2>
          <div className="overflow-x-auto reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 font-label-caps text-label-caps tracking-widest text-on-surface/40 uppercase">
                  <th className="py-8 px-4">Design Category</th>
                  <th className="py-8 px-4">Starting At</th>
                  <th className="py-8 px-4">Timeline</th>
                  <th className="py-8 px-4">Consultation</th>
                </tr>
              </thead>
              <tbody className="font-body-lg text-on-surface/80">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-10 px-4 font-bold group-hover:text-tertiary transition-colors">Luxury Landscaping</td>
                  <td className="py-10 px-4">₹5,00,000</td>
                  <td className="py-10 px-4">4-8 Weeks</td>
                  <td className="py-10 px-4">Included</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-10 px-4 font-bold group-hover:text-tertiary transition-colors">Water Bodies & Ponds</td>
                  <td className="py-10 px-4">₹3,50,000</td>
                  <td className="py-10 px-4">3-6 Weeks</td>
                  <td className="py-10 px-4">Included</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-10 px-4 font-bold group-hover:text-tertiary transition-colors">Premium Interiors</td>
                  <td className="py-10 px-4">₹7,50,000</td>
                  <td className="py-10 px-4">8-12 Weeks</td>
                  <td className="py-10 px-4">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="absolute top-20 right-20 hidden md:block">
          <img alt="Prosper Designs Logo" className="w-32 object-contain opacity-20" src="/logo.png" />
        </div>
      </section>

      {/* Booking / Contact Section */}
      <section className="py-stack-xl bg-surface relative overflow-hidden" id="booking">
        <div className="max-w-container-max mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <div className="col-span-12 md:col-span-5 reveal-on-scroll">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8">Begin Your <br />Transformation</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Connect with our lead architects to discuss your vision. We offer site visits and detailed conceptual consultations.
            </p>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-tertiary">phone_iphone</span>
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface/40 mb-1">Inquiries</div>
                  <div className="font-body-lg">+91 97005 21522</div>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-tertiary">mail</span>
                <div>
                  <div className="font-label-caps text-label-caps uppercase text-on-surface/40 mb-1">Direct Email</div>
                  <div className="font-body-lg">rambabumiryala4@gmail.com</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/10 transition-colors rounded-full" href="https://wa.me/919700521522">
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </a>
              <button className="flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/10 transition-colors rounded-full">
                <span className="material-symbols-outlined text-sm">location_on</span> Studio Map
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-start-7 md:col-span-6 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <div className="glass-effect p-10 md:p-16 rounded-2xl">
              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-tertiary text-on-surface placeholder:text-on-surface/30 transition-all outline-none" placeholder="Full Name" type="text" />
                </div>
                <div className="relative">
                  <input className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-tertiary text-on-surface placeholder:text-on-surface/30 transition-all outline-none" placeholder="Email Address" type="email" />
                </div>
                <div className="relative">
                  <select className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-tertiary text-on-surface outline-none appearance-none cursor-pointer">
                    <option className="bg-surface">Select Service</option>
                    <option className="bg-surface">Landscaping</option>
                    <option className="bg-surface">Water Bodies</option>
                    <option className="bg-surface">Interior Design</option>
                  </select>
                </div>
                <div className="relative">
                  <textarea className="w-full bg-transparent border-0 border-b border-white/20 py-4 focus:ring-0 focus:border-tertiary text-on-surface placeholder:text-on-surface/30 transition-all outline-none resize-none" placeholder="Your Vision" rows={4}></textarea>
                </div>
                <button className="w-full bg-on-surface text-surface py-5 font-label-caps text-label-caps tracking-widest uppercase hover:bg-tertiary transition-all duration-500 rounded-lg" type="submit">
                  Confirm Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-container-lowest py-24 border-t border-white/5 relative">
        <div className="max-w-container-max mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-4 mb-12 md:mb-0">
            <div className="font-display-xl-mobile text-headline-lg-mobile font-bold text-on-surface mb-6 uppercase tracking-tighter">PROSPER DESIGNS</div>
            <p className="font-body-md text-on-surface-variant max-w-xs">
              "Great Design Is Where Vision Meets Experience." Crafting the future of luxury living through architectural excellence.
            </p>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h5 className="font-label-caps text-label-caps uppercase text-tertiary mb-8">Studio</h5>
            <ul className="space-y-4 font-body-md text-on-surface-variant list-none p-0">
              <li><a className="hover:text-on-surface transition-colors" href="#">Instagram</a></li>
              <li><a className="hover:text-on-surface transition-colors" href="#">LinkedIn</a></li>
              <li><a className="hover:text-on-surface transition-colors" href="#">Journal</a></li>
              <li><a className="hover:text-on-surface transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h5 className="font-label-caps text-label-caps uppercase text-tertiary mb-8">Legal</h5>
            <ul className="space-y-4 font-body-md text-on-surface-variant list-none p-0">
              <li><a className="hover:text-on-surface transition-colors" href="#">Privacy</a></li>
              <li><a className="hover:text-on-surface transition-colors" href="#">Terms</a></li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col md:items-end justify-between">
            <img alt="Prosper Designs Logo Footer" className="w-48 object-contain bg-white/5 p-4 rounded mb-8 md:mb-0" src="/logo.png" />
            <div className="font-label-caps text-label-caps text-on-surface/30 uppercase tracking-widest text-right">© 2024 PROSPER DESIGNS. ALL RIGHTS RESERVED.</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
