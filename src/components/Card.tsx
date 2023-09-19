import {ICertificates} from "./Certificates.tsx"
import {Badge} from "@/components/ui/badge"
import {useState} from "react";

function Card({title, from, image, skills}: ICertificates) {
    const [hovered, setHovered] = useState<boolean>(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div className="flex flex-col border-white border-[1.5px] pb-5 rounded-lg item text-center justify-between" onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            <img className={`transition-all basis-8/12 ${(hovered) ? "grayscale-0" : "grayscale"}`} src={image} alt=""/>
            <h1 className="text-[#ff5d73] font-title">{title}</h1>
            <h3 className="text-lg">{from}</h3>
            <div className="flex gap-3 flex-wrap mt-3 justify-center">
                {skills.map((skill) => (
                    <Badge className="badge" variant="default">{skill}</Badge>
                ))}
            </div>
        </div>
    )
}

export default Card