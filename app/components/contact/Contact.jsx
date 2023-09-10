import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <main id="contact" className="w-full h-auto mx-[20rem]">
      <section className="flex justify-between">
        <div className="w-auto flex flex-col mb-4 items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl w-fit py-3 px-6 uppercase text-black bg-gray-950 bg-opacity-30 rounded-[50%]">
              1
            </h1>
            <h3 className="text-3xl text-gray-950 font-semibold tracking-wider uppercase">
              fill out and send in this form
            </h3>
          </div>
          <ContactForm />
        </div>
        <div className="w-1/2 flex flex-col mb-4 items-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl w-fit py-3 px-6 uppercase text-black bg-gray-950 bg-opacity-30 rounded-[50%]">
              2
            </h1>
            <h3 className="text-3xl text-gray-950 font-semibold tracking-wider uppercase">
              please wait patiently
            </h3>
          </div>
          <div className="h-[32rem] flex flex-col mx-[8rem] overflow-y-auto scrollbar">
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
    </main>
  );
};

export default Contact;
