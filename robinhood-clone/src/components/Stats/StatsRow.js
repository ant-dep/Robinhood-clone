import React from "react";
import { db } from "../../firebase";
import PosChart from "../../stock.svg";
import NegChart from "../../negStock.svg";

function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  const variation = Number(percentage).toFixed(2);

  const getModal = () => {
    db.collection("myStocks")
      .where("ticker", "==", props.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          // update the record

          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: (doc.data().shares += 1),
              });
            console.log(doc.id, "=>", doc.data());
          });
        } else {
          db.collection("myStocks").add({
            ticker: props.name,
            shares: 1,
          });
        }
      });
  };
  return (
    <div className="row" onClick={getModal}>
      <div className="row__intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row__chart">
        {(variation > 0 && (
          <img src={PosChart} alt="Positive chart" height={16} />
        )) || <img src={NegChart} alt="Negative chart" height={16} />}
      </div>
      <div className="row__numbers">
        <p className="row__price">{props.price}</p>
        <p
          className={
            (variation > 0 && "row__percentagePositive") ||
            "row__percentageNegative"
          }
        >
          {/* variation difference in percentage */}
          {variation}%
        </p>
      </div>
    </div>
  );
}

export default StatsRow;
