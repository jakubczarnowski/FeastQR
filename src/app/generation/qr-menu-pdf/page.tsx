import { z } from "zod";
import { MenuCard } from "~/components/MenuCard/MenuCard";
import { asOptionalField } from "~/utils/utils";
import "./styles.css";

const validationSchema = z.object({
  qrCodeEnabled: z.coerce.boolean(),
  menuLogoImageUrl: z.string().nullable(),
  instagramHandle: asOptionalField(z.string()),
  facebookName: asOptionalField(z.string()),
  instagramEnabled: z.coerce.boolean(),
  facebookEnabled: z.coerce.boolean(),
  restaurantNameEnabled: z.coerce.boolean(),
  restaurantName: z.string(),
  wifiPasswordEnabled: z.coerce.boolean(),
  wifiPassword: z.string(),
  qrCodeUrl: z.string(),
});

export default function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const validatedMenuValues = validationSchema.parse(searchParams);

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 w-screen">
      <div className="grid w-full grid-cols-2">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <MenuCard key={index} {...validatedMenuValues} />
          ))}
      </div>
    </div>
  );
}
