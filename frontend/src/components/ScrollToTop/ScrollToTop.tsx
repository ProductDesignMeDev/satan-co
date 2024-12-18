"use client";
import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const focusedElement = document.activeElement as HTMLElement | null;
    if (focusedElement) focusedElement.blur();

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, ); // Espera 100ms para evitar "saltos"

    window.history.replaceState({}, document.title, window.location.pathname);
  }, []);

  return null;
}