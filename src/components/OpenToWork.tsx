const OpenToWork = () => {
  return (
    <div className="inline-flex flex-col items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/5 px-6 py-4 text-sm text-muted-foreground mx-auto">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
        <span className="font-medium text-foreground">Open to new opportunities</span>
      </div>
      <span>Toronto, ON · On-site / Hybrid / Remote</span>
      <span className="text-xs">Target roles: Backend Engineer · Full-Stack Engineer · Cloud Engineer</span>
    </div>
  );
};

export default OpenToWork;
