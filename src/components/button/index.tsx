import Link from "next/link";

type AnchorProps = {
    link: string;
}


export function Anchor({link}: AnchorProps) {
  return <Link href={link} className=""></Link>;
}
