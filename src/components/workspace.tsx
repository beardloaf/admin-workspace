"use client";

import { useMemo, useState } from "react";
import {
  ResponsiveGridLayout,
  useContainerWidth,
  type Layout,
} from "react-grid-layout";
import { BentoCell } from "@/components/bento-cell";
import { Panel, type PanelKind } from "@/components/panels";
import { FeatureSheet } from "@/components/feature-sheet";
import { FEATURE_MAP, type FeatureType } from "@/lib/features";
import { SEED_CELLS, type ModuleData } from "@/lib/seed-modules";

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

export function Workspace() {
  const [cells, setCells] = useState<Cell[]>(SEED_CELLS);
  const [activeCellId, setActiveCellId] = useState<string | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

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
            rowHeight={48}
            margin={[24, 24]}
            containerPadding={[0, 0]}
            resizeConfig={{ enabled: false }}
            dragConfig={{ enabled: true, cancel: ".no-drag" }}
            onLayoutChange={handleLayoutChange}
          >
            {cells.map((cell) => (
              <div key={cell.i}>
                {cell.custom ? (
                  <Panel kind={cell.custom} />
                ) : (
                  <BentoCell id={cell.i} data={cell.data} onAdd={handleAdd} />
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
    </>
  );
}
