import VantaBirdsCDN from "../components/VantaBirdsCDN";

export default function Page() {
  return (
    <section className="relative min-h-dvh bg-background overflow-hidden">
      <VantaBirdsCDN />
      <div className="relative z-10 min-h-dvh flex items-center justify-between px-50">
        <div className="w-100 h-150 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl" >
        <p className="relative top-5 left-5">Text</p>
        </div>
        <div className="w-100 h-150 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl" />
      </div>
    </section>
  );
}
