import { Container } from "react-bootstrap";
import { JSButton } from "../../components";
import { SVGIcons, ClientList } from "../../utils";

export const OurClients = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                Our <span className="gradient-text">Clients</span>
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

      <section className="spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="client-container-wrap">
            <div className="client-container-inner">
              {ClientList.map((clientItem, index) => {
                return (
                  <div className="client-wrap" key={index}>
                    <img src={clientItem.image} alt={clientItem.alt} />
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
