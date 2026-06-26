"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveGridLayout,
  useContainerWidth,
  type Layout,
} from "react-grid-layout";
import {
  CompanyCard,
  AccountManagerCard,
  IntegrationsCard,
} from "@/components/panels";
import { MembersTile } from "@/components/tiles/members-tile";
import { DepartmentsTile } from "@/components/tiles/departments-tile";
import { PoliciesTile } from "@/components/tiles/policies-tile";
import { RatesTile } from "@/components/tiles/rates-tile";
import { RewardsTile } from "@/components/tiles/rewards-tile";
import { SetupTile } from "@/components/tiles/setup-tile";
import { AddTile } from "@/components/tiles/add-tile";
import { DetailSheet } from "@/components/rates-sheet";
import {
  SEED_CELLS,
  COMPANY_COLLAPSED_H,
  COMPANY_EXPANDED_H,
  type SeedCell,
} from "@/lib/seed-modules";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

type DetailConfig = { title: string; description?: string; showSave: boolean };

export function Workspace() {
  const [cells, setCells] = useState<SeedCell[]>(SEED_CELLS);
  const [detail, setDetail] = useState<DetailConfig | null>(null);

  const { width, containerRef, mounted } = useContainerWidth({
    measureBeforeMount: true,
  });

  const layout = useMemo<Layout>(
    () => cells.map(({ i, x, y, w, h }) => ({ i, x, y, w, h })),
    [cells],
  );

  function openRates() {
    setDetail({
      title: "Your Rates",
      description: "Set up your custom rates.",
      showSave: true,
    });
  }

  function openPolicies() {
    setDetail({
      title: "Travel Policies",
      description: "Adjust who each policy applies to.",
      showSave: true,
    });
  }

  function openInvite() {
    setDetail({
      title: "Invite a teammate",
      description: "Add people to your workspace.",
      showSave: true,
    });
  }

  // The dashed "+" card and "See all features" both open this.
  function openAdd() {
    setDetail({
      title: "Add a module",
      description: "Pick a module to add to your workspace.",
      showSave: false,
    });
  }

  // Turner switcher: expand/collapse pushes the cards below it down.
  function toggleCompany() {
    setCells((prev) =>
      prev.map((c) =>
        c.i === "company"
          ? {
              ...c,
              h:
                c.h > COMPANY_COLLAPSED_H
                  ? COMPANY_COLLAPSED_H
                  : COMPANY_EXPANDED_H,
            }
          : c,
      ),
    );
  }

  function handleLayoutChange(next: Layout) {
    setCells((prev) =>
      prev.map((c) => {
        const l = next.find((n) => n.i === c.i);
        return l ? { ...c, x: l.x, y: l.y, w: l.w, h: l.h } : c;
      }),
    );
  }

  function renderTile(cell: SeedCell) {
    switch (cell.i) {
      case "members":
        return <MembersTile onAdd={openInvite} />;
      case "departments":
        return <DepartmentsTile />;
      case "policies":
        return <PoliciesTile onOpen={openPolicies} />;
      case "rates":
        return <RatesTile onOpen={openRates} />;
      case "rewards":
        return <RewardsTile />;
      case "setup":
        return <SetupTile />;
      case "add":
        return <AddTile onAdd={openAdd} />;
      case "company":
        return (
          <CompanyCard
            expanded={cell.h > COMPANY_COLLAPSED_H}
            onToggle={toggleCompany}
          />
        );
      case "accountManager":
        return <AccountManagerCard />;
      case "integrations":
        return <IntegrationsCard />;
      default:
        return null;
    }
  }

  return (
    <>
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
          onClick={openAdd}
          className="shrink-0 rounded-full bg-black px-7 py-3.5 text-lg font-semibold text-white transition-transform hover:scale-[1.02]"
        >
          See all features
        </button>
      </header>

      <div ref={containerRef}>
        {mounted && (
          <ResponsiveGridLayout
            className="layout"
            width={width}
            layouts={{
              lg: layout,
              md: layout,
              sm: layout,
              xs: layout,
              xxs: layout,
            }}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 18, md: 18, sm: 18, xs: 18, xxs: 18 }}
            rowHeight={12}
            margin={[24, 24]}
            containerPadding={[0, 0]}
            resizeConfig={{ enabled: false }}
            dragConfig={{ enabled: true, cancel: ".no-drag" }}
            onLayoutChange={handleLayoutChange}
          >
            {cells.map((cell) => (
              <div key={cell.i}>{renderTile(cell)}</div>
            ))}
          </ResponsiveGridLayout>
        )}
      </div>

      <DetailSheet
        open={!!detail}
        onOpenChange={(o) => {
          if (!o) setDetail(null);
        }}
        title={detail?.title ?? ""}
        description={detail?.description}
        showSave={detail?.showSave ?? false}
      />
    </>
  );
}
