export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      <a
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp chat"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>
    </div>
  );
}
