import React from "react";

export default function RateSystem({ show }) {
  return (
    <div
      className={
        show === "review" ? "content ratesystem show" : "ratesystem content"
      }
    >
      <div>1)არგუმენტირებული მსჯელობა - 20</div>
      <div>2)ადეკვატური შეკითხვები - 10</div>
      <div>3)გუნდურობა - 10</div>
      <div>4)საკითხის ადეკვატურად გაგება - 20</div>
      <div>5)ანალიტიკური მსჯელობა - 10</div>
      <div>6)ორატორულად მეტყველება - 15 </div>
      <div>7)ამომწურავი პასუხების გაცემა - 20</div>
    </div>
  );
}
