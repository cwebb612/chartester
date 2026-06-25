
type PageImageParams = {
  imageUrl?: string;
  imageFileName?: string;
  description?: string;
  maxWidth?: string | number;
}

export default function PageImage({
  imageUrl,
  imageFileName,
  description,
  maxWidth,
}: PageImageParams) {
  const src = imageUrl ?? imageFileName;

  return (
    <div style={{ maxWidth, margin: '0 auto', textAlign: 'center' }}>
      {src && <img src={src} alt={description ?? ''} style={{ maxWidth: '100%' }} />}
      {description && <p style={{color: "#383838"}}>{description}</p>}
    </div>
  );
}
