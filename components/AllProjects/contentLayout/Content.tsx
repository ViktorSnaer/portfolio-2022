import Link from "next/link";
import Image from "next/image";

import styles from "./Content.module.css";

export default function Content({
  content,
}: {
  slug: string;
  imagePath: string;
  title: string;
  description: string;
  bottomText?: string;
}) {
  return (
    <Link href={content.slug} passHref>
      <div className={styles.container}>
        <div className={`${styles.imageContainer} box-shadow`}>
          <Image
            className={styles.image}
            src={content.imagePath}
            alt={content.title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <h3 className={styles.title}>{content.title}</h3>
        <p className={styles.excerpt}>{content.description}</p>
        <div>
          <p className={styles.bottomText}>{content.bottomText}</p>
        </div>
      </div>
    </Link>
  );
}
