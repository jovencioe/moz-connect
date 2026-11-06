pessoasoas client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import { auth, googleProvider } from "@/lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (mode === "register" && name.trim().length < 2) {
      setError("Introduz o teu nome completo.");
      return;
    }

    if (password.length < 6) {
      setError("A palavra-passe deve ter pelo menos 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      if (mode === "register") {
        const result = await createUserWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );

        await updateProfile(result.user, {
          displayName: name.trim(),
        });
      } else {
        await signInWithEmailAndPassword(
          auth,
          email.trim(),
          password
        );
      }

      router.replace("/");
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err
          ? String(err.code)
          : "";

      const messages: Record<string, string> = {
        "auth/email-already-in-use":
          "Este e-mail já está registado.",
        "auth/invalid-email":
          "O endereço de e-mail não é válido.",
        "auth/weak-password":
          "Escolhe uma palavra-passe mais forte.",
        "auth/user-not-found":
          "Não encontrámos uma conta com este e-mail.",
        "auth/wrong-password":
          "Palavra-passe incorrecta.",
        "auth/invalid-credential":
          "E-mail ou palavra-passe incorrectos.",
        "auth/too-many-requests":
          "Muitas tentativas. Tenta novamente mais tarde.",
        "auth/network-request-failed":
          "Problema de ligação à internet.",
      };

      setError(messages[code] || "Ocorreu um erro. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError("");

    try {
      setLoading(true);

      await signInWithPopup(auth, googleProvider);

      router.replace("/");
    } catch (err: unknown) {
      const code =
        typeof err === "object" &&
        err !== null &&
        "code" in err
          ? String(err.code)
          : "";

      if (code === "auth/popup-closed-by-user") {
        setError("O processo de autenticação foi cancelado.");
      } else {
        setError("Não foi possível entrar com Google. Tenta novamente.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f4f6fb] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-xl sm:p-9">

        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-black text-white">
            M
          </div>

          <h1 className="text-3xl font-black text-gray-900">
            MOZ CONNECT
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Conecta pessoas. Cria oportunidades.
          </p>
        </div>

        <div className="mb-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setError("");
            }}
            className={`rounded-lg py-3 text-sm font-bold transition ${
              mode === "login"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
            }`}
          >
            Iniciar sessão
          </button>

          <button
            type="button"
            onClick={() => {
              setMode("register");
              setError("");
            }}
            className={`rounded-lg py-3 text-sm font-bold transition ${
              mode === "register"
                ? "bg-white text-blue-600 shadow"
                : "text-gray-500"
            }`}
          >
            Criar conta
          </button>
        </div>

        <h2 className="mb-2 text-2xl font-extrabold text-gray-900">
          {mode === "login" ? "Bem-vindo de volta!" : "Junta-te a nós!"}
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          {mode === "login"
            ? "Entra na tua conta para continuares."
            : "Cria a tua conta gratuitamente no MOZ CONNECT."}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {mode === "register" && (
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Nome completo
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="O teu nome completo"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Endereço de e-mail
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="exemplo@email.com"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Palavra-passe
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo de 6 caracteres"
                autoComplete={
                  mode === "register"
                    ? "new-password"
                    : "current-password"
                }
                required
                minLength={6}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 pr-20 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600"
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-xl bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Aguarda..."
              : mode === "login"
              ? "Iniciar sessão"
              : "Criar a minha conta"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs font-medium text-gray-400">
            OU CONTINUA COM
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
        >
          <span className="text-xl font-black text-blue-600">G</span>
          Continuar com Google
        </button>

        <p className="mt-7 text-center text-xs text-gray-400">
          Ao continuares, aceitas os termos e a política de privacidade
          do MOZ CONNECT.
        </p>

        <button
          type="button"
          onClick={() => router.push("/")}
          className="mt-5 w-full text-center text-sm font-semibold text-blue-600 hover:underline"
        >
          ← Voltar à página inicial
        </button>

      </div>
    </main>
  );
}
