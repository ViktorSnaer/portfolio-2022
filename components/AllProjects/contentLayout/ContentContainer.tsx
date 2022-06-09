import styles from "./ContentContainer.module.css";
import Content from "./Content";

// NOT GRID

// interface ContentProps {
//   slug: string;
//   imagePath: string;
//   isImageText?: {
//     topText: string;
//     bottomText: string;
//   };
//   title: string;
//   description: string;
// }

interface Props {
  content: {};
}

export default function ContentContainer({ content }: Props) {
  return (
    <div className={styles.container}>
      {content.map((content: {}, index: number) => {
        return <Content content={content} key={index} />;
      })}
    </div>
  );
}
