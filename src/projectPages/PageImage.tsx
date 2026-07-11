import styles from './PageImage.module.css';

type PageImageParams = {
  imageUrl?: string;
  imageFileName?: string;
  description?: string;
  maxWidth?: string | number;
  downloadable?: boolean;
}

export default function PageImage({
  imageUrl,
  imageFileName,
  description,
  maxWidth,
  downloadable
}: PageImageParams) {
  const src = imageUrl ?? imageFileName;

  const downloadImageFromUrl = async (fetchUrl: string, fileName: string) => {
    try {
      // 1. Fetch the image data
      const response = await fetch(fetchUrl);

      // 2. Convert the response into a blob object
      const blob = await response.blob();

      // 3. Create a local URL pointing to that blob
      const localUrl = URL.createObjectURL(blob);

      // 4. Create a temporary anchor element
      const link = document.createElement('a');
      link.href = localUrl;
      link.download = fileName;

      // 5. Append, click, and clean up
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(localUrl);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  };

  const downloadImage = async () => {
    if (imageUrl) {
      const urlSplit = imageUrl.split("/");
      const fileName = urlSplit[urlSplit.length - 1];
      await downloadImageFromUrl(imageUrl, fileName);
    } else if (imageFileName) {
      const urlSplit = imageFileName.split("/");
      const fileName = urlSplit[urlSplit.length - 1];
      await downloadImageFromUrl(imageFileName, fileName);
    }
  };


  return (
    <div style={{ maxWidth, margin: '0 auto', textAlign: 'center', alignSelf: 'center', position: 'relative' }}>
      {downloadable && (
        <button
          type="button"
          className={styles["download-button"]}
          onClick={downloadImage}
          aria-label="Download image"
        >
          <img className={styles["download-button-icon"]} loading="lazy" src="/download-icon.svg" alt="" />
        </button>
      )}
      {src && <img loading="lazy" src={src} alt={description ?? ''} style={{ maxWidth: '100%' }} />}
      {description && <p style={{color: "#383838"}}>{description}</p>}
    </div>
  );
}
