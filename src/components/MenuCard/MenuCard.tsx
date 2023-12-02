import { QRCodeSVG } from "qrcode.react";
import { Icons } from "../Icons";
import { type PrintCreatorFormValues } from "~/pageComponents/MenuPrintCreator/MenuPrintCreator.schema";

type MenuCardProps = PrintCreatorFormValues & {
  qrCodeUrl: string;
};

export const MenuCard = ({
  qrCodeEnabled,
  menuLogoImageUrl: menuBgImageUrl,
  instagramHandle,
  instagramEnabled,
  facebookName,
  facebookEnabled,
  restaurantNameEnabled,
  restaurantName,
  wifiPasswordEnabled,
  wifiPassword,
  qrCodeUrl,
}: MenuCardProps) => {
  return (
    <div className="flex h-[14.85cm] w-[10.5cm] flex-col items-center justify-between gap-6 rounded-lg border-2 border-muted bg-slate-100 p-10">
      <div className="flex flex-col items-center gap-6">
        {restaurantNameEnabled ? (
          <div className="flex flex-col items-center gap-3">
            <p className="text-center text-4xl font-extrabold">
              {restaurantName}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <p className="text-4xl font-extrabold">Menu Online</p>
          </div>
        )}
        <div className="flex flex-col gap-2">
          <QRCodeSVG
            size={200}
            value={qrCodeUrl}
            level="M"
            {...(menuBgImageUrl &&
              qrCodeEnabled && {
                imageSettings: {
                  src: menuBgImageUrl,
                  height: 48,
                  width: 48,
                  excavate: false,
                },
              })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex w-full flex-row flex-wrap items-center gap-2 border-b border-black pb-1">
            {instagramEnabled && (
              <div className="flex flex-row items-center gap-1">
                <Icons.instagram className="h-4 w-4" />
                <p className="text-base font-normal">{instagramHandle}</p>
              </div>
            )}
            {facebookEnabled && (
              <div className="flex flex-row items-center gap-1">
                <Icons.facebook className="h-4 w-4" />
                <p className="text-base font-normal">{facebookName}</p>
              </div>
            )}
          </div>
          <p className="text-base">Follow us on social media!</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <p className="text-base">Scan the QR code to check our online menu!</p>
        {wifiPasswordEnabled && (
          <div className="flex flex-row flex-wrap justify-center gap-2">
            <Icons.wifi className="h-4 w-4" />
            <p className="text-base">WiFi Password:</p>
            <p className="border-b text-base">{wifiPassword}</p>
          </div>
        )}
      </div>
    </div>
  );
};
