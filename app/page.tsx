import { JsonLd } from "./components/json-ld";
import { HomePageClient } from "./components/home-page-client";
import { homePageSchemas } from "./lib/seo-schemas";

export default function HomePage() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <HomePageClient />
    </>
  );
}
