import { Container } from "react-bootstrap";
import { JSButton } from "../../components";
import { SVGIcons, AboutTestimonialList } from "../../utils";

export const Testimonials = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Testimonial</span>
              </h2>
              <p className="offwhite fw-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
              <JSButton variant={"primary-bordered"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
          </Container>
        </main>
      </section>

      <section className="testimonial spacing-top-lg spacing-bottom-md">
        <Container>
          <h2 className="text-center text-capitalize">What our clients are saying</h2>
          <div className="testimonial-container-wrap spacing-bottom-md">
            <div className="testimonial-container-inner">
              {AboutTestimonialList.map((testimonialItem, index) => {
                return (
                  <div className="about-testimonial-card" key={index}>
                    <span className="testimonial-quote">{SVGIcons.Quote}</span>
                    <p className="testimonial-des">{testimonialItem.des}</p>
                    <div className="testimonial-profile-wrap">
                      <div className="testimonial-profile-img">
                        <img src={testimonialItem.avatar} alt="avatar" />
                      </div>
                      <div>
                        <h6 className="fw-500">{testimonialItem.name}</h6>
                        <p className="p-sm mb-0 testimonial-designation">{testimonialItem.designation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="text-center">
            <JSButton variant={"primary-bordered"}>View More</JSButton>
          </div>
        </Container>
      </section>
    </>
  )
}
