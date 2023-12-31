import { useAnimate, stagger, useInView } from "framer-motion"
import {RefObject, useEffect} from "react";



function Resume({resumeRef}: { resumeRef: RefObject<HTMLDivElement> | undefined }) {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope, {once: true});

    useEffect(() => {
        if(isInView) {
            animate(".resume-item", { x: [100, 0] }, { delay: stagger(0.3), type: "spring" })
        }
    }, [isInView]);

    return (
        <div className="bg-[] text-[#fff] font-chakra max-xl:text-base max-md:text-sm" ref={resumeRef}>
            <div className="container mx-auto py-20 border-t-[2px] border-white">
                <h1 className="relative text-6xl max-xl:text-4xl font-bold font-title w-fit">Resume</h1>
                <div ref={scope} className="flex min-[1500px]:justify-around min-[1500px]:items-center mt-20 max-[1500px]:flex-col max-[1500px]:gap-5">
                    <div className="education resume-item flex flex-1 flex-col gap-5 min-[1500px]:border-l-[2px] max-[1500px]:border-t-[2px] max-[1500px]:pt-3 pl-3">
                        <h2 className="font-bold text-4xl max-xl:text-2xl max-md:text-xl">Education</h2>
                        <div className="flex flex-col justify-center">
                            <div className="text-[#ff5d73] text-sm rounded-lg font-bold year">( 2022-Present )</div>
                            <div className="font-bold graduation">Licensed Engineer</div>
                            <h3 className="font-normal education-item">Technical University Of Moldova</h3>
                            <div className="department">Department of Computer Science and Systems Engineering</div>
                        </div>

                    </div>
                    <div className="experience resume-item flex flex-1 flex-col gap-5 min-[1500px]:border-l-[2px] max-[1500px]:border-t-[2px] max-[1500px]:pt-3 pl-3">
                        <h2 className="font-bold text-4xl max-xl:text-2xl max-md:text-xl">Professional Experience</h2>
                        <div className="flex flex-col justify-center">
                            <div className="experience-item">Freelancing as a Backend Developer (Python + Django)</div>
                            <div className="experience-item">Freelancing as a Python developer (simple scripts like scrappers, working with files)</div>
                            <div className="experience-item">Freelancing as a Frontend Developer (React)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume