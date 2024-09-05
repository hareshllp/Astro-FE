interface HeadingComponentProps {
    label?: any;
    title?: any;
    description?: any;
    className?: any;
    titleClass?: any;
}

const HeadingComponent = (props: HeadingComponentProps) => {
    const { label, title, description, className, titleClass } = props;
    return (
        <div
            className={`text-center lg:w-4/5 mx-auto ${
                className ? className : ""
            }`}
        >
            {title && (
                <label
                    className={`text-base font-semibold uppercase inline-block ${
                        titleClass ? titleClass : ""
                    }`}
                >
                    {title}
                </label>
            )}
            {label && (
                <h2 className="text-xl lg:text-[1.75rem] font-medium pt-1.5">
                    {label}
                </h2>
            )}
            {description && (
                <p className="text-base text-white/80 font-normal pt-4">
                    {description}
                </p>
            )}
        </div>
    );
};

export default HeadingComponent;
