import styles from "./ContentContainer.module.css";
import Content from "./Content";

export default function ContentContainer({ content }: any) {
  return (
    <div className={styles.container}>
      {content.map((content: {}, index: number) => {
        return <Content content={content} key={index} />;
      })}
    </div>
  );
}
