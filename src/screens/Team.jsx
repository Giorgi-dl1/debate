import { useContext, useRef, useState } from 'react';
import { Store } from '../Store';
import '../styles/Team.css';
export default function Team() {
  const { state, dispatch } = useContext(Store);
  const { userInfo, users, teams } = state;
  const keyRef = useRef(null);
  const [error, setError] = useState('');
  const team = teams.filter((team) => team.name === userInfo.team)[0];
  console.log(teams);

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = keyRef.current.value;
    dispatch({ type: 'JOIN_IN_TEAM', payload: { id: userInfo.id, key } });
    if (!userInfo.id) {
      setError('გუნდი არ მოიძებნა!');
    }
  };
  return (
    <div className="wrapper">
      {team ? (
        <div className="teamscreen">
          <div className="team-info">
            <img src={team.logo} alt="team logo" />
            <div className="team-info-details">
              <div className="team-name">{team.name}</div>
              <div
                style={{ opacity: 0.7, marginTop: '.5rem' }}
                className="team-detail"
              >
                <span>შეფასება: </span>
                <span>{team.rate}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="teamscreen-form-wrapper">
          <form onSubmit={handleSubmit}>
            {error ? <div className="form-error">{error}</div> : ''}
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
