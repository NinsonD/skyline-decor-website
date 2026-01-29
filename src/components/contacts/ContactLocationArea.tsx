import Image from "next/image";
import Link from "next/link";

import contactLocation1 from "../../../public/assets/img/contact/contact-location-1.jpg";
import contactLocation2 from "../../../public/assets/img/contact/contact-location-2.jpg";
import contactLocation3 from "../../../public/assets/img/contact/contact-location-3.jpg";

const ContactLocationArea = () => {
  const locations = [
    {
      title: "Dubai Office",
      time: "12:00 pm GMT+4",
      img: contactLocation1,
      addressTitle: "Al Namariq Technical Services L.L.C",
      address: (
        <>
          P.O. Box: 62379, Dubai, UAE
        </>
      ),
      mapLink: "https://www.google.com/maps",
      phone: "",
      email: "skylinedecor@namariqgroup.com",
    },
    {
      title: "Sharjah Office",
      time: "12:00 pm GMT+4",
      img: contactLocation2,
      addressTitle: "Skyline Décor L.L.C",
      address: (
        <>
          P.O. Box: 25569, Sharjah, UAE
        </>
      ),
      mapLink: "https://www.google.com/maps",
      phone: "",
      email: "skylinedecor@namariqgroup.com",
    },
    {
      title: "Abu Dhabi Office",
      time: "12:00 pm GMT+4",
      img: contactLocation3,
      addressTitle: "Skyline Décor L.L.C (Branch)",
      address: (
        <>
          P.O. Box: 3952738, Abu Dhabi, UAE
        </>
      ),
      mapLink: "https://www.google.com/maps",
      phone: "",
      email: "skylinedecor@namariqgroup.com",
    },
  ];

  return (
    <div className="tp-contact-location-ptb p-relative pt-120 pb-170">
      <div className="tp-gsap-bg" style={{ backgroundColor: "#101016" }}></div>
      <div className="container container-1430">
        <div className="tp-contact-location-wrapper">
          {locations.map((loc, index) => (
            <div className="tp-contact-location-item" key={index}>
              <div className="row">
                <div className="col-xl-7">
                  <div className="tp-contact-location-left d-flex flex-wrap align-items-center">
                    <div className="tp-contact-location-info-thumb">
                      <Image src={loc.img} alt={loc.title} />
                    </div>
                    <div className="tp-contact-location-left-info">
                      <h4 className="tp-contact-location-left-title">{loc.title}</h4>
                      <span>
                        <i className="fa-regular fa-clock"></i> {loc.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="tp-contact-location-right-wrap d-flex align-items-start justify-content-between">
                    <div className="tp-contact-location-right">
                      <div className="tp-contact-location-loc">
                        <span className="tp-contact-location-loc-title">
                          {loc.addressTitle}
                        </span>
                        <Link href={loc.mapLink} target="_blank">
                          {loc.address}
                        </Link>
                      </div>
                      <div className="tp-contact-location-map">
                        <Link href={loc.mapLink} target="_blank">
                          Google Maps
                        </Link>
                      </div>
                    </div>
                    <div className="tp-contact-location-right-info text-start text-md-end">
                      <Link href={`tel:${loc.phone}`}>{loc.phone}</Link> <br />
                      <Link href={`mailto:${loc.email}`}>{loc.email}</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactLocationArea;
