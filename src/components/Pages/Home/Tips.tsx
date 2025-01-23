import React from "react";

const Tips = () => {
  return (
    <section className="w-full px-5 py-16 bg-[#f5f7fa]">
      <div className="w-full md:container">
        <div>
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-medium text-center mb-6">
            Tips About Online Dating
          </h1>
          <p className="text-center text-gray-600 mb-10">
            While many undermine online dating, it is important to note that
            online dating is not cheap! <br /> To help you be successful in your
            search, we advise that you go through our tips and apply the
            lessons.
          </p>
        </div>
        <div className="bg-red-50 border-l-4 border-red-400 p-5 rounded-md shadow-md">
          <ul>
            <li className="mb-4">
              <span className="font-bold text-red-600">
                Be Honest in Your Profile:
              </span>{" "}
              Share genuine information about yourself—authenticity is key to
              finding meaningful connections.
            </li>
            <li>
              <span className="font-bold text-red-600">
                Choose the Right Photos:
              </span>{" "}
              Use recent, high-quality pictures that showcase your personality.
              A mix of smiling portraits and activity shots works best.
            </li>
          </ul>
          <div className="text-right mt-4">
            <button className="bg-primary text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
