import DashboardContainer from "@/components/DashboardContainer";
import SlideBar from "@/components/SlideBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <SlideBar />
      <section className="pl-20 w-full">
        <DashboardContainer />
      </section>
    </main>
  );
}
