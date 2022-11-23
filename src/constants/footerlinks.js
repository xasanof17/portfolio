import {
  BsGithub,
  BsTelegram,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsLinkedin,
  BsCreditCard2FrontFill
} from "react-icons/bs";
import { SiVercel,SiWebmoney,SiQiwi } from "react-icons/si";
import {FaCcVisa,FaCcMastercard,FaCcPaypal} from 'react-icons/fa'
const footerlinks = [
  
  {
    title: "payment",
    links: [
      { name: "visa", href: "/payment/", paymentIcon: <FaCcVisa className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "master card", href: "/payment", paymentIcon: <FaCcMastercard className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "paypal", href: "/payment", paymentIcon: <FaCcPaypal className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "humo", href: "/payment", paymentIcon: <BsCreditCard2FrontFill className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "uzcard", href: "/payment", paymentIcon: <BsCreditCard2FrontFill className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "qiwi", href: "/payment", paymentIcon: <SiQiwi className="text-blue dark:text-gray" fontSize={23}/> },
      { name: "webMoney", href: "/payment", paymentIcon: <SiWebmoney className="text-blue dark:text-gray" fontSize={23}/> },
    ],
  },
];
export default footerlinks;
