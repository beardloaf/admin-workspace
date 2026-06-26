import { Workspace } from "@/components/workspace";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-10">
      <header className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Workspace
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Click a + to add a module. Drag modules to rearrange your dashboard.
          </p>
        </div>
        <button
          type="button"
          className="shrink-0 rounded-full bg-black px-7 py-3.5 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          See all features
        </button>
      </header>
      <Workspace />
    </main>
  );
}
