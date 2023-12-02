import { cookies } from "next/headers";
import { pdfGenerationValuesCookieName } from "~/pageComponents/MenuPrintCreator/MenuPrintCreator.common";
import { MenuPrintCreatorPage } from "~/pageComponents/MenuPrintCreator/MenuPrintCreator.page";
import { type PrintCreatorFormValues } from "~/pageComponents/MenuPrintCreator/MenuPrintCreator.schema";

const getFormValuesFromCookies = (): PrintCreatorFormValues | null => {
  const getCookies = cookies();
  const formValuesString = getCookies.get(pdfGenerationValuesCookieName)?.value;

  return formValuesString ? JSON.parse(formValuesString) : null;
};

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <MenuPrintCreatorPage
      slug={params.slug}
      initialCookiesFormValues={getFormValuesFromCookies()}
    />
  );
}
