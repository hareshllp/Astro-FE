import { PreviousIcon } from "../icon/previousIcon";

const SlickLeftArrow = ({ currentSlide, slideCount, ...props }: any) => {
    return (
        <PreviousIcon
            {...props}
            className={
                "slick-prev slick-arrow !text-white" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            type="button"
        />
    );
};

export default SlickLeftArrow;
