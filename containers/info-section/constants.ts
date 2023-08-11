import { Github } from "@/components/Icons/Github";
import { Instagram } from "@/components/Icons/Instagram";
import { LinkedIn } from "@/components/Icons/LinkedIn";
import { X } from "@/components/Icons/X";
import { Social } from "@/types/SocialType";

export const Socials : Social[] = [
    {
        id:1,
        name:'LinkedIn',
        icon:LinkedIn(),
        href:'https://www.linkedin.com/in/mertenercan/'
    },
    {
        id:2,
        name:'Instagram',
        icon:Instagram(),
        href:'https://www.instagram.com/enercanmert/'
    },
    {
        id:3,
        name:'GitHub',
        icon:Github(),
        href:'https://github.com/mertthesamael'
    },
    {
        id:4,
        name:'X',
        icon:X(),
        href:'https://twitter.com/akaMerto'
    },
]