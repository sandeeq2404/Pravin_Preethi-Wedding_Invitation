import { motion } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';

const venues = [
  {
    name: 'Reception & Wedding Venue - Chennai',
    location: 'ECR VGP Golden Beach, Valluvar Gardens',
    address: 'Injambakkam, Chennai',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d80.24!3d12.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzEyLjAiTiA4MMKwMTQnMjQuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=ECR+VGP+Golden+Beach+Valluvar+Gardens+Injambakkam+Chennai',
    color: 'from-teal-500 to-teal-700',
  },
  {
    name: 'Reception Venue - Coimbatore',
    location: 'Guna Hall, Hotel Anandas',
    address: '35, Puliyakulam Road, Coimbatore',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d76.96!3d11.01!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzM2LjAiTiA3NsKwNTcnMzYuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Anandas+Puliyakulam+Road+Coimbatore',
    color: 'from-amber-500 to-yellow-600',
  },
];

export default function MapSection() {
  return (
    <div className="relative py-20 px-6 bg-[#ffffff] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 10 L35 25 L50 25 L38 35 L43 50 L30 40 L17 50 L22 35 L10 25 L25 25 Z" fill="%23115e59" opacity="0.3"/%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-teal-900 font-bold mb-4">
            Find Your Way
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-600 mx-auto rounded-full" />
          <p className="mt-6 text-lg md:text-xl text-teal-700 font-serif max-w-2xl mx-auto">
            We can't wait to celebrate with you at these beautiful venues
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-teal-100 hover:shadow-2xl transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${venue.color}`} />

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-teal-900 mb-2">
                        {venue.name}
                      </h3>
                      <div className="flex items-start gap-2 text-teal-700">
                        <MapPin className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{venue.location}</div>
                          <div className="text-sm mt-1">{venue.address}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden shadow-lg mb-6 h-64 bg-gradient-to-br from-teal-100 to-amber-100">
                    <iframe
                      src={venue.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={venue.name}
                      className="absolute inset-0"
                    />
                  </div>

                  <motion.a
                    href={venue.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r ${venue.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="70" cy="30" r="20" fill="currentColor" className="text-amber-500" />
                    <circle cx="50" cy="50" r="15" fill="currentColor" className="text-teal-500" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-lg border border-teal-100">
            <p className="text-lg text-teal-700 font-serif mb-2">
              Need help finding your way?
            </p>
            <p className="text-teal-600">
              Feel free to reach out to us for any assistance
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-10 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MapPin className="w-20 h-20 text-teal-600" />
      </motion.div>

      <motion.div
        className="absolute top-10 right-10 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <MapPin className="w-16 h-16 text-amber-600" />
      </motion.div>
    </div>
  );
}
