import { useTranslation } from "react-i18next";
import { Button } from "~/components/ui/button";
import CardTableImage from "~/assets/card-table.png";
import Image from "next/image";
import { type PrintCreatorFormValues } from "../../MenuPrintCreator.schema";
import { useCallback, useEffect, useRef, useState } from "react";
import { MenuCard } from "~/components/MenuCard/MenuCard";
import { stringify } from "querystring";

const MENU_SCALE = 0.4;

export const MenuPdfGenerator = (
  menuProps: PrintCreatorFormValues & {
    qrCodeUrl: string;
  },
) => {
  const plateRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const initialSizeSet = useRef(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { t } = useTranslation();

  const handleDownloadImage = async () => {
    setIsGenerating(true);
    const searchParams = stringify(menuProps);
    const url = `${window.location.origin}/generation/qr-menu-pdf?${searchParams}`;
    const frame = document.createElement("iframe");

    frame.style.display = "none"; // hide iframe

    document.body.appendChild(frame);
    frame.src = url;
    frame.onload = () => {
      if (!frame.contentWindow) return;
      const closePrint = () => {
        document.body.removeChild(frame);
      };

      frame.contentWindow.onbeforeunload = closePrint;
      frame.contentWindow.onafterprint = closePrint;
      frame.contentWindow.print();
      setIsGenerating(false);
    };
  };

  const updateCardSize = useCallback(() => {
    if (!cardRef.current) return;
    const cardHeight = cardRef.current.clientHeight;

    const rects = plateRef.current?.getClientRects();
    const plateHeight = rects?.[0]?.height || 0;
    const newCardHeight = plateHeight * MENU_SCALE;
    const scale = newCardHeight / cardHeight;

    cardRef.current.style.cssText = `--tw-scale-x: ${scale}; --tw-scale-y: ${scale}`;
  }, []);

  useEffect(() => {
    if (!plateRef.current) return;
    if (!initialSizeSet.current) {
      updateCardSize();

      initialSizeSet.current = true;
    }

    window.addEventListener("resize", updateCardSize);

    return () => {
      window.removeEventListener("resize", updateCardSize);
    };
  }, [updateCardSize]);

  return (
    <div className="flex h-full w-full grow flex-col  items-center justify-center gap-4">
      <div className="relative " ref={plateRef}>
        <Image
          src={CardTableImage}
          alt="Plate"
          className="h-full w-full select-none  "
          onLoadingComplete={updateCardSize}
        />
        <div
          ref={cardRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.40]  shadow-2xl"
        >
          <MenuCard {...menuProps} />
        </div>
      </div>
      <Button onClick={handleDownloadImage} loading={isGenerating}>
        {t("menuPdfGenerator.generatePDFToPrint")}
      </Button>
    </div>
  );
};
