import calculateTotal, { objSum } from "../utils";

export default function Rate({ stage }) {
  return (
    <>
      <h4 className="header">{stage.name}</h4>
      <div className="team-rate">
        <div className="criteriums">
          <div className="criterium">არგუმენტირებული მსჯელობა</div>
          <div className="criterium">ადეკვატური შეკითხვები</div>
          <div className="criterium">გუნდურობა</div>
          <div className="criterium">საკითხის ადეკვატურად გაგება</div>
          <div className="criterium">ანალიტიკური მსჯელობა</div>
          <div className="criterium">ორატორულად მეტყველება</div>
          <div className="criterium">ამომწურავი პასუხების გაცემა</div>
          <div className="criterium mt">ჯამი</div>
        </div>
        <div className="rate-cols">
          {stage.rates.map((item) => (
            <div className="rate-col">
              <div className="col-header">{item.user}</div>
              <div className="col-item md">{item.rate.argumentative}</div>
              <div className="col-item md">{item.rate.adequacyQ}</div>
              <div className="col-item">{item.rate.teamwork}</div>
              <div className="col-item lg">{item.rate.adequacyU}</div>
              <div className="col-item md">{item.rate.analyticity}</div>
              <div className="col-item md">{item.rate.oratory}</div>
              <div className="col-item md">{item.rate.ComprehensiveA}</div>
              <div className="col-item mt">{objSum(item.rate)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="total-points">
        <span>გუნდის ჯამური ქულა: </span>
        {calculateTotal(stage.rates)}
      </div>
    </>
  );
}
