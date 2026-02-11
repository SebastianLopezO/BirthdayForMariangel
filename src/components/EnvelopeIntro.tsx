import BalloonIntro from "./BalloonIntro";

interface EnvelopeIntroProps {
    onOpen: () => void;
}

const EnvelopeIntro = ({onOpen}: EnvelopeIntroProps) => {
    return <BalloonIntro onOpen={onOpen}/>;
};

export default EnvelopeIntro;
