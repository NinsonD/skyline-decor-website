import blogImg from '../../../public/assets/img/blog/blog-standard/blog-av-1.png';
import Image from 'next/image';
import Link from 'next/link';

const BlogSidebarAuthorInfo = () => {
    return (
            <div className="sidebar-widget-author text-center">
                <div className="sidebar-widget-author-img">
                    <Image src={blogImg} alt="blog" />
                </div>
                <div className="sidebar-widget-author-btn">
                    <Link className="tp-btn-yellow-green sidebar-btn w-100" href="/contact">
                        <span>
                            <span className="text-1">Contact Us</span>
                            <span className="text-2">Contact Us</span>
                        </span>
                    </Link>
                </div>
            </div>
    );
};

export default BlogSidebarAuthorInfo;