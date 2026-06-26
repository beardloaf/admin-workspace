"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveGridLayout,
  useContainerWidth,
  type Layout,
} from "react-grid-layout";
import { BentoCell } from "@/components/bento-cell";
import { Panel, CompanyCard } from "@/components/panels";
import { FeatureSheet } from "@/components/feature-sheet";
import { DetailSheet } from "@/components/rates-sheet";
import { FEATURE_MAP, type FeatureType } from "@/lib/features";
import {
  SEED_CELLS,
  COMPANY_COLLAPSED_H,
  COMPANY_EXPANDED_H,
  type ModuleData,
} from "@/lib/seed-modules";
import type { PanelKind } from "@/components/panels";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

type Cell = {
  i: string;
  data: ModuleData | null;
  custom?: PanelKind;
  x: number;
  y: number;
  w: number;
  h: number;
};

type DetailConfig = { title: string; description?: string; showSave: boolean };

export function Workspace() {
  const [cells, setCells] = useState<Cell[]>(SEED_CELLS);
  const [activeCellId, setActiveCellId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [detail, setDetail] = useState<DetailConfig | null>(null);

  const { width, containerRef, mounted } = useContainerWidth({
    measureBeforeMount: true,
  });

  const layout = useMemo<Layout>(
    () => cells.map(({ i, x, y, w, h }) => ({ i, x, y, w, h })),
    [cells],
  );

  function handleAdd(id: string) {
    setActiveCellId(id);
    setSheetOpen(true);
  }

  function handleSelect(feature: FeatureType) {
    const def = FEATURE_MAP[feature];
    setCells((prev) =>
      prev.map((c) =>
        c.i === activeCellId
          ? {
              ...c,
              data: {
                eyebrow: "New Module",
                title: def.name,
                body: def.description,
              },
            }
          : c,
      ),
    );
    setSheetOpen(false);
    setActiveCellId(null);
  }

  // CTA tiles open a side sheet — "Your Rates" has a Save button, the others
  // open a blank sheet with no footer button.
  function handleCtaOpen(id: string) {
    if (id === "rates") {
      setDetail({
        title: "Your Rates",
        description: "Set up your custom rates.",
        showSave: true,
      });
    } else {
      setDetail({ title: "It’s just you.", showSave: false });
    }
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

  return (
    <>
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
            cols={{ lg: 12, md: 12, sm: 12, xs: 6, xxs: 6 }}
            rowHeight={12}
            margin={[24, 24]}
            containerPadding={[0, 0]}
            resizeConfig={{ enabled: false }}
            dragConfig={{ enabled: true, cancel: ".no-drag" }}
            onLayoutChange={handleLayoutChange}
          >
            {cells.map((cell) => (
              <div key={cell.i}>
                {cell.custom === "company" ? (
                  <CompanyCard
                    expanded={cell.h > COMPANY_COLLAPSED_H}
                    onToggle={toggleCompany}
                  />
                ) : cell.custom ? (
                  <Panel kind={cell.custom} />
                ) : (
                  <BentoCell
                    id={cell.i}
                    data={cell.data}
                    onAdd={handleAdd}
                    onCtaOpen={handleCtaOpen}
                  />
                )}
              </div>
            ))}
          </ResponsiveGridLayout>
        )}
      </div>

      <FeatureSheet
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onSelect={handleSelect}
      />

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
