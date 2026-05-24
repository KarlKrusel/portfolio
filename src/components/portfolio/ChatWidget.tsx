import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

const WORKER_URL = import.meta.env.VITE_CHAT_WORKER_URL ?? "";

function renderMessage(text: string) {
  const clean = text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^#+\s*/gm, "");

  return clean
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line, i) => (
      <p key={i} className={i > 0 ? "mt-1.5" : ""}>
        {line}
      </p>
    ));
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content: "Hey, I'm Karl's portfolio assistant. Ask me anything about his projects, experience, or skills — or let me know if you're looking for something specific. What can I help you with?",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBadge(true), 10000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (open) {
      setShowBadge(false);
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [open, messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: messages }),
      });

      const data = await res.json();
      const reply = data.reply ?? data.error ?? "Something went wrong.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Could not reach the server. Try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="flex h-[480px] w-[340px] flex-col overflow-hidden border border-border bg-background shadow-2xl sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                Ask anything
              </p>
              <p className="text-sm font-medium text-ink">Karl's Portfolio AI</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-ink transition-colors"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i}>
              <div className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-ink text-background"
                      : "border border-border text-ink"
                  }`}
                >
                  {m.role === "assistant" ? renderMessage(m.content) : m.content}
                </div>
              </div>
              {i === 0 && messages.length === 1 && (
                <div className="mt-2 space-y-1.5">
                  {[
                    "What projects has Karl built?",
                    "Is Karl available for internships?",
                    "What cloud experience does he have?",
                  ].map((q) => (
                    <button
                      key={q}
                      onClick={() => { setInput(q); inputRef.current?.focus(); }}
                      className="block w-full text-left border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:text-ink hover:border-ink transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="border border-border px-3 py-2">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border flex items-center gap-2 px-3 py-2.5">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent font-mono text-xs text-ink placeholder:text-muted-foreground outline-none"
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="text-muted-foreground hover:text-ink disabled:opacity-30 transition-colors"
              aria-label="Send"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-12 w-12 items-center justify-center bg-ink text-background shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        {!open && showBadge && (
          <span className="absolute -left-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 font-mono text-[10px] text-white">
            1
          </span>
        )}
      </button>
    </div>
  );
}
