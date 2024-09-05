import React from "react";
// import Lottie from "react-lottie";
// import teamAnimation from "../../lotties/team-animation.json";

const LottieComponent = () => {
    const TeamAnimation = {
        loop: false,
        autoplay: true,
        // animationData: teamAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    // return <Lottie options={TeamAnimation} height={40} width={40} />;
};

export default LottieComponent;
