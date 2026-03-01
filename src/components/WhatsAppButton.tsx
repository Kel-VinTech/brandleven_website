import { motion } from "framer-motion";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
    <path d="M16.004 3.2C9.054 3.2 3.404 8.85 3.404 15.8c0 2.22.58 4.39 1.68 6.3L3.2 28.8l6.92-1.82a12.56 12.56 0 006.884 1.62h.004c6.95 0 12.6-5.65 12.6-12.6-.004-3.37-1.314-6.53-3.694-8.91A12.54 12.54 0 0016.004 3.2zm0 23.04h-.004a10.44 10.44 0 01-5.33-1.46l-.38-.23-3.96 1.04 1.06-3.86-.25-.4a10.4 10.4 0 01-1.6-5.5c0-5.78 4.7-10.48 10.48-10.48 2.8 0 5.43 1.09 7.41 3.07a10.41 10.41 0 013.07 7.42c-.004 5.78-4.704 10.48-10.484 10.48zm5.74-7.85c-.31-.16-1.86-.92-2.15-1.02-.29-.1-.5-.16-.7.16-.21.31-.8 1.02-.98 1.23-.18.2-.36.23-.67.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.55.16-.18.21-.31.31-.52.1-.2.05-.39-.03-.55-.08-.16-.7-1.7-.96-2.33-.25-.61-.51-.53-.7-.54h-.6c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.58 0 1.52 1.1 2.99 1.26 3.2.16.2 2.17 3.31 5.26 4.65.73.32 1.31.51 1.76.65.74.23 1.41.2 1.94.12.59-.09 1.86-.76 2.12-1.5.27-.73.27-1.36.19-1.5-.08-.13-.29-.21-.6-.37z" />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Tooltip - desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="hidden md:block bg-background text-foreground text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-border whitespace-nowrap"
      >
        Chat With Us
      </motion.div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/2347013832571?text=Hi%20Brandleven%2C%20I%20would%20like%20to%20discuss%20a%20website%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <WhatsAppIcon />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
