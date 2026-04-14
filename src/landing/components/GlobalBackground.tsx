export function GlobalBackground() {
  return (
    <>
      <div className="fixed inset-0 bg-sys-grid pointer-events-none z-0"></div>
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#111111] to-transparent animate-scan absolute top-0"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-[#2563EB] to-transparent animate-sweep absolute left-1/4 opacity-10"></div>
      </div>
    </>
  );
}
