import React from "react";

const Team = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold text-[#003b19] text-center">
        Meet Our Team
      </h2>
      <p className="text-gray-600 text-center mt-2">
        The passionate people behind every glass of juice.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="/userImages/user1.jpg"
            alt="Founder"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">Shubham</h3>
          <p className="text-sm text-gray-500">Team Leader</p>
          <p className="mt-2 text-gray-600 text-sm">
            With a passion for health, Shubham started the juice journey in
            2020.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="/userImages/user4.jpg"
            alt="Nutrition Expert"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">Anuj</h3>
          <p className="text-sm text-gray-500">Nutrition Expert</p>
          <p className="mt-2 text-gray-600 text-sm">
            Ensuring every recipe is not only tasty but also packed with
            nutrients.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition">
          <img
            src="/userImages/user3.jpg"
            alt="Operations Head"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-lg font-semibold">Umang</h3>
          <p className="text-sm text-gray-500">Operations Head</p>
          <p className="mt-2 text-gray-600 text-sm">
            Making sure fresh juices reach customers quickly and safely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
