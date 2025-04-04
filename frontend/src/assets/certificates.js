import css from "@/assets/Images/certificate_css.webp"
import html from "@/assets/Images/certificate_html.webp"
import py from "@/assets/Images/certificate_py.webp"
import ccl from "@/assets/Images/certificate_singing.webp"
import js_coursera from "@/assets/Images/Coursera.webp"
import fCC from "@/assets/Images/freeCodeCampCertificate.webp"
import programming_hub_logo from "@/assets/Images/programming_hub_logo.webp";


const certificates = [
    {
        title: "Programming With JavaScript",
        des: "Earned a distinguished Meta certification through Coursera for mastering Programming With JavaScript.",
        verify_link: "https://www.coursera.org/account/accomplishments/verify/HNBS292LZU6Y?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=I+android",
        cer_img: js_coursera,
        org_name: "Coursera",
        org_logo: "https://external-preview.redd.it/meta-career-certificates-v0-wWgHp7ccPNrsrmMkAbWUIfQ2unGsVrA2UX0Z6im6YdQ.jpg?auto=webp&s=0f1cb1a2101abfbad1c9b5a2aa7d06dd4d666ce3"
    },
    {
        title: "Responsive Web Design",
        des: "Earned a prestigious certification through freeCodeCamp, showcasing mastery in web design & front-end development.",
        verify_link: "https://www.freecodecamp.org/certification/bedarsaqib/responsive-web-design",
        cer_img: fCC,
        org_name: "freeCodeCamp",
        org_logo: "https://avatars3.githubusercontent.com/u/9892522?s=280&v=4"
    },
    {
        title: "HTML Excellence Certificate",
        des: "Honored with the HTML Excellence Certificate from Programming Hub, highlighting proficiency in HTML coding.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688548837186.jpg",
        cer_img: html,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "CSS Excellence Certificate",
        des: "Attained a CSS Excellence Certificate from Programming Hub, recognizing exceptional skills in CSS styling techniques.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688547942093.jpg",
        cer_img: css,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "Python Certification Course",
        des: "Completed the Python Certification Course from Programming Hub, understanding fundamental concepts of Python.",
        verify_link: "https://storage.googleapis.com/programminghub/certificate%2F1688570418306.jpg",
        cer_img: py,
        org_name: "Programming Hub",
        org_logo: programming_hub_logo
    },
    {
        title: "Certificate of Merit",
        des: "Awarded for achieving the 1st position in the college singing competition, showcasing exceptional vocal talent and musical prowess.",
        verify_link: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9poGATzdXwDjd5vDJm88fTyiVU7rI7denq-IzWOfdJnWsRJ-KUh-1OvBpBpv4p2HZNasqLICKmsihsFfdVDmpnQfGDkEcBehIl4YG-QgWOOdvGrnf3yw4DAKg3Lw_sNopTXqMbbiqLpvRoPGy_8-5ugTcnwMQJLp1YwaM6aUQP2z8HyoIS5T_WUAVGzSl/s1600/Cetificate%20of%20Merit.jpg",
        cer_img: ccl,
        org_name: "Cadet College Larkana",
        org_logo: "https://jaamiah.com/wp-content/uploads/2019/05/cadet-college-larkana-logo.jpg"
    },
]

export default certificates;