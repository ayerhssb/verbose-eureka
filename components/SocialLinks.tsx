import { useSection } from "context/section";

const SocialLinks: React.FC<{ page?: string }> = ({ page }) => {
  const { currentSection } = useSection();
  return (
    <>
      {page === "index" ? (
        <div className="hidden fixed left-10 bottom-1/3 md:flex flex-col w-6 h-52 items-center justify-between">
          {navLinks.map((nav) => {
            return (
              <a
                title={nav.text}
                href={nav.url}
                key={nav.url}
                className={`transition-all outline-marrsdark dark:outline-textlight hover:bg-marrsgreen dark:hover:bg-carrigreen ${currentSection === nav.text.toLowerCase()
                  ? "bg-marrsgreen dark:bg-carrigreen rotate-0"
                  : "opacity-50 focus-visible:opacity-100 hover:opacity-80 rotate-45 hover:rotate-12"
                  } w-3 h-3 border-2 border-marrsgreen dark:border-carrigreen`}
              ></a>
            );
          })}
        </div>
      ) : (
        <div className="hidden fixed left-10 bottom-0 md:flex flex-col w-6 h-56 items-center justify-between">
          <div className="-rotate-90 text-lg tracking-widest">
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
              className="link-outline hover:text-marrsgreen dark:hover:text-carrigreen"
            >
              {process.env.NEXT_PUBLIC_EMAIL}
            </a>
          </div>
          <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
        </div>
      )}
      <div className="hidden fixed right-10 bottom-0 md:flex flex-col w-6 h-[17rem] items-center justify-between">
        <div className="flex flex-col space-y-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              title={social.title}
              href={social.link}
              className="scale-110 rounded link-outline"
            >
              {social.svg}
            </a>
          ))}
        </div>
        <div className="w-40 h-1 bg-bgdark dark:bg-bglight rotate-90"></div>
      </div>
    </>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Shreya Bharti's Github Profile",
    link: "https://github.com/ayerhssb",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Shreya Bharti's LinkedIn Profile",
    link: "https://www.linkedin.com/in/shreya-bharti-86465824b/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen"
      >
        <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Check Shreya Bharti's Twitter Account ",
    link: "https://x.com/",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24" height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen">
        <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Shreya Bharti's Profile on Duolingo",
    link: "https://www.duolingo.com/profile/Shre-ya1?via=share_profile_link",
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width="24"
        height="24"
        className="dark:fill-bglight hover:fill-marrsgreen dark:hover:fill-carrigreen">
        <path d="M536.3 294.5C546.7 383 492.9 466.6 408.1 493.5C323.3 520.4 231.5 483.2 189.2 404.8C117.2 407.8 51.8 365 26 299.3C23.4 292.7 24.1 285.3 27.9 279.4C31.7 273.5 38.1 269.7 45.1 269.3L141.2 263.3L117.4 187.4C111.1 167.4 115.2 145.5 128.4 129.1C141.6 112.7 162.1 104.1 182.9 106.1C235.1 111.1 269.7 110.9 286.9 105.5C304.1 100.1 332 80.7 371 47.1C386.9 33.4 408.7 28.6 428.8 34.4C448.9 40.2 464.9 55.7 471.2 75.8L494.8 151L575.6 101.3C581.6 97.6 589 97 595.5 99.7C602 102.4 606.8 108 608.4 114.9C624.6 183.1 596 255.2 536.3 294.4zM290.5 539.9L290.5 539.9C305.6 547.4 312 565.7 304.7 580.9C297.4 596.1 279.3 602.8 264 595.8L220.1 574.8C205 567.3 198.6 549 205.9 533.8C213.2 518.6 231.3 511.9 246.6 518.9L290.4 539.9zM596.6 409.7C611.4 418.1 616.6 437 608.2 451.9L584.3 494.3C575.6 508.6 557.2 513.5 542.7 505.2C528.2 496.9 522.8 478.6 530.7 463.8L554.6 421.4C558.6 414.3 565.3 409 573.2 406.8C581.1 404.6 589.5 405.6 596.6 409.7z"></path>
      </svg>
    ),
  },
];

const navLinks = [
  {
    url: "#",
    text: "Welcome",
  },
  {
    url: "#about-me",
    text: "About me",
  },
  {
    url: "#projects",
    text: "Projects",
  },
  {
    url: "#blog",
    text: "Blog",
  },
  {
    url: "#contact",
    text: "Contact",
  },
];

export default SocialLinks;
