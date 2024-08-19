import logo from "../assets/footer_logo_light.svg";
import x from "../assets/x.svg";
import discord from "../assets/discord.svg";
import youtube from "../assets/toutube.svg";
import medium from "../assets/medium.svg";
import redddit from "../assets/reddit.svg";
import ig from "../assets/ig.svg";
import linkedln from "../assets/inkedln.svg";
import git from "../assets/git.svg";
const Footer = () => {
  const socials = [x, discord, youtube, medium, redddit, ig, linkedln, git];
  return (
    <div className="">
      <div className="h-20 bg-white"></div>
      <div className=" h-[400px] bg-custom-gradient flex items-end p-8 pb-14">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-20">
            <div className="flex w-full justify-between md:justify-start items-start md:items-center gap-10">
              <img src={logo} className="w-24" alt="" />
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-8 text-white font-light text-sm">
                <div className="">© Flare Network 2024</div>
                <a href="/">Terms & Privacy</a>
                <a href="/">Media & Branding</a>
                <a href="/">Team</a>
              </div>
            </div>
            <div className="flex items-center gap-5">
              {socials.map((item, index) => (
                <a href="/">
                  <img
                    src={item}
                    key={index}
                    alt=""
                    className="w-6 md:w-9 h-6 md:h-w-9"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
