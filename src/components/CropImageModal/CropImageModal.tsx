import { useRef, useState } from "react";
import AvatarEditor from "react-avatar-editor";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export interface CropImageModalProps {
  onClose: () => void;
  isOpen: boolean;
  file: File | null;
  onCropAccepted: (file: Blob, content: string) => void;
  aspectRatio: number;
  circleCrop: boolean;
}

export const CropImageModal = ({
  isOpen,
  onClose,
  file,
  onCropAccepted,
  circleCrop,
  aspectRatio,
}: CropImageModalProps): JSX.Element => {
  const cropperRef = useRef<AvatarEditor | null>(null);
  const [scale, setScale] = useState(1);
  const { t } = useTranslation();
  const handleCropAccepted = () => {
    if (cropperRef.current) {
      const content = cropperRef.current.getImage().toDataURL();

      cropperRef.current.getImage().toBlob((blob) => {
        if (blob) {
          onCropAccepted(blob, content);
        }

        onClose();
      }, "image/png");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("cropImageModal.adjustImage")}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-10">
          <AvatarEditor
            width={300}
            height={300 / aspectRatio}
            borderRadius={circleCrop ? 150 : 1}
            scale={scale}
            ref={cropperRef}
            image={file || ""}
            disableBoundaryChecks
          />
          <Slider
            defaultValue={[1]}
            step={0.01}
            min={0.3}
            max={3}
            onValueChange={(e) => setScale(e[0] || 0)}
          />
        </div>
        <div className="flex gap-4">
          <Button onClick={handleCropAccepted}>Confirm</Button>
          <Button variant="outline" onClick={onClose}>
            {t("cropImageModal.close")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
