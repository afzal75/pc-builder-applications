import Link from "next/link";
import pc from '../../assets/pc.jpg'
import Image from "next/image";

const Banner = () => {
  return (
    <div>
      <Image className="mx-auto container max-w-5xl" src={pc} alt="pc" />
    </div>
  );
};

export default Banner;
