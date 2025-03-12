import { useState, useCallback, useEffect } from "react";
import Cropper from "react-easy-crop";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { getCroppedImg } from "@/utils/cropImage";

import { Area, ImageCropDialogProps } from "./types";

const ImageCropDialog = ({ open, onOpenChange, imageSrc, onCropConfirm }: ImageCropDialogProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [minZoom, setMinZoom] = useState(1);
  const [maxZoom, setMaxZoom] = useState(3);
  const [cropSize, setCropSize] = useState({ width: 640, height: 360 });

  useEffect(() => {
    const updateCropSize = () => {
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth < 768;

      const newWidth = isMobile ? screenWidth * 0.9 : 640;
      const newHeight = newWidth / (16 / 9);

      setCropSize({ width: newWidth, height: newHeight });
    };

    updateCropSize();
    window.addEventListener("resize", updateCropSize);

    return () => window.removeEventListener("resize", updateCropSize);
  }, []);
  const onMediaLoaded = useCallback(
    (mediaSize: { width: number; height: number; naturalWidth: number; naturalHeight: number }) => {
      const containerWidth = 640;
      const containerHeight = 360;

      const widthRatio = containerWidth / mediaSize.width;
      const heightRatio = containerHeight / mediaSize.height;
      const initialZoom = Math.max(widthRatio, heightRatio);

      setMinZoom(initialZoom);
      setZoom(initialZoom);
      setMaxZoom(initialZoom * 3);

      setCrop({ x: 0, y: 0 });
    },
    []
  );

  useEffect(() => {
    if (imageSrc) {
      setCrop({ x: 0, y: 0 });
    }
  }, [imageSrc]);

  const onCropComplete = useCallback((_croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleConfirm = async () => {
    if (imageSrc && croppedAreaPixels) {
      const croppedFile = await getCroppedImg(imageSrc as string, croppedAreaPixels, {
        outputWidth: 640,
        outputHeight: 360,
      });
      if (croppedFile) {
        onCropConfirm(croppedFile);
      }
    }
    onOpenChange(false);
  };

  const handleZoomChange = (value: number[]) => {
    setZoom(value[0]);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setCroppedAreaPixels(null);
    }
    onOpenChange(newOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[90vw] max-w-4xl">
        <DialogHeader>
          <DialogTitle>裁切圖片</DialogTitle>
        </DialogHeader>

        <div className="relative flex h-48 w-full items-center justify-center bg-white md:h-[30rem]">
          {imageSrc && (
            <Cropper
              image={imageSrc}
              crop={crop}
              zoom={zoom}
              aspect={16 / 9}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
              onMediaLoaded={onMediaLoaded}
              minZoom={minZoom}
              maxZoom={maxZoom}
              showGrid={true}
              objectFit="cover"
              cropSize={cropSize}
              zoomWithScroll={true}
              initialCroppedAreaPercentages={{ x: 0, y: 0, width: 100, height: 100 }}
            />
          )}
        </div>
        <div className="mt-4">
          <div>
            <Slider
              value={[zoom]}
              min={minZoom}
              max={maxZoom}
              step={0.01}
              onValueChange={handleZoomChange}
              className="flex-1"
            />
          </div>
        </div>
        <DialogFooter className="flex-row gap-3">
          <Button className="w-full sm:w-auto" onClick={handleConfirm}>
            確認裁切
          </Button>
          <Button className="w-full sm:w-auto" variant="outline" onClick={() => handleOpenChange(false)}>
            取消
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImageCropDialog;
