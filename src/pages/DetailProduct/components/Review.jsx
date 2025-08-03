import Button from '@/components/Button/Button';
import styles from '../styles.module.scss';
import FormItem from '@/pages/DetailProduct/components/FormItem';

function ReviewProduct() {
    const {
        containerReview,
        titleReview,
        noReview,
        replyform,
        replyTitle,
        commentNotes,
        checkInfo,
        submitBtn,
        btnBox
    } = styles;
    return (
        <div className={containerReview}>
            <div className={titleReview}>Reviews</div>
            <p className={noReview}>There are no reviews yet.</p>

            <div className={replyform}>
                <div className={replyTitle}>
                    Be the first to review “10K Yellow Gold”
                </div>
                <p className={commentNotes}>
                    Your email address will not be published. Required fields
                    are marked
                </p>

                <form action=''>
                    <FormItem
                        type={'rating'}
                        label={'Your rating'}
                        isRequired={true}
                    />
                    <FormItem
                        type={'area'}
                        label={'Your review'}
                        isRequired={true}
                    />
                    <FormItem type={'input'} label={'Name'} isRequired={true} />
                    <FormItem
                        type={'input'}
                        label={'Email'}
                        isRequired={true}
                    />
                    <div className={checkInfo}>
                        <input type='checkbox' />
                        <span
                            style={{
                                fontSize: '14px',
                                color: '#555',
                                display: 'inline-block'
                            }}
                        >
                            Save my name, email, and website in this browser for
                            the next time I comment.
                        </span>
                    </div>
                    <div className={btnBox}>
                        <Button className={submitBtn} content={'SUBMIT'} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ReviewProduct;
