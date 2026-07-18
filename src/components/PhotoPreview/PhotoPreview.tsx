import styles from './PhotoPreview.module.css'

type PhotoPreviewProps = {
  photoSrc: string | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoPreview({ photoSrc, isOpen, onClose }: PhotoPreviewProps) {
  if (!isOpen || !photoSrc) {
    return null;
  }

  return (
    <div className={styles['preview-container']} onClick={onClose}>
      <img src={photoSrc} alt="Preview" />
    </div>
  );
}
