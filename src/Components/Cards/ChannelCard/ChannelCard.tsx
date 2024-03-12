import { StyledChannelCard } from "./StyledComponents";

interface IProps {
  number: number;
  image: string;
}

const ChannelCard = ({ number, image }: IProps) => {
  return (
    <StyledChannelCard>
      <div className="channel-number">
        <p>{number}</p>
      </div>
      <div className="image-container">
        <img src={image} />
      </div>
    </StyledChannelCard>
  );
};

export default ChannelCard;
