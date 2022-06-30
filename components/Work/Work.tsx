import Image from "next/image";
import styles from "./Work.module.css";

export default function Work() {
  return (
    <div className="screen-size">
      <h1 className="section-title">Work experience</h1>
      <div className={styles.companyContainer}>
        <div>
          <Image
            src="/images/companies/hot-sheep.png"
            alt="lorem ipsum"
            width="100"
            height="100"
          />
        </div>
        <div>
          <Image
            src="/images/companies/plastplan.png"
            alt="lorem ipsum"
            width="100"
            height="100"
          />
        </div>
        <div>
          <Image
            src="/images/companies/grofuleiga.png"
            alt="lorem ipsum"
            width="100"
            height="25"
          />
        </div>
      </div>
    </div>
  );
}
