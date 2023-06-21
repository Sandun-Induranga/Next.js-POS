import DashboardContainer from "@/components/DashboardContainer";
import SlideBar from "@/components/SlideBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SlideBar name="dashboard" />
      <section className="pl-20 w-full">
        <DashboardContainer />
      </section>
    </main>
  );
}
