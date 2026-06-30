import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Star, ChevronDown, ChevronUp, User, Calendar, Briefcase, Building, BookOpen, MessageCircle, Inbox } from 'lucide-react';
import {
  getCountryById,
  getExperiencesByCountry,
  getReviewsByCountry,
  getUsefulInfoByCountry,
} from '../services/dataService';

const TAB_CONFIG = [
  { id: 'experiencias', label: 'Experiencias', icon: MessageCircle },
  { id: 'reviews', label: 'Reviews de Empresas', icon: Building },
  { id: 'datos', label: 'Datos Útiles', icon: BookOpen },
] as const;

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Inbox className="w-12 h-12 text-wh-sand mb-4" />
      <p className="text-wh-stone text-sm max-w-md">{message}</p>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-wh-mustard fill-wh-mustard' : 'text-wh-sand'}`}
        />
      ))}
    </div>
  );
}

function ExperienceCard({ experience }: { experience: { userName: string; date: string; story: string; avatar?: string } }) {
  return (
    <div className="bg-white rounded-xl border border-wh-sand/50 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-wh-terracotta/10 flex items-center justify-center text-wh-terracotta">
          <User className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-wh-charcoal text-sm">{experience.userName}</h4>
          <div className="flex items-center gap-1 text-xs text-wh-stone">
            <Calendar className="w-3 h-3" />
            {experience.date}
          </div>
        </div>
      </div>
      <p className="text-sm text-wh-charcoal leading-relaxed whitespace-pre-wrap">{experience.story}</p>
    </div>
  );
}

function ReviewCard({ review }: { review: { companyName: string; role: string; rating: number; comment: string; date: string; reviewerName: string } }) {
  return (
    <div className="bg-white rounded-xl border border-wh-sand/50 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-wh-olive/10 flex items-center justify-center text-wh-olive-dark">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-medium text-wh-charcoal text-sm">{review.companyName}</h4>
            <span className="text-xs text-wh-stone">{review.role}</span>
          </div>
        </div>
        <StarRating rating={review.rating} />
      </div>
      <p className="text-sm text-wh-charcoal leading-relaxed mb-3">{review.comment}</p>
      <div className="flex items-center gap-1 text-xs text-wh-stone">
        <User className="w-3 h-3" />
        <span>{review.reviewerName}</span>
        <span className="mx-1">·</span>
        <Calendar className="w-3 h-3" />
        <span>{review.date}</span>
      </div>
    </div>
  );
}

function AccordionItem({ title, content }: { title: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-wh-sand/50 rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-wh-warm/50 transition-colors"
      >
        <span className="font-medium text-wh-charcoal text-sm">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-wh-stone" /> : <ChevronDown className="w-4 h-4 text-wh-stone" />}
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-wh-stone leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      )}
    </div>
  );
}

export function CountryDashboard() {
  const { countryId } = useParams<{ countryId: string }>();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('experiencias');

  const country = getCountryById(countryId || '');
  const experiences = getExperiencesByCountry(countryId || '');
  const reviews = getReviewsByCountry(countryId || '');
  const usefulInfo = getUsefulInfoByCountry(countryId || '');

  if (!country) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="font-display text-2xl font-bold text-wh-charcoal mb-4">País no encontrado</h1>
        <p className="text-wh-stone mb-6">El país que buscás no está en nuestra lista.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-wh-terracotta text-white rounded-full font-medium hover:bg-wh-terracotta-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="bg-white border-b border-wh-sand/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-sm text-wh-stone hover:text-wh-charcoal transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
          <div className="flex items-center gap-4">
            <span className="text-4xl md:text-5xl">{country.flag}</span>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-wh-charcoal">
                {country.name}
              </h1>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-wh-olive/10 text-wh-olive-dark mt-1">
                Visa {country.visaDuration}
              </span>
            </div>
          </div>
          <p className="text-wh-stone mt-3 max-w-2xl text-sm md:text-base leading-relaxed">
            {country.description}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-1 border-b border-wh-sand/50 mb-6 overflow-x-auto">
          {TAB_CONFIG.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-wh-terracotta text-wh-terracotta'
                    : 'border-transparent text-wh-stone hover:text-wh-charcoal'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'experiencias' && (
          <div>
            {experiences.length === 0 ? (
              <EmptyState message="Aún no hay experiencias cargadas para este país. ¡Sé el primero!" />
            ) : (
              <div className="space-y-4">
                {experiences.map((exp) => (
                  <ExperienceCard key={exp.id} experience={exp} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            {reviews.length === 0 ? (
              <EmptyState message="Aún no hay reviews de empresas para este país. ¡Sé el primero en compartir tu experiencia laboral!" />
            ) : (
              <div className="space-y-4">
                {reviews.map((rev) => (
                  <ReviewCard key={rev.id} review={rev} />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'datos' && (
          <div>
            {!usefulInfo || usefulInfo.items.length === 0 ? (
              <EmptyState message="Aún no hay datos útiles para este país. ¡Sé el primero en contribuir!" />
            ) : (
              <div className="space-y-3">
                {usefulInfo.items.map((item, idx) => (
                  <AccordionItem key={idx} title={item.title} content={item.content} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
