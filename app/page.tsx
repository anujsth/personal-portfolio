"use client";

import Image from "next/image";
import "@/assets/styles/mainscree.css";
import "@/assets/styles/components/index.scss";
import Button from "@/components/button/Button";
import Info from "@/components/info/Info";
import {
  BiLogoGmail,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoGithub,
} from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { TiLocation } from "react-icons/ti";
import propic from "@/assets/images/pro.png";

export default function Home() {
  const redirectPage = (location: any) => {
    window.location.href = location;
  };
  return (
    <main className="relative h-screen">
      <div className="main-screen bg-cover h-[100vh] w-full flex items-center justify-center px-28">
        <div className="flex flex-col flex-1">
          <div className="bg-cyan-500 rounded-full px-3 mb-4 w-[8rem] h-8 flex items-center justify-center">
            <p className="text-white ">Hello I'm</p>
          </div>
          <p className="text-gray-300 text-5xl font-medium mb-3">
            Anuj Shrestha
          </p>
          <p className="text-gray-300 text-xl font-medium mb-8">
            Web Developer
          </p>
          <Info text="Anujshrestha.as22@gmail.com" children={<BiLogoGmail />} />
          <Info text="9860105951" children={<MdCall />} />
          <Info text="New Baneshwor, Kathmandu" children={<TiLocation />} />
          <div className="flex space-x-3">
            <div className="mt-10 flex flex-col space-y-3">
              <Button
                icon={<BiLogoFacebook />}
                varient="text"
                size="medium"
                onClick={() => {
                  redirectPage("https://www.facebook.com/anujshresth007/");
                }}
              />
              <Button
                icon={<BiLogoTwitter />}
                varient="text"
                size="medium"
                onClick={() => {
                  redirectPage(
                    "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den"
                  );
                }}
              />
            </div>
            <div className="mt-10 flex flex-col space-y-3">
              <Button
                icon={<BiLogoInstagram />}
                varient="text"
                size="medium"
                onClick={() => {
                  redirectPage("https://www.instagram.com/anuj_shresth/");
                }}
              />
              <Button
                icon={<BiLogoGithub />}
                varient="text"
                size="medium"
                onClick={() => {
                  redirectPage("https://github.com/anujsth");
                }}
              />
            </div>
          </div>
        </div>
        <div
          className="h-[23rem] w-[23rem] "
          style={{
            border: "1.5rem solid rgba(209, 213, 219, 0.2)",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image
            src={propic}
            alt="profile pic"
            className="h-full w-full object-cover rounded-full"
            style={{ border: "1.5rem solid rgba(209, 213, 219, 0.1)" }}
          />
        </div>
      </div>
    </main>
  );
}
