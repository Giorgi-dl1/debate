import { useContext, useEffect, useRef, useState } from "react";
import "../styles/Login.css";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const { state, dispatch } = useContext(Store);
  const { userInfo } = state;
  const [error, setError] = useState("");
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    if (!nameRef.current.value || !passwordRef.current.value) {
      setError("შეავსეთ ყველა ველი");
    } else {
      dispatch({
        type: "LOG_IN",
        payload: {
          name,
          password,
        },
      });
      if (userInfo) {
        navigate("/");
      } else {
        setError("სახელი ან პაროლი არასწორია");
      }
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo]);
  return (
    <div className="wrapper loginscreen">
      <form onSubmit={handleSubmit}>
        {error ? <div className="form-error">{error}</div> : ""}

        <label htmlFor="name">სახელი</label>
        <input
          ref={nameRef}
          type="text"
          name="name"
          placeholder="სრული სახელი..."
        />
        <label htmlFor="password">პაროლი</label>
        <input
          ref={passwordRef}
          type="password"
          name="password"
          placeholder="პაროლი..."
        />
        <button type="submit" className="styled-button">
          შესვლა
        </button>
      </form>
    </div>
  );
}
