import styles from './PhotoCard.module.css'
import { photos } from '../../data/photos';

type PhotoCardProps = {
  id: number;
  setPreview: (photoSrc: string) => void;
}

export default function PhotoCard({ id, setPreview }: PhotoCardProps) {
  const photoData = photos.find((photo) => photo.id === id);

  return (
    <div className={styles['card-container']}>
      <img
        src={photoData?.imageUrl}
        className={styles.photo}
        alt=""
        onClick={() => setPreview(photoData?.imageUrl ?? '')}
      />
    </div>
  );
}
