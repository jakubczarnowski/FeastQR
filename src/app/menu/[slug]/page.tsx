import { type Metadata } from "next";
import { api } from "~/trpc/server";

export const revalidate = 60;
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

export { MenuPage as default } from "~/pageComponents/Menu/Menu.page";
