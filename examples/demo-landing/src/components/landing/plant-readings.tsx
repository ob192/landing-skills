import { Droplets, Sun, Thermometer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Plant = {
  name: string;
  room: string;
  moisture: number;
  light: string;
  temp: string;
  status: "ok" | "soon" | "today";
};

export const plants: Plant[] = [
  { name: "Monstera", room: "Living room", moisture: 41, light: "2,300 lx", temp: "21.4 °C", status: "ok" },
  { name: "Fiddle leaf fig", room: "Bedroom", moisture: 23, light: "1,150 lx", temp: "20.8 °C", status: "soon" },
  { name: "Calathea", room: "Bathroom", moisture: 14, light: "640 lx", temp: "22.9 °C", status: "today" },
];

const statusLabel = { ok: "In 4 days", soon: "Tomorrow", today: "Water today" } as const;

/** The app screen used as the hero visual: real readings, built from tokens and primitives. */
export function PlantReadings({ className }: { className?: string }) {
  return (
    <div
      className={cn("rounded-3xl border bg-card p-3 text-card-foreground shadow-sm", className)}
      aria-label="Rootline app showing three plants"
      role="img"
    >
      <div className="flex items-center justify-between px-3 pt-2 pb-3">
        <p className="text-sm font-medium">My plants</p>
        <p className="text-xs text-muted-foreground">Updated 3 min ago</p>
      </div>
      <ul className="flex flex-col gap-2">
        {plants.map((plant) => (
          <li key={plant.name} className="rounded-2xl bg-muted p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-base font-medium">{plant.name}</p>
                <p className="text-sm text-muted-foreground">{plant.room}</p>
              </div>
              <Badge
                className={cn(
                  "rounded-full border",
                  plant.status === "ok" && "border-primary-subtle-stroke bg-primary-subtle text-primary-subtle-foreground",
                  plant.status === "soon" && "border-transparent bg-warning-subtle text-warning-subtle-foreground",
                  plant.status === "today" && "border-transparent bg-error-subtle text-error-subtle-foreground",
                )}
              >
                {statusLabel[plant.status]}
              </Badge>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
              <div className="h-full rounded-full bg-primary" style={{ width: `${plant.moisture}%` }} />
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-sm">
              <Reading icon={<Droplets aria-hidden />} label="Moisture" value={`${plant.moisture}%`} />
              <Reading icon={<Sun aria-hidden />} label="Light" value={plant.light} />
              <Reading icon={<Thermometer aria-hidden />} label="Temp" value={plant.temp} />
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Reading({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <dt className="flex items-center gap-1 text-xs text-muted-foreground [&_svg]:size-3.5">
        {icon}
        {label}
      </dt>
      <dd className="font-mono text-sm tabular-nums">{value}</dd>
    </div>
  );
}
