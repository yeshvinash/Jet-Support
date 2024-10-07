import React from "react";
import { Container } from "react-bootstrap";
import { SVGIcons } from "../../utils";
import {
  JSButton,
  ContactUs,
  AboutYourProject,
  TechnologiesLists,
} from "../../components";
import Kotlin from "../../assets/images/technology/icons/kotlin.svg";
import JetPack from "../../assets/images/technology/icons/jetpack.svg";
import Java from "../../assets/images/technology/icons/java.svg";
import Coroutines from "../../assets/images/technology/icons/coroutines.svg";
import fastlane from "../../assets/images/technology/icons/fastlane.svg";
import Dagger from "../../assets/images/technology/icons/dagger.svg";
import Swift from "../../assets/images/technology/icons/swift.svg";
import SwiftUi from "../../assets/images/technology/icons/swiftui.svg";
import CocoaPods from "../../assets/images/technology/icons/cocoapods.svg";
import SqlLite from "../../assets/images/technology/icons/sqllite.svg";
import CoreData from "../../assets/images/technology/icons/coredata.svg";
import Firebase from "../../assets/images/technology/icons/firebase.svg";
import ReactNativeTechImg from "../../assets/images/technology/icons/react-native.svg";
import ObjectiveC from "../../assets/images/technology/icons/objective-c.svg";
import Ionic from "../../assets/images/technology/icons/ionic.svg";
import ReactJsTechImg from "../../assets/images/technology/icons/reactjs.svg";
import FlutterImg from "../../assets/images/technology/icons/flutter.svg";
import XamarinImg from "../../assets/images/technology/icons/xamarin.svg";
import JiraRTMImg from "../../assets/images/quality-assurance/expertise/jira-RTM.svg";
import ZephyrImg from "../../assets/images/quality-assurance/expertise/zephyr.svg";
import SeleniumImg from "../../assets/images/quality-assurance/expertise/selenium.svg";
import AppiumImg from "../../assets/images/quality-assurance/expertise/appium.svg";
import ApolloImg from "../../assets/images/quality-assurance/expertise/apollo.svg";
import PlaygroundImg from "../../assets/images/quality-assurance/expertise/playground.svg";
import PostmanImg from "../../assets/images/quality-assurance/expertise/postman.svg";
import JmeterImg from "../../assets/images/quality-assurance/expertise/jmeter.svg";
import JavaScriptImg from "../../assets/images/technology/icons/java-script.svg";
import JqueryImg from "../../assets/images/technology/icons/jquery.svg";
import ASPImg from "../../assets/images/technology/icons/asp.svg";
import PhpImg from "../../assets/images/technology/icons/php-img.svg";
import NodeJSImg from "../../assets/images/technology/icons/nodejs.svg";
import ShopifyImg from "../../assets/images/technology/icons/shopify.svg";
import Mongodb2Img from "../../assets/images/technology/icons/mongodb-2.svg";
import LaravelOrangeImg from "../../assets/images/technology/icons/laravel-orange.svg";
import AngularImg from "../../assets/images/technology/icons/angular.svg";
import BackboneImg from "../../assets/images/technology/icons/backbone.svg";
import WordpressImg from "../../assets/images/technology/icons/wordpress.svg";
import "./AboutUs.css";
export const TechStack = () => {
  const AndroidAppDevelopmentData = [
    {
      img: Kotlin,
      title: "Kotlin",
    },
    {
      img: JetPack,
      title: "Jetpack",
    },
    {
      img: Java,
      title: "Java",
    },
    {
      img: Coroutines,
      title: "Coroutines",
    },
    {
      img: fastlane,
      title: "Fastlane",
    },
    {
      img: Dagger,
      title: "Fastlane",
    },
  ];

  const FrontEndWebDevelopmentData = [
    {
      img: ReactJsTechImg,
      title: "React JS",
    },
    {
      img: AngularImg,
      title: "Angular",
    },
    {
      img: BackboneImg,
      title: "Backbone",
    },
    {
      img: WordpressImg,
      title: "WordPress",
    },
    {
      img: JqueryImg,
      title: "Jquery",
    },
  ];

  const IOSAppDevelopmentData = [
    {
      img: Swift,
      title: "Swift",
    },
    {
      img: SwiftUi,
      title: "Swift",
    },
    {
      img: CocoaPods,
      title: "CocoaPods",
    },
    {
      img: SqlLite,
      title: "SQLLite",
    },
    {
      img: CoreData,
      title: "Coredata",
    },
    {
      img: Firebase,
      title: "Firebase",
    },
    {
      img: ReactNativeTechImg,
      title: "React native",
    },
    {
      img: ObjectiveC,
      title: "Objective C",
    },
  ];

  const HybridAppDevelopmentData = [
    {
      img: Ionic,
      title: "Ionic",
    },
    {
      img: ReactJsTechImg,
      title: "reactjs",
    },
    {
      img: FlutterImg,
      title: "Flutter",
    },
    {
      img: XamarinImg,
      title: "xamarin",
    },
  ];

  const MobileGameDevelopmentData = [
    {
      img: Java,
      title: "Ionic",
    },
    {
      img: FlutterImg,
      title: "Flutter",
    },
    {
      img: ReactNativeTechImg,
      title: "React native",
    },
  ];

  const MobileAppMaintenanceData = [
    {
      img: SwiftUi,
      title: "Swift",
    },
    {
      img: FlutterImg,
      title: "Flutter",
    },
    {
      img: ReactNativeTechImg,
      title: "React native",
    },
  ];

  const TestManagementData = [
    {
      img: JiraRTMImg,
      title: "Jira RTM",
    },
    {
      img: ZephyrImg,
      title: "Zephyr",
    },
  ];

  const AutomationTestingData = [
    {
      img: SeleniumImg,
      title: "Selenium",
    },
    {
      img: AppiumImg,
      title: "Appium",
    },
  ];

  const ToolsData = [
    {
      img: ApolloImg,
      title: "Apollo",
    },
    {
      img: PlaygroundImg,
      title: "Playground",
    },
    {
      img: PostmanImg,
      title: "Postman",
    },
    {
      img: JmeterImg,
      title: "Jmeter",
    },
  ];

  const FullStackWebDevelopmentData = [
    {
      img: Ionic,
      title: "Angular",
    },
    {
      img: JqueryImg,
      title: "Jquery",
    },
    {
      img: JavaScriptImg,
      title: "JavaScript",
    },
    {
      img: ASPImg,
      title: "ASP",
    },
  ];

  const BackEndWebDevelopmentData = [
    {
      img: PhpImg,
      title: "PHP",
    },
    {
      img: NodeJSImg,
      title: "Node JS",
    },
    {
      img: ShopifyImg,
      title: "Shopify",
    },
    {
      img: Mongodb2Img,
      title: "Mongodb",
    },
    {
      img: LaravelOrangeImg,
      title: "Laravel",
    },
  ];

  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-sm text-center">
              <h2 className="ice mb-6 text-capitalize">
                Our <span className="gradient-text">technology</span> stack
              </h2>
              <p className="offwhite fw-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
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
          <div className="text-center text-stack-title-wrapper">
            <h2 className="mb-3 text-stack-main-title">
              Mobile App Development
            </h2>
            <p className="text-stack-main-sub-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .{" "}
            </p>
          </div>
          <div className="tech-stack-content">
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Android App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {AndroidAppDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                iOS App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {IOSAppDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Hybrid App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {HybridAppDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Mobile Game <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {MobileGameDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Mobile App <br /> Maintenance
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {MobileAppMaintenanceData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-darkwhite spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="text-center text-stack-title-wrapper">
            <h2 className="mb-3 text-stack-main-title">Website Development</h2>
            <p className="text-stack-main-sub-title mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>
          </div>
          <div className="tech-stack-content">
            <div className="tech-stack-flex d-flex">
              <div className="bg-white-shade1 d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Android App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {FrontEndWebDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-white-shade1 d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                iOS App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {BackEndWebDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-white-shade1 d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Hybrid App <br /> Development
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {FullStackWebDevelopmentData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="text-center text-stack-title-wrapper">
            <h2 className="text-stack-main-title mb-0">
              Our expertise with major quality assurance technologies
            </h2>
          </div>
          <div className="tech-stack-content">
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Test <br /> Management
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {TestManagementData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Automation <br />
                Testing
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0">
                  {AutomationTestingData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="tech-stack-flex d-flex">
              <div className="bg-darkwhite d-flex app-development-heading align-items-center justify-content-center text-center fw-medium deepblue">
                Tools
              </div>
              <div className="technologies-border-bottom tech-stack-technologies-lists">
                <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm border-0 technologies-border-bottom">
                  {ToolsData.map((item, index) => (
                    <div
                      className="d-flex flex-column technologies-content"
                      key={index}
                    >
                      <div className="mb-3 d-block text-center">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="p fw-normal technologies-title mb-0">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-top-lg spacing-bottom-lg bg-darkwhite">
        <Container>
          <div className="mb-6 pb-5 text-center dev-ops-technologies-title-wrapper">
            <h2 className="mb-3 dev-ops-technologies-title text-center mx-auto">
              DevOps
            </h2>
            <p className="mb-0 dev-ops-technologies-description mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .
            </p>
          </div>
          <TechnologiesLists />
        </Container>
      </section>
      <section className="bg-offblack spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Hire an award-winning team of experts"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
};
