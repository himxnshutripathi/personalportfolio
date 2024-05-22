import React from "react";
import "./Certificates.css";
import CertiItem from "./CertiItem/CertiItem";
import { Certi01, Certi02, Certi03, Certi04 } from "../../assets/assets";

const Certificates = () => {
  return (
    <div className="Certificates">
      <h1>Certifications</h1>
      <CertiItem
        img={Certi01[0]}
        date={Certi01[2]}
        name={Certi01[1]}
        link={Certi01[3]}
        l1={Certi01[4]}
        l2={Certi01[5]}
        l3={Certi01[6]}
      />

      <CertiItem
        img={Certi02[0]}
        date={Certi02[2]}
        name={Certi02[1]}
        link={Certi02[3]}
        l1={Certi02[4]}
        l2={Certi02[5]}
        l3={Certi02[6]}
      />

      <CertiItem
        img={Certi04[0]}
        date={Certi04[2]}
        name={Certi04[1]}
        link={Certi04[3]}
        l1={Certi04[4]}
        l2={Certi04[5]}
        l3={Certi04[6]}
      />

      <CertiItem
        img={Certi03[0]}
        date={Certi03[2]}
        name={Certi03[1]}
        link={Certi03[3]}
        l1={Certi03[4]}
        l2={Certi03[5]}
        l3={Certi03[6]}
      />
    </div>
  );
};

export default Certificates;
