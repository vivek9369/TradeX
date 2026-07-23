import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Section */}
        <div className="col-lg-6 col-md-6 col-12 mb-4 mb-md-0">
          <img
            src="/media/images/education.svg"
            alt="Free and Open Market Education"
            className="img-fluid" style={{width:"85%"}}
          />
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-6 col-12">
          <h1 className="mb-3">Free and Open Market Education</h1>

          <p className="text-muted mb-4">
            Varsity, the largest online stock market education platform in the
            world, covers everything from the basics to advanced trading.
            Bookmark and browse through 5000+ pages at your own pace.
          </p>

          <div className="d-flex flex-column gap-3">
            <a
              href="#"
              className="education-link"
              style={{ textDecoration: "none" }}
            >
              Varsity{" "}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
<p className="mt-5">
  Trading Q&A is India's most active trading and investment community, where
  investors and traders discuss market trends, share strategies, ask questions,
  and learn from experienced professionals.
</p>
            <a
              href="#"
              className="education-link"
              style={{ textDecoration: "none" }}
            >
              Trading Q&amp;A{" "}
              <i className="fa-solid fa-arrow-right ms-1"></i>
            </a>
            <p className="mt-5">
  Trading Q&A is India's most active trading and investment community for all
  your stock market, trading, and investing discussions.
</p>
          </div>
        </div>

      </div>

      <style>{`
        .education-link {
          font-weight: 500;
          color: #387ed1;
          transition: color 0.2s ease, transform 0.2s ease;
          width: fit-content;
        }

        .education-link:hover {
          color: #0056b3;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
}

export default Education;