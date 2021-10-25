import wlFull from "../Images/Projects/WindsorLodge/wl-full.png";
import wlFull2 from "../Images/Projects/WindsorLodge/wl-full-2.png";
import wlFull3 from "../Images/Projects/WindsorLodge/wl-full-3.png";
import wlMobile from "../Images/Projects/WindsorLodge/wl-mobile.png";
import wlMobile2 from "../Images/Projects/WindsorLodge/wl-mobile-2.png";
import emdbFull from "../Images/Projects/EMDB/emdb-full.png";
import emdbFull2 from "../Images/Projects/EMDB/emdb-full-2.png";
import embdFull3 from "../Images/Projects/EMDB/emdb-full-3.png";
import emdbMobile from "../Images/Projects/EMDB/emdb-mobile.png";
import emdbMobile2 from "../Images/Projects/EMDB/emdb-mobile-1.png";

export const ProjectsIntro = () => {
  return [
    {
      title: "Windsor Lodge 403",
      mainImg: wlFull,
      secondaryImg: wlFull2,
      wlFull3,
      wlMobile,
      wlMobile2,
      url: "/work/windsor-lodge",
      technologies: "HTML, CSS, Full-Stack",
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      visit: "https://windsorlodge403.com",
    },
    {
      title: "EMDB Movie Database",
      mainImg: emdbFull,
      secondaryImg: emdbFull2,
      embdFull3,
      emdbMobile,
      emdbMobile2,
      url: "/work/emdb",
      technologies: "ReactJs, Styled-Components, Router, Custom Hooks ",
      shortDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      visit: "",
    },
    // {
    //     title: 'Food App',
    //     mainImg: ,
    //     secondaryImg: ,
    //     url: '/work/food-app',
    //     technologies: 'ReactJs, Styled-Components, Router, Custom Hooks',
    //     shortDescription: '',
    //     longDescription: '',
    //     visit: "",
    // },
    // {
    //     title: '',
    //     mainImg: ,
    //     secondaryImg: ,
    //     url: '/work/windsor-lodge',
    //     technologies: 'HTML, CSS',
    //     shortDescription: '',
    //     longDescription: '',
    //     visit: "",
    // },
  ];
};
