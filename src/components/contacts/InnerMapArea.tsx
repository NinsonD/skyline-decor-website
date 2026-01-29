import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.5219540962416!2d55.39764780396198!3d25.302728812629077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d644b9d63cd%3A0x12854f48151e7f5d!2sAl%20Namariq%20Building%20Materials%20Trading%2C%20Sharjah!5e0!3m2!1sen!2sae!4v1767357138010!5m2!1sen!2sae" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;