import React from "react";
import { useNavigate } from "react-router-dom";

//IMPORT ICONS FROM REACT ICON
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white flex justify-between   ">
        <section className="flex justify-between">
          <div className="flex justify-between items-center mx-5">
            <FaPhoneAlt />
            <span>(+800) 123 456 7890</span>
          </div>
          <div className="flex justify-between items-center">
            <MdOutlineMailOutline />
            <span>sample@email.com</span>
          </div>
        </section>

        <section className="flex justify-between">
          <div className="flex justify-between items-center mx-5">
            <IoLocationOutline />
            <span>store location</span>
          </div>

          <div className="flex justify-between ">
            <p
              onClick={() => navigate(`/register`)}
              className="mx-2 cursor-pointer"
            >
              Register
            </p>
            <p
              onClick={() => navigate(`/login`)}
              className="mx-2 cursor-pointer"
            >
              LogIn
            </p>
          </div>
        </section>
      </div>
      <hr className="bg-black	" />
    </>
  );
}

export default Header;
