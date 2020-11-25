import React, {useContext} from "react";
import "./Events.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { events } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Events() {
    const {isDark} = useContext(StyleContext)
    if(events.viewExperiences){
        return (
            <div id="experience">
                <Fade bottom duration={1000} distance="20px">
                <div className="experience-container" id="workExperience">
                    <div>
                        <h1 className="experience-heading">Events</h1>
                        <div className="experience-cards-div">
                        {events.experience.map((card) => {
                            return (
                                <ExperienceCard
                                    isDark={isDark}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        companylogo: card.companylogo,
                                        role: card.role,
                                        descBullets: card.descBullets
                                    }}
                                />
                            );
                        })}
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
    return null;
}
