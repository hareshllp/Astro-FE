import { NextIcon } from "../icon/nextIcon";

const SlickRightArrow = ({ currentSlide, slideCount, ...props }: any) => {
    return (
        <NextIcon
            {...props}
            className={
                "slick-next slick-arrow !text-white" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            type="button"
        />
    );
};

export default SlickRightArrow;
