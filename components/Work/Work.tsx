import Image from "next/image";
import styles from "./Work.module.css";

export default function Work() {
  const COMPANIES = [
    {
      id: 0,
      src: "/images/companies/hot-sheep.png",
      alt: "Hot Sheep tickets logo",
      height: 100,
    },
    {
      id: 0,
      src: "/images/companies/plastplan.png",
      alt: "Plastplan logo",
      height: 100,
    },
    {
      id: 0,
      src: "/images/companies/grofuleiga.png",
      alt: "Grofuleiga logo",
      height: 25,
    },
  ];

  return (
    <div className="screen-size">
      <h1 className="section-title">Work experience</h1>
      <div className={styles.companyContainer}>
        {COMPANIES.map((company) => {
          return (
            <Image
              key={company.id}
              src={company.src}
              alt={company.alt}
              width="100"
              height={company.height}
            />
          );
        })}
      </div>
    </div>
  );
}
