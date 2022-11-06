import { useContext, useRef, useState } from "react";
import { Store } from "../Store";
import "../styles/Team.css";
import calculateTotal, { objSum } from "../utils";
export default function Team() {
  const { state, dispatch } = useContext(Store);
  const { userInfo, teams } = state;
  const keyRef = useRef(null);
  const [error, setError] = useState("");
  const team = teams.filter((team) => team.name === userInfo.team)[0];
  console.log(teams);

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = keyRef.current.value;
    dispatch({ type: "JOIN_IN_TEAM", payload: { id: userInfo.id, key } });
    if (!userInfo.id) {
      setError("გუნდი არ მოიძებნა!");
    }
  };
  console.log(team);
  return (
    <div className="wrapper">
      {team ? (
        <div className="teamscreen">
          <div className="team-info">
            <div className="logo-name">
              <img src={team.logo} alt="team logo" />
              <div className="team-info-details">
                <div className="team-name">{team.name}</div>
              </div>
            </div>
            <div className="members">
              <h4 className="header">გუნდის წევრები</h4>
              {team.members.map((member) => (
                <div key={member.id} className="member">
                  {member.name}
                </div>
              ))}
            </div>
          </div>
          <div className="rates">
            {!team.stages ? (
              <div>შეფასება არ მოიძებნა</div>
            ) : (
              <>
                {team.stages.map((stage) => (
                  <>
                    <h4 className="header">{stage.name}</h4>
                    <div className="team-rate">
                      <div className="criteriums">
                        <div className="criterium">
                          არგუმენტირებული მსჯელობა
                        </div>
                        <div className="criterium">ადეკვატური შეკითხვები</div>
                        <div className="criterium">გუნდურობა</div>
                        <div className="criterium">
                          საკითხის ადეკვატურად გაგება
                        </div>
                        <div className="criterium">ანალიტიკური მსჯელობა</div>
                        <div className="criterium">ორატორულად მეტყველება</div>
                        <div className="criterium">
                          ამომწურავი პასუხების გაცემა
                        </div>
                        <div className="criterium mt">ჯამი</div>
                      </div>
                      <div className="rate-cols">
                        {stage.rates.map((item) => (
                          <div className="rate-col">
                            <div className="col-header">{item.user}</div>
                            <div className="col-item">
                              {item.rate.argumentative}
                            </div>
                            <div className="col-item">
                              {item.rate.adequacyQ}
                            </div>
                            <div className="col-item">{item.rate.teamwork}</div>
                            <div className="col-item">
                              {item.rate.adequacyU}
                            </div>
                            <div className="col-item">
                              {item.rate.analyticity}
                            </div>
                            <div className="col-item">{item.rate.oratory}</div>
                            <div className="col-item">
                              {item.rate.ComprehensiveA}
                            </div>
                            <div className="col-item mt">
                              {objSum(item.rate)}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="total-sum">
                        <div className="criterium">გუნდის ქულა</div>
                        <div className="col-item">
                          {calculateTotal(stage.rates)}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="teamscreen-form-wrapper">
          <form onSubmit={handleSubmit}>
            {error ? <div className="form-error">{error}</div> : ""}
            <label htmlFor="key">გასაღები</label>
            <input ref={keyRef} type="text" placeholder="341774..." />
            <button type="submit" className="styled-button">
              გუნდში შესვლა
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
