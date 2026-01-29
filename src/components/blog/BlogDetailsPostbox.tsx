import authorImg from '../../../public/assets/img/blog/blog-standard/blog-av-2.jpg';
import { CommentIcon } from '@/svg/ContactIcons';
import ClockIcon from '@/svg/ClockIcon';
import Image from 'next/image';

const BlogDetailsPostbox = () => {
    return (
            <div className="tp-blog-details-without-ptb">
                <div className="container container-1230">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-blog-details-without-heading text-center">
                                <article className="postbox-details-item mb-20">
                                    <div className="postbox-details-info-wrap">
                                        <h4 className="postbox-title fs-80">Lessons learne <br /> professional challenges</h4>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default BlogDetailsPostbox;