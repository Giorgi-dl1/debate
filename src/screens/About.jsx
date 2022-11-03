import '../styles/About.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { useState } from 'react';
import RateSystem from '../components/RateSystem';
import Rules from '../components/Rules';
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
          <Rules show={show} />
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
          <RateSystem show={show} />
        </div>
      </div>
      <div className={show ? 'info small' : 'info'}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum nemo natus
        animi unde ratione earum praesentium dolore voluptatum laborum, sapiente
        fuga iusto libero quod voluptates provident magni doloremque totam
        impedit? Sunt mollitia aspernatur hic nostrum obcaecati repellat
        molestiae itaque iure tempore in amet nam odit, quasi dolorem
        voluptatibus temporibus? Velit nobis error vero esse dolor tempora
        nesciunt ut fugit corporis. Fuga, magnam, quam maiores explicabo atque
        natus corporis possimus quod consectetur cum inventore neque, magni est
        laudantium beatae sit. Rerum reprehenderit similique eius facilis
        repellat. Quos, aperiam. Quod, nisi dolorum? Consequuntur aperiam
        perferendis distinctio sint architecto. Saepe, corporis. Unde itaque
        magni a distinctio! Similique, vero? Modi doloribus illum magnam, at
        nisi totam sit perspiciatis harum dolor voluptatum adipisci dicta iure.
        Quia dolorum id, corporis soluta qui ab quidem necessitatibus saepe,
        placeat at ea voluptas dolores repellendus sunt nihil? Voluptate quas
        cumque nostrum, inventore eligendi non facere dicta error magni
        architecto?
      </div>
    </div>
  );
}
