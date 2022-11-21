import LogoSK from "../../assets/images/sidebar_img/hospi.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <a style={{"text-align": 'center', "position": 'relative', "left": '50px'}}>
        <Image src={LogoSK} alt="logo" height={100} width={110}/>
      </a>
    </Link>
  );
};

export default Logo;
