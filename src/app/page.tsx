import PopularMovies from "@/app/Popular/page";
import IntallPwaComponent from "@/components/InstallPWA";

export default async function Home() {
  return (
    <>
      <PopularMovies />
      <IntallPwaComponent />
    </>
  );
}
