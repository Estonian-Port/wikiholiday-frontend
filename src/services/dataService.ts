export interface Experience {
  id: string;
  countryId: string;
  userName: string;
  date: string;
  story: string;
  avatar?: string;
}

export interface Review {
  id: string;
  countryId: string;
  companyName: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
}

export interface UsefulInfoItem {
  title: string;
  content: string;
}

export interface UsefulInfo {
  countryId: string;
  items: UsefulInfoItem[];
}

export interface Country {
  id: string;
  name: string;
  flag: string;
  description: string;
  visaDuration: string;
  color: string;
}

export const countries: Country[] = [
  { id: "japon", name: "Japón", flag: "🇯🇵", description: "Tierra del sol naciente, perfecta para sumergirse en cultura milenaria mientras trabajás.", visaDuration: "12 meses", color: "bg-rose-50" },
  { id: "dinamarca", name: "Dinamarca", flag: "🇩🇰", description: "Calidad de vida excepcional, bicicletas y hygge. El Work & Holiday nórdico.", visaDuration: "12 meses", color: "bg-blue-50" },
  { id: "alemania", name: "Alemania", flag: "🇩🇪", description: "Potencia económica europea con oportunidades en tecnología y turismo.", visaDuration: "12 meses", color: "bg-amber-50" },
  { id: "francia", name: "Francia", flag: "🇫🇷", description: "Arte, gastronomía y cultura en el corazón de Europa.", visaDuration: "12 meses", color: "bg-blue-50" },
  { id: "nueva-zelanda", name: "Nueva Zelanda", flag: "🇳🇿", description: "Aventura en paisajes de película. El destino WH más buscado.", visaDuration: "12 meses", color: "bg-emerald-50" },
  { id: "australia", name: "Australia", flag: "🇦🇺", description: "Playas, sol y trabajo. El clásico destino Working Holiday.", visaDuration: "12 meses", color: "bg-yellow-50" },
  { id: "corea-del-sur", name: "Corea del Sur", flag: "🇰🇷", description: "K-cultura, tecnología y gastronomía única en Asia.", visaDuration: "12 meses", color: "bg-red-50" },
  { id: "austria", name: "Austria", flag: "🇦🇹", description: "Alpes, música clásica y calidad de vida centroeuropea.", visaDuration: "6 meses", color: "bg-red-50" },
  { id: "hungria", name: "Hungría", flag: "🇭🇺", description: "Budapest, baños termales y costo de vida accesible en Europa.", visaDuration: "12 meses", color: "bg-green-50" },
];

const experiences: Experience[] = [
  {
    id: "exp1",
    countryId: "japon",
    userName: "María Sol",
    date: "2024-03-15",
    story: "Llegué a Tokio sin saber japonés y me contrataron en una fábrica de sake en Saitama. El primer mes fue durísimo, pero con el tiempo aprendí a leer los básicos del kanji. Lo mejor: los compañeros de trabajo me invitaban a karaokes. Lo peor: el invierno. Recomiendo llevá pesos argentinos y cambiar en Shinjuku. El alquiler de una share house me salía 55.000 yenes.",
    avatar: "https://i.pravatar.cc/150?u=maria",
  },
  {
    id: "exp2",
    countryId: "japon",
    userName: "Juan P.",
    date: "2023-11-02",
    story: "Trabajé en una granja de arroz en Niigata durante el verano. El trabajo es duro, pero la paga es buena. Alquilé una bicicleta y me mudaba entre campos. El dueño de la granja me prestó una casita de madera. Hice amistades que todavía mantengo. Mi consejo: no tengas miedo de irte a zonas rurales.",
    avatar: "https://i.pravatar.cc/150?u=juan",
  },
  {
    id: "exp3",
    countryId: "japon",
    userName: "Camila R.",
    date: "2024-01-20",
    story: "Fui a Japón como au pair en Osaka. La familia era increíble, pero los horarios de los niños me volvían loca. Terminé haciendo un curso de sushi en mis días libres. Ahora tengo una certificación de sushiman y trabajo en un restaurante en Buenos Aires. Japón me cambió la vida.",
    avatar: "https://i.pravatar.cc/150?u=camila",
  },
  {
    id: "exp4",
    countryId: "dinamarca",
    userName: "Lucas F.",
    date: "2024-02-10",
    story: "Dinamarca es caro. Pero los salarios compensan. Trabajé como delivery en bicicleta en Copenhague. Llovía mucho, pero la bici era eléctrica y la empresa te daba equipo de lluvia. Alquilé un cuarto en Norrebro por 4.500 coronas. Recomiendo la app de BoligPortal para alquileres. La gente es reservada pero amable.",
    avatar: "https://i.pravatar.cc/150?u=lucas",
  },
  {
    id: "exp5",
    countryId: "dinamarca",
    userName: "Valentina",
    date: "2023-09-05",
    story: "Hice el Working Holiday en Dinamarca porque amo el diseño. Conseguí trabajo en una cafetería de especialidad en Aarhus. El dueño era argentino, me dio la mano. Después pasé a ser barista. La cultura laboral es increíble: respetan los horarios, te dan break de 30 minutos pagados. La comida es cara, pero hay supermercados como Netto y Rema1000 que son más baratos.",
    avatar: "https://i.pravatar.cc/150?u=valentina",
  },
  {
    id: "exp6",
    countryId: "nueva-zelanda",
    userName: "Santiago",
    date: "2024-04-12",
    story: "Nueva Zelanda es un sueño. Llegué a Auckland y a los 3 días ya tenía trabajo en un viñedo en Marlborough. La cosecha es intensa, pero la paga es excelente. Vivíamos en un camping que nos alquilaba el viñedo. Ahorré lo suficiente para hacer un road trip por el Sur. Hicimos el Milford Sound y lloré de la emoción.",
    avatar: "https://i.pravatar.cc/150?u=santiago",
  },
  {
    id: "exp7",
    countryId: "australia",
    userName: "Delfi",
    date: "2023-12-01",
    story: "Australia es el clásico por algo. Trabajé en una construcción en Brisbane. 35 dólares la hora. El clima es brutal, pero la plata es real. Compartí departamento con 3 brasileros y un italiano. El alquiler en Gold Coast era más barato que en Sydney. Consejo: sacá la TFN (Tax File Number) antes de empezar a laburar.",
    avatar: "https://i.pravatar.cc/150?u=delfi",
  },
];

const reviews: Review[] = [
  {
    id: "rev1",
    countryId: "japon",
    companyName: "Sakura Farms",
    role: "Recolección de frutas",
    rating: 4,
    comment: "Buen ambiente, pagan a tiempo. El trabajo es físico pero justo. Te dan alojamiento y comidas. El único contra: los horarios de verano son extremos.",
    date: "2024-01-15",
    reviewerName: "María Sol",
  },
  {
    id: "rev2",
    countryId: "japon",
    companyName: "Tokyo Sushi Co.",
    role: "Ayudante de cocina",
    rating: 2,
    comment: "No recomiendo. El jefe es muy exigente y las horas extra no se pagan. El ambiente es tóxico. Solo bueno si querés aprender a hacer sushi y aguantás 3 meses.",
    date: "2023-10-20",
    reviewerName: "Juan P.",
  },
  {
    id: "rev3",
    countryId: "japon",
    companyName: "JET Programme Support",
    role: "Asistente de idioma",
    rating: 5,
    comment: "El mejor trabajo que tuve. La escuela me trató como familia. Horarios fijos, buen sueldo, y muchos feriados. Ideal si tenés título universitario.",
    date: "2024-02-01",
    reviewerName: "Camila R.",
  },
  {
    id: "rev4",
    countryId: "dinamarca",
    companyName: "Wolt CPH",
    role: "Delivery en bicicleta",
    rating: 4,
    comment: "Flexible, pago semanal. La app funciona bien. En invierno es duro, pero te dan buen equipo. Los restaurantes suelen ser amables.",
    date: "2024-01-10",
    reviewerName: "Lucas F.",
  },
  {
    id: "rev5",
    countryId: "dinamarca",
    companyName: "Café La Cabra",
    role: "Barista",
    rating: 5,
    comment: "Excelente empresa. Dueño argentino super buena onda. Capacitación constante, buen ambiente, salario justo. El café es de altísima calidad.",
    date: "2023-11-05",
    reviewerName: "Valentina",
  },
  {
    id: "rev6",
    countryId: "nueva-zelanda",
    companyName: "Marlborough Vineyards Ltd",
    role: "Cosecha de uva",
    rating: 4,
    comment: "Temporada intensa pero muy bien paga. Alojamiento en el camping incluido. Buen ambiente entre los trabajadores. Se hacen asados todos los fines de semana.",
    date: "2024-03-20",
    reviewerName: "Santiago",
  },
  {
    id: "rev7",
    countryId: "australia",
    companyName: "Brisbane Builders",
    role: "Ayudante de obra",
    rating: 3,
    comment: "Paga excelente pero es peligroso. El clima es extremo. Si no tenés experiencia, te tratan medio mal. No es para todos.",
    date: "2024-01-05",
    reviewerName: "Delfi",
  },
];

const usefulInfo: UsefulInfo[] = [
  {
    countryId: "japon",
    items: [
      {
        title: "Cómo sacar cuenta bancaria",
        content: "En Japón es relativamente fácil para extranjeros. El banco más accesible es Shinsei Bank (ahora SBI Sumishin Net Bank). Necesitás: pasaporte, visa de Working Holiday, tarjeta de residencia (si aplica), y comprobante de domicilio. También MUFG Bank y SMBC Trust Bank aceptan extranjeros. Algunos bancos piden sellos (hanko) en lugar de firma.",
      },
      {
        title: "Empresas de telefonía",
        content: "Las opciones más populares entre WH son: Sakura Mobile (en inglés, fácil para extranjeros), Mobal (SIM prepago, sin contrato), y a veces comprar un SIM de data en tiendas como Bic Camera. Rakuten Mobile es gratis el primer año pero tiene cobertura irregular. Evita los contratos de 2 años con las grandes como Docomo o SoftBank.",
      },
      {
        title: "Impuestos",
        content: "Japón tiene un sistema de impuestos progresivo. Si trabajás menos de un año, podés pedir la devolución de impuestos al irte. El año fiscal es de abril a marzo. Necesitás el número de residencia (My Number). Recomendamos contratar un tax accountant en inglés antes de irse. La devolución se hace presentando el formulario de salida en el aeropuerto.",
      },
      {
        title: "Alquileres",
        content: "El sistema de alquiler en Japón es complejo. La 'key money' (reikin) es un pago de gratitud al propietario equivalente a 1-2 meses de alquiler. Además pagás depósito (shikikin), que se devuelve al irte. Las share houses son la mejor opción para WH: sin key money, mobiliario incluido, y compartís con extranjeros. Páginas: Sakura House, Oakhouse, y Share 180.",
      },
      {
        title: "Transporte",
        content: "La JR Pass ya no es rentable para estadías largas. Mejor comprar una tarjeta Suica/Pasmo para trenes y buses. Hay pases mensuales para rutas fijas. Las bicicletas son populares en ciudades pequeñas. En Tokio, el transporte es caro; si vivís en la periferia, buscá una línea directa al centro.",
      },
    ],
  },
  {
    countryId: "dinamarca",
    items: [
      {
        title: "Cómo sacar cuenta bancaria",
        content: "En Dinamarca necesitás un CPR number (número de residencia) para abrir una cuenta bancaria. Los bancos más amigables con extranjeros son Lunar y Revolut. Nordea y Danske Bank también funcionan pero piden más papeles. Con el CPR, la cuenta se abre en días. Sin CPR, es casi imposible.",
      },
      {
        title: "Empresas de telefonía",
        content: "Lebara y CBB son las mejores opciones para extranjeros. No piden CPR, son prepago, y tienen buena cobertura. 3 (Hi3G) también tiene planes baratos. El roaming en la UE está incluido. Evita los contratos de 24 meses con TDC o Telia.",
      },
      {
        title: "Impuestos",
        content: "Dinamarca tiene un sistema fiscal complejo. El impuesto a la renta es alto (aprox 40% para salarios medios). Pero si no tenés residencia permanente, podés calificar para un 'tax card' que reduce la retención. Asegurate de registrarte en SKAT (la agencia tributaria) con tu CPR. Recomendamos usar un contador en Copenhague si laburás más de 6 meses.",
      },
      {
        title: "Alquileres",
        content: "El mercado inmobiliario de Copenhague es brutal. La demanda supera a la oferta. Las mejores páginas son BoligPortal, DBA, y Facebook groups como 'Room for rent in Copenhagen'. Un cuarto en un apartamento compartido sale entre 4.000 y 6.000 coronas. Para compartir: buscá en los grupos de Facebook de latinos. La ley te protege: el depósito no puede superar 3 meses de alquiler.",
      },
      {
        title: "Transporte",
        content: "Copenhague es la ciudad de la bicicleta. Hay más bicis que autos. Alquilá una bici usada en DBA (costa unas 800 coronas). El transporte público es excelente: metro, trenes, y buses integrados. La tarjeta Rejsekort te da descuentos. Para viajes interurbanos, DSB es el tren estatal. En invierno el transporte en bici es duro, pero la infraestructura es increíble.",
      },
    ],
  },
  {
    countryId: "nueva-zelanda",
    items: [
      {
        title: "Cómo sacar cuenta bancaria",
        content: "En NZ necesitás un IRD number (número de impuestos) para laburar legalmente. Los bancos más amigables son ANZ, Westpac, y Kiwibank. Para abrir cuenta: pasaporte, visa de WH, y comprobante de domicilio. Algunos bancos piden que ya tengas un trabajo confirmado. La cuenta se abre en el día. Pedí una tarjeta de débito.",
      },
      {
        title: "Empresas de telefonía",
        content: "Skinny, 2degrees, y One NZ son las más populares. Skinny es la más barata: 16 NZD por 1.2GB. 2degrees tiene buena cobertura rural. One NZ (antes Vodafone) tiene la mejor cobertura pero es más cara. Todos los planes son prepago, sin contratos. El WiFi en hostels es variable.",
      },
      {
        title: "Impuestos",
        content: "Nueva Zelanda tiene un sistema de impuestos sencillo. El IRD number es obligatorio. La tasa varía entre 10.5% y 39%. Si no tenés IRD, te retienen el 45%. Los trabajadores de temporada (fruit picking) pueden calificar para un 'special tax rate'. La declaración anual es online. Si te vas del país, podés pedir la devolución del overpaid tax.",
      },
      {
        title: "Alquileres",
        content: "En NZ el alquiler es complicado. Las 'share houses' y backpackers son la norma para WH. En Auckland, un cuarto sale 250-350 NZD/semana. En zonas rurales (para trabajos de temporada), las granjas suelen incluir alojamiento. Páginas: TradeMe, Flatmates, y Facebook groups. El 'bond' (depósito) se deposita en Tenancy Services.",
      },
      {
        title: "Transporte",
        content: "NZ es un país para road trip. Alquilar un van es la opción más popular. Intercity es el bus que conecta las principales ciudades. En Auckland y Wellington hay transporte público. Para los fiordos y el sur, necesitás auto. Comprar un auto usado en Trademe es común: un 'Jappa' (auto japonés viejo) sale entre 2.000 y 4.000 NZD.",
      },
    ],
  },
  {
    countryId: "australia",
    items: [
      {
        title: "Cómo sacar cuenta bancaria",
        content: "Australia es fácil para abrir cuenta. Los bancos grandes: Commonwealth Bank, ANZ, Westpac, NAB. Podés abrir online desde tu país antes de llegar. Necesitás: pasaporte, visa, y TFN (Tax File Number). Sin TFN, te retienen el 47%. La TFN se pide online en ato.gov.au. La tarjeta de débito llega en una semana.",
      },
      {
        title: "Empresas de telefonía",
        content: "Optus, Telstra, y Vodafone son los grandes. Para WH, los planes prepago de Boost (usa red Telstra), Amaysim, y Circles.Life son los más baratos. Telstra tiene la mejor cobertura rural. Para el outback, necesitás Telstra. En ciudades, cualquiera funciona. Los planes de data son generosos: 50GB por 30 AUD es común.",
      },
      {
        title: "Impuestos",
        content: "El sistema de impuestos australiano es el más claro de los destinos WH. Con TFN, la tasa progresiva arranca en 0%. Si sos residente fiscal, tenés un 'tax-free threshold' de 18.200 AUD. Si no sos residente, pagás desde el primer dólar. La declaración anual es obligatoria. Los 'backpackers' tienen una tasa especial del 15% hasta cierto monto.",
      },
      {
        title: "Alquileres",
        content: "Sydney y Melbourne son carísimas. Brisbane y Perth son más accesibles. Un cuarto en Sydney: 300-450 AUD/semana. Las share houses son la norma. Páginas: Flatmates.com.au, Realestate.com.au, y grupos de Facebook. En zonas rurales (granjas), el alojamiento suele ser incluido o subsidiado. El 'bond' (depósito) equivale a 4 semanas de alquiler y se deposita en una cuenta de gobierno.",
      },
      {
        title: "Transporte",
        content: "En ciudades, Opal (Sydney), Myki (Melbourne), y Go Card (Brisbane) son las tarjetas de transporte. El transporte público es bueno en Sydney y Melbourne. Para viajar entre ciudades, los vuelos de Jetstar y Virgin son baratos. El auto es casi necesario para el outback. Los 'hop-on hop-off' buses son populares para WH: Greyhound y Premier.",
      },
    ],
  },
];

export function getExperiencesByCountry(countryId: string): Experience[] {
  return experiences.filter((e) => e.countryId === countryId);
}

export function getReviewsByCountry(countryId: string): Review[] {
  return reviews.filter((r) => r.countryId === countryId);
}

export function getUsefulInfoByCountry(countryId: string): UsefulInfo | undefined {
  return usefulInfo.find((u) => u.countryId === countryId);
}

export function getCountryById(countryId: string): Country | undefined {
  return countries.find((c) => c.id === countryId);
}
