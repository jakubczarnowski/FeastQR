import { type Metadata } from "next";
import { PreviewMenuPage } from "~/pageComponents/PreviewMenuPage/PreviewMenuPage.page";
import { api } from "~/trpc/server";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;

  const data = await api.menus.getPublicMenuBySlug.query({ slug }).catch(() => {
    return null;
  });

  if (!data) return {};

  return {
    title: `${data.name} Menu`,
    description: `${data.address} | ${data.city}`,
    openGraph: {
      title: `${data.name} Menu`,
      description: `${data.address} | ${data.city}`,
      url: "https://feastqr.com",
      siteName: "FeastQR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${data.name} Menu`,
      description: `${data.address} | ${data.city}`,
      site: "@feastqr",
    },
  };
}

export default function Page(props: { params: { slug: string } }) {
  return <PreviewMenuPage {...props} />;
}
