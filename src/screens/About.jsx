import '../styles/About.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
export default function About() {
  const [show, setShow] = useState(false);
  const clickHandler = (name) => {
    if (name === show) {
      setShow(false);
      return;
    }
    setShow(name);
  };
  return (
    <div className="wrapper aboutscreen">
      <div className={show ? 'dropdown large' : 'dropdown'}>
        <div
          className={
            show && show !== 'rules'
              ? 'dropdown-item-wrapper hide'
              : 'dropdown-item-wrapper'
          }
        >
          <div
            className={
              show === 'rules' ? 'dropdown-item right' : 'dropdown-item left'
            }
            onClick={() => clickHandler('rules')}
          >
            <span>წესები</span>
            <AiOutlineArrowDown
              className={show === 'rules' ? 'rotate icon' : 'icon'}
            />
          </div>
          <div className={show === 'rules' ? 'content show' : 'content'}>
            saghdsja asdkjajsdjk asdjkjadksjksadjk adsjkjdasjksdak
            dsakjjkasdkjdsa akjdsakjadksj dskjasdjkkjasd asdkjsadjkn
          </div>
        </div>
        <div
          className={
            show && show !== 'review'
              ? 'dropdown-item-wrapper hide'
              : 'dropdown-item-wrapper'
          }
        >
          <div
            onClick={() => clickHandler('review')}
            className={
              show === 'review' ? 'dropdown-item right' : 'dropdown-item left'
            }
          >
            <span>შეფასების სისტემა</span>
            <AiOutlineArrowDown
              className={show === 'review' ? 'rotate icon' : 'icon'}
            />
          </div>
          <div className={show === 'review' ? 'content show' : 'content'}>
            saghdsja asdkjajsdjk asdjkjadksjksadjk adsjkjdasjksdak
            dsakjjkasdkjdsa akjdsakjadksj dskjasdjkkjasd asdkjsadjkn
          </div>
        </div>
      </div>
      <div className={show ? 'info small' : 'info'}>information</div>
    </div>
  );
}
/* <div className="boxes-wrapper">
        <div className="boxes">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      </div> */
