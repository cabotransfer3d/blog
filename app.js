const translations = {
  es: {
    name: "Español", dir: "ltr",
    navGuides: "Guías", navIdeas: "Ideas de viaje", navItineraries: "Itinerarios", navGallery: "Galería", navFaq: "Preguntas", navConcierge: "Concierge",
    heroKicker: "Guía premium de Los Cabos", heroTitle: "Descubre Los Cabos con elegancia, calma y buenos consejos.", heroLead: "Playas reales, ideas por ocasión, rutas inteligentes, qué llevar, cuánto quedarse y cómo moverse sin perder tiempo desde que aterrizas.", heroButtonPrimary: "Explorar la guía", heroButtonSecondary: "Consultar concierge",
    statBeaches: "Playas", statBeachesSub: "dónde ir y cuándo", statPacking: "Qué llevar", statPackingSub: "maleta inteligente", statDuration: "Duración", statDurationSub: "3, 5 o 7 días", statOccasion: "Ocasión", statOccasionSub: "familia o romance", statConcierge: "Concierge", statConciergeSub: "transporte privado",
    introLabel: "Primero lo importante", introTitle: "Un blog pensado para que el viajero diga: “esto sí me ayudó”.", introText1: "Los Cabos no se disfruta igual cuando improvisas todo que cuando sabes qué playa elegir, qué hora evitar, dónde conviene reservar y cómo moverte sin estrés.", introText2: "Esta guía está escrita para familias, parejas, aniversarios, lunas de miel y viajeros que desean una experiencia bonita, segura y bien organizada.",
    beachPill: "Guía de playas", beachTitle: "Playas que sí valen la pena en Los Cabos", beachLead: "El Médano es práctico y lleno de vida; Chileno Bay y Santa María son excelentes para un día más tranquilo; Lovers Beach es ideal para combinar foto, paseo en barco y visita al Arco.", readBeachGuide: "Leer recomendaciones",
    mini1Label: "Imperdible", mini1Title: "El Arco y Land’s End", mini1Text: "Mejor temprano para luz suave, menos calor y fotografías más limpias.", mini2Label: "Práctico", mini2Title: "Marina y bahía", mini2Text: "Buena zona para caminar, comer, comprar recuerdos y tomar tours de medio día.",
    conciergeTopline: "Sugerencia discreta", conciergeTitle: "Tu viaje se siente mejor cuando el transporte ya está resuelto.", conciergeText: "Para llegadas, cenas, tours, aniversarios o rutas privadas, un chofer probado evita esperas, negociaciones incómodas y cambios de último minuto.", conciergeItem1: "Recibimiento en aeropuerto", conciergeItem2: "Traslados privados hotel, villa o marina", conciergeItem3: "Paquetes por horas con chofer probado", conciergeItem4: "Apoyo para organizar momentos especiales", conciergeButton: "WhatsApp concierge",
    beachGuideLabel: "Playas y ambiente", beachGuideTitle: "Dónde ir según tu estilo de viaje", beachGuideIntro: "Una buena playa no siempre es la más famosa; es la que combina con tu edad, tu energía, tu agenda y la seguridad del mar ese día.",
    medanoTag: "Ambiente y comodidad", medanoTitle: "El Médano", medanoText: "Ideal para quienes quieren restaurantes cerca, movimiento, música, actividades acuáticas y acceso fácil. Funciona muy bien para un primer día sin complicarse.", loversTag: "Foto clásica", loversTitle: "Lovers Beach", loversText: "Perfecta para visitar en barco junto con El Arco. Lleva agua, protector solar y planea regresar con tiempo porque el acceso depende de embarcaciones.", chilenoTag: "Más tranquilo", chilenoTitle: "Chileno Bay y Santa María", chilenoText: "Muy buenas para viajeros que desean un ritmo más relajado. Consulta las banderas de seguridad antes de entrar al mar y evita llevar demasiado equipaje.",
    packingLabel: "Maleta inteligente", packingTitle: "Qué llevar para disfrutar Cabo sin comprar todo a última hora", packingIntro: "La clave es vestir ligero, protegerte del sol y preparar una pequeña bolsa de playa que puedas mover fácil entre hotel, auto, marina y restaurante.", pack1Title: "Sol y playa", pack1Text: "Bloqueador amigable con el arrecife, gorra o sombrero, lentes, traje de baño extra y sandalias cómodas.", pack2Title: "Salidas y cenas", pack2Text: "Ropa fresca pero elegante, una camisa ligera, vestido cómodo o pantalón de lino, y calzado que soporte caminar.", pack3Title: "Tours", pack3Text: "Bolsa impermeable, batería portátil, copia de reservas, efectivo pequeño y una toalla compacta.", pack4Title: "Niños o adultos mayores", pack4Text: "Snacks, agua, medicamentos habituales, identificación, sombrilla pequeña y tiempos de descanso programados.",
    durationLabel: "Cuánto tiempo quedarse", durationTitle: "El viaje ideal según los días disponibles", durationIntro: "No todos necesitan una semana completa, pero sí conviene ordenar bien los traslados para no gastar las mejores horas del día resolviendo logística.", duration3Title: "Tres días", duration3Text: "Para una escapada: llegada cómoda, cena frente al mar, tour al Arco, una playa tranquila y una noche especial.", duration3Best: "Mejor para parejas o viajes rápidos.", duration5Title: "Cinco días", duration5Text: "La opción más equilibrada: playa, snorkel, San José del Cabo, marina, atardecer y tiempo para descansar.", duration5Best: "Ideal para familia, aniversario o primera visita.", duration7Title: "Siete días o más", duration7Text: "Para un viaje completo: agrega Todos Santos, La Paz, experiencias gastronómicas, spa, shopping y rutas privadas.", duration7Best: "Perfecto para luna de miel o vacaciones largas.",
    ideasLabel: "Ideas por ocasión", ideasTitle: "Qué hacer según con quién viajas", ideasIntro: "La misma ciudad puede sentirse familiar, aventurera, romántica o profundamente tranquila. El secreto está en ordenar bien el día.",
    familyTitle: "Familias con niños", familyText: "Elige playa de fácil acceso por la mañana, comida temprana, descanso después del almuerzo y una actividad corta al atardecer. Evita tours demasiado largos si hay niños pequeños.", familyList1: "Barco corto al Arco", familyList2: "Playa con servicios cerca", familyList3: "Cena casual antes de que todos estén cansados",
    teensTitle: "Adolescentes y jóvenes", teensText: "Busca actividades con movimiento: snorkel, kayak, marina, fotos en lugares icónicos y una cena con ambiente. Mantén horarios claros para evitar confusiones.", teensList1: "Snorkel o paddleboard", teensList2: "Marina y spots para fotos", teensList3: "Traslados privados si salen de noche",
    coupleTitle: "Parejas", coupleText: "No llenes el día de actividades. Cabo luce más cuando hay espacio para caminar lento, mirar el mar, cenar sin prisa y cerrar con un traslado cómodo.", coupleList1: "Atardecer frente al mar", coupleList2: "Cena reservada con tiempo", coupleList3: "Ruta privada de regreso al hotel",
    anniversaryTitle: "Aniversario", anniversaryText: "La clave es que todo se sienta fluido: auto listo, restaurante confirmado, tiempo para fotos y cero carreras entre un lugar y otro.", anniversaryList1: "Fotos al atardecer", anniversaryList2: "Cena con vista o terraza", anniversaryList3: "Detalle sorpresa coordinado con concierge",
    honeymoonTitle: "Luna de miel", honeymoonText: "Alterna un día de aventura con un día lento. Un viaje de luna de miel se recuerda más por los momentos bien cuidados que por correr detrás de una lista.", honeymoonList1: "Desayuno lento y playa tranquila", honeymoonList2: "Paseo privado o sunset cruise", honeymoonList3: "Chofer por horas para una noche elegante",
    seniorsTitle: "Adultos mayores", seniorsText: "Prioriza sombra, traslados cercanos, tiempos de descanso y restaurantes con acceso cómodo. No todo tiene que ser aventura para ser memorable.", seniorsList1: "Paseos panorámicos", seniorsList2: "Comidas con vista y acceso sencillo", seniorsList3: "Auto privado para evitar caminatas largas",
    itineraryLabel: "Planes listos", itineraryTitle: "Itinerarios que puedes copiar y adaptar", itineraryIntro: "Úsalos como punto de partida. El concierge puede ayudarte a ajustar horarios, restaurantes y traslados según tu hotel o villa.", tab3: "3 días", tab5: "5 días", tab7: "7 días",
    tipsLabel: "Consejos útiles", tipsTitle: "Detalles pequeños que mejoran mucho el viaje", tip1Title: "Revisa banderas de playa", tip1Text: "En Los Cabos hay playas preciosas, pero no todas son ideales para nadar todos los días. Mira las banderas y pregunta antes de entrar.", tip2Title: "Reserva horas clave", tip2Text: "El amanecer y el atardecer son los momentos más bonitos para fotos, tours cortos y cenas especiales.", tip3Title: "No llenes demasiado la agenda", tip3Text: "Una buena experiencia necesita pausas. Cabo se disfruta mejor cuando hay tiempo para descansar y mirar el mar.", tip4Title: "Asegura transporte para cenas", tip4Text: "Si vas a cenar lejos del hotel, reservar transporte evita esperas y te permite disfrutar sin estar pendiente de cómo regresar.",
    galleryLabel: "Fotos reales de la zona", galleryTitle: "Una mirada visual a Cabo", galleryIntro: "Imágenes públicas enlazadas desde Wikimedia Commons para mantener el blog ligero y con referencias reales de Los Cabos.", gallery1: "El Arco, el icono natural de Cabo San Lucas.", gallery2: "Bahía de Cabo San Lucas, perfecta para iniciar el viaje.", gallery3: "Rocas, mar y el paisaje clásico de Land’s End.", gallery4: "Playas y hoteles frente al mar en el corredor turístico.",
    faqLabel: "Preguntas frecuentes", faqTitle: "Respuestas rápidas antes de viajar", faq1Q: "¿Cuál es la mejor zona para hospedarse?", faq1A: "Depende del estilo de viaje. Cabo San Lucas es práctico para marina, vida nocturna y tours; San José del Cabo es más tranquilo, artístico y elegante; el corredor turístico funciona muy bien para resorts y descanso.", faq2Q: "¿Conviene alquilar auto?", faq2A: "Si vas a moverte mucho por tu cuenta, puede servir. Pero para aeropuerto, cenas, rutas especiales o grupos, un transporte privado con chofer suele ser más cómodo y seguro.", faq3Q: "¿Cuándo reservar actividades?", faq3A: "Lo ideal es reservar las actividades importantes antes de llegar, especialmente tours al Arco, cenas románticas, traslados de aeropuerto y experiencias de temporada.", faq4Q: "¿Qué debo evitar?", faq4A: "Evita entrar al mar sin revisar condiciones, llegar tarde a tours, dejar traslados para último momento y programar demasiadas actividades el día de llegada.",
    ctaLabel: "Concierge personal", ctaTitle: "Haz que Cabo se sienta fácil desde el primer minuto.", ctaText: "Si deseas transporte privado, chofer probado, apoyo para rutas por horas o una llegada sin estrés, puedes escribir de forma directa y discreta por WhatsApp.", ctaButton: "Escribir por WhatsApp", footerText: "Blog de viaje, ideas útiles y concierge privado para Los Cabos.", backTop: "Volver arriba", credits: "Fotos enlazadas desde Wikimedia Commons. La información de playas y actividades debe verificarse siempre con condiciones locales del día.",
    plans: {
      3: [
        { day: "Día 1", title: "Llegada tranquila", text: "Traslado privado desde el aeropuerto, check-in sin carreras, comida ligera y paseo corto por marina o playa cercana.", items: ["Evita tours largos este día", "Reserva cena cerca del hotel", "Confirma hora de recogida para el día siguiente"] },
        { day: "Día 2", title: "El Arco y playa", text: "Tour temprano a El Arco, fotos en Land’s End, tiempo de playa y tarde libre para descansar antes de una cena bonita.", items: ["Lleva agua y protector solar", "Sal temprano para mejor luz", "No programes demasiadas actividades"] },
        { day: "Día 3", title: "Despedida con calma", text: "Desayuno sin prisa, compras ligeras, última vista al mar y traslado al aeropuerto con margen suficiente.", items: ["Revisa hora de salida del hotel", "Deja lista la maleta antes del desayuno", "Coordina transporte con anticipación"] }
      ],
      5: [
        { day: "Día 1", title: "Llegada y cena suave", text: "Instálate, camina por la zona, cena temprano y guarda energía para aprovechar los siguientes días.", items: ["Traslado directo al hotel", "Comida ligera", "Descanso real"] },
        { day: "Día 2", title: "Arco, marina y fotos", text: "Visita El Arco por la mañana, camina la marina y reserva el atardecer para fotos o cena frente al mar.", items: ["Tour temprano", "Ropa cómoda", "Cena con reserva"] },
        { day: "Día 3", title: "Playa tranquila", text: "Día para Chileno Bay o Santa María, snorkel suave y tarde de descanso. Es un buen día para familias.", items: ["Revisa banderas", "Lleva snacks", "Evita cargar demasiado"] },
        { day: "Día 4", title: "San José del Cabo", text: "Centro histórico, galerías, cafés, compras bonitas y una cena más elegante en ambiente tranquilo.", items: ["Ideal para parejas", "Buen plan de aniversario", "Transporte privado recomendado"] },
        { day: "Día 5", title: "Cierre flexible", text: "Spa, compras, brunch o actividad corta antes de salir. No dejes el traslado de aeropuerto para último minuto.", items: ["Confirma vuelo", "Salida con margen", "Últimas fotos"] }
      ],
      7: [
        { day: "Día 1", title: "Llegada bien cuidada", text: "Traslado privado, check-in, descanso y primera cena sin agenda pesada.", items: ["Baja el ritmo", "Hidrátate", "Confirma planes"] },
        { day: "Día 2", title: "El Arco y Cabo San Lucas", text: "Tour al Arco, marina, playa El Médano y cena con ambiente.", items: ["Fotos temprano", "Ropa fresca", "Traslado de regreso"] },
        { day: "Día 3", title: "Snorkel y playa tranquila", text: "Chileno Bay o Santa María para un día más relajado, perfecto para familias o parejas que quieren descansar.", items: ["Consulta condiciones del mar", "Lleva agua", "Agenda pausa después del almuerzo"] },
        { day: "Día 4", title: "San José del Cabo", text: "Arte, restaurantes, cafés y compras con un ambiente más calmado y elegante.", items: ["Ideal por la tarde", "Reserva cena", "No corras el recorrido"] },
        { day: "Día 5", title: "Ruta especial", text: "Todos Santos, La Paz o paseo panorámico con chofer por horas para conocer más sin manejar.", items: ["Salir temprano", "Llevar cargador", "Planear paradas fotográficas"] },
        { day: "Día 6", title: "Día lento", text: "Spa, resort, playa, lectura, comida frente al mar y atardecer. Este día hace que las vacaciones se sientan completas.", items: ["No saturar agenda", "Reservar masaje", "Cena especial"] },
        { day: "Día 7", title: "Salida ordenada", text: "Desayuno, compras ligeras y traslado al aeropuerto con suficiente tiempo.", items: ["Revisar documentos", "Empacar temprano", "Confirmar transporte"] }
      ]
    }
  },
  en: {
    name: "English", dir: "ltr",
    navGuides: "Guides", navIdeas: "Travel ideas", navItineraries: "Itineraries", navGallery: "Gallery", navFaq: "FAQ", navConcierge: "Concierge",
    heroKicker: "Premium Los Cabos guide", heroTitle: "Discover Los Cabos with elegance, calm and smart local tips.", heroLead: "Real beaches, ideas by occasion, smart routes, what to pack, how long to stay and how to move around without wasting time after landing.", heroButtonPrimary: "Explore the guide", heroButtonSecondary: "Ask concierge",
    statBeaches: "Beaches", statBeachesSub: "where and when", statPacking: "What to pack", statPackingSub: "smart luggage", statDuration: "Duration", statDurationSub: "3, 5 or 7 days", statOccasion: "Occasion", statOccasionSub: "family or romance", statConcierge: "Concierge", statConciergeSub: "private transport",
    introLabel: "First things first", introTitle: "A blog designed so travelers say: “this actually helped me.”", introText1: "Los Cabos feels different when you know which beach to choose, which hours to avoid, what to book and how to move without stress.", introText2: "This guide is written for families, couples, anniversaries, honeymoons and travelers who want a beautiful, safe and well-organized experience.",
    beachPill: "Beach guide", beachTitle: "Beaches that are truly worth visiting in Los Cabos", beachLead: "El Médano is practical and lively; Chileno Bay and Santa María are excellent for a calmer day; Lovers Beach is ideal for combining photos, a boat ride and the Arch.", readBeachGuide: "Read recommendations",
    mini1Label: "Must-see", mini1Title: "The Arch and Land’s End", mini1Text: "Go early for soft light, less heat and cleaner photos.", mini2Label: "Practical", mini2Title: "Marina and bay", mini2Text: "A good area for walking, eating, shopping and taking half-day tours.",
    conciergeTopline: "Discreet suggestion", conciergeTitle: "Your trip feels better when transportation is already solved.", conciergeText: "For arrivals, dinners, tours, anniversaries or private routes, a trusted chauffeur avoids waits, awkward negotiations and last-minute changes.", conciergeItem1: "Airport reception", conciergeItem2: "Private transfers to hotel, villa or marina", conciergeItem3: "Hourly packages with trusted chauffeur", conciergeItem4: "Support for special moments", conciergeButton: "WhatsApp concierge",
    beachGuideLabel: "Beaches and atmosphere", beachGuideTitle: "Where to go according to your travel style", beachGuideIntro: "A good beach is not always the most famous one; it is the one that matches your age, energy, schedule and the sea conditions that day.",
    medanoTag: "Atmosphere and convenience", medanoTitle: "El Médano", medanoText: "Ideal if you want nearby restaurants, movement, music, water activities and easy access. It works very well for a simple first day.", loversTag: "Classic photo", loversTitle: "Lovers Beach", loversText: "Perfect to visit by boat together with the Arch. Bring water, sunscreen and plan your return because access depends on boats.", chilenoTag: "More relaxed", chilenoTitle: "Chileno Bay and Santa María", chilenoText: "Great for travelers who want a calmer pace. Check safety flags before entering the water and avoid carrying too much.",
    packingLabel: "Smart luggage", packingTitle: "What to pack to enjoy Cabo without buying everything last minute", packingIntro: "The key is light clothing, sun protection and a small beach bag you can move easily between hotel, car, marina and restaurant.", pack1Title: "Sun and beach", pack1Text: "Reef-friendly sunscreen, hat, sunglasses, extra swimsuit and comfortable sandals.", pack2Title: "Outings and dinners", pack2Text: "Fresh but elegant clothes, a light shirt, comfortable dress or linen pants, and shoes made for walking.", pack3Title: "Tours", pack3Text: "Waterproof bag, power bank, reservation copies, small cash and a compact towel.", pack4Title: "Children or seniors", pack4Text: "Snacks, water, regular medicine, ID, a small umbrella and scheduled rest times.",
    durationLabel: "How long to stay", durationTitle: "The ideal trip according to your available days", durationIntro: "Not everyone needs a full week, but it is wise to organize transfers so the best hours of the day are not lost solving logistics.", duration3Title: "Three days", duration3Text: "For a getaway: comfortable arrival, seaside dinner, Arch tour, a calm beach and one special evening.", duration3Best: "Best for couples or quick trips.", duration5Title: "Five days", duration5Text: "The most balanced option: beach, snorkel, San José del Cabo, marina, sunset and real rest time.", duration5Best: "Ideal for families, anniversaries or first visits.", duration7Title: "Seven days or more", duration7Text: "For a complete trip: add Todos Santos, La Paz, dining experiences, spa, shopping and private routes.", duration7Best: "Perfect for honeymoons or longer vacations.",
    ideasLabel: "Ideas by occasion", ideasTitle: "What to do according to who you travel with", ideasIntro: "The same destination can feel familiar, adventurous, romantic or deeply calm. The secret is planning the day well.",
    familyTitle: "Families with children", familyText: "Choose an easy-access beach in the morning, early lunch, rest after lunch and a short sunset activity. Avoid very long tours with small children.", familyList1: "Short boat ride to the Arch", familyList2: "Beach with nearby services", familyList3: "Casual dinner before everyone is tired",
    teensTitle: "Teenagers and young travelers", teensText: "Look for movement: snorkel, kayak, marina, iconic photo spots and dinner with atmosphere. Keep clear schedules to avoid confusion.", teensList1: "Snorkel or paddleboard", teensList2: "Marina and photo spots", teensList3: "Private transfers for nights out",
    coupleTitle: "Couples", coupleText: "Do not overfill the day. Cabo shines when there is space to walk slowly, watch the sea, dine calmly and return comfortably.", coupleList1: "Seaside sunset", coupleList2: "Dinner reserved in advance", coupleList3: "Private route back to the hotel",
    anniversaryTitle: "Anniversary", anniversaryText: "Everything should feel smooth: car ready, restaurant confirmed, time for photos and no rushing between places.", anniversaryList1: "Sunset photos", anniversaryList2: "Dinner with a view or terrace", anniversaryList3: "Surprise detail coordinated with concierge",
    honeymoonTitle: "Honeymoon", honeymoonText: "Alternate an adventure day with a slow day. Honeymoons are remembered more for well-cared moments than for racing through a list.", honeymoonList1: "Slow breakfast and calm beach", honeymoonList2: "Private ride or sunset cruise", honeymoonList3: "Hourly chauffeur for an elegant night",
    seniorsTitle: "Senior travelers", seniorsText: "Prioritize shade, nearby transfers, rest time and restaurants with easy access. Not everything needs to be adventurous to be memorable.", seniorsList1: "Scenic drives", seniorsList2: "Meals with views and easy access", seniorsList3: "Private car to avoid long walks",
    itineraryLabel: "Ready plans", itineraryTitle: "Itineraries you can copy and adjust", itineraryIntro: "Use them as a starting point. Concierge can help adjust schedules, restaurants and transfers based on your hotel or villa.", tab3: "3 days", tab5: "5 days", tab7: "7 days",
    tipsLabel: "Useful tips", tipsTitle: "Small details that greatly improve the trip", tip1Title: "Check beach flags", tip1Text: "Los Cabos has beautiful beaches, but not all are ideal for swimming every day. Look at the flags and ask before entering.", tip2Title: "Reserve key hours", tip2Text: "Sunrise and sunset are the most beautiful moments for photos, short tours and special dinners.", tip3Title: "Do not overpack the schedule", tip3Text: "A good experience needs pauses. Cabo is best enjoyed when there is time to rest and look at the sea.", tip4Title: "Secure dinner transport", tip4Text: "If dining away from the hotel, reserved transportation avoids waits and lets you enjoy without worrying about the return.",
    galleryLabel: "Real photos of the area", galleryTitle: "A visual look at Cabo", galleryIntro: "Public images linked from Wikimedia Commons keep the blog light and connected to real Los Cabos references.", gallery1: "The Arch, the natural icon of Cabo San Lucas.", gallery2: "Cabo San Lucas Bay, perfect for starting the trip.", gallery3: "Rocks, sea and the classic Land’s End landscape.", gallery4: "Beaches and oceanfront hotels along the tourist corridor.",
    faqLabel: "Frequently asked questions", faqTitle: "Quick answers before traveling", faq1Q: "What is the best area to stay?", faq1A: "It depends on your travel style. Cabo San Lucas is practical for marina, nightlife and tours; San José del Cabo is calmer, artistic and elegant; the tourist corridor works well for resorts and rest.", faq2Q: "Should I rent a car?", faq2A: "If you move a lot on your own, it can help. But for airport, dinners, special routes or groups, private transport with chauffeur is often more comfortable and safer.", faq3Q: "When should I book activities?", faq3A: "Book important activities before arriving, especially Arch tours, romantic dinners, airport transfers and seasonal experiences.", faq4Q: "What should I avoid?", faq4A: "Avoid entering the water without checking conditions, arriving late to tours, leaving transfers for the last minute and overbooking arrival day.",
    ctaLabel: "Personal concierge", ctaTitle: "Make Cabo feel easy from the first minute.", ctaText: "If you want private transport, trusted chauffeur, hourly route support or a stress-free arrival, you can write directly and discreetly through WhatsApp.", ctaButton: "Message on WhatsApp", footerText: "Travel blog, useful ideas and private concierge for Los Cabos.", backTop: "Back to top", credits: "Photos linked from Wikimedia Commons. Beach and activity information should always be verified with local conditions of the day.",
    plans: {
      3: [{day:"Day 1",title:"Calm arrival",text:"Private airport transfer, relaxed check-in, light meal and a short walk by the marina or nearby beach.",items:["Avoid long tours today","Book dinner near the hotel","Confirm pickup time for tomorrow"]},{day:"Day 2",title:"The Arch and beach",text:"Early tour to the Arch, photos at Land’s End, beach time and a free afternoon before a nice dinner.",items:["Bring water and sunscreen","Go early for better light","Do not schedule too much"]},{day:"Day 3",title:"Easy farewell",text:"Slow breakfast, light shopping, one last ocean view and airport transfer with enough margin.",items:["Check hotel departure time","Pack before breakfast","Coordinate transport in advance"]}],
      5: [{day:"Day 1",title:"Arrival and soft dinner",text:"Settle in, walk nearby, dine early and save energy for the following days.",items:["Direct hotel transfer","Light meal","Real rest"]},{day:"Day 2",title:"Arch, marina and photos",text:"Visit the Arch in the morning, walk the marina and save sunset for photos or seaside dinner.",items:["Early tour","Comfortable clothes","Dinner reservation"]},{day:"Day 3",title:"Calm beach",text:"Day for Chileno Bay or Santa María, gentle snorkel and afternoon rest. Great for families.",items:["Check flags","Bring snacks","Travel light"]},{day:"Day 4",title:"San José del Cabo",text:"Historic center, galleries, cafés, gentle shopping and a more elegant dinner in a calm setting.",items:["Ideal for couples","Good anniversary plan","Private transport recommended"]},{day:"Day 5",title:"Flexible closing",text:"Spa, shopping, brunch or a short activity before departure. Do not leave airport transfer for the last minute.",items:["Confirm flight","Leave with margin","Final photos"]}],
      7: [{day:"Day 1",title:"Well-cared arrival",text:"Private transfer, check-in, rest and a first dinner without a heavy schedule.",items:["Slow down","Hydrate","Confirm plans"]},{day:"Day 2",title:"The Arch and Cabo San Lucas",text:"Arch tour, marina, El Médano beach and dinner with atmosphere.",items:["Early photos","Fresh clothing","Return transfer"]},{day:"Day 3",title:"Snorkel and calm beach",text:"Chileno Bay or Santa María for a relaxed day, perfect for families or couples who want to rest.",items:["Check sea conditions","Bring water","Schedule an after-lunch break"]},{day:"Day 4",title:"San José del Cabo",text:"Art, restaurants, cafés and shopping in a calmer, elegant atmosphere.",items:["Best in the afternoon","Book dinner","Do not rush"]},{day:"Day 5",title:"Special route",text:"Todos Santos, La Paz or a scenic drive with hourly chauffeur to explore without driving.",items:["Leave early","Bring charger","Plan photo stops"]},{day:"Day 6",title:"Slow day",text:"Spa, resort, beach, reading, seaside meal and sunset. This day makes the vacation feel complete.",items:["Do not overplan","Book massage","Special dinner"]},{day:"Day 7",title:"Organized departure",text:"Breakfast, light shopping and airport transfer with enough time.",items:["Check documents","Pack early","Confirm transport"]}]
    }
  },
  zh: {
    name: "中文", dir: "ltr",
    navGuides:"指南", navIdeas:"旅行灵感", navItineraries:"行程", navGallery:"图库", navFaq:"问答", navConcierge:"礼宾服务",
    heroKicker:"洛斯卡沃斯高级旅行指南", heroTitle:"优雅、从容、聪明地探索洛斯卡沃斯。", heroLead:"真实海滩、按场合推荐的玩法、聪明路线、打包清单、停留天数和落地后如何节省时间。", heroButtonPrimary:"查看指南", heroButtonSecondary:"咨询礼宾",
    statBeaches:"海滩", statBeachesSub:"去哪儿和何时去", statPacking:"带什么", statPackingSub:"聪明打包", statDuration:"停留时间", statDurationSub:"3、5或7天", statOccasion:"场合", statOccasionSub:"家庭或浪漫", statConcierge:"礼宾", statConciergeSub:"私人交通",
    introLabel:"先看重点", introTitle:"一篇让旅客觉得“真的有用”的旅行博客。", introText1:"如果你知道该选哪片海滩、避开哪些时段、需要提前预订什么，以及如何无压力移动，洛斯卡沃斯会完全不同。", introText2:"这份指南适合家庭、情侣、周年纪念、蜜月以及想要美好、安全、有条理体验的旅客。",
    beachPill:"海滩指南", beachTitle:"洛斯卡沃斯真正值得去的海滩", beachLead:"El Médano方便且热闹；Chileno Bay和Santa María适合安静一天；Lovers Beach适合拍照、坐船并参观拱门。", readBeachGuide:"阅读建议",
    mini1Label:"必看", mini1Title:"拱门与陆地尽头", mini1Text:"建议早上去，光线柔和、较凉爽，照片也更干净。", mini2Label:"方便", mini2Title:"码头与海湾", mini2Text:"适合散步、用餐、购物和参加半日游。",
    conciergeTopline:"低调建议", conciergeTitle:"当交通已经安排好，旅行会轻松很多。", conciergeText:"无论是抵达、晚餐、旅行团、周年纪念或私人路线，可信司机可以避免等待、尴尬议价和临时变动。", conciergeItem1:"机场接待", conciergeItem2:"酒店、别墅或码头私人接送", conciergeItem3:"可信司机按小时套餐", conciergeItem4:"协助安排特别时刻", conciergeButton:"WhatsApp礼宾",
    beachGuideLabel:"海滩与氛围", beachGuideTitle:"根据旅行风格选择目的地", beachGuideIntro:"好海滩不一定最有名，而是适合你的年龄、精力、时间安排和当天海况的地方。",
    medanoTag:"热闹方便", medanoTitle:"El Médano", medanoText:"适合想要餐厅、音乐、水上活动和方便出入的旅客。作为第一天轻松安排很合适。", loversTag:"经典照片", loversTitle:"Lovers Beach", loversText:"适合与拱门一起乘船参观。带水、防晒，并预留返程时间，因为出入依赖船只。", chilenoTag:"更安静", chilenoTitle:"Chileno Bay 与 Santa María", chilenoText:"适合想要慢节奏的旅客。入海前查看安全旗，不要带太多东西。",
    packingLabel:"聪明打包", packingTitle:"带这些东西，避免到达后临时购买", packingIntro:"关键是轻便衣物、防晒，以及一个可在酒店、车辆、码头和餐厅之间轻松移动的小海滩包。", pack1Title:"阳光与海滩", pack1Text:"环保防晒、帽子、太阳镜、备用泳衣和舒适凉鞋。", pack2Title:"外出与晚餐", pack2Text:"清爽但优雅的衣物、轻薄衬衫、舒适连衣裙或亚麻裤，以及适合步行的鞋。", pack3Title:"旅行团", pack3Text:"防水包、移动电源、预订复印件、小额现金和便携毛巾。", pack4Title:"儿童或长者", pack4Text:"零食、水、常用药、身份证件、小遮阳伞和固定休息时间。",
    durationLabel:"停留多久", durationTitle:"根据天数安排理想旅行", durationIntro:"不一定人人都需要一整周，但提前安排交通能避免把一天最好的时间浪费在后勤上。", duration3Title:"三天", duration3Text:"适合短途：舒适抵达、海边晚餐、拱门之旅、安静海滩和一个特别夜晚。", duration3Best:"适合情侣或短假。", duration5Title:"五天", duration5Text:"最平衡：海滩、浮潜、San José del Cabo、码头、日落和休息。", duration5Best:"适合家庭、周年或第一次来。", duration7Title:"七天或更久", duration7Text:"完整旅行：加入Todos Santos、La Paz、美食体验、spa、购物和私人路线。", duration7Best:"适合蜜月或长假。",
    ideasLabel:"按场合推荐", ideasTitle:"根据同行对象安排活动", ideasIntro:"同一个目的地可以是家庭式、冒险式、浪漫式或安静式。关键在于安排好一天。",
    familyTitle:"带孩子的家庭", familyText:"早上选择容易到达的海滩，早午餐，午后休息，傍晚安排短活动。小孩同行时避免太长的行程。", familyList1:"短程船游拱门", familyList2:"附近有服务设施的海滩", familyList3:"大家累之前吃轻松晚餐",
    teensTitle:"青少年与年轻人", teensText:"选择有活动感的项目：浮潜、皮划艇、码头、经典拍照点和有氛围的晚餐。时间安排要清楚。", teensList1:"浮潜或桨板", teensList2:"码头与拍照点", teensList3:"夜间外出用私人接送",
    coupleTitle:"情侣", coupleText:"不要把一天塞满。慢慢走、看海、从容晚餐、舒适返回时，Cabo最美。", coupleList1:"海边日落", coupleList2:"提前预订晚餐", coupleList3:"私人路线返回酒店",
    anniversaryTitle:"周年纪念", anniversaryText:"关键是顺畅：车已准备好、餐厅已确认、有时间拍照，地点之间不匆忙。", anniversaryList1:"日落照片", anniversaryList2:"景观晚餐或露台", anniversaryList3:"由礼宾协调惊喜细节",
    honeymoonTitle:"蜜月", honeymoonText:"一天冒险，一天慢下来。蜜月更值得记住的是被照顾好的时刻，而不是赶清单。", honeymoonList1:"慢早餐和安静海滩", honeymoonList2:"私人游览或日落航行", honeymoonList3:"优雅夜晚的按小时司机",
    seniorsTitle:"长者旅行", seniorsText:"优先考虑阴凉、短距离接送、休息时间和易到达的餐厅。不冒险也能难忘。", seniorsList1:"观景车游", seniorsList2:"有景观且容易到达的餐厅", seniorsList3:"私人车避免长距离步行",
    itineraryLabel:"现成计划", itineraryTitle:"可复制并调整的行程", itineraryIntro:"把它们作为起点。礼宾可根据你的酒店或别墅调整时间、餐厅和接送。", tab3:"3天", tab5:"5天", tab7:"7天",
    tipsLabel:"实用建议", tipsTitle:"小细节让旅程更顺", tip1Title:"查看海滩旗帜", tip1Text:"洛斯卡沃斯有美丽海滩，但不是每天都适合游泳。下水前看旗帜并询问。", tip2Title:"预订关键时段", tip2Text:"日出和日落最适合拍照、短途游和特别晚餐。", tip3Title:"不要排太满", tip3Text:"好体验需要暂停。有时间休息和看海，Cabo才更好玩。", tip4Title:"提前安排晚餐交通", tip4Text:"如果晚餐离酒店较远，预订交通可避免等待，也不用担心回程。",
    galleryLabel:"真实区域照片", galleryTitle:"Cabo视觉印象", galleryIntro:"来自Wikimedia Commons的公共图片，让博客保持轻量并呈现真实洛斯卡沃斯。", gallery1:"拱门，Cabo San Lucas的自然标志。", gallery2:"Cabo San Lucas海湾，非常适合开启旅程。", gallery3:"岩石、海水与Land’s End的经典景观。", gallery4:"旅游走廊沿线的海滩与海景酒店。",
    faqLabel:"常见问题", faqTitle:"出行前快速回答", faq1Q:"住在哪个区域最好？", faq1A:"取决于旅行风格。Cabo San Lucas适合码头、夜生活和旅游项目；San José del Cabo更安静、有艺术感且优雅；旅游走廊适合度假村与休息。", faq2Q:"需要租车吗？", faq2A:"如果你想经常自驾移动，租车有帮助。但机场、晚餐、特别路线或团队出行，带司机的私人交通通常更舒适安全。", faq3Q:"什么时候预订活动？", faq3A:"重要活动最好到达前预订，尤其是拱门之旅、浪漫晚餐、机场接送和季节性体验。", faq4Q:"应避免什么？", faq4A:"避免不看海况就下水、迟到参加旅行团、临时安排接送，以及抵达当天排太多活动。",
    ctaLabel:"私人礼宾", ctaTitle:"从第一分钟开始，让Cabo变得轻松。", ctaText:"如果你需要私人交通、可信司机、按小时路线协助或无压力抵达，可以通过WhatsApp直接低调联系。", ctaButton:"通过WhatsApp联系", footerText:"洛斯卡沃斯旅行博客、实用灵感和私人礼宾。", backTop:"返回顶部", credits:"照片链接自Wikimedia Commons。海滩和活动信息应始终根据当天本地条件确认。",
    plans: {}
  },
  ru: {
    name: "Русский", dir: "ltr",
    navGuides:"Гиды", navIdeas:"Идеи", navItineraries:"Маршруты", navGallery:"Галерея", navFaq:"Вопросы", navConcierge:"Консьерж",
    heroKicker:"Премиальный гид по Лос-Кабос", heroTitle:"Откройте Лос-Кабос элегантно, спокойно и с полезными советами.", heroLead:"Реальные пляжи, идеи по случаю, умные маршруты, что взять, сколько остаться и как передвигаться без потери времени после прилета.", heroButtonPrimary:"Открыть гид", heroButtonSecondary:"Спросить консьержа",
    statBeaches:"Пляжи", statBeachesSub:"куда и когда", statPacking:"Что взять", statPackingSub:"умный багаж", statDuration:"Длительность", statDurationSub:"3, 5 или 7 дней", statOccasion:"Повод", statOccasionSub:"семья или романтика", statConcierge:"Консьерж", statConciergeSub:"частный транспорт",
    introLabel:"Сначала главное", introTitle:"Блог, после которого путешественник скажет: «это действительно помогло». ", introText1:"Лос-Кабос ощущается иначе, когда вы знаете, какой пляж выбрать, какие часы избегать, что бронировать и как перемещаться без стресса.", introText2:"Этот гид написан для семей, пар, годовщин, медового месяца и гостей, которым нужна красивая, безопасная и организованная поездка.",
    beachPill:"Гид по пляжам", beachTitle:"Пляжи Лос-Кабос, которые действительно стоит посетить", beachLead:"El Médano удобный и оживленный; Chileno Bay и Santa María хороши для спокойного дня; Lovers Beach идеален для фото, лодки и посещения Арки.", readBeachGuide:"Читать советы",
    mini1Label:"Обязательно", mini1Title:"Арка и Land’s End", mini1Text:"Лучше ехать рано: мягкий свет, меньше жара и лучшие фото.", mini2Label:"Удобно", mini2Title:"Марина и бухта", mini2Text:"Хорошая зона для прогулки, еды, сувениров и туров на полдня.",
    conciergeTopline:"Ненавязчивый совет", conciergeTitle:"Поездка приятнее, когда транспорт уже решен.", conciergeText:"Для прилета, ужинов, туров, годовщин или частных маршрутов проверенный водитель избавляет от ожидания, неловких переговоров и срочных изменений.", conciergeItem1:"Встреча в аэропорту", conciergeItem2:"Частные трансферы в отель, виллу или марину", conciergeItem3:"Почасовые пакеты с проверенным водителем", conciergeItem4:"Помощь в организации особых моментов", conciergeButton:"WhatsApp консьерж",
    beachGuideLabel:"Пляжи и атмосфера", beachGuideTitle:"Куда ехать по стилю путешествия", beachGuideIntro:"Хороший пляж не всегда самый известный; он должен подходить вашему возрасту, энергии, графику и состоянию моря в этот день.",
    medanoTag:"Атмосфера и удобство", medanoTitle:"El Médano", medanoText:"Идеально, если нужны рестораны рядом, движение, музыка, водные активности и простой доступ. Отлично подходит для первого дня.", loversTag:"Классическое фото", loversTitle:"Lovers Beach", loversText:"Идеально посетить на лодке вместе с Аркой. Возьмите воду, солнцезащитный крем и планируйте возвращение заранее.", chilenoTag:"Спокойнее", chilenoTitle:"Chileno Bay и Santa María", chilenoText:"Хороший выбор для спокойного ритма. Проверяйте флаги безопасности перед входом в воду и не берите лишнего.",
    packingLabel:"Умный багаж", packingTitle:"Что взять, чтобы не покупать все в последний момент", packingIntro:"Главное: легкая одежда, защита от солнца и небольшая пляжная сумка для отеля, машины, марины и ресторана.", pack1Title:"Солнце и пляж", pack1Text:"Экологичный солнцезащитный крем, шляпа, очки, запасной купальник и удобные сандалии.", pack2Title:"Выходы и ужины", pack2Text:"Свежая, но элегантная одежда, легкая рубашка, удобное платье или льняные брюки и обувь для ходьбы.", pack3Title:"Туры", pack3Text:"Водонепроницаемая сумка, power bank, копии бронирований, мелкие наличные и компактное полотенце.", pack4Title:"Дети или пожилые", pack4Text:"Перекусы, вода, обычные лекарства, документ, маленький зонт и запланированные паузы.",
    durationLabel:"Сколько остаться", durationTitle:"Идеальная поездка по количеству дней", durationIntro:"Не всем нужна целая неделя, но лучше заранее организовать трансферы, чтобы не терять лучшие часы дня на логистику.", duration3Title:"Три дня", duration3Text:"Для короткой поездки: комфортный приезд, ужин у моря, тур к Арке, спокойный пляж и особый вечер.", duration3Best:"Лучше для пар или коротких поездок.", duration5Title:"Пять дней", duration5Text:"Самый сбалансированный вариант: пляж, снорклинг, San José del Cabo, марина, закат и отдых.", duration5Best:"Идеально для семьи, годовщины или первого визита.", duration7Title:"Семь дней и больше", duration7Text:"Полная поездка: Todos Santos, La Paz, гастрономия, спа, шопинг и частные маршруты.", duration7Best:"Отлично для медового месяца или долгого отпуска.",
    ideasLabel:"Идеи по случаю", ideasTitle:"Что делать в зависимости от компании", ideasIntro:"Один и тот же город может быть семейным, приключенческим, романтичным или очень спокойным. Секрет в правильном порядке дня.",
    familyTitle:"Семьи с детьми", familyText:"Выбирайте легкий пляж утром, ранний обед, отдых после еды и короткую активность на закате. Избегайте слишком длинных туров с маленькими детьми.", familyList1:"Короткая лодка к Арке", familyList2:"Пляж с сервисами рядом", familyList3:"Простой ужин до усталости",
    teensTitle:"Подростки и молодежь", teensText:"Нужны активности: снорклинг, каяк, марина, места для фото и ужин с атмосферой. Держите расписание понятным.", teensList1:"Снорклинг или paddleboard", teensList2:"Марина и места для фото", teensList3:"Частные трансферы на вечер",
    coupleTitle:"Пары", coupleText:"Не перегружайте день. Кабо красивее, когда есть время медленно гулять, смотреть на море, спокойно ужинать и комфортно вернуться.", coupleList1:"Закат у моря", coupleList2:"Ужин заранее забронирован", coupleList3:"Частный трансфер обратно в отель",
    anniversaryTitle:"Годовщина", anniversaryText:"Все должно идти плавно: машина готова, ресторан подтвержден, есть время для фото и нет спешки.", anniversaryList1:"Фото на закате", anniversaryList2:"Ужин с видом или террасой", anniversaryList3:"Сюрприз с помощью консьержа",
    honeymoonTitle:"Медовый месяц", honeymoonText:"Чередуйте день приключений с медленным днем. Медовый месяц запоминается заботой о моментах, а не гонкой по списку.", honeymoonList1:"Медленный завтрак и спокойный пляж", honeymoonList2:"Частная прогулка или sunset cruise", honeymoonList3:"Водитель почасово для элегантного вечера",
    seniorsTitle:"Пожилые путешественники", seniorsText:"Выбирайте тень, близкие трансферы, паузы и рестораны с легким доступом. Не все должно быть экстремальным, чтобы быть незабываемым.", seniorsList1:"Панорамные поездки", seniorsList2:"Еда с видом и легким доступом", seniorsList3:"Частная машина без долгих прогулок",
    itineraryLabel:"Готовые планы", itineraryTitle:"Маршруты, которые можно скопировать и адаптировать", itineraryIntro:"Используйте как основу. Консьерж поможет настроить часы, рестораны и трансферы под ваш отель или виллу.", tab3:"3 дня", tab5:"5 дней", tab7:"7 дней",
    tipsLabel:"Полезные советы", tipsTitle:"Мелочи, которые сильно улучшают поездку", tip1Title:"Проверяйте флаги на пляже", tip1Text:"В Лос-Кабос много красивых пляжей, но не каждый подходит для купания каждый день. Смотрите флаги и спрашивайте.", tip2Title:"Бронируйте ключевые часы", tip2Text:"Рассвет и закат — лучшие моменты для фото, коротких туров и особых ужинов.", tip3Title:"Не перегружайте программу", tip3Text:"Хорошему отдыху нужны паузы. Кабо лучше, когда есть время отдохнуть и смотреть на море.", tip4Title:"Заранее организуйте транспорт на ужин", tip4Text:"Если ужин далеко от отеля, транспорт по брони избавляет от ожидания и забот о возвращении.",
    galleryLabel:"Реальные фото региона", galleryTitle:"Визуальный взгляд на Кабо", galleryIntro:"Публичные изображения из Wikimedia Commons делают блог легким и связанным с реальными местами Лос-Кабос.", gallery1:"Арка — природный символ Cabo San Lucas.", gallery2:"Бухта Cabo San Lucas — отличное начало поездки.", gallery3:"Скалы, море и классический пейзаж Land’s End.", gallery4:"Пляжи и отели у моря вдоль туристического коридора.",
    faqLabel:"Частые вопросы", faqTitle:"Быстрые ответы перед поездкой", faq1Q:"Где лучше остановиться?", faq1A:"Зависит от стиля. Cabo San Lucas удобен для марины, ночной жизни и туров; San José del Cabo спокойнее, художественнее и элегантнее; туристический коридор хорош для курортов и отдыха.", faq2Q:"Стоит ли арендовать машину?", faq2A:"Если вы много ездите самостоятельно, может быть полезно. Но для аэропорта, ужинов, особых маршрутов или групп частный транспорт с водителем часто удобнее и безопаснее.", faq3Q:"Когда бронировать активности?", faq3A:"Важные активности лучше бронировать до приезда, особенно туры к Арке, романтические ужины, трансферы из аэропорта и сезонные впечатления.", faq4Q:"Чего избегать?", faq4A:"Не заходите в море без проверки условий, не опаздывайте на туры, не оставляйте трансферы на последний момент и не перегружайте день приезда.",
    ctaLabel:"Персональный консьерж", ctaTitle:"Пусть Кабо будет легким с первой минуты.", ctaText:"Если нужен частный транспорт, проверенный водитель, почасовые маршруты или спокойный приезд, можно написать напрямую и ненавязчиво в WhatsApp.", ctaButton:"Написать в WhatsApp", footerText:"Блог о путешествиях, полезные идеи и частный консьерж в Лос-Кабос.", backTop:"Наверх", credits:"Фото взяты ссылками из Wikimedia Commons. Информацию о пляжах и активностях всегда проверяйте по местным условиям дня.",
    plans: {}
  },
  he: {
    name: "עברית", dir: "rtl",
    navGuides:"מדריכים", navIdeas:"רעיונות לטיול", navItineraries:"מסלולים", navGallery:"גלריה", navFaq:"שאלות", navConcierge:"קונסיירז׳",
    heroKicker:"מדריך פרימיום ללוס קאבוס", heroTitle:"גלו את לוס קאבוס באלגנטיות, בנחת ועם עצות טובות.", heroLead:"חופים אמיתיים, רעיונות לפי אירוע, מסלולים חכמים, מה לארוז, כמה זמן להישאר ואיך להתנייד בלי לבזבז זמן מהנחיתה.", heroButtonPrimary:"לעיין במדריך", heroButtonSecondary:"לפנות לקונסיירז׳",
    statBeaches:"חופים", statBeachesSub:"לאן ומתי", statPacking:"מה לארוז", statPackingSub:"מזוודה חכמה", statDuration:"משך", statDurationSub:"3, 5 או 7 ימים", statOccasion:"אירוע", statOccasionSub:"משפחה או רומנטיקה", statConcierge:"קונסיירז׳", statConciergeSub:"הסעה פרטית",
    introLabel:"קודם הדברים החשובים", introTitle:"בלוג שנועד לגרום למטייל לומר: “זה באמת עזר לי”.", introText1:"לוס קאבוס מרגישה אחרת כשאתם יודעים איזה חוף לבחור, אילו שעות להימנע, מה להזמין מראש ואיך לנוע בלי לחץ.", introText2:"המדריך מיועד למשפחות, זוגות, ימי נישואין, ירח דבש ומטיילים שרוצים חוויה יפה, בטוחה ומאורגנת.",
    beachPill:"מדריך חופים", beachTitle:"חופים שבאמת שווים ביקור בלוס קאבוס", beachLead:"El Médano נוח ומלא חיים; Chileno Bay ו-Santa María מתאימים ליום רגוע; Lovers Beach מושלם לשילוב תמונות, שיט וביקור בקשת.", readBeachGuide:"לקרוא המלצות",
    mini1Label:"חובה לראות", mini1Title:"הקשת ו-Land’s End", mini1Text:"עדיף מוקדם: אור רך, פחות חום ותמונות נקיות יותר.", mini2Label:"נוח", mini2Title:"המרינה והמפרץ", mini2Text:"אזור טוב להליכה, אוכל, קניות וסיורים של חצי יום.",
    conciergeTopline:"המלצה דיסקרטית", conciergeTitle:"הטיול מרגיש טוב יותר כשהתחבורה כבר מסודרת.", conciergeText:"להגעה, ארוחות ערב, סיורים, ימי נישואין או מסלולים פרטיים, נהג בדוק מונע המתנות, משא ומתן לא נעים ושינויים ברגע האחרון.", conciergeItem1:"קבלת פנים בשדה התעופה", conciergeItem2:"העברות פרטיות למלון, וילה או מרינה", conciergeItem3:"חבילות לפי שעה עם נהג בדוק", conciergeItem4:"עזרה בארגון רגעים מיוחדים", conciergeButton:"WhatsApp קונסיירז׳",
    beachGuideLabel:"חופים ואווירה", beachGuideTitle:"לאן ללכת לפי סגנון הטיול", beachGuideIntro:"חוף טוב הוא לא תמיד הכי מפורסם; הוא זה שמתאים לגיל, לאנרגיה, ללוח הזמנים ולמצב הים באותו יום.",
    medanoTag:"אווירה ונוחות", medanoTitle:"El Médano", medanoText:"מתאים למי שרוצה מסעדות קרובות, תנועה, מוזיקה, פעילויות מים וגישה קלה. מצוין ליום ראשון בלי הסתבכות.", loversTag:"תמונה קלאסית", loversTitle:"Lovers Beach", loversText:"מושלם לביקור בסירה יחד עם הקשת. קחו מים, קרם הגנה ותכננו חזרה בזמן כי הגישה תלויה בסירות.", chilenoTag:"רגוע יותר", chilenoTitle:"Chileno Bay ו-Santa María", chilenoText:"טובים למטיילים שרוצים קצב רגוע. בדקו דגלי בטיחות לפני כניסה לים והימנעו מציוד מיותר.",
    packingLabel:"מזוודה חכמה", packingTitle:"מה לקחת כדי ליהנות מקאבו בלי לקנות הכל ברגע האחרון", packingIntro:"המפתח הוא בגדים קלים, הגנה מהשמש ותיק חוף קטן שקל להעביר בין המלון, הרכב, המרינה והמסעדה.", pack1Title:"שמש וחוף", pack1Text:"קרם הגנה ידידותי לשונית, כובע, משקפי שמש, בגד ים נוסף וסנדלים נוחים.", pack2Title:"יציאות וארוחות ערב", pack2Text:"בגדים קלילים אך אלגנטיים, חולצה קלה, שמלה נוחה או מכנסי פשתן ונעליים שמתאימות להליכה.", pack3Title:"סיורים", pack3Text:"תיק עמיד למים, סוללה ניידת, עותקי הזמנות, מזומן קטן ומגבת קומפקטית.", pack4Title:"ילדים או מבוגרים", pack4Text:"חטיפים, מים, תרופות קבועות, תעודה מזהה, שמשייה קטנה וזמני מנוחה מתוכננים.",
    durationLabel:"כמה זמן להישאר", durationTitle:"הטיול האידיאלי לפי מספר הימים", durationIntro:"לא כולם צריכים שבוע שלם, אבל כדאי לארגן תחבורה כדי לא לבזבז את השעות הטובות של היום על לוגיסטיקה.", duration3Title:"שלושה ימים", duration3Text:"לחופשה קצרה: הגעה נוחה, ארוחת ערב מול הים, סיור לקשת, חוף רגוע וערב מיוחד.", duration3Best:"מתאים לזוגות או נסיעות קצרות.", duration5Title:"חמישה ימים", duration5Text:"האפשרות המאוזנת: חוף, שנורקל, San José del Cabo, מרינה, שקיעה וזמן מנוחה.", duration5Best:"אידיאלי למשפחה, יום נישואין או ביקור ראשון.", duration7Title:"שבעה ימים או יותר", duration7Text:"טיול מלא: Todos Santos, La Paz, חוויות קולינריות, ספא, קניות ומסלולים פרטיים.", duration7Best:"מושלם לירח דבש או חופשה ארוכה.",
    ideasLabel:"רעיונות לפי אירוע", ideasTitle:"מה לעשות לפי מי שנוסע איתך", ideasIntro:"אותו יעד יכול להיות משפחתי, הרפתקני, רומנטי או רגוע מאוד. הסוד הוא סדר יום נכון.",
    familyTitle:"משפחות עם ילדים", familyText:"בחרו חוף עם גישה קלה בבוקר, ארוחה מוקדמת, מנוחה אחרי הצהריים ופעילות קצרה בשקיעה. הימנעו מסיורים ארוכים מדי עם ילדים קטנים.", familyList1:"שיט קצר לקשת", familyList2:"חוף עם שירותים קרובים", familyList3:"ארוחת ערב פשוטה לפני עייפות",
    teensTitle:"מתבגרים וצעירים", teensText:"חפשו פעילות: שנורקל, קיאק, מרינה, נקודות צילום וארוחה עם אווירה. שמרו על לוח זמנים ברור.", teensList1:"שנורקל או paddleboard", teensList2:"מרינה ונקודות צילום", teensList3:"העברות פרטיות אם יוצאים בלילה",
    coupleTitle:"זוגות", coupleText:"אל תמלאו את היום ביותר מדי פעילויות. קאבו יפה יותר כשיש זמן ללכת לאט, להסתכל על הים, לאכול בנחת ולחזור בנוחות.", coupleList1:"שקיעה מול הים", coupleList2:"ארוחה מוזמנת מראש", coupleList3:"מסלול פרטי חזרה למלון",
    anniversaryTitle:"יום נישואין", anniversaryText:"הכל צריך להרגיש זורם: רכב מוכן, מסעדה מאושרת, זמן לתמונות וללא ריצות בין מקומות.", anniversaryList1:"תמונות בשקיעה", anniversaryList2:"ארוחה עם נוף או טרסה", anniversaryList3:"הפתעה קטנה בתיאום קונסיירז׳",
    honeymoonTitle:"ירח דבש", honeymoonText:"שלבו יום הרפתקה עם יום איטי. ירח דבש נזכר בזכות רגעים מטופלים היטב, לא בגלל ריצה אחרי רשימה.", honeymoonList1:"ארוחת בוקר איטית וחוף רגוע", honeymoonList2:"סיור פרטי או שיט שקיעה", honeymoonList3:"נהג לפי שעה לערב אלגנטי",
    seniorsTitle:"מטיילים מבוגרים", seniorsText:"תנו עדיפות לצל, העברות קרובות, מנוחות ומסעדות עם גישה נוחה. לא חייבים הרפתקה כדי שזה יהיה בלתי נשכח.", seniorsList1:"נסיעות נוף", seniorsList2:"ארוחות עם נוף וגישה קלה", seniorsList3:"רכב פרטי כדי להימנע מהליכות ארוכות",
    itineraryLabel:"תוכניות מוכנות", itineraryTitle:"מסלולים שאפשר להעתיק ולהתאים", itineraryIntro:"השתמשו בהם כנקודת התחלה. הקונסיירז׳ יכול להתאים שעות, מסעדות והעברות לפי המלון או הווילה.", tab3:"3 ימים", tab5:"5 ימים", tab7:"7 ימים",
    tipsLabel:"טיפים שימושיים", tipsTitle:"פרטים קטנים שמשפרים מאוד את הטיול", tip1Title:"בדקו דגלי חוף", tip1Text:"בלוס קאבוס יש חופים יפהפיים, אבל לא כולם מתאימים לשחייה בכל יום. בדקו דגלים ושאלו לפני כניסה.", tip2Title:"הזמינו שעות מפתח", tip2Text:"זריחה ושקיעה הן השעות היפות ביותר לתמונות, סיורים קצרים וארוחות מיוחדות.", tip3Title:"אל תמלאו את הלו״ז", tip3Text:"חוויה טובה צריכה הפסקות. קאבו מהנה יותר כשיש זמן לנוח ולהביט בים.", tip4Title:"סדרו תחבורה לארוחות ערב", tip4Text:"אם אוכלים רחוק מהמלון, תחבורה מוזמנת מונעת המתנה ודאגה לגבי החזרה.",
    galleryLabel:"תמונות אמיתיות מהאזור", galleryTitle:"מבט ויזואלי על קאבו", galleryIntro:"תמונות ציבוריות מקושרות מ-Wikimedia Commons כדי לשמור על בלוג קל ועם מקומות אמיתיים מלוס קאבוס.", gallery1:"הקשת, הסמל הטבעי של Cabo San Lucas.", gallery2:"מפרץ Cabo San Lucas, מושלם לפתיחת הטיול.", gallery3:"סלעים, ים ונוף קלאסי של Land’s End.", gallery4:"חופים ומלונות מול הים לאורך המסדרון התיירותי.",
    faqLabel:"שאלות נפוצות", faqTitle:"תשובות מהירות לפני הנסיעה", faq1Q:"מה האזור הטוב ביותר ללינה?", faq1A:"זה תלוי בסגנון הטיול. Cabo San Lucas נוח למרינה, חיי לילה וסיורים; San José del Cabo שקט, אומנותי ואלגנטי יותר; המסדרון התיירותי טוב לריזורטים ומנוחה.", faq2Q:"כדאי לשכור רכב?", faq2A:"אם מתכננים לנוע הרבה לבד, זה יכול לעזור. אבל לשדה תעופה, ארוחות ערב, מסלולים מיוחדים או קבוצות, תחבורה פרטית עם נהג לרוב נוחה ובטוחה יותר.", faq3Q:"מתי להזמין פעילויות?", faq3A:"כדאי להזמין פעילויות חשובות לפני ההגעה, במיוחד סיורים לקשת, ארוחות רומנטיות, העברות משדה התעופה וחוויות עונתיות.", faq4Q:"ממה כדאי להימנע?", faq4A:"הימנעו מכניסה לים בלי לבדוק תנאים, איחור לסיורים, השארת העברות לרגע האחרון ותכנון יותר מדי פעילויות ביום ההגעה.",
    ctaLabel:"קונסיירז׳ אישי", ctaTitle:"תנו לקאבו להרגיש קל מהרגע הראשון.", ctaText:"אם תרצו תחבורה פרטית, נהג בדוק, תמיכה במסלולים לפי שעה או הגעה ללא לחץ, אפשר לכתוב ישירות ובדיסקרטיות ב-WhatsApp.", ctaButton:"לכתוב ב-WhatsApp", footerText:"בלוג טיולים, רעיונות שימושיים וקונסיירז׳ פרטי ללוס קאבוס.", backTop:"חזרה למעלה", credits:"התמונות מקושרות מ-Wikimedia Commons. מידע על חופים ופעילויות יש לוודא תמיד לפי תנאי המקום באותו יום.",
    plans: {}
  },
  de: {
    name: "Deutsch", dir: "ltr",
    navGuides:"Guides", navIdeas:"Reiseideen", navItineraries:"Routen", navGallery:"Galerie", navFaq:"Fragen", navConcierge:"Concierge",
    heroKicker:"Premium-Guide für Los Cabos", heroTitle:"Entdecke Los Cabos mit Eleganz, Ruhe und guten Tipps.", heroLead:"Echte Strände, Ideen nach Anlass, kluge Routen, Packliste, ideale Reisedauer und stressfreie Mobilität ab der Landung.", heroButtonPrimary:"Guide ansehen", heroButtonSecondary:"Concierge fragen",
    statBeaches:"Strände", statBeachesSub:"wohin und wann", statPacking:"Packliste", statPackingSub:"smart packen", statDuration:"Dauer", statDurationSub:"3, 5 oder 7 Tage", statOccasion:"Anlass", statOccasionSub:"Familie oder Romantik", statConcierge:"Concierge", statConciergeSub:"Privattransport",
    introLabel:"Das Wichtigste zuerst", introTitle:"Ein Blog, bei dem Reisende sagen: „Das hat mir wirklich geholfen.“", introText1:"Los Cabos erlebt man anders, wenn man weiß, welchen Strand man wählt, welche Zeiten man meidet, was man reserviert und wie man sich stressfrei bewegt.", introText2:"Dieser Guide ist für Familien, Paare, Jahrestage, Flitterwochen und Gäste, die eine schöne, sichere und gut organisierte Reise möchten.",
    beachPill:"Strandguide", beachTitle:"Strände in Los Cabos, die sich wirklich lohnen", beachLead:"El Médano ist praktisch und lebendig; Chileno Bay und Santa María sind ideal für ruhige Tage; Lovers Beach verbindet Fotos, Bootsfahrt und den Besuch des Arch.", readBeachGuide:"Empfehlungen lesen",
    mini1Label:"Unbedingt", mini1Title:"The Arch und Land’s End", mini1Text:"Am besten früh: weiches Licht, weniger Hitze und bessere Fotos.", mini2Label:"Praktisch", mini2Title:"Marina und Bucht", mini2Text:"Gute Zone zum Spazieren, Essen, Einkaufen und für Halbtagestouren.",
    conciergeTopline:"Diskreter Hinweis", conciergeTitle:"Die Reise fühlt sich besser an, wenn der Transport bereits gelöst ist.", conciergeText:"Für Ankunft, Abendessen, Touren, Jahrestage oder private Routen vermeidet ein geprüfter Fahrer Wartezeiten, unangenehme Verhandlungen und kurzfristige Änderungen.", conciergeItem1:"Empfang am Flughafen", conciergeItem2:"Private Transfers zu Hotel, Villa oder Marina", conciergeItem3:"Stundenpakete mit geprüftem Fahrer", conciergeItem4:"Hilfe für besondere Momente", conciergeButton:"WhatsApp Concierge",
    beachGuideLabel:"Strände und Atmosphäre", beachGuideTitle:"Wohin je nach Reisestil", beachGuideIntro:"Ein guter Strand ist nicht immer der berühmteste; er passt zu Alter, Energie, Zeitplan und den Meeresbedingungen des Tages.",
    medanoTag:"Atmosphäre und Komfort", medanoTitle:"El Médano", medanoText:"Ideal für Restaurants in der Nähe, Bewegung, Musik, Wassersport und einfachen Zugang. Sehr gut für einen unkomplizierten ersten Tag.", loversTag:"Klassisches Foto", loversTitle:"Lovers Beach", loversText:"Perfekt per Boot zusammen mit dem Arch. Nimm Wasser, Sonnenschutz und plane die Rückfahrt rechtzeitig.", chilenoTag:"Ruhiger", chilenoTitle:"Chileno Bay und Santa María", chilenoText:"Sehr gut für ein entspannteres Tempo. Prüfe Sicherheitsflaggen vor dem Baden und nimm nicht zu viel mit.",
    packingLabel:"Smart packen", packingTitle:"Was du mitnehmen solltest, damit du nicht alles kurzfristig kaufen musst", packingIntro:"Leichte Kleidung, Sonnenschutz und eine kleine Strandtasche sind entscheidend, damit du dich leicht zwischen Hotel, Auto, Marina und Restaurant bewegen kannst.", pack1Title:"Sonne und Strand", pack1Text:"Riffreundlicher Sonnenschutz, Hut, Sonnenbrille, extra Badebekleidung und bequeme Sandalen.", pack2Title:"Ausgehen und Dinner", pack2Text:"Frische, aber elegante Kleidung, leichtes Hemd, bequemes Kleid oder Leinenhose und Schuhe zum Gehen.", pack3Title:"Touren", pack3Text:"Wasserdichte Tasche, Powerbank, Reservierungskopien, kleines Bargeld und kompaktes Handtuch.", pack4Title:"Kinder oder Senioren", pack4Text:"Snacks, Wasser, gewohnte Medikamente, Ausweis, kleiner Schirm und geplante Pausen.",
    durationLabel:"Wie lange bleiben", durationTitle:"Die ideale Reise nach verfügbaren Tagen", durationIntro:"Nicht jeder braucht eine ganze Woche, aber Transfers sollten gut geplant sein, damit die besten Stunden nicht für Logistik verloren gehen.", duration3Title:"Drei Tage", duration3Text:"Für einen Kurztrip: bequeme Ankunft, Dinner am Meer, Arch-Tour, ruhiger Strand und ein besonderer Abend.", duration3Best:"Am besten für Paare oder kurze Reisen.", duration5Title:"Fünf Tage", duration5Text:"Die ausgewogenste Option: Strand, Schnorcheln, San José del Cabo, Marina, Sonnenuntergang und Ruhe.", duration5Best:"Ideal für Familie, Jahrestag oder ersten Besuch.", duration7Title:"Sieben Tage oder mehr", duration7Text:"Für eine komplette Reise: Todos Santos, La Paz, Gastronomie, Spa, Shopping und private Routen.", duration7Best:"Perfekt für Flitterwochen oder längere Ferien.",
    ideasLabel:"Ideen nach Anlass", ideasTitle:"Was tun, je nachdem mit wem du reist", ideasIntro:"Dasselbe Ziel kann familiär, abenteuerlich, romantisch oder sehr ruhig wirken. Das Geheimnis ist ein gut geordneter Tag.",
    familyTitle:"Familien mit Kindern", familyText:"Wähle morgens einen leicht erreichbaren Strand, frühes Essen, Ruhe nach dem Mittag und eine kurze Aktivität zum Sonnenuntergang. Vermeide sehr lange Touren mit kleinen Kindern.", familyList1:"Kurze Bootsfahrt zum Arch", familyList2:"Strand mit Services in der Nähe", familyList3:"Lockeres Abendessen vor Müdigkeit",
    teensTitle:"Teenager und junge Reisende", teensText:"Suche Bewegung: Schnorcheln, Kajak, Marina, Fotospots und Dinner mit Atmosphäre. Halte Zeiten klar.", teensList1:"Schnorcheln oder Paddleboard", teensList2:"Marina und Fotospots", teensList3:"Private Transfers für Abende",
    coupleTitle:"Paare", coupleText:"Überlade den Tag nicht. Cabo wirkt schöner, wenn Zeit ist, langsam zu gehen, das Meer zu sehen, ruhig zu essen und bequem zurückzukehren.", coupleList1:"Sonnenuntergang am Meer", coupleList2:"Dinner rechtzeitig reserviert", coupleList3:"Private Rückfahrt zum Hotel",
    anniversaryTitle:"Jahrestag", anniversaryText:"Alles sollte fließen: Auto bereit, Restaurant bestätigt, Zeit für Fotos und keine Hektik zwischen Orten.", anniversaryList1:"Fotos beim Sonnenuntergang", anniversaryList2:"Dinner mit Aussicht oder Terrasse", anniversaryList3:"Überraschung mit Concierge abstimmen",
    honeymoonTitle:"Flitterwochen", honeymoonText:"Wechsle einen Abenteuer-Tag mit einem langsamen Tag ab. Flitterwochen bleiben durch gepflegte Momente in Erinnerung, nicht durch Listenstress.", honeymoonList1:"Langsames Frühstück und ruhiger Strand", honeymoonList2:"Private Fahrt oder Sunset Cruise", honeymoonList3:"Fahrer stundenweise für einen eleganten Abend",
    seniorsTitle:"Senioren", seniorsText:"Priorisiere Schatten, kurze Transfers, Pausen und Restaurants mit einfachem Zugang. Nicht alles muss Abenteuer sein, um unvergesslich zu werden.", seniorsList1:"Panoramafahrten", seniorsList2:"Essen mit Aussicht und einfachem Zugang", seniorsList3:"Privates Auto gegen lange Wege",
    itineraryLabel:"Fertige Pläne", itineraryTitle:"Routen zum Kopieren und Anpassen", itineraryIntro:"Nutze sie als Ausgangspunkt. Concierge kann Zeiten, Restaurants und Transfers nach Hotel oder Villa anpassen.", tab3:"3 Tage", tab5:"5 Tage", tab7:"7 Tage",
    tipsLabel:"Nützliche Tipps", tipsTitle:"Kleine Details, die die Reise deutlich verbessern", tip1Title:"Strandflaggen prüfen", tip1Text:"Los Cabos hat wunderschöne Strände, aber nicht alle sind jeden Tag zum Schwimmen geeignet. Schaue auf die Flaggen und frage nach.", tip2Title:"Schlüsselzeiten reservieren", tip2Text:"Sonnenaufgang und Sonnenuntergang sind am schönsten für Fotos, kurze Touren und besondere Dinner.", tip3Title:"Plan nicht überfüllen", tip3Text:"Gute Erlebnisse brauchen Pausen. Cabo genießt man besser mit Zeit zum Ausruhen und Meerblick.", tip4Title:"Transport fürs Dinner sichern", tip4Text:"Wenn das Dinner weiter vom Hotel ist, vermeidet reservierter Transport Wartezeit und Rückfahrtsorgen.",
    galleryLabel:"Echte Fotos der Gegend", galleryTitle:"Ein visueller Blick auf Cabo", galleryIntro:"Öffentliche Bilder von Wikimedia Commons halten den Blog leicht und zeigen reale Los-Cabos-Orte.", gallery1:"The Arch, das Natursymbol von Cabo San Lucas.", gallery2:"Bucht von Cabo San Lucas, perfekt für den Reisebeginn.", gallery3:"Felsen, Meer und die klassische Landschaft von Land’s End.", gallery4:"Strände und Hotels am Meer entlang des touristischen Korridors.",
    faqLabel:"Häufige Fragen", faqTitle:"Schnelle Antworten vor der Reise", faq1Q:"Welche Gegend ist zum Übernachten am besten?", faq1A:"Das hängt vom Reisestil ab. Cabo San Lucas ist praktisch für Marina, Nachtleben und Touren; San José del Cabo ist ruhiger, künstlerischer und eleganter; der touristische Korridor eignet sich gut für Resorts und Erholung.", faq2Q:"Sollte man ein Auto mieten?", faq2A:"Wenn du viel selbst unterwegs bist, kann es helfen. Für Flughafen, Dinner, Sonderrouten oder Gruppen ist privater Transport mit Fahrer oft bequemer und sicherer.", faq3Q:"Wann Aktivitäten buchen?", faq3A:"Wichtige Aktivitäten am besten vor Ankunft buchen, besonders Arch-Touren, romantische Dinner, Flughafentransfers und saisonale Erlebnisse.", faq4Q:"Was sollte man vermeiden?", faq4A:"Nicht ins Meer gehen ohne Bedingungen zu prüfen, nicht zu spät zu Touren kommen, Transfers nicht in letzter Minute organisieren und den Ankunftstag nicht überladen.",
    ctaLabel:"Persönlicher Concierge", ctaTitle:"Mach Cabo ab der ersten Minute einfach.", ctaText:"Wenn du privaten Transport, geprüften Fahrer, stundenweise Routenhilfe oder stressfreie Ankunft möchtest, kannst du direkt und diskret per WhatsApp schreiben.", ctaButton:"Per WhatsApp schreiben", footerText:"Reiseblog, nützliche Ideen und privater Concierge für Los Cabos.", backTop:"Nach oben", credits:"Fotos sind von Wikimedia Commons verlinkt. Informationen zu Stränden und Aktivitäten sollten immer mit den lokalen Tagesbedingungen geprüft werden.",
    plans: {}
  },
  fr: {
    name: "Français", dir: "ltr",
    navGuides:"Guides", navIdeas:"Idées de voyage", navItineraries:"Itinéraires", navGallery:"Galerie", navFaq:"Questions", navConcierge:"Concierge",
    heroKicker:"Guide premium de Los Cabos", heroTitle:"Découvrez Los Cabos avec élégance, calme et de bons conseils.", heroLead:"Vraies plages, idées selon l’occasion, itinéraires intelligents, quoi emporter, combien de temps rester et comment se déplacer sans perdre de temps dès l’atterrissage.", heroButtonPrimary:"Explorer le guide", heroButtonSecondary:"Contacter le concierge",
    statBeaches:"Plages", statBeachesSub:"où et quand", statPacking:"Quoi emporter", statPackingSub:"valise intelligente", statDuration:"Durée", statDurationSub:"3, 5 ou 7 jours", statOccasion:"Occasion", statOccasionSub:"famille ou romance", statConcierge:"Concierge", statConciergeSub:"transport privé",
    introLabel:"L’essentiel d’abord", introTitle:"Un blog pensé pour que le voyageur dise : « ça m’a vraiment aidé ». ", introText1:"Los Cabos se vit autrement quand on sait quelle plage choisir, quelles heures éviter, quoi réserver et comment se déplacer sans stress.", introText2:"Ce guide est écrit pour les familles, couples, anniversaires, lunes de miel et voyageurs qui veulent une expérience belle, sûre et bien organisée.",
    beachPill:"Guide des plages", beachTitle:"Les plages de Los Cabos qui valent vraiment le détour", beachLead:"El Médano est pratique et animé ; Chileno Bay et Santa María sont excellentes pour une journée plus calme ; Lovers Beach est idéale pour combiner photos, bateau et visite de l’Arche.", readBeachGuide:"Lire les recommandations",
    mini1Label:"Incontournable", mini1Title:"L’Arche et Land’s End", mini1Text:"Mieux vaut y aller tôt pour une lumière douce, moins de chaleur et de meilleures photos.", mini2Label:"Pratique", mini2Title:"Marina et baie", mini2Text:"Bonne zone pour marcher, manger, acheter des souvenirs et faire des excursions d’une demi-journée.",
    conciergeTopline:"Suggestion discrète", conciergeTitle:"Votre voyage est plus agréable quand le transport est déjà réglé.", conciergeText:"Pour les arrivées, dîners, excursions, anniversaires ou routes privées, un chauffeur fiable évite attentes, négociations gênantes et changements de dernière minute.", conciergeItem1:"Accueil à l’aéroport", conciergeItem2:"Transferts privés vers hôtel, villa ou marina", conciergeItem3:"Forfaits à l’heure avec chauffeur fiable", conciergeItem4:"Aide pour organiser des moments spéciaux", conciergeButton:"WhatsApp concierge",
    beachGuideLabel:"Plages et ambiance", beachGuideTitle:"Où aller selon votre style de voyage", beachGuideIntro:"Une bonne plage n’est pas toujours la plus célèbre ; c’est celle qui correspond à votre âge, votre énergie, votre programme et la sécurité de la mer ce jour-là.",
    medanoTag:"Ambiance et confort", medanoTitle:"El Médano", medanoText:"Idéal pour ceux qui veulent restaurants proches, mouvement, musique, activités nautiques et accès facile. Très bien pour un premier jour simple.", loversTag:"Photo classique", loversTitle:"Lovers Beach", loversText:"Parfaite à visiter en bateau avec l’Arche. Prenez de l’eau, de la crème solaire et prévoyez le retour car l’accès dépend des bateaux.", chilenoTag:"Plus calme", chilenoTitle:"Chileno Bay et Santa María", chilenoText:"Très bien pour un rythme plus détendu. Vérifiez les drapeaux de sécurité avant d’entrer dans l’eau et évitez de trop charger.",
    packingLabel:"Valise intelligente", packingTitle:"Quoi emporter pour profiter de Cabo sans tout acheter à la dernière minute", packingIntro:"La clé est de porter léger, se protéger du soleil et préparer un petit sac de plage facile à déplacer entre hôtel, voiture, marina et restaurant.", pack1Title:"Soleil et plage", pack1Text:"Crème solaire respectueuse des récifs, chapeau, lunettes, maillot de bain de rechange et sandales confortables.", pack2Title:"Sorties et dîners", pack2Text:"Vêtements frais mais élégants, chemise légère, robe confortable ou pantalon en lin, et chaussures pour marcher.", pack3Title:"Excursions", pack3Text:"Sac imperméable, batterie externe, copies des réservations, petite monnaie et serviette compacte.", pack4Title:"Enfants ou seniors", pack4Text:"Snacks, eau, médicaments habituels, pièce d’identité, petite ombrelle et temps de repos planifiés.",
    durationLabel:"Combien de temps rester", durationTitle:"Le voyage idéal selon vos jours disponibles", durationIntro:"Tout le monde n’a pas besoin d’une semaine complète, mais organiser les transferts évite de perdre les meilleures heures en logistique.", duration3Title:"Trois jours", duration3Text:"Pour une escapade : arrivée confortable, dîner face à la mer, excursion à l’Arche, plage calme et soirée spéciale.", duration3Best:"Idéal pour couples ou courts séjours.", duration5Title:"Cinq jours", duration5Text:"L’option la plus équilibrée : plage, snorkeling, San José del Cabo, marina, coucher de soleil et repos.", duration5Best:"Idéal pour famille, anniversaire ou première visite.", duration7Title:"Sept jours ou plus", duration7Text:"Pour un voyage complet : ajoutez Todos Santos, La Paz, gastronomie, spa, shopping et routes privées.", duration7Best:"Parfait pour lune de miel ou longues vacances.",
    ideasLabel:"Idées par occasion", ideasTitle:"Que faire selon avec qui vous voyagez", ideasIntro:"La même destination peut être familiale, aventureuse, romantique ou très calme. Le secret est de bien organiser la journée.",
    familyTitle:"Familles avec enfants", familyText:"Choisissez une plage facile d’accès le matin, repas tôt, repos après le déjeuner et activité courte au coucher du soleil. Évitez les excursions trop longues avec de jeunes enfants.", familyList1:"Court bateau vers l’Arche", familyList2:"Plage avec services proches", familyList3:"Dîner simple avant la fatigue",
    teensTitle:"Adolescents et jeunes", teensText:"Cherchez du mouvement : snorkeling, kayak, marina, lieux photo et dîner avec ambiance. Gardez des horaires clairs.", teensList1:"Snorkeling ou paddleboard", teensList2:"Marina et lieux photo", teensList3:"Transferts privés pour sorties du soir",
    coupleTitle:"Couples", coupleText:"Ne remplissez pas trop la journée. Cabo est plus beau quand il y a du temps pour marcher lentement, regarder la mer, dîner sans hâte et rentrer confortablement.", coupleList1:"Coucher de soleil face à la mer", coupleList2:"Dîner réservé à l’avance", coupleList3:"Retour privé à l’hôtel",
    anniversaryTitle:"Anniversaire", anniversaryText:"Tout doit être fluide : voiture prête, restaurant confirmé, temps pour les photos et aucun stress entre les lieux.", anniversaryList1:"Photos au coucher du soleil", anniversaryList2:"Dîner avec vue ou terrasse", anniversaryList3:"Surprise coordonnée avec le concierge",
    honeymoonTitle:"Lune de miel", honeymoonText:"Alternez une journée d’aventure avec une journée lente. Une lune de miel se retient par les moments soignés, pas par une liste interminable.", honeymoonList1:"Petit-déjeuner lent et plage calme", honeymoonList2:"Balade privée ou croisière au coucher du soleil", honeymoonList3:"Chauffeur à l’heure pour une soirée élégante",
    seniorsTitle:"Voyageurs seniors", seniorsText:"Priorisez l’ombre, les transferts proches, les pauses et les restaurants faciles d’accès. Tout n’a pas besoin d’être aventureux pour être mémorable.", seniorsList1:"Promenades panoramiques", seniorsList2:"Repas avec vue et accès simple", seniorsList3:"Voiture privée pour éviter les longues marches",
    itineraryLabel:"Plans prêts", itineraryTitle:"Itinéraires à copier et adapter", itineraryIntro:"Utilisez-les comme point de départ. Le concierge peut ajuster horaires, restaurants et transferts selon votre hôtel ou villa.", tab3:"3 jours", tab5:"5 jours", tab7:"7 jours",
    tipsLabel:"Conseils utiles", tipsTitle:"Petits détails qui améliorent beaucoup le voyage", tip1Title:"Vérifiez les drapeaux de plage", tip1Text:"Los Cabos a de belles plages, mais toutes ne sont pas idéales pour nager chaque jour. Regardez les drapeaux et demandez avant d’entrer.", tip2Title:"Réservez les heures clés", tip2Text:"Le lever et le coucher du soleil sont les meilleurs moments pour photos, courtes excursions et dîners spéciaux.", tip3Title:"Ne surchargez pas le programme", tip3Text:"Une bonne expérience a besoin de pauses. Cabo se savoure mieux avec du temps pour se reposer et regarder la mer.", tip4Title:"Assurez le transport pour les dîners", tip4Text:"Si vous dînez loin de l’hôtel, réserver le transport évite l’attente et les soucis de retour.",
    galleryLabel:"Photos réelles de la zone", galleryTitle:"Un regard visuel sur Cabo", galleryIntro:"Images publiques liées depuis Wikimedia Commons pour garder le blog léger et connecté à de vrais lieux de Los Cabos.", gallery1:"L’Arche, l’icône naturelle de Cabo San Lucas.", gallery2:"Baie de Cabo San Lucas, parfaite pour commencer le voyage.", gallery3:"Rochers, mer et paysage classique de Land’s End.", gallery4:"Plages et hôtels en bord de mer le long du corridor touristique.",
    faqLabel:"Questions fréquentes", faqTitle:"Réponses rapides avant de voyager", faq1Q:"Quelle est la meilleure zone pour séjourner ?", faq1A:"Cela dépend du style de voyage. Cabo San Lucas est pratique pour la marina, la vie nocturne et les excursions ; San José del Cabo est plus calme, artistique et élégant ; le corridor touristique fonctionne très bien pour resorts et repos.", faq2Q:"Faut-il louer une voiture ?", faq2A:"Si vous bougez beaucoup seul, cela peut aider. Mais pour l’aéroport, dîners, routes spéciales ou groupes, un transport privé avec chauffeur est souvent plus confortable et sûr.", faq3Q:"Quand réserver les activités ?", faq3A:"Idéalement avant d’arriver, surtout les excursions à l’Arche, dîners romantiques, transferts aéroport et expériences saisonnières.", faq4Q:"Que faut-il éviter ?", faq4A:"Évitez d’entrer dans la mer sans vérifier les conditions, d’arriver en retard aux tours, de laisser les transferts à la dernière minute et de trop charger le jour d’arrivée.",
    ctaLabel:"Concierge personnel", ctaTitle:"Faites que Cabo soit simple dès la première minute.", ctaText:"Si vous souhaitez transport privé, chauffeur fiable, aide pour routes à l’heure ou arrivée sans stress, vous pouvez écrire directement et discrètement par WhatsApp.", ctaButton:"Écrire par WhatsApp", footerText:"Blog de voyage, idées utiles et concierge privé pour Los Cabos.", backTop:"Retour en haut", credits:"Photos liées depuis Wikimedia Commons. Les informations sur plages et activités doivent toujours être vérifiées selon les conditions locales du jour.",
    plans: {}
  }
};


translations.zh.plans = {
  3: [
    {day:"第1天", title:"轻松抵达", text:"机场私人接送，轻松入住，简单用餐，并在码头或附近海滩短暂散步。", items:["今天避免长途行程", "晚餐安排在酒店附近", "确认第二天接送时间"]},
    {day:"第2天", title:"拱门与海滩", text:"早上前往拱门，在Land’s End拍照，享受海滩时间，下午休息后再安排漂亮晚餐。", items:["带水和防晒", "早出发光线更好", "不要安排太满"]},
    {day:"第3天", title:"从容告别", text:"慢早餐，轻松购物，最后看一次海，并预留足够时间前往机场。", items:["确认退房时间", "早餐前整理行李", "提前协调交通"]}
  ],
  5: [
    {day:"第1天", title:"抵达与轻松晚餐", text:"安顿好后在附近走走，早点用餐，保留体力给接下来的几天。", items:["直接前往酒店", "轻食", "真正休息"]},
    {day:"第2天", title:"拱门、码头与拍照", text:"上午参观拱门，逛码头，把日落留给照片或海边晚餐。", items:["早上参加行程", "穿舒适衣物", "提前订晚餐"]},
    {day:"第3天", title:"安静海滩", text:"去Chileno Bay或Santa María，轻松浮潜，下午休息，非常适合家庭。", items:["查看海滩旗帜", "带零食", "轻装出行"]},
    {day:"第4天", title:"San José del Cabo", text:"历史中心、画廊、咖啡、轻松购物和更优雅安静的晚餐。", items:["适合情侣", "适合周年纪念", "建议私人交通"]},
    {day:"第5天", title:"灵活收尾", text:"Spa、购物、早午餐或离开前的短活动。不要把机场接送留到最后一刻。", items:["确认航班", "预留时间出发", "最后拍照"]}
  ],
  7: [
    {day:"第1天", title:"被照顾好的抵达", text:"私人接送、入住、休息和不紧张的第一顿晚餐。", items:["放慢节奏", "补水", "确认计划"]},
    {day:"第2天", title:"拱门与Cabo San Lucas", text:"拱门之旅、码头、El Médano海滩和有氛围的晚餐。", items:["早拍照", "清爽衣物", "安排回程交通"]},
    {day:"第3天", title:"浮潜与安静海滩", text:"Chileno Bay或Santa María适合放松一天，家庭和想休息的情侣都合适。", items:["确认海况", "带水", "午餐后安排休息"]},
    {day:"第4天", title:"San José del Cabo", text:"艺术、餐厅、咖啡和购物，氛围更安静优雅。", items:["下午更适合", "预订晚餐", "不要赶行程"]},
    {day:"第5天", title:"特别路线", text:"Todos Santos、La Paz或带司机的观景路线，不用自己开车也能多看一些地方。", items:["早点出发", "带充电器", "安排拍照停靠"]},
    {day:"第6天", title:"慢下来的一天", text:"Spa、度假村、海滩、阅读、海边午餐和日落，让假期更完整。", items:["不要排太满", "预约按摩", "安排特别晚餐"]},
    {day:"第7天", title:"有序离开", text:"早餐、轻松购物，并预留足够时间前往机场。", items:["检查证件", "提前打包", "确认交通"]}
  ]
};

translations.ru.plans = {
  3: [
    {day:"День 1", title:"Спокойный приезд", text:"Частный трансфер из аэропорта, спокойный check-in, легкая еда и короткая прогулка у марины или пляжа.", items:["Не планируйте длинные туры", "Ужин рядом с отелем", "Подтвердите трансфер на завтра"]},
    {day:"День 2", title:"Арка и пляж", text:"Утренний тур к Арке, фото у Land’s End, пляж и свободный вечер перед красивым ужином.", items:["Возьмите воду и крем", "Выезжайте рано", "Не перегружайте день"]},
    {day:"День 3", title:"Спокойное прощание", text:"Неспешный завтрак, легкий шопинг, последний вид на море и трансфер в аэропорт с запасом времени.", items:["Проверьте время выезда", "Соберите вещи до завтрака", "Закажите транспорт заранее"]}
  ],
  5: [
    {day:"День 1", title:"Приезд и легкий ужин", text:"Разместитесь, прогуляйтесь рядом, поужинайте рано и сохраните силы.", items:["Прямой трансфер", "Легкая еда", "Настоящий отдых"]},
    {day:"День 2", title:"Арка, марина и фото", text:"Утром Арка, затем марина, а закат оставьте для фото или ужина у моря.", items:["Ранний тур", "Удобная одежда", "Бронь ужина"]},
    {day:"День 3", title:"Спокойный пляж", text:"Chileno Bay или Santa María для снорклинга и отдыха. Отлично для семей.", items:["Проверьте флаги", "Возьмите перекусы", "Не берите лишнего"]},
    {day:"День 4", title:"San José del Cabo", text:"Исторический центр, галереи, кафе, покупки и элегантный ужин в спокойной атмосфере.", items:["Идеально для пар", "Хорошо для годовщины", "Рекомендуется частный транспорт"]},
    {day:"День 5", title:"Гибкое завершение", text:"Спа, покупки, бранч или короткая активность перед вылетом. Не откладывайте трансфер в аэропорт.", items:["Подтвердите рейс", "Выезжайте с запасом", "Последние фото"]}
  ],
  7: [
    {day:"День 1", title:"Заботливый приезд", text:"Частный трансфер, check-in, отдых и первый ужин без плотного графика.", items:["Сбавьте темп", "Пейте воду", "Подтвердите планы"]},
    {day:"День 2", title:"Арка и Cabo San Lucas", text:"Тур к Арке, марина, пляж El Médano и ужин с атмосферой.", items:["Фото утром", "Легкая одежда", "Трансфер обратно"]},
    {day:"День 3", title:"Снорклинг и тихий пляж", text:"Chileno Bay или Santa María для спокойного дня, семей или пар.", items:["Проверьте море", "Возьмите воду", "Пауза после обеда"]},
    {day:"День 4", title:"San José del Cabo", text:"Искусство, рестораны, кафе и покупки в более спокойной атмосфере.", items:["Лучше после обеда", "Забронируйте ужин", "Не спешите"]},
    {day:"День 5", title:"Особый маршрут", text:"Todos Santos, La Paz или панорамная поездка с водителем по часам.", items:["Выезжайте рано", "Возьмите зарядку", "Запланируйте остановки для фото"]},
    {day:"День 6", title:"Медленный день", text:"Спа, курорт, пляж, чтение, обед у моря и закат.", items:["Не перегружать", "Забронировать массаж", "Особый ужин"]},
    {day:"День 7", title:"Организованный выезд", text:"Завтрак, легкие покупки и трансфер в аэропорт с запасом.", items:["Проверьте документы", "Соберите вещи рано", "Подтвердите транспорт"]}
  ]
};

translations.he.plans = {
  3: [
    {day:"יום 1", title:"הגעה רגועה", text:"העברה פרטית משדה התעופה, צ׳ק-אין בלי לחץ, ארוחה קלה והליכה קצרה במרינה או ליד החוף.", items:["לא לתכנן סיורים ארוכים", "להזמין ארוחה ליד המלון", "לאשר איסוף למחר"]},
    {day:"יום 2", title:"הקשת והחוף", text:"סיור מוקדם לקשת, תמונות ב-Land’s End, זמן חוף ואחר הצהריים חופשי לפני ארוחה יפה.", items:["לקחת מים וקרם הגנה", "לצאת מוקדם לאור טוב", "לא להעמיס פעילויות"]},
    {day:"יום 3", title:"פרידה בנחת", text:"ארוחת בוקר איטית, קניות קלות, מבט אחרון לים והעברה לשדה עם מספיק זמן.", items:["בדיקת שעת צ׳ק-אאוט", "לארוז לפני ארוחת הבוקר", "לתאם תחבורה מראש"]}
  ],
  5: [
    {day:"יום 1", title:"הגעה וארוחה קלה", text:"להתמקם, ללכת באזור, לאכול מוקדם ולשמור אנרגיה לימים הבאים.", items:["העברה ישירה למלון", "אוכל קל", "מנוחה אמיתית"]},
    {day:"יום 2", title:"הקשת, המרינה ותמונות", text:"ביקור בקשת בבוקר, הליכה במרינה ושקיעה לתמונות או ארוחה מול הים.", items:["סיור מוקדם", "בגדים נוחים", "הזמנת ארוחה"]},
    {day:"יום 3", title:"חוף רגוע", text:"Chileno Bay או Santa María לשנורקל ומנוחה. טוב מאוד למשפחות.", items:["בדיקת דגלים", "לקחת חטיפים", "לטייל קל"]},
    {day:"יום 4", title:"San José del Cabo", text:"מרכז היסטורי, גלריות, קפה, קניות קלות וארוחה אלגנטית באווירה רגועה.", items:["מתאים לזוגות", "טוב ליום נישואין", "מומלץ רכב פרטי"]},
    {day:"יום 5", title:"סיום גמיש", text:"ספא, קניות, בראנץ׳ או פעילות קצרה לפני היציאה. לא להשאיר את ההעברה לשדה לרגע האחרון.", items:["אישור טיסה", "לצאת עם מרווח", "תמונות אחרונות"]}
  ],
  7: [
    {day:"יום 1", title:"הגעה מטופלת היטב", text:"העברה פרטית, צ׳ק-אין, מנוחה וארוחה ראשונה בלי לוח זמנים כבד.", items:["להאט", "לשתות מים", "לאשר תוכניות"]},
    {day:"יום 2", title:"הקשת ו-Cabo San Lucas", text:"סיור לקשת, מרינה, חוף El Médano וארוחת ערב עם אווירה.", items:["תמונות מוקדם", "בגדים קלילים", "העברה חזרה"]},
    {day:"יום 3", title:"שנורקל וחוף רגוע", text:"Chileno Bay או Santa María ליום שקט, מתאים למשפחות או זוגות שרוצים לנוח.", items:["בדיקת מצב הים", "לקחת מים", "מנוחה אחרי הצהריים"]},
    {day:"יום 4", title:"San José del Cabo", text:"אמנות, מסעדות, קפה וקניות באווירה שקטה ואלגנטית.", items:["עדיף אחר הצהריים", "להזמין ארוחה", "לא למהר"]},
    {day:"יום 5", title:"מסלול מיוחד", text:"Todos Santos, La Paz או נסיעה נופית עם נהג לפי שעה.", items:["לצאת מוקדם", "לקחת מטען", "לתכנן עצירות צילום"]},
    {day:"יום 6", title:"יום איטי", text:"ספא, ריזורט, חוף, קריאה, ארוחה מול הים ושקיעה.", items:["לא להעמיס", "להזמין מסאז׳", "ארוחה מיוחדת"]},
    {day:"יום 7", title:"יציאה מסודרת", text:"ארוחת בוקר, קניות קלות והעברה לשדה עם מספיק זמן.", items:["בדיקת מסמכים", "לארוז מוקדם", "לאשר תחבורה"]}
  ]
};

translations.de.plans = {
  3: [
    {day:"Tag 1", title:"Ruhige Ankunft", text:"Privater Flughafentransfer, entspannter Check-in, leichtes Essen und kurzer Spaziergang an Marina oder Strand.", items:["Keine langen Touren", "Dinner nahe Hotel", "Abholung für morgen bestätigen"]},
    {day:"Tag 2", title:"Arch und Strand", text:"Frühe Tour zum Arch, Fotos bei Land’s End, Strandzeit und freier Nachmittag vor einem schönen Dinner.", items:["Wasser und Sonnenschutz", "Früh starten", "Nicht zu viel planen"]},
    {day:"Tag 3", title:"Entspannte Abreise", text:"Langsames Frühstück, leichtes Shopping, letzter Meerblick und Flughafentransfer mit genügend Zeit.", items:["Check-out prüfen", "Vor Frühstück packen", "Transport vorher koordinieren"]}
  ],
  5: [
    {day:"Tag 1", title:"Ankunft und leichtes Dinner", text:"Ankommen, kurz spazieren, früh essen und Energie für die nächsten Tage sparen.", items:["Direkter Hoteltransfer", "Leichte Mahlzeit", "Echte Erholung"]},
    {day:"Tag 2", title:"Arch, Marina und Fotos", text:"Morgens Arch besuchen, Marina laufen und Sonnenuntergang für Fotos oder Dinner am Meer nutzen.", items:["Frühe Tour", "Bequeme Kleidung", "Dinner reservieren"]},
    {day:"Tag 3", title:"Ruhiger Strand", text:"Chileno Bay oder Santa María für leichtes Schnorcheln und Erholung. Sehr gut für Familien.", items:["Flaggen prüfen", "Snacks mitnehmen", "Leicht reisen"]},
    {day:"Tag 4", title:"San José del Cabo", text:"Altstadt, Galerien, Cafés, schönes Shopping und elegantes Dinner in ruhiger Atmosphäre.", items:["Ideal für Paare", "Gut für Jahrestag", "Privattransport empfohlen"]},
    {day:"Tag 5", title:"Flexibler Abschluss", text:"Spa, Shopping, Brunch oder kurze Aktivität vor Abflug. Flughafentransfer nicht aufschieben.", items:["Flug bestätigen", "Mit Puffer losfahren", "Letzte Fotos"]}
  ],
  7: [
    {day:"Tag 1", title:"Gut betreute Ankunft", text:"Privater Transfer, Check-in, Ruhe und erstes Dinner ohne volles Programm.", items:["Tempo senken", "Wasser trinken", "Pläne bestätigen"]},
    {day:"Tag 2", title:"Arch und Cabo San Lucas", text:"Arch-Tour, Marina, El Médano Strand und Dinner mit Atmosphäre.", items:["Frühe Fotos", "Leichte Kleidung", "Rücktransfer"]},
    {day:"Tag 3", title:"Schnorcheln und ruhiger Strand", text:"Chileno Bay oder Santa María für einen entspannten Tag, ideal für Familien oder Paare.", items:["Meer prüfen", "Wasser mitnehmen", "Pause nach Mittag"]},
    {day:"Tag 4", title:"San José del Cabo", text:"Kunst, Restaurants, Cafés und Shopping in ruhiger, eleganter Stimmung.", items:["Nachmittag ideal", "Dinner buchen", "Nicht hetzen"]},
    {day:"Tag 5", title:"Besondere Route", text:"Todos Santos, La Paz oder Panoramafahrt mit stundenweisem Fahrer.", items:["Früh losfahren", "Ladegerät mitnehmen", "Fotostopps planen"]},
    {day:"Tag 6", title:"Langsamer Tag", text:"Spa, Resort, Strand, Lesen, Essen am Meer und Sonnenuntergang.", items:["Nicht überplanen", "Massage buchen", "Besonderes Dinner"]},
    {day:"Tag 7", title:"Geordnete Abreise", text:"Frühstück, leichtes Shopping und Flughafentransfer mit genügend Zeit.", items:["Dokumente prüfen", "Früh packen", "Transport bestätigen"]}
  ]
};

translations.fr.plans = {
  3: [
    {day:"Jour 1", title:"Arrivée tranquille", text:"Transfert privé depuis l’aéroport, check-in calme, repas léger et courte promenade près de la marina ou de la plage.", items:["Éviter les longues excursions", "Réserver un dîner proche de l’hôtel", "Confirmer l’heure de prise en charge"]},
    {day:"Jour 2", title:"L’Arche et plage", text:"Excursion tôt à l’Arche, photos à Land’s End, temps de plage et après-midi libre avant un beau dîner.", items:["Apporter eau et crème solaire", "Partir tôt pour la lumière", "Ne pas trop programmer"]},
    {day:"Jour 3", title:"Départ en douceur", text:"Petit-déjeuner lent, shopping léger, dernière vue sur la mer et transfert aéroport avec marge.", items:["Vérifier le check-out", "Préparer les bagages avant le petit-déjeuner", "Coordonner le transport à l’avance"]}
  ],
  5: [
    {day:"Jour 1", title:"Arrivée et dîner léger", text:"Installez-vous, marchez un peu, dînez tôt et gardez de l’énergie pour la suite.", items:["Transfert direct hôtel", "Repas léger", "Vrai repos"]},
    {day:"Jour 2", title:"Arche, marina et photos", text:"Visitez l’Arche le matin, marchez dans la marina et gardez le coucher du soleil pour photos ou dîner au bord de mer.", items:["Excursion tôt", "Vêtements confortables", "Dîner réservé"]},
    {day:"Jour 3", title:"Plage calme", text:"Chileno Bay ou Santa María pour snorkeling doux et repos. Très bien pour les familles.", items:["Vérifier les drapeaux", "Apporter snacks", "Voyager léger"]},
    {day:"Jour 4", title:"San José del Cabo", text:"Centre historique, galeries, cafés, shopping doux et dîner élégant dans une ambiance calme.", items:["Idéal pour couples", "Bon plan anniversaire", "Transport privé recommandé"]},
    {day:"Jour 5", title:"Clôture flexible", text:"Spa, shopping, brunch ou courte activité avant de partir. Ne laissez pas le transfert aéroport au dernier moment.", items:["Confirmer le vol", "Partir avec marge", "Dernières photos"]}
  ],
  7: [
    {day:"Jour 1", title:"Arrivée bien organisée", text:"Transfert privé, check-in, repos et premier dîner sans programme lourd.", items:["Ralentir", "S’hydrater", "Confirmer les plans"]},
    {day:"Jour 2", title:"L’Arche et Cabo San Lucas", text:"Excursion à l’Arche, marina, plage El Médano et dîner avec ambiance.", items:["Photos tôt", "Vêtements frais", "Transfert retour"]},
    {day:"Jour 3", title:"Snorkeling et plage calme", text:"Chileno Bay ou Santa María pour une journée détendue, parfaite pour familles ou couples.", items:["Vérifier la mer", "Apporter de l’eau", "Pause après déjeuner"]},
    {day:"Jour 4", title:"San José del Cabo", text:"Art, restaurants, cafés et shopping dans une atmosphère plus calme et élégante.", items:["Mieux l’après-midi", "Réserver le dîner", "Ne pas se presser"]},
    {day:"Jour 5", title:"Route spéciale", text:"Todos Santos, La Paz ou balade panoramique avec chauffeur à l’heure.", items:["Partir tôt", "Apporter chargeur", "Prévoir arrêts photo"]},
    {day:"Jour 6", title:"Journée lente", text:"Spa, resort, plage, lecture, repas face à la mer et coucher de soleil.", items:["Ne pas surcharger", "Réserver massage", "Dîner spécial"]},
    {day:"Jour 7", title:"Départ organisé", text:"Petit-déjeuner, shopping léger et transfert aéroport avec assez de temps.", items:["Vérifier documents", "Faire les bagages tôt", "Confirmer transport"]}
  ]
};

let currentLanguage = localStorage.getItem("caboBlogLanguage") || "es";
let currentPlan = "5";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function applyLanguage(lang) {
  const data = translations[lang] || translations.es;
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.body.dir = data.dir || "ltr";
  $("#currentLang").textContent = data.name;

  $$('[data-i18n]').forEach((node) => {
    const key = node.dataset.i18n;
    if (data[key]) node.textContent = data[key];
  });

  $$('[data-lang]').forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("caboBlogLanguage", lang);
  renderPlan(currentPlan);
  closeLanguageMenu();
}

function renderPlan(planKey) {
  currentPlan = String(planKey);
  const data = translations[currentLanguage] || translations.es;
  const plans = data.plans && data.plans[currentPlan] ? data.plans[currentPlan] : translations.es.plans[currentPlan];
  const board = $("#planBoard");
  board.innerHTML = plans.map((item) => `
    <article class="plan-day">
      <strong>${item.day}</strong>
      <div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <ul>${item.items.map((line) => `<li>${line}</li>`).join("")}</ul>
      </div>
    </article>
  `).join("");

  $$('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.plan === currentPlan));
}

function closeLanguageMenu() {
  const languageBox = $("#languageBox");
  const toggle = $("#languageToggle");
  languageBox.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}

function toggleLanguageMenu() {
  const languageBox = $("#languageBox");
  const toggle = $("#languageToggle");
  const isOpen = languageBox.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
}

$("#languageToggle").addEventListener("click", (event) => {
  event.stopPropagation();
  toggleLanguageMenu();
});

$$('[data-lang]').forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

document.addEventListener("click", (event) => {
  if (!$("#languageBox").contains(event.target)) closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLanguageMenu();
});

$("#menuButton").addEventListener("click", () => {
  const menu = $("#navlinks");
  const button = $("#menuButton");
  const open = menu.classList.toggle("open");
  button.classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
});

$$('#navlinks a').forEach((link) => {
  link.addEventListener('click', () => {
    $("#navlinks").classList.remove("open");
    $("#menuButton").classList.remove("is-open");
    $("#menuButton").setAttribute("aria-expanded", "false");
  });
});

$$('.tab').forEach((tab) => {
  tab.addEventListener('click', () => renderPlan(tab.dataset.plan));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.13 });

$$('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  $('.topbar').classList.toggle('scrolled', window.scrollY > 30);
});

const cursorLight = $('.cursor-light');
window.addEventListener('pointermove', (event) => {
  cursorLight.style.left = `${event.clientX}px`;
  cursorLight.style.top = `${event.clientY}px`;
});

applyLanguage(currentLanguage);
