import React from "react";
import Button from "react-bootstrap/Button";
const CTA = () => {
  return (
    <div>
      <section className="CTA">
        <div className="Real-CTA">
          <div className="CTA-Content">
            <h2 className="agonize">
              Don't Agonize, <br /> Organize!
            </h2>
            <h2>
              <span className="c">C</span>all Mo<span>&#8200;</span>&
              <span>&#8200;</span>Me <br /> <span className="c">C</span>lutter
              Free!
            </h2>
            <h4>
              Let us help you, <br /> hit the clutter reset button!
            </h4>
            <Button className="ctabtn" href="/ContactUs">
              {" "}
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
