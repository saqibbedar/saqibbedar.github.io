import cssCertificateImage from "@/assets/Images/certificate_css.webp"
import htmlCertificateImage from "@/assets/Images/certificate_html.webp"
import pythonCertificateImage from "@/assets/Images/certificate_py.webp"
import cclCertificateImage from "@/assets/Images/certificate_singing.webp"
import jsByMetaCertificateImage from "@/assets/Images/Coursera.webp"
import fccWebDesignCertificateImage from "@/assets/Images/freeCodeCampCertificate.webp"
import programmingHubLogo from "@/assets/Images/programming_hub_logo.webp";


const certificates = [
    {
        image: jsByMetaCertificateImage,
        title: "Programming With JavaScript",
        description: "Earned a distinguished Meta certification through Coursera for mastering Programming With JavaScript.",
        providerName: "Coursera",
        credentialUrl: "https://www.coursera.org/account/accomplishments/verify/HNBS292LZU6Y?utm_campaign=sharing_cta&utm_content=cert_image&utm_medium=certificate&utm_product=course&utm_source=I+android",
        providerLogo: "https://external-preview.redd.it/meta-career-certificates-v0-wWgHp7ccPNrsrmMkAbWUIfQ2unGsVrA2UX0Z6im6YdQ.jpg?auto=webp&s=0f1cb1a2101abfbad1c9b5a2aa7d06dd4d666ce3",
        tags: "javascript, programming, meta"
    },
    {
        image: fccWebDesignCertificateImage,
        title: "Responsive Web Design",
        description: "Earned a prestigious certification through freeCodeCamp, showcasing mastery in web design & front-end development.",
        providerName: "freeCodeCamp",
        credentialUrl: "https://www.freecodecamp.org/certification/bedarsaqib/responsive-web-design",
        providerLogo: "https://avatars3.githubusercontent.com/u/9892522?s=280&v=4",
        tags: "html, css, javascript, web development, freeCodeCamp"
    },
    {
        image: htmlCertificateImage,
        title: "HTML Excellence Certificate",
        description: "Honored with the HTML Excellence Certificate from Programming Hub, highlighting proficiency in HTML coding.",
        providerName: "Programming Hub",
        providerLogo: programmingHubLogo,
        credentialUrl: "https://storage.googleapis.com/programminghub/certificate%2F1688548837186.jpg",
        tags: "html, programming hub"
    },
    {
        image: cssCertificateImage,
        title: "CSS Excellence Certificate",
        description: "Attained a CSS Excellence Certificate from Programming Hub, recognizing exceptional skills in CSS styling techniques.",
        providerName: "Programming Hub",
        providerLogo: programmingHubLogo,
        credentialUrl: "https://storage.googleapis.com/programminghub/certificate%2F1688547942093.jpg",
        tags: "css, programming hub"
    },
    {
        image: pythonCertificateImage,
        title: "Python Certification Course",
        description: "Completed the Python Certification Course from Programming Hub, understanding fundamental concepts of Python.",
        providerName: "Programming Hub",
        providerLogo: programmingHubLogo,
        credentialUrl: "https://storage.googleapis.com/programminghub/certificate%2F1688570418306.jpg",
        tags: "python, programming hub"
    },
    {
        image: cclCertificateImage,
        title: "Certificate of Merit",
        description: "Awarded for achieving the 1st position in the college singing competition, showcasing exceptional vocal talent and musical prowess.",
        providerName: "Cadet College Larkana",
        providerLogo: "https://jaamiah.com/wp-content/uploads/2019/05/cadet-college-larkana-logo.jpg",
        credentialUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9poGATzdXwDjd5vDJm88fTyiVU7rI7denq-IzWOfdJnWsRJ-KUh-1OvBpBpv4p2HZNasqLICKmsihsFfdVDmpnQfGDkEcBehIl4YG-QgWOOdvGrnf3yw4DAKg3Lw_sNopTXqMbbiqLpvRoPGy_8-5ugTcnwMQJLp1YwaM6aUQP2z8HyoIS5T_WUAVGzSl/s1600/Cetificate%20of%20Merit.jpg",
        tags: "singing, cadet college larkana"
    },
]

export default certificates;