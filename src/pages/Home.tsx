import { Link } from 'react-router-dom';
import { ArrowRight, Upload, MessageSquare, Heart, Globe, Users, Shield, Sparkles } from 'lucide-react';
import { countries } from '../services/dataService';

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wh-warm overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C67B5C" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#6B8E6E" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="20" r="40" fill="url(#heroGrad)" />
            <circle cx="20" cy="80" r="50" fill="url(#heroGrad)" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wh-terracotta/10 text-wh-terracotta text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Hecho entre latinos, para latinos
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-wh-charcoal leading-tight mb-6">
            Trabajá, viajá, viví
            <br />
            <span className="text-wh-terracotta">tu experiencia real</span>
          </h1>
          <p className="text-lg md:text-xl text-wh-stone max-w-2xl mx-auto mb-10 leading-relaxed">
            Una comunidad abierta donde los Work & Holiday makers comparten sus historias auténticas, 
            sin filtros corporativos. Acá no hay agencias: hay hermanos y hermanas que ya pasaron por lo mismo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://forms.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-wh-terracotta text-white rounded-full font-medium hover:bg-wh-terracotta-dark transition-colors shadow-sm"
            >
              <Upload className="w-5 h-5" />
              Carga tu experiencia
            </a>
            <a
              href="https://forms.google.com/placeholder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-wh-charcoal rounded-full font-medium border border-wh-sand hover:bg-wh-soft transition-colors shadow-sm"
            >
              <MessageSquare className="w-5 h-5" />
              Review a empresa
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-wh-stone text-sm">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>9 países</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-wh-stone" />
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Comunidad en crecimiento</span>
            </div>
          </div>
        </div>
      </section>

      {/* Country Cards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wh-charcoal mb-3">
              Elegí tu destino
            </h2>
              <p className="text-wh-stone max-w-lg mx-auto">
              Tocá una tarjeta para ver experiencias, reviews y datos útiles de cada país.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((country) => (
              <Link
                key={country.id}
                to={`/pais/${country.id}`}
                className="group relative bg-wh-cream rounded-2xl border border-wh-sand/50 p-6 hover:border-wh-terracotta/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white border border-wh-sand/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {country.flag}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl font-semibold text-wh-charcoal group-hover:text-wh-terracotta transition-colors">
                      {country.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-wh-olive/10 text-wh-olive-dark mt-1">
                      {country.visaDuration}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-wh-stone leading-relaxed mb-4 line-clamp-3">
                  {country.description}
                </p>
                <div className="flex items-center text-wh-terracotta text-sm font-medium">
                  <span>Ver país</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Community Manifesto */}
      <section className="py-16 md:py-24 bg-wh-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wh-olive/10 text-wh-olive-dark text-sm font-medium mb-4">
              <Heart className="w-4 h-4" />
              Nuestro manifiesto
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-wh-charcoal">
              Por qué existe esta comunidad
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-wh-sand/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-wh-terracotta/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-wh-terracotta" />
              </div>
              <h3 className="font-display text-lg font-semibold text-wh-charcoal mb-2">
                Base de datos comunitaria
              </h3>
              <p className="text-sm text-wh-stone leading-relaxed">
                Toda la info en un solo lugar, construida por quienes ya vivieron la experiencia.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-wh-sand/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-wh-olive/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-wh-olive-dark" />
              </div>
              <h3 className="font-display text-lg font-semibold text-wh-charcoal mb-2">
                Hecha entre todos
              </h3>
              <p className="text-sm text-wh-stone leading-relaxed">
                Cada experiencia, review y dato útil viene de alguien como vos.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-wh-sand/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-wh-mustard/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-wh-mustard" />
              </div>
              <h3 className="font-display text-lg font-semibold text-wh-charcoal mb-2">
                Real y transparente
              </h3>
              <p className="text-sm text-wh-stone leading-relaxed">
                Sin filtros, sin marketing. Las cosas como son, con honestidad total.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-wh-sand/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="font-display text-lg font-semibold text-wh-charcoal mb-2">
                Hermandad Latina
              </h3>
              <p className="text-sm text-wh-stone leading-relaxed">
                Unidos por el idioma y la cultura. Siempre hay un hermano o hermana en cada destino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wh-charcoal text-wh-sand py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <Globe className="w-5 h-5 text-wh-terracotta" />
              <span className="font-display text-lg font-semibold">WH Community</span>
            </div>
            <p className="text-sm text-wh-sand leading-relaxed max-w-xl">
              Proyecto open source creado por estonian port / Sebastian Rodriguez y Micaela Castaño de koko___mate como empresa creadora.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className="text-sm text-wh-sand hover:text-white transition-colors">
                Cargar experiencia
              </a>
              <span className="text-wh-stone">·</span>
              <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className="text-sm text-wh-sand hover:text-white transition-colors">
                Review a empresa
              </a>
              <span className="text-wh-stone">·</span>
              <Link to="/creadores" className="text-sm text-wh-sand hover:text-white transition-colors">
                Creadores
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
