import {
  FaFacebook,
  FaGithub,
  FaLinkedinIn,
  FaProductHunt,
} from "react-icons/fa";

const AboutCard = () => {
  return (
    <div>
      <div className="gap-4 text-[#61677A] justify-between grid grid-cols-1 md:pb-10 md:grid-cols-2 lg:grid-cols-4 md:w-10/12 lg:w-8/12 mx-auto p-4 md:p-0">
        <div className="card w-full hover:bg-[#f6f9fc] md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/C4D03AQHfo7rwXAgVug/profile-displayphoto-shrink_200_200/0/1633708757212?e=1698883200&v=beta&t=VTLfK2OLZoq-0ZiGtZ231ICy3-F9TNNm4XoxRWcTd3Y"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Badhon Islam</h2>
            <p className="text-[#42a6ad]">Web-Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
        <div className="card w-full hover:bg-[#f6f9fc] md:w-[260px]  shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/D5635AQHlh2oNVPX4Lg/profile-framedphoto-shrink_200_200/0/1689451368786?e=1694185200&v=beta&t=WyPY8T11lpp4EJkhMSWCmNK5pjR5_CFP0TpdriHDSDU"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Nikkon Mondal</h2>
            <p className="text-[#42a6ad]">Front-End Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
        <div className="card w-full hover:bg-[#f6f9fc] md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/JdhWRQN/365756103-673069558199561-6794946048297804025-n.jpg"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Himangsu Roy</h2>
            <p className="text-[#42a6ad]">Back-End Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
        <div className="card w-full hover:bg-[#f6f9fc] md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQHSZ79fO8KGjg/profile-displayphoto-shrink_200_200/0/1689266595496?e=1698883200&v=beta&t=AQzo5qLPs-86sKfKONE85KUt6hekfgec1sExCGzFt2Y"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mostofa Asik</h2>
            <p className="text-[#42a6ad]">MERN Stack Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
      </div>
      <div className="gap-4 text-[#61677A] grid grid-cols-1 justify-center md:pb-20 md:grid-cols-3 md:w-10/12 lg:w-8/12 mx-auto p-4 md:p-0">
        <div className="card hover:bg-[#f6f9fc] w-full md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/JdhWRQN/365756103-673069558199561-6794946048297804025-n.jpg"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md Tanjim Islam</h2>
            <p className="text-[#42a6ad]">Front-End Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
        <div className="card hover:bg-[#f6f9fc] w-full md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/JdhWRQN/365756103-673069558199561-6794946048297804025-n.jpg"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Ali Hasan Mashrafi</h2>
            <p className="text-[#42a6ad]">Front-End Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
        <div className="card hover:bg-[#f6f9fc] w-full md:w-[260px] shadow-md border">
          <figure className="px-10 pt-10">
            <img
              src="https://media.licdn.com/dms/image/D5635AQH8_3lyAvYERg/profile-framedphoto-shrink_200_200/0/1688351088448?e=1694181600&v=beta&t=BRnHxEu1e3umPywV62vhgkMvFu6YgZkiAoME--eKPS0"
              alt="Shoes"
              className="rounded-full h-40 w-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Md Aktheruzzaman</h2>
            <p className="text-[#42a6ad]">Front-End Developer</p>
            <div className="flex items-center gap-2 text-[#5EBEC4]">
              <FaGithub className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaGithub>
              <FaLinkedinIn className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaLinkedinIn>
              <FaFacebook className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaFacebook>
              <FaProductHunt className="text-3xl cursor-pointer border p-1 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md"></FaProductHunt>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
