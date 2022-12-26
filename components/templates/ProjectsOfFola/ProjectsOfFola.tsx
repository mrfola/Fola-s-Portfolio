import Image from "next/image";
import Slider from "../../organisms/Slider/Slider";
import Button from "../../UI/atoms/Button/Button";
import Logo from "../../UI/atoms/Logo/Logo";
import styles from "./ProjectsOfFola.module.scss";

const ProjectsOfFola = () => 
{
    const slides = 
    [
        {
            img: 
            {
                src: "https://res.cloudinary.com/dobmssrgt/image/upload/v1672034349/Fola%27s%20portfolio/Project_-_Find_a_Roomate_ylwqmh.png",
                alt: "",
                height: 352,
                width: 463
            },
        
            name: "Find A Roommate",
            startDate: new Date("01/02/2022"),
            projectDetails: 
            [
                "Developed the API that allowed users to verify, monitor and protect their identities from compromise.",
                "Contributed to the Laravel package that allowed companies to integrate our application into their system.",
                "Overhauled the database design and backend codebase to reduce redundancy and ensure scalability.",
                "Created technical documentation for API using Postman."
            ]
        }
    ]

    return ( 
        <div className={styles.projectsOfFola}>
            <div className={styles.headingAndFilters}>
                <div className={styles.heading}>
                    <Image 
                        src="https://res.cloudinary.com/dobmssrgt/image/upload/v1672030053/Fola%27s%20portfolio/projects-of-fola_q9usq8.png" 
                        width={193}
                        height={193}
                        alt="" 
                    />
                    <span>
                        Projects of 
                        <Logo/>
                    </span>
                </div>
                <div className={styles.filters}>
                    <Button active={true}> All</Button>
                    <Button>Front-End</Button>
                    <Button>Back-End</Button>
                </div>
            </div>
            <Slider slides={slides}/>
        </div>
     );
}
 
export default ProjectsOfFola;