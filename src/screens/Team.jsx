import { useContext, useRef, useState } from "react";
import Rate from "../components/Rate";
import { Store } from "../Store";
import "../styles/Team.css";
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
                <h4 className="header">შეფასებები</h4>
                {team.stages.map((stage) => (
                  <Rate stage={stage} />
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
