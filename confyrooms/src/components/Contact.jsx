import React from "react";

function Contact() {
  return (
    <div>
      <div className="parent">
        {/* section 1------------- */}
        <div className="secAbout container-fluid pb-5">
          <h1 className="heading text-center my-auto"> Contact</h1>
          <p className="Secpara text-center fw-bold my-1 text-dark" style={{fontSize:"14px"}}>
            Contact with Us{" "}
          </p>
        </div>

        {/* section-2--------------- */}
        <div className="section2 d-flex justify-content-center flex-wrap container-fluid row my-5">
          <div className="textsec mb-5 col-md-5">
            <h1 className=" mx-5 heading2">
              Best Rent Service, enjoy your life
            </h1>
          </div>
          <div className="textsec2 my-5 col-md-7">
            <p className="secPara2 mb-5">
              Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo
              maximus blandit. Curabitur lacinia, eros sit amet maximus
              suscipit, magna sapien veneuynatis eros, et gravida urna massa ut
              lectus. Quisque lacinia laciunia viverra. Nullram nec est et lorem
              sodales ornare a in sapien. In trtset urna marximus, conse ctetur
              iligula in, gravida erat. Nullam digniifssrim hendrerit auctor.
              Sed varius, dolor vitae iaculis condim rtweentum, massa nisl
              cursus sapien, gravida ultrices nisi dolor non erat. Quisque
              lacinia laciunia viverra. Nullram nec est et lorem sodales ornare
              a in sapien. Nullram nec est et lorem sodales ornare a in sapien.
              In trtset urna marximus, conse ctetur iligula in, gravida erat.
              Nullam digniifssrim hendrerit auctor. Sed varius, dolor vitae
              iaculis.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
