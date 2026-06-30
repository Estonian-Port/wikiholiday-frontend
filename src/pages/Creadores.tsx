import { Link } from 'react-router-dom';
import { ArrowLeft, Instagram, Youtube, ExternalLink, Crown, MapPin, Heart } from 'lucide-react';

interface Creator {
  id: string;
  name: string;
  handle: string;
  description: string;
  image: string;
  nationality: string;
  isFounder?: boolean;
  socials: {
    instagram?: string;
    tiktok?: string;
    youtube?: string;
  };
}

const creators: Creator[] = [
  {
    id: "koko-mate",
    name: "koko___mate",
    handle: "@koko___mate",
    description: "Micaela Castaño y Sebastian Rodriguez. Creadores de WH Community. Viajeros, creadores de contenido y fundadores de este proyecto open source.",
    image: "https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Argentina / Estonia",
    isFounder: true,
    socials: {
      instagram: "https://instagram.com/koko___mate",
      tiktok: "https://tiktok.com/@koko___mate",
      youtube: "https://youtube.com/@koko___mate",
    },
  },
  {
    id: "pablito-viajero",
    name: "Pablito Viajero",
    handle: "@pablito.viajero",
    description: "Argentino en el mundo. Documenta su vida WH en Europa y Asia con humor y consejos prácticos.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Argentina",
    socials: {
      instagram: "https://instagram.com/pablito.viajero",
      tiktok: "https://tiktok.com/@pablito.viajero",
    },
  },
  {
    id: "mate-y-tatami",
    name: "Mate y Tatami",
    handle: "@mateytatami",
    description: "Pareja argentina que vive en Japón. Comparten desde la vida diaria hasta trámites complejos.",
    image: "https://images.pexels.com/photos/1023233/pexels-photo-1023233.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Argentina",
    socials: {
      instagram: "https://instagram.com/mateytatami",
      youtube: "https://youtube.com/@mateytatami",
    },
  },
  {
    id: "colores-de-japon",
    name: "Colores de Japón",
    handle: "@coloresdejapon",
    description: "Mexicana en Japón. Fotografía, cultura, consejos de vida y exploración del lado menos turístico del país.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "México",
    socials: {
      instagram: "https://instagram.com/coloresdejapon",
      tiktok: "https://tiktok.com/@coloresdejapon",
    },
  },
  {
    id: "yo-me-animo",
    name: "Yo me animo y vos",
    handle: "@yomeanimoyvos",
    description: "Uruguaya en Europa. Motivación, organización de viajes WH y honestidad sobre lo que nadie te cuenta.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Uruguay",
    socials: {
      instagram: "https://instagram.com/yomeanimoyvos",
      youtube: "https://youtube.com/@yomeanimoyvos",
    },
  },
  {
    id: "daniel-en-alemania",
    name: "Daniel en Alemania",
    handle: "@danielenalemania",
    description: "Chileno en Alemania. Experiencias laborales, aprendizaje de idioma y vida cotidiana berlinesa.",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Chile",
    socials: {
      instagram: "https://instagram.com/danielenalemania",
      tiktok: "https://tiktok.com/@danielenalemania",
    },
  },
  {
    id: "laura-en-francia",
    name: "Laura en Francia",
    handle: "@lauraenfrancia",
    description: "Colombiana en Francia. Desde París hasta la Provenza, comparte su WH con un enfoque en la cultura francesa.",
    image: "https://images.pexels.com/photos/4153141/pexels-photo-4153141.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Colombia",
    socials: {
      instagram: "https://instagram.com/lauraenfrancia",
      youtube: "https://youtube.com/@lauraenfrancia",
    },
  },
  {
    id: "nz-con-mili",
    name: "NZ con Mili",
    handle: "@nzconmili",
    description: "Argentina en Nueva Zelanda. Experiencias de trabajo rural, road trips y consejos para ahorrar plata.",
    image: "https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=400",
    nationality: "Argentina",
    socials: {
      instagram: "https://instagram.com/nzconmili",
      tiktok: "https://tiktok.com/@nzconmili",
    },
  },
];

function SocialButton({ type, href }: { type: string; href: string }) {
  if (type === 'instagram') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 text-xs font-medium hover:bg-rose-100 transition-colors"
      >
        <Instagram className="w-3.5 h-3.5" />
        Instagram
      </a>
    );
  }
  if (type === 'youtube') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium hover:bg-red-100 transition-colors"
      >
        <Youtube className="w-3.5 h-3.5" />
        YouTube
      </a>
    );
  }
  if (type === 'tiktok') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 text-gray-700 text-xs font-medium hover:bg-gray-100 transition-colors"
      >
        <ExternalLink className="w-3.5 h-3.5" />
        TikTok
      </a>
    );
  }
  return null;
}

export function Creadores() {
  const founders = creators.filter((c) => c.isFounder);
  const others = creators.filter((c) => !c.isFounder);

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-wh-stone hover:text-wh-charcoal transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-wh-charcoal mb-3">
            Creadores de contenido
          </h1>
          <p className="text-wh-stone max-w-xl">
            Personas que documentan la vida Work & Holiday en distintos países. Inspiración real, sin filtros.
          </p>
        </div>

        {/* Founders Banner */}
        {founders.map((founder) => (
          <div
            key={founder.id}
            className="relative bg-gradient-to-br from-wh-terracotta/10 via-wh-warm to-wh-olive/10 rounded-2xl border border-wh-terracotta/20 p-6 md:p-8 mb-10 overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wh-terracotta text-white text-xs font-medium">
                <Crown className="w-3.5 h-3.5" />
                Fundadores
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start gap-5">
              <div className="w-20 h-20 rounded-2xl bg-wh-terracotta/20 flex items-center justify-center overflow-hidden shrink-0">
                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-wh-charcoal mb-1">
                  {founder.name}
                </h2>
                <div className="flex items-center gap-2 text-sm text-wh-stone mb-3">
                  <span className="text-wh-terracotta font-medium">{founder.handle}</span>
                  <span>·</span>
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{founder.nationality}</span>
                </div>
                <p className="text-wh-charcoal text-sm md:text-base leading-relaxed mb-4">
                  {founder.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {founder.socials.instagram && <SocialButton type="instagram" href={founder.socials.instagram} />}
                  {founder.socials.tiktok && <SocialButton type="tiktok" href={founder.socials.tiktok} />}
                  {founder.socials.youtube && <SocialButton type="youtube" href={founder.socials.youtube} />}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other Creators Grid */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wh-olive/10 text-wh-olive-dark text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Más creadores de la comunidad
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((creator) => (
            <div
              key={creator.id}
              className="bg-white rounded-2xl border border-wh-sand/50 p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-wh-terracotta/10 overflow-hidden shrink-0">
                  <img src={creator.image} alt={creator.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-wh-charcoal">{creator.name}</h3>
                  <div className="flex items-center gap-1 text-xs text-wh-stone">
                    <MapPin className="w-3 h-3" />
                    <span>{creator.nationality}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-wh-stone leading-relaxed mb-4">{creator.description}</p>
              <div className="flex flex-wrap gap-2">
                {creator.socials.instagram && <SocialButton type="instagram" href={creator.socials.instagram} />}
                {creator.socials.tiktok && <SocialButton type="tiktok" href={creator.socials.tiktok} />}
                {creator.socials.youtube && <SocialButton type="youtube" href={creator.socials.youtube} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
