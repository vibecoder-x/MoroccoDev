type StatusType = "live" | "development" | "alpha";

const statusConfig: Record<StatusType, { label: string; color: string; dotColor: string }> = {
  live: {
    label: "Live",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    dotColor: "bg-emerald-400",
  },
  development: {
    label: "In Development",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    dotColor: "bg-amber-400",
  },
  alpha: {
    label: "Sovereign Alpha",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    dotColor: "bg-purple-400",
  },
};

export default function StatusBadge({ status }: { status: StatusType }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-medium tracking-wider uppercase ${config.color}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dotColor} ${status === "live" ? "animate-pulse" : ""}`} />
      {config.label}
    </span>
  );
}
