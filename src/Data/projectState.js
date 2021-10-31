import wlFull from "../Images/Projects/WindsorLodge/wl-full.png";
import wlFull2 from "../Images/Projects/WindsorLodge/wl-full-2.png";
import wlFull3 from "../Images/Projects/WindsorLodge/wl-full-3.png";
import wlMobile from "../Images/Projects/WindsorLodge/wl-mobile.png";
import wlMobile2 from "../Images/Projects/WindsorLodge/wl-mobile-2.png";
import emdbFull from "../Images/Projects/EMDB/emdb-full.png";
import emdbFull2 from "../Images/Projects/EMDB/emdb-full-2.png";
import emdbFull3 from "../Images/Projects/EMDB/emdb-full-3.png";
import emdbMobile from "../Images/Projects/EMDB/emdb-mobile.png";
import emdbMobile2 from "../Images/Projects/EMDB/emdb-mobile-1.png";

export const ProjectState = () => {
  return [
    {
      title: "Windsor Lodge 403",
      mainImg: wlFull,
      secondaryImg: [
        { alt: "wlFull2", src: wlFull2 },
        { alt: "wlFull3", src: wlFull3 },
        { alt: "wlFull4", src: wlMobile },
        { alt: "wlFull5", src: wlMobile2 },

        // { title: "wlFull3", image: "wlFull3" },
        // { title: "wlMobile", image: "wlMobile" },
        // { title: "wlMobile2", image: "wlMobile2" },
      ],
      // secondaryImg: wlFull2,
      // thirdImg: wlFull3,
      // fourthImg: wlMobile,
      // fifthImg: wlMobile2,
      url: "/projects/windsor-lodge",
      technologies: "HTML, CSS, Full-Stack",
      longDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      descriptions: [
        {
          shortDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
          technologies: "HTML, CSS, Full-Stack",
          longDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
      ],
      visit: "https://windsorlodge403.com",
    },

    {
      title: "EMDB Movie Database",
      mainImg: emdbFull,
      secondaryImg: [
        { alt: "emdbFull2", src: emdbFull2 },
        { alt: "emdbFull3", src: emdbFull3 },
        { alt: "emdbFull4", src: emdbMobile },
        { alt: "emdbFull5", src: emdbMobile2 },
      ],
      // secondaryImg: emdbFull2,
      // emdbFull3,
      // emdbMobile,
      // emdbMobile2,
      url: "/projects/emdb",
      technologies: "ReactJs, Styled-Components, Router, Custom Hooks ",
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
