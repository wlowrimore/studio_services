import Link from "next/link";
import Image from "next/image";
import ContactForm from "./ContactForm";

import Facebook from "../../../public/images/svg/facebook1.svg";
import Twitter from "../../../public/images/svg/twitter1.svg";
import Youtube from "../../../public/images/svg/youtube1.svg";
import Instagram from "../../../public/images/svg/instagram1.svg";

const Contact = () => {
  const address = "829 N Charlotte Ave Nashville, TN";

  return (
    <main
      id="contact"
      className="w-screen md:min-h-screen bg-contact bg-no-repeat bg-fixed bg-cover"
    >
      <section className="flex flex-col md:gap-x-10 pt-4 md:flex-row md:justify-between md:items-center md:pt-[12rem] md:pl-[15rem]">
        <div className="w-auto flex flex-col mb-4 items-center gap-4">
          <ContactForm />
        </div>

        <div className="w-full md:h-[50rem] flex flex-col py-4 md:py-0 px-2 md:mr-[10rem] items-center gap-4">
          <div className="flex items-center gap-4 md:w-full">
            <h3 className="text-xl md:text-3xl md:text-end md:font-extrabold text-gray-950 font-semibold tracking-wider uppercase">
              What next?
            </h3>
          </div>
          <div className="h-[40rem] flex flex-col overflow-y-auto scrollbar">
            <p className="text-lg tracking-wider">
              We, here at{" "}
              <span className="text-teal-800 font-bold">Imperial Studios</span>{" "}
              , have had a fantastic year! That means that our calendar has been
              completely booked up, and we are steadily taking on more sessions.
              <br />
              <br />
              Once we&apos;ve received your request we will contact you via
              email (so make sure that you provide that in your request form).
              When you receive our email be sure to respond in a timely fashion
              so we can discuss available times, pricing and anything else you
              need to know.
              <br />
              <br />
              In the mean time, if you have questions, concerns, or comments,
              please feel free to{" "}
              <Link
                href="#"
                className="text-blue-700 font-bold tracking-wide hover:text-blue-500 hover:underline"
              >
                reach out to us
              </Link>
              , and we&apos;ll respond as soon as possible.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              at tellus at urna condimentum mattis pellentesque. Purus gravida
              quis blandit turpis cursus. Feugiat in fermentum posuere urna.
              Penatibus et magnis dis parturient. Eget aliquet nibh praesent
              tristique magna sit amet. Bibendum enim facilisis gravida neque
              convallis. Posuere ac ut consequat semper viverra nam. Suspendisse
              potenti nullam ac tortor. Gravida in fermentum et sollicitudin.
              Fermentum et sollicitudin ac orci phasellus. Ut porttitor leo a
              diam sollicitudin. Amet dictum sit amet justo donec enim diam
              vulputate. Orci a scelerisque purus semper eget duis at tellus at.
              Volutpat est velit egestas dui id ornare. Et malesuada fames ac
              turpis egestas maecenas.
            </p>
          </div>
        </div>
      </section>
      <section className="w-rull flex flex-col justify-center items-center md:items-center md:pb-[12rem]">
        <div className="w-full md:p-6 flex flex-col border-y-4 border-white md:border-none text-white bg-gray-950 bg-opacity-70 py-4">
          <div className="flex flex-col items-center md:items-start mx-auto">
            <h2 className="text-lg md:text-3xl font-bold tracking-wider uppercase">
              imperial studios
            </h2>
            <p className="text-xl">829 N. Charlotte Ave.</p>
            <p className="text-xl">Nashville, TN</p>
            <p className="text-xl">37203-7551</p>
            <div className="py-4">
              <ul className="flex flex-col items-center md:items-start">
                <li>
                  <Link
                    href="mailto://fakemail@email.com"
                    className="tracking-wide text-teal-400 underline hover:no-underline"
                  >
                    info@imperialstudios.com
                  </Link>
                </li>
                <li>
                  <p className="">615.321.5678</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <ul className="flex gap-6 md:gap-14">
              <li>
                <Link href="#">
                  <Image
                    src={Facebook}
                    alt="facebook-icon"
                    width={500}
                    height={500}
                    className="w-8 md:w-10"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={Twitter}
                    alt="twitter-icon"
                    width={500}
                    height={500}
                    className="w-8 md:w-10"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={Youtube}
                    alt="youtube-icon"
                    width={500}
                    height={500}
                    className="w-8 md:w-10"
                  />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Image
                    src={Instagram}
                    alt="instagram-icon"
                    width={500}
                    height={500}
                    className="w-8 md:w-10"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="flex px-2 pb-[3rem] md:justify-center md:pb-0">
        <p className="text-[0.1%] md:text-[0.6rem] md:tracking-wide">
          &dagger; This is not a real site nor entity. All images were found on
          the internet under free public domain. &copy; Copyright 2023
          fakenamedev & William Lowrimore, All Rights Reserved.
        </p>
      </footer>
    </main>
  );
};

export default Contact;
