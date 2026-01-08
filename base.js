
  // 1) O‘ng tugma (Right click) blok
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    return false;
  });

  // 2) Klaviatura shortcut’larni blok (F12, Ctrl+Shift+I/J/C, Ctrl+U, etc.)
  document.addEventListener("keydown", (e) => {
    const key = e.key?.toLowerCase?.() || "";
    const code = e.code?.toLowerCase?.() || "";

    // F12
    if (key === "f12" || code === "f12") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+Shift+I / J / C  (DevTools / Console / Inspector)
    if (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U (View Source)
    if (e.ctrlKey && key === "u") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S (Save page)
    if (e.ctrlKey && key === "s") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+P (Print)
    if (e.ctrlKey && key === "p") {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3) (Ixtiyoriy) Matn belgilashni ham blok qilmoqchi bo‘lsang:
  // document.addEventListener("selectstart", (e) => e.preventDefault());
  // document.addEventListener("dragstart", (e) => e.preventDefault());

  // 4) (Ixtiyoriy) DevTools ochilganda “sezishga” urinib qaytarish (ham bypass bo‘ladi)
  // Eslatma: bu ba’zi brauzerlarda ishlamaydi, ba’zida performancega ta’sir qiladi.
  (function devtoolsTrap() {
    const threshold = 160;
    setInterval(() => {
      const w = window.outerWidth - window.innerWidth;
      const h = window.outerHeight - window.innerHeight;
      if (w > threshold || h > threshold) {
        // Sahifani chalg‘itish usuli (yumshoq):
        document.body.innerHTML = "";
      }
    }, 800);
  })();
