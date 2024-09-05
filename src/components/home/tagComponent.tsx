import React from "react";

interface TagComponentProps {
    tag: any;
    bgColor: any;
}

const TagComponent = (props: TagComponentProps) => {
    const { tag, bgColor } = props;
    return (
        <div>
            <label
                className="text-[0.8rem] leading-[150%] text-white rounded-md font-extralight px-2 py-1"
                style={{
                    background: bgColor,
                }}
            >
                {tag}
            </label>
        </div>
    );
};

export default TagComponent;
