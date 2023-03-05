import React, { useEffect, useState } from "react";

const languages = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/400px-Flag_of_Russia.svg.png",
    language: "russian",
  },
  {
    src: "https://media.baamboozle.com/uploads/images/228994/1655130764_8698.webp",
    language: "english",
  },
  {
    src: "https://a.allegroimg.com/s256/1161e8/8a7eb2b84db0ad590adffa897469/Flaga-Ukraina-150x90-Tunel",
    language: "ucraine",
  },
  {
    src: "https://alicansaglamblog.files.wordpress.com/2020/10/dc1b8-ispanya.jpg",
    language: "spain",
  },
];

const ChangeLanguage = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("english");
  //   const [sorted, setSorted] = useState(languages);

  //   useEffect(() => {
  //     console.log(language);
  //     setSorted(
  //       languages.sort((l) => {
  //         if (l.language === language) return -1;
  //         else return 1;
  //       })
  //     );
  //   }, [language]);

  //   console.log(sorted);

  return (
    <div className={["change-language-btn", open ? "show" : ""].join(" ")} onClick={() => setOpen(!open)}>
      <div className="language-wrapper">
        {languages
          .sort((l) => {
            if (l.language === language) return -1;
            else return 1;
          })
          .map((l) => (
            <div key={l.language} className="language">
              <img src={l.src} alt={l.language} onClick={() => setLanguage(l.language)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChangeLanguage;
