"use client";
import { useState, useCallback, memo } from "react";
import { Carousel } from "./components";
import Link from "next/link";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Download, MapPin, Clock, X } from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Carousel />
      <EpaphraMinistries />
      <WorshipPlaces />
      <MagazineDisplay />
    </main>
  );
}

// Optimized fade-in animation variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// ---------------- About --------------
const EpaphraMinistries = memo(function EpaphraMinistries() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <LazyMotion features={domAnimation}>
            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInLeft}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <div className="relative group inline-block md:block">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src="/Logo.png"
                  alt="Epaphras Ministries Logo"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full shadow-premium mx-auto md:mx-0 object-cover border-4 border-white"
                />
              </div>

              <h2 className="mt-8 md:mt-12 text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary leading-tight">
                A Life of <span className="text-secondary">Example</span>
              </h2>
              <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                The Journey of Epaphras Ministries — Dedicated to transforming
                lives through the power of faith and service.
              </p>
            </m.div>

            <m.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInRight}
              className="w-full md:w-1/2 space-y-12"
            >
              <div className="glass p-8 rounded-3xl border border-primary/10 shadow-premium">
                <h3 className="text-3xl font-bold mb-6 text-primary font-telugu">
                  ఎపఫ్రా మినిస్ట్రీస్ ప్రయాణం
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed font-telugu text-lg">
                  <p>
                    బ్రదర్ ఎపఫ్రా గారు 1998 లో ఇద్దరికి క్రీస్తు ప్రేమను
                    బోధించుట ప్రారంభించి, దైవ చిత్తానుసారముగా 2004 లో ఎపఫ్రా
                    మినిస్ట్రీస్ ను స్థాపించారు.
                  </p>
                  <p>
                    హైదరాబాద్ పరిసర ప్రాంతాలలో నిర్వహిస్తున్న ఆరాధనలు, సువార్త
                    సభల ద్వారా అన్యులు, నామకార్ధపు అనుభవములలో ఉన్నవారిని దేవుని
                    రాజ్యము కొరకు సిద్దపరుస్తున్నారు.
                  </p>
                  <p>
                    క్రీస్తు గురించి బోధించుట మాత్రమే కాదు గాని, బోధించిన దాని
                    ప్రకారం జీవించడం ద్వారా అనేకులను క్రీస్తు వైపు
                    ఆకర్షించవచ్చని నమ్ముతున్నాము.
                  </p>
                </div>
              </div>

              <div className="bg-primary/5 p-8 rounded-3xl border border-primary/5">
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg italic">
                  <p>
                    &quot;Brother Epaphras began teaching the love of Christ to
                    two individuals in 1998. According to God&apos;s will, in
                    2004, he established Epaphra Ministries.&quot;
                  </p>
                  <p>
                    &quot;Our mission is not just to teach about Christ, but to
                    live according to his teaching, believing that a life lived
                    as an example can attract many toward Him.&quot;
                  </p>
                </div>
              </div>
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </section>
  );
});

// --------------------------Magazines------------------------
interface Magazine {
  name: string;
  month: string;
  image: string;
  download_url: string;
}

const magazines: Magazine[] = [
  {
    name: "Devuni Sparsha",
    month: "July Aug 2026",
    image: "/magazine/sparsha_jul_aug_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1ypWiLqdQwmH8qpRko9ytNLF18iYder6E/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha",
    month: "May June 2026",
    image: "/magazine/may_june_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1HZHv_IBPL6gFAbgBh9dguO8O52otQsHO/view?usp=sharing",
  },
];

const MagazineDisplay = memo(function MagazineDisplay() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative patterns - using CSS instead of inline styles for performance */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary) 1.2px, transparent 1.2px)`,
          backgroundSize: "10px 10px",
        }}
      />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-10 md:mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-primary mb-4 md:mb-6">
              Publications
            </h2>
            <p className="text-lg md:text-xl text-gray-500 font-light">
              Stay connected with our latest spiritual insights through our
              bi-monthly magazines.
            </p>
          </div>
          <Link
            href="/library"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-dark transition-colors shadow-premium text-center"
            prefetch={true}
          >
            View All Issues
          </Link>
        </div>

        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {magazines.map((magazine, index) => (
              <m.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.4 },
                  },
                }}
                className="group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-white border border-gray-100 shadow-premium flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-[3/4] overflow-hidden">
                  <img
                    src={magazine.image}
                    alt={`${magazine.name} - ${magazine.month}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 md:p-10 flex flex-col justify-between flex-1">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3 md:mb-4">
                      MAGAZINE
                    </div>
                    <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-1 md:mb-2">
                      {magazine.name}
                    </h3>
                    <p className="text-gray-500 text-base md:text-lg mb-6 md:mb-8">
                      {magazine.month}
                    </p>
                  </div>

                  <a
                    href={magazine.download_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-primary transition-colors group/btn"
                  >
                    <Download
                      size={20}
                      className="group-hover/btn:animate-bounce"
                    />
                    Download PDF
                  </a>
                </div>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
});

//------------------------ Worship places------------------------
interface WorshipPlace {
  id: number;
  name: string;
  image: string;
}

interface Prayer {
  id: number;
  day: string;
  time: string;
  description: string;
  place: number;
}

const worshipPlaces: WorshipPlace[] = [
  {
    id: 0,
    name: "Pedda Amberpet",
    image: "/home/worshipPlace/peddaamberpet.webp",
  },
  { id: 1, name: "Bhagyalatha", image: "/home/worshipPlace/bhagyalatha.webp" },
  { id: 2, name: "Chinthal", image: "/home/worshipPlace/chinthal.webp" },
  { id: 3, name: "Anajpur", image: "/home/worshipPlace/anajpur.webp" },
];

const prayers: Prayer[] = [
  {
    id: 0,
    day: "Sunday",
    time: "9:30 AM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 0,
  },
  {
    id: 1,
    day: "Sunday",
    time: "8:00 AM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 1,
  },
  {
    id: 2,
    day: "Sunday",
    time: "10:00 AM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 1,
  },
  {
    id: 3,
    day: "Saturday",
    time: "7:00 PM",
    description: "శనివారం ఉపవాస ప్రార్ధన",
    place: 1,
  },
  {
    id: 4,
    day: "1st Wednesday",
    time: "7:00 PM",
    description: "స్త్రీల కూడిక",
    place: 1,
  },
  {
    id: 5,
    day: "2nd Wednesday",
    time: "7:00 PM",
    description: "Youth Meeting",
    place: 1,
  },
  {
    id: 6,
    day: "Sunday",
    time: "10:00 AM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 2,
  },
  {
    id: 7,
    day: "Sunday",
    time: "7:00 PM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 2,
  },
  {
    id: 8,
    day: "Friday",
    time: "7:00 PM",
    description: "Friday Worship",
    place: 2,
  },
  {
    id: 9,
    day: "Sunday",
    time: "10:00 AM",
    description: "పునరుత్థానపు ఆరాధన",
    place: 3,
  },
  {
    id: 10,
    day: "Saturday",
    time: "7:00 PM",
    description: "శనివారం ఉపవాస ప్రార్ధన",
    place: 3,
  },
];

const WorshipPlaces = memo(function WorshipPlaces() {
  const [selectedPlace, setSelectedPlace] = useState<WorshipPlace | null>(null);

  const openModal = useCallback(
    (place: WorshipPlace) => setSelectedPlace(place),
    [],
  );
  const closeModal = useCallback(() => setSelectedPlace(null), []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-primary mb-4 md:mb-6">
            Worship Locations
          </h2>
          <p className="text-base sm:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Join us for worship and prayer at any of our established locations
            in and around Hyderabad.
          </p>
        </div>

        <LazyMotion features={domAnimation}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {worshipPlaces.map((place, index) => (
              <m.div
                key={place.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.4 },
                  },
                }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => openModal(place)}
                className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl md:rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-premium border border-gray-100 bg-white will-change-transform"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent p-6 md:p-8 flex flex-col justify-end">
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1 md:mb-2">
                    {place.name}
                  </h3>
                  <div className="flex items-center text-white/80 gap-2 text-xs md:text-sm">
                    <MapPin size={14} />
                    <span>View Details</span>
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </LazyMotion>
      </div>

      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {selectedPlace && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
              <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-foreground/60 backdrop-blur-xl"
                onClick={closeModal}
              />
              <m.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative w-full max-w-4xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
              >
                <div className="relative h-44 sm:h-56 md:h-72 shrink-0">
                  <img
                    src={selectedPlace.image}
                    alt={selectedPlace.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/40 backdrop-blur-md text-primary hover:bg-primary hover:text-white transition-colors shadow-lg active:scale-95"
                    aria-label="Close modal"
                  >
                    <X size={20} className="md:w-6 md:h-6" />
                  </button>
                </div>

                <div className="p-6 md:p-10 -mt-8 md:-mt-12 relative z-10 overflow-y-auto flex-1 custom-scrollbar">
                  <h4 className="text-2xl md:text-4xl font-black text-primary mb-6 md:mb-8 tracking-tighter leading-tight">
                    Prayer House: <br className="sm:hidden" />{" "}
                    {selectedPlace.name}
                  </h4>

                  <div
                    className={`grid grid-cols-1 ${prayers.filter((p) => p.place === selectedPlace.id).length > 2 ? "lg:grid-cols-2" : "max-w-2xl"} gap-4 md:gap-6`}
                  >
                    {prayers
                      .filter((p) => p.place === selectedPlace.id)
                      .map((prayer) => (
                        <div
                          key={prayer.id}
                          className="flex items-center gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-primary/20 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                        >
                          <div className="p-3 md:p-4 rounded-xl bg-white shadow-sm text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Clock size={20} className="md:w-6 md:h-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 gap-1">
                              <span className="font-bold text-base md:text-lg text-gray-900">
                                {prayer.day}
                              </span>
                              <span className="text-primary font-black uppercase text-xs sm:text-sm tracking-wider bg-primary/5 px-2 py-0.5 rounded-md w-fit">
                                {prayer.time}
                              </span>
                            </div>
                            <p className="text-gray-500 font-telugu text-base md:text-lg leading-relaxed">
                              {prayer.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                  <button
                    onClick={closeModal}
                    className="mt-8 md:mt-12 w-full py-4 md:py-5 rounded-2xl bg-primary text-white font-bold text-lg md:text-xl hover:bg-primary-dark hover:shadow-xl transition-all shadow-premium active:scale-[0.98]"
                  >
                    Return
                  </button>
                </div>
              </m.div>
            </div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </section>
  );
});
