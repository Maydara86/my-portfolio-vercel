"use client";

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const elRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const { theme, isRTL } = useTheme();

  if (typeof document !== 'undefined' && elRef.current === null) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    const el = elRef.current!;
    document.body.appendChild(el);
    return () => {
      if (document.body.contains(el)) document.body.removeChild(el);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // focus the close button when modal opens
    setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const overlay = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative w-full max-w-4xl mx-4 rounded-lg shadow-xl transform transition-all ${
          theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
        }`}
      >
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close modal"
          className={`absolute top-3 ${ isRTL ? "left-3" : "right-3" } p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800`}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );

  return createPortal(overlay, elRef.current!);
};

export default Modal;
