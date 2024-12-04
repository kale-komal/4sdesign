import Image from "next/image";


const Career = () =>{
    return(
        <section id="career">
        <div>
          <div className="container-fluid  mt-5 mb-4">
            <div className="container">
              <div className="row justify-content-between mt-2 p-2">
                <div className="col-12 col-md-6 ">
                  <Image
                    src="/images/career.jpg"
                    alt="consultancy services career image"
                    layout="responsive"
                    width={400}
                    height={400}
                    className="d-block w-100 bannerImg"
                  />
                </div>
                <div className="col-12 col-md-6 ">
                  <h1 className="text-uppercase mb-4 heading">Career</h1>
                  <p>With drive and a spirit of collaboration, there are no limits to what we can achieve together. When you work at 4S Design Consultancy, you have the opportunity to build a legacy as together we create a better world.</p>
                  <p>whatever your role at 4S Design Consultancy, you can be sure you are helping to create a better world. As 4S Design Consultancy tackles some of the most challenging projects facing the world today, you will have the opportunity to challenge yourself, expand your horizons and grow in your professional career. To join us, you need intelligence, integrity, a global mindset and the desire to make a difference.</p>
                </div>
              </div>

            </div>
            <div className="text-center mt-4 mb-5">
              <a href="mailto:4sdesigncs@gmail.com" className="careerbutton text-uppercase">
                JOIN US NOW
              </a>
            </div>
          </div>

        </div>
      </section>
    )
}

export default Career;