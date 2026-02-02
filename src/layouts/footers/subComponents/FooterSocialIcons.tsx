import { DribbleTwo, FacebookSvg, FacebookTwo, InstagramSvg, InstagramTwo, LinkedinSvg, TwitterSvg, TwitterTwo } from '@/svg';
import Link from 'next/link';

export const FooterSocialIcons = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.facebook.com/profile.php?id=61587143703156">
                <span><FacebookTwo /></span>
            </Link>{" "}
            <Link href="https://www.instagram.com/skyline.decor.uae?igsh=ODZ6NHN5eGg4d3Vq">
                <span><InstagramTwo /></span>
            </Link>
        </div>
    );
};
export const FooterSocialIconsTwo = ({ className }: { className: string }) => {
    return (
        <div className={className}>
            <Link href="https://www.facebook.com/profile.php?id=61587143703156">
                <span><FacebookSvg /></span>
            </Link>{" "}
            <Link href="https://www.instagram.com/skyline.decor.uae?igsh=ODZ6NHN5eGg4d3Vq">
                <span><InstagramSvg /></span>
            </Link>
        </div>
    );
};

