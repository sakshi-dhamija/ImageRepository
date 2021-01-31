import React from "react";

function About() {
  return (
    <div className="container-fluid py-4  AboutUs">
      <div className="m-lg-5 py-5">
        <div className="row py-5">
          <div className="col-lg-6 ">
            <a id="about">
              {" "}
              <img
                className="img-fluid"
                src="https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1lcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt="About"
              />
            </a>
          </div>
          <div className="col-lg-6 col-sm-12">
            <h1 className="pb-3">Features</h1>
            <p className="pb-2">
              <ul>
                <li>The user can create an account to store their images/files!</li>
                <li> The frontend of web-app is responsive!</li>
                <li>The images chosen by a user are uploaded to Firebase Storage/ 
                Google Cloud Platform storage buckets.</li>
                <li>User's account is authenticated using Firebase!</li>
                <li>The data collected from the above two steps is uploaded to Firestore database (NoSQL).</li>
                <li>To search an image type a search term in the search box. (multiple queries, 
                should be comma separated, eg: "cat, grass" with no trailing commas).</li>
              </ul>
            </p>

            <button className="mt-4">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
