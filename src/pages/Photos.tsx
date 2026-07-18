import { useState } from 'react';
import styles from "./Dev.module.css";
import { photos } from '../data/photos';
import PhotoCard from "../components/PhotoCard/PhotoCard";
import PhotoPreview from "../components/PhotoPreview/PhotoPreview"

export default function Photos() {
  const [selectedPhotoSrc, setSelectedPhotoSrc] = useState<string | null>(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const setPhotoPreview = (photoSrc: string) => {
    setSelectedPhotoSrc(photoSrc);
    setIsPreviewOpen(true);
  };

  return (
    <div>
      {/* <div className={styles["page-title"]}>
        Photography Portfolio
      </div> */}
      <div className={styles["content-container"]}>
        {photos.map((photo) => <PhotoCard key={photo.id} id={photo.id} setPreview={setPhotoPreview} />)}
      </div>
      <PhotoPreview
        photoSrc={selectedPhotoSrc}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
