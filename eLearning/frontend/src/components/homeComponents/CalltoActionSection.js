import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>If You need specific courses?</h2>
              <p>Sign up free and get the latest courses.</p>
              <form className="form-section">
                <input placeholder="Enter description..." name="email" type="email" />
                <input value="Submit" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
