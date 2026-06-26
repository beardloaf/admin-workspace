import {
  BarChart3,
  LineChart,
  Activity,
  Calendar,
  ListChecks,
  StickyNote,
  Users,
  Link2,
  type LucideIcon,
} from "lucide-react";

export type FeatureType =
  | "metrics"
  | "lineChart"
  | "activity"
  | "calendar"
  | "tasks"
  | "notes"
  | "team"
  | "quickLinks";

export type FeatureDef = {
  type: FeatureType;
  name: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: FeatureDef[] = [
  {
    type: "metrics",
    name: "Metrics / KPIs",
    description: "Headline numbers and key performance indicators.",
    icon: BarChart3,
  },
  {
    type: "lineChart",
    name: "Trend Chart",
    description: "A line chart showing change over time.",
    icon: LineChart,
  },
  {
    type: "activity",
    name: "Recent Activity",
    description: "A feed of the latest events and updates.",
    icon: Activity,
  },
  {
    type: "calendar",
    name: "Calendar",
    description: "Upcoming events and important dates.",
    icon: Calendar,
  },
  {
    type: "tasks",
    name: "Tasks",
    description: "A checklist of things to get done.",
    icon: ListChecks,
  },
  {
    type: "notes",
    name: "Notes",
    description: "Freeform notes and quick thoughts.",
    icon: StickyNote,
  },
  {
    type: "team",
    name: "Team",
    description: "People and presence at a glance.",
    icon: Users,
  },
  {
    type: "quickLinks",
    name: "Quick Links",
    description: "Shortcuts to the places you go most.",
    icon: Link2,
  },
];

export const FEATURE_MAP: Record<FeatureType, FeatureDef> = FEATURES.reduce(
  (acc, f) => {
    acc[f.type] = f;
    return acc;
  },
  {} as Record<FeatureType, FeatureDef>,
);
