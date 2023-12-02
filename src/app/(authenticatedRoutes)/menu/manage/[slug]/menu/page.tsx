import { MenuCreatorPage } from "~/pageComponents/MenuCreator/MenuCreator.page";

export default function Page({ params }: { params: { slug: string } }) {
  return <MenuCreatorPage params={params} />;
}
