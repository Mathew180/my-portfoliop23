import React from "react";

export default function P23HomePage() {
  return (
    <div className="bg-[#F6F6F6] font-sans text-[#0A3E35]">
      {/* Desktop Navbar */}
      <header className="hidden md:flex items-center justify-between bg-[#0A3E35] text-white px-12 py-6 shadow-lg">
        <div className="text-3xl font-extrabold tracking-tight">P23</div>
        <nav className="flex space-x-10 text-base font-medium">
          <a
            href="#"
            className="hover:text-[#E6B74A] transition-colors duration-300"
          >
            Who We Are
          </a>
          <a
            href="#"
            className="hover:text-[#E6B74A] transition-colors duration-300"
          >
            What We Do
          </a>
          <a
            href="#"
            className="hover:text-[#E6B74A] transition-colors duration-300"
          >
            Our Events
          </a>
          <a
            href="#"
            className="hover:text-[#E6B74A] transition-colors duration-300"
          >
            Resource Hub
          </a>
          <a
            href="#"
            className="hover:text-[#E6B74A] transition-colors duration-300"
          >
            Let's Collaborate
          </a>
        </nav>
        <div className="flex items-center space-x-5">
          <button className="bg-white text-[#0A3E35] px-5 py-2 rounded-md font-semibold text-sm hover:bg-[#E6B74A] transition-all duration-300">
            Subscribe
          </button>
          <i className="fab fa-linkedin text-lg hover:text-[#E6B74A]" />
          <i className="fab fa-instagram text-lg hover:text-[#E6B74A]" />
          <i className="fab fa-facebook text-lg hover:text-[#E6B74A]" />
          <i className="fab fa-youtube text-lg hover:text-[#E6B74A]" />
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="bg-[#0A3E35] text-white px-4 py-4 flex items-center justify-between md:hidden">
        <div className="text-2xl font-bold">P23</div>
        <button>
          <i className="fas fa-bars text-xl" />
        </button>
      </header>

      {/* Mobile Hero */}
      <section className="relative px-4 pt-6 pb-16 md:hidden">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold leading-tight mb-1">
            Gaining Knowledge
          </h1>
          <p className="text-2xl font-light">Through Connection.</p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-2 max-w-xs mx-auto mb-8">
          <div className="bg-[#A0C1C9] rounded-tl-[999px] h-16 flex items-center justify-center">
            <span className="text-white text-lg">↓</span>
          </div>
          <div className="bg-[#E55B2B] h-16 rounded-tr-[999px]" />
          <div className="bg-[#E6B74A] h-16 rounded-tr-[999px]" />
          <div className="bg-white bg-[url('/pattern1.svg')] bg-cover h-16" />
          <div className="bg-[#0A3E35] h-16 rounded-bl-[999px]" />
          <div className="bg-[#0A3E35] h-16 rounded-tr-[999px]" />
          <div className="bg-[#0A3E35] h-16 rounded-bl-[999px]" />
          <div className="bg-white bg-[url('/pattern2.svg')] bg-cover h-16" />
          <div className="bg-white bg-[url('/pattern3.svg')] bg-cover h-16" />
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="relative w-60">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Testimonial - Woman"
              className="rounded-lg shadow-md w-full"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] bg-white p-2 rounded shadow w-[90%]">
              “The Event was an enriching experience that provided valuable
              insight”
            </p>
          </div>
          <div className="relative w-60">
            <img
              src="https://via.placeholder.com/250x250"
              alt="Testimonial - Man"
              className="rounded-lg shadow-md w-full"
            />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-[10px] bg-white p-2 rounded shadow w-[90%]">
              “A distinguished gathering that offered opportunities for learning
              and networking.”
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Hero */}
      <section
        className="hidden md:flex justify-center items-center gap-24 px-24 py-28"
        style={{
          backgroundImage: "url('/dot-grid-bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-3 grid-rows-3 gap-3 max-w-sm">
          <div className="bg-[#A0C1C9] rounded-tl-[999px] h-24 flex items-center justify-center">
            <span className="text-white text-2xl">↓</span>
          </div>
          <div className="bg-[#E55B2B] h-24 rounded-tr-[999px]" />
          <div className="bg-[#E6B74A] h-24 rounded-tr-[999px]" />
          <div className="bg-white bg-[url('/pattern1.svg')] bg-cover h-24" />
          <div className="bg-[#0A3E35] h-24 rounded-bl-[999px]" />
          <div className="bg-[#0A3E35] h-24 rounded-tr-[999px]" />
          <div className="bg-[#0A3E35] h-24 rounded-bl-[999px]" />
          <div className="bg-white bg-[url('/pattern2.svg')] bg-cover h-24" />
          <div className="bg-white bg-[url('/pattern3.svg')] bg-cover h-24" />
        </div>
        <div>
          <h1 className="text-[54px] font-extrabold leading-tight mb-4">
            Gaining Knowledge
          </h1>
          <p className="text-6xl font-light mb-10">Through Connection.</p>
          <div className="flex gap-8">
            <div className="relative w-72">
              <img
                src="https://via.placeholder.com/250x250"
                alt="Testimonial - Woman"
                className="rounded-xl shadow-lg w-full"
              />
              <p className="absolute top-full mt-3 text-base bg-white text-[#0A3E35] p-4 rounded shadow-lg w-full leading-relaxed">
                “The Event was an enriching experience that provided valuable
                insight”
              </p>
            </div>
            <div className="relative w-72">
              <img
                src="https://via.placeholder.com/250x250"
                alt="Testimonial - Man"
                className="rounded-xl shadow-lg w-full"
              />
              <p className="absolute top-full mt-3 text-base bg-white text-[#0A3E35] p-4 rounded shadow-lg w-full leading-relaxed">
                “A distinguished gathering that offered opportunities for
                learning and networking.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-[#006E58] text-white px-4 py-14">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 px-16">
          <div className="text-white p-6 rounded-lg col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold text-lg">
                {" "}
                Upcoming Event For The Year
              </h3>
            </div>
            <p className="text-sm mb-4">
              Explore upcoming events tailored to equip, connect, and empower
              businesses across Africa and beyond.
            </p>
            <div className="flex justify-left mb-6">
              <button className="bg-white text-[#006E58] px-4 py-2 rounded font-semibold">
                See All Events →
              </button>
            </div>
          </div>

          <div className="bg-[#0A3E35] text-white p-6 rounded-lg transform -rotate-2 shadow-xl col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <i className="fas fa-calendar-alt" />
              <h3 className="font-bold text-lg">Vision & Execution</h3>
            </div>
            <p className="text-sm mb-4">
              This premier event delves deep into aligning your vision with
              actionable strategies. Join thought leaders to explore practical
              execution tactics that drive success.
            </p>
            <div className="flex justify-between text-sm font-semibold">
              <button className="underline">Book A Seat</button>
              <button className="underline">Event Details →</button>
            </div>
          </div>

          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white text-[#0A3E35] p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-calendar-alt" />
                <h3 className="font-bold text-lg">Event Name {idx + 1}</h3>
              </div>
              <p className="text-sm mb-4">
                A gathering of minds focused on growing enterprise and
                innovation in today's market. Learn, share, and connect.
              </p>
              <div className="flex justify-between text-sm font-semibold">
                <button className="underline">Book A Seat</button>
                <button className="underline">Event Details →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-4 mt-8">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#0A3E35] text-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-2 mb-2">
                <i className="fas fa-calendar-alt" />
                <h3 className="font-bold text-sm">Vision & Execution</h3>
              </div>
              <p className="text-xs mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-between text-xs font-semibold">
                <button className="underline">Book A Seat</button>
                <button className="underline">Event Details →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A3E35] text-white px-4 md:px-24 py-10 text-sm">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who We Are</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What We Do</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Training
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Resource Hub</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#E6B74A]">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
              <p className="mb-3">
                Subscribe to our newsletter and stay updated.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="px-3 py-2 text-sm rounded-l bg-white text-[#0A3E35] outline-none flex-grow"
                />
                <button className="bg-[#E6B74A] px-4 py-2 rounded-r text-sm font-semibold text-[#0A3E35] hover:bg-white transition">
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-1">P23</h3>
              <p>
                P23 Africa LTD is registered in the United Kingdom.
                <br />
                Company No: 15296700
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">Who We Are</h4>
                <ul className="space-y-1">
                  <li>About Us</li>
                  <li>Business Referral Network</li>
                  <li>University Partnership</li>
                  <li>The 54th Pitch</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">What We Do</h4>
                <ul className="space-y-1">
                  <li>Business Strategy</li>
                  <li>Market Entry</li>
                  <li>Business Research</li>
                  <li>Sales</li>
                  <li>Marketing</li>
                  <li>Business Audit</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-2">Subscribe to get updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 text-black rounded-l"
                />
                <button className="bg-[#E6B74A] text-[#0A3E35] px-4 py-2 rounded-r">
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Social Icons */}

          <div className="mt-1">
            <div className="flex justify-start space-x-4 text-lg">
              <i className="fab fa-linkedin" />
              <i className="fab fa-instagram" />
              <i className="fab fa-facebook" />
              <i className="fab fa-youtube" />
            </div>
            <p className="text-center mt-8 text-xs">© P23 Africa 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
