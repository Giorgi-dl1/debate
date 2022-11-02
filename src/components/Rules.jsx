import React from 'react';

export default function Rules({ show }) {
  return (
    <div className={show === 'rules' ? 'content show' : 'content'}>
      <div className="team-div">
        <div>გუნდი 1:</div>
        <div className="boxes">
          <div>
            <div className="box">1</div>
            <div style={{ textAlign: 'center' }}>4 წთ</div>
          </div>
          <div>
            <div className="box">2</div>
            <div style={{ textAlign: 'center' }}>3 წთ</div>
          </div>
          <div>
            <div className="box">3</div>
            <div style={{ textAlign: 'center' }}>3 წთ</div>
          </div>
          <div>
            <div className="box">4</div>
            <div style={{ textAlign: 'center' }}>4 წთ</div>
          </div>
        </div>
      </div>
      <div className="desc">
        <span>გამომსვლელების რეგლამენტი</span>
        <div className="line">
          <div className="line-items">
            <div className="line-item">3 წთ</div>
            <div className="line-item">1 წთ კითხვისთვის</div>
            <div className="line-item">2 წთ პასუხისთვის</div>
          </div>
          <div className="line-items">4 კითხვა</div>
        </div>
      </div>
      <div className="desc">
        <span>კითხვების რეგლამენტი</span>
        <div className="line" style={{ padding: '0 2rem' }}>
          <div className="line-item">5 წთ</div>
          <div className="line-item">5 წთ</div>
          <div className="line-item">5 წთ</div>
          <div className="line-item">5 წთ</div>
        </div>
      </div>
      <div className="desc">
        <span>პოლემიკა</span>
        <div className="line"></div>
      </div>
      <div className="team-div">
        <div>გუნდი 2:</div>

        <div className="boxes">
          <div>
            <div className="box">1</div>
            <div style={{ textAlign: 'center' }}>4 წთ</div>
          </div>
          <div>
            <div className="box">2</div>
            <div style={{ textAlign: 'center' }}>3 წთ</div>
          </div>
          <div>
            <div className="box">3</div>
            <div style={{ textAlign: 'center' }}>3 წთ</div>
          </div>
          <div>
            <div className="box">4</div>
            <div style={{ textAlign: 'center' }}>4 წთ</div>
          </div>
        </div>
      </div>
      <div className="rules-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus qui
        placeat iste, aut pariatur omnis officiis culpa, magnam quia cum saepe
        et. Sunt nobis aspernatur voluptates officia iure cum similique. Placeat
        eaque fuga voluptatum inventore repellat et minima, magnam, nihil
        pariatur ea labore architecto quaerat deserunt consequatur aliquam animi
        dolores impedit accusantium nemo id ab fugiat? Iste porro et architecto?
        Provident assumenda repellendus et temporibus, nulla suscipit enim dolor
        nemo soluta explicabo commodi eius blanditiis natus dolorum consequuntur
        non aut. At quasi maiores, rerum dolore numquam dolorum hic quae
        consequuntur! Ex ducimus deleniti fugiat temporibus praesentium iste
        modi aliquam nemo, fuga autem fugit dolorem ipsa quam hic eum minima
        repudiandae perspiciatis asperiores. Maxime nihil veniam ullam quos ea,
        doloremque neque. Totam est, architecto porro cum quis magnam dolore
        distinctio eum consectetur eius ducimus similique maxime optio quod
        sapiente aperiam repellendus doloribus. Quae vero voluptatum, natus
        labore maiores dolorem sunt ea.
      </div>
    </div>
  );
}
