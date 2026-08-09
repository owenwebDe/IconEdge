"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

/* ── Rotating attention messages ── */
const MESSAGES = [
  "Want to automate your business?",
  "Let's chat about it!",
  "Need custom software? Talk to us",
  "Tired of repetitive work? We can fix that",
  "AI can transform your business",
  "Let's build something smart together",
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMsg, setCurrentMsg] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fabRef = useRef<HTMLButtonElement>(null);
  const iconContainerRef = useRef<HTMLDivElement>(null);

  /* 3D Head Rotation Animation (Cursor Tracking + Automatic Idle Look-around) */
  useEffect(() => {
    let lastMove = Date.now();
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseActive = true;
      lastMove = Date.now();
    };

    const updateRotation = () => {
      if (isOpen || !fabRef.current || !iconContainerRef.current) {
        animationFrameId = requestAnimationFrame(updateRotation);
        return;
      }

      const rect = fabRef.current.getBoundingClientRect();
      const bx = rect.left + rect.width / 2;
      const by = rect.top + rect.height / 2;

      let targetX = 0;
      let targetY = 0;

      // Track cursor if mouse moved in the last 4 seconds
      if (isMouseActive && Date.now() - lastMove < 4000) {
        const dx = mouseX - bx;
        const dy = mouseY - by;
        const maxRange = 500;
        const limit = 22;

        targetY = Math.max(-limit, Math.min(limit, (dx / maxRange) * limit));
        targetX = Math.max(-limit, Math.min(limit, -(dy / maxRange) * limit));
      } else {
        // Smooth automatic idle look-around loop (no bounce, just 3D rotation)
        const time = Date.now() * 0.0015;
        targetY = Math.sin(time) * 14;
        targetX = Math.cos(time * 0.8) * 8;
      }

      // Smooth interpolation (lerp) for liquid-like motion
      const currentTransform = iconContainerRef.current.style.transform;
      let curY = 0;
      let curX = 0;
      if (currentTransform) {
        const matchY = currentTransform.match(/rotateY\(([-\d.]+)deg\)/);
        const matchX = currentTransform.match(/rotateX\(([-\d.]+)deg\)/);
        if (matchY) curY = parseFloat(matchY[1]);
        if (matchX) curX = parseFloat(matchX[1]);
      }

      const nextY = curY + (targetY - curY) * 0.08;
      const nextX = curX + (targetX - curX) * 0.08;

      iconContainerRef.current.style.transform = `perspective(300px) rotateY(${nextY.toFixed(2)}deg) rotateX(${nextX.toFixed(2)}deg)`;

      animationFrameId = requestAnimationFrame(updateRotation);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updateRotation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isOpen]);

  /* Cycle through attention messages */
  useEffect(() => {
    if (isOpen || hasInteracted) return;

    // Show first bubble after 3 seconds
    const initialDelay = setTimeout(() => {
      setShowBubble(true);
      setTimeout(() => setBubbleVisible(true), 50);
    }, 3000);

    // Rotate messages every 5 seconds
    timerRef.current = setInterval(() => {
      setBubbleVisible(false);
      setTimeout(() => {
        setCurrentMsg((prev) => (prev + 1) % MESSAGES.length);
        setShowBubble(true);
        setTimeout(() => setBubbleVisible(true), 50);
      }, 400);
    }, 5000);

    return () => {
      clearTimeout(initialDelay);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isOpen, hasInteracted]);

  /* Auto-hide bubble after 4 seconds of showing */
  useEffect(() => {
    if (!showBubble || isOpen) return;
    const hideTimer = setTimeout(() => {
      setBubbleVisible(false);
      setTimeout(() => setShowBubble(false), 400);
    }, 4000);
    return () => clearTimeout(hideTimer);
  }, [showBubble, currentMsg, isOpen]);

  /* Focus input when panel opens */
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
    setShowBubble(false);
    setBubbleVisible(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInputValue("");

    // Placeholder bot reply (will be replaced with real AI later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for your message! Our AI assistant is being set up. In the meantime, you can reach us at hello@iconedge.tech or start a project through our contact page.",
        },
      ]);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chatbot-root">
      {/* ── Attention bubble ── */}
      {showBubble && !isOpen && (
        <div
          className={`chatbot-bubble ${bubbleVisible ? "chatbot-bubble--visible" : ""}`}
          onClick={handleToggle}
        >
          <span>{MESSAGES[currentMsg]}</span>
          <button
            className="chatbot-bubble-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowBubble(false);
              setBubbleVisible(false);
              setHasInteracted(true);
            }}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* ── Chat panel ── */}
      {isOpen && (
        <div className="chatbot-panel">
          <div className="chatbot-panel-header">
            <div className="chatbot-panel-header-left">
              <Image
                src="/sleek-robot.png"
                alt="IconEdge AI"
                width={28}
                height={28}
                className="chatbot-panel-avatar rounded-full"
              />
              <div>
                <div className="chatbot-panel-name">IconEdge AI</div>
                <div className="chatbot-panel-status">
                  <span className="chatbot-status-dot" />
                  Online
                </div>
              </div>
            </div>
            <button className="chatbot-panel-close" onClick={handleClose} aria-label="Close chat">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="chatbot-panel-body">
            {/* Welcome message (shown when no messages yet) */}
            {messages.length === 0 && (
              <>
                <div className="chatbot-welcome">
                  <Image
                    src="/sleek-robot.png"
                    alt="IconEdge AI"
                    width={48}
                    height={48}
                    className="chatbot-welcome-avatar rounded-full"
                  />
                  <h4>Hi there!</h4>
                  <p>
                    I&apos;m the IconEdge AI assistant. Ask me anything about
                    our services, or tell us about your project.
                  </p>
                </div>

                <div className="chatbot-quick-actions">
                  <a href="/contact" className="chatbot-action-btn">
                    Start a Project
                  </a>
                  <a href="/services" className="chatbot-action-btn">
                    View Our Services
                  </a>
                  <a href="/process" className="chatbot-action-btn">
                    How We Work
                  </a>
                  <a
                    href="mailto:hello@iconedge.tech"
                    className="chatbot-action-btn"
                  >
                    Email Us
                  </a>
                </div>
              </>
            )}

            {/* Chat messages */}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-msg ${msg.sender === "user" ? "chatbot-msg--user" : "chatbot-msg--bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* ── Text input box ── */}
          <div className="chatbot-input-bar">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              className="chatbot-input"
            />
            <button
              className="chatbot-send-btn"
              onClick={handleSend}
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Floating robot button ── */}
      <button
        ref={fabRef}
        className={`chatbot-fab ${isOpen ? "chatbot-fab--open" : ""}`}
        onClick={handleToggle}
        aria-label="Open chat"
      >

        {isOpen ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="chatbot-fab-close-icon">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        ) : (
          <div ref={iconContainerRef} className="chatbot-fab-icon-container">
            <Image
              src="/sleek-robot.png"
              alt="Chat with us"
              width={64}
              height={64}
              className="chatbot-fab-icon rounded-full"
            />
          </div>
        )}
      </button>
    </div>
  );
}

