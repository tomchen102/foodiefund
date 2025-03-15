export async function getCroppedImg(
  imageSrc: string,
  crop: { x: number; y: number; width: number; height: number },
  options?: { outputWidth?: number; outputHeight?: number; format?: "image/jpeg" | "image/png" | "image/webp" }
): Promise<File | string> {
  const { outputWidth, outputHeight } = {
    outputWidth: crop.width,
    outputHeight: crop.height,
    ...options,
  };

  try {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) throw new Error("Canvas context is not available");

    canvas.width = outputWidth;
    canvas.height = outputHeight;

    ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, outputWidth, outputHeight);

    const fileTypeMatch = imageSrc.match(/\.([a-zA-Z0-9]+)(\?|$)/);
    const fileExt = fileTypeMatch ? fileTypeMatch[1].toLowerCase() : "jpeg";

    const mimeTypeMap: Record<string, string> = {
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      webp: "image/webp",
    };
    const mimeType = mimeTypeMap[fileExt] || "image/jpeg";

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const fileName = `cropped-image.${fileExt}`;
          const file = new File([blob], fileName, { type: mimeType });
          resolve(file);
        }
      }, mimeType);
    });
  } catch (error) {
    console.error("Error cropping image:", error);
    return "";
  }
}

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = url;
    image.onload = () => resolve(image);
    image.onerror = (error) => reject(new Error("Failed to load image: " + error));
  });
}
