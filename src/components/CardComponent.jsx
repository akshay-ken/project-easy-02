import avatar from "../assets/avatar-jessica.jpeg";
import { ProfileButtonComponent } from "./ProfileButtonComponent";

export function CardComponent() {
  return (
    <>
      <div className="md:w-fit md:mx-auto mx-6 my-34 bg-neutral-800 rounded-2xl p-6 ">
        <img
          src={avatar}
          alt="girls side profile photo"
          className="h-[25%] w-[25%] rounded-full mx-auto"
        />
        <h1 className="text-3xl font-inter font-bold text-neutral-50 text-center mt-7">
          Jessica Randall
        </h1>
        <h3 className="text-xl font-inter font-semibold text-center mt-2 text-lime-400">
          London, United Kingdom
        </h3>
        <p className="font-inter font-normal text-center text-neutral-50 mt-6 mb-8">
          "Front-end developer and avid reader."
        </p>
        <ProfileButtonComponent> GitHub </ProfileButtonComponent>
        <ProfileButtonComponent>Frontend Mentor</ProfileButtonComponent>
        <ProfileButtonComponent>LinkedIn</ProfileButtonComponent>
        <ProfileButtonComponent>Twitter</ProfileButtonComponent>
        <ProfileButtonComponent>Instagram</ProfileButtonComponent>
      </div>
    </>
  );
}
