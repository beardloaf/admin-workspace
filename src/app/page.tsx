import { Workspace } from "@/components/workspace";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Workspace
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Click a + to add a module. Drag modules to rearrange your dashboard.
        </p>
      </header>
      <Workspace />
    </main>
  );
}
