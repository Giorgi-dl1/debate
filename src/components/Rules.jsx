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
        <h4>თემის წარდგენის დანაწილება გუნდის წევრებისთვის:</h4>
        <div>
          1)გუნდის პირველი მონაწილე ზოგადად მიმოიხილავს საკითხს და კონკრეტულ,ან
          ზოგად მიმართულებას აძლევს თემას. გუნდის პირველ მონაწილეს თემის
          წარდგენის შემდეგ არ ესმევა კითხვები და მასზე არ ვრცელდება პოლემიკის
          რეჟიმი,თუმცა რეგლამენტით მას ეძლევა საშუალება დასვას კითხვები და
          წარმართოს პოლემიკის რეჟიმი.
        </div>
        <div>
          2)გუნდის მეორე მონაწილე წარმოადგენს არგუმენტებს და თავის გამოსვლაში ის
          იწყებს წარმოდგენილი არგუმენტების ლოგიკურ დასაბუთებას.
        </div>
        <div>
          3) მესამე გამომსვლელი ამყარებს მეორე გამომსვლელის არგუმენტებს და
          დებატის პროცესში შემოაქვს ახალი არგუმენტები,რასაც ახლავს ლოგიკური
          დასაბუთება.
        </div>
        <div>
          4)მეოთხე გამომსვლელი აჯამებს სამივე გამომსვლელის პოზიციას, საუბრობს
          მოწინააღმდეგე გუნდის სუსტ მხარეებზე და სრულყოფს საკუთარი გუნდის
          პოზიციას. <br /> * ერთ გამომსვლელთან გარდა პირველისა, მოწინააღმდეგე
          გუნდის ყველა წევრს ეძლევა ერთი შეკითხვის დასმის
          საშუალება,შესაძლებებლია ოთხივე კითხვა გუნდის ერთმა წევრმაც დასვას.ერთ
          კითხვას რეგლამენტით ენიჭება 1წთ,ხოლო პასუხს 2წთ,რაც ჯამში სამ წუთს
          მოიცავს.
          <br /> * პოლემიკის რეჟიმის წარმართვა შეუძლია გუნდის ნებისმიერ წევრს,
          რისთვისაც რეგლამენტით გათვალისწინებულია 5წთ. პოლემიკა დგება გამომსვლელ
          მონაწილესა და მოწინააღმდეგე გუნდის ერთ წევრს შორის (რომელსაც გუნდი
          ირჩევს). გუნდის პირველ წევრთან პოლემიკა არ დგება,თუმცა გუნდის პირველ
          წევრს შეუძლია პოლემიკის გამართვა მოწინააღმდეგე გუნდის ნებისმიერ
          წევრთან, გარდა პირველისა!
        </div>
        <h4>დამატებეითი წესები:</h4>
        <div>
          1)დამსწრე აუდიტორიას ეძლევა სამი რეპლიკის გაკეთების საშუალება,თითოეულ
          გუნდთან მიმართებით (რეპლიკის დრო 2წთ).
        </div>
        <div>
          2)ორგანიზატორებს რომლებიც ასევე პასუხისმგებლები არიან პროცესის
          ფორმატის მიხედვით წარმართვაზე, ეძლევათ ორი კითხვის დასმის საშუალება
          (კითხვების დრო 3წთ).
        </div>
      </div>
    </div>
  );
}
