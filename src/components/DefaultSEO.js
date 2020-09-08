import { DefaultSeo } from "next-seo";

const SEO = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.zakadev.com/",
    site_name: "ZAKADEV Portfolio",
  },
  twitter: {
    handle: "@zakasalaheddine",
    site: "@zakadev",
    cardType: "summary_large_image",
  },
};
export default function DefaultSEO() {
  return <DefaultSeo {...SEO} />;
}
