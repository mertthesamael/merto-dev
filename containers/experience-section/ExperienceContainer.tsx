import ExperienceCard from '@/components/Card/ExperienceCard';
import { Experience } from '@prisma/client';
import React, { FC } from 'react'
type ExperienceContainerProps = {

}
const getExperience = async () => {
    const endpoint = process.env.URL_ROOT ?? "http://localhost:3000";
    try {
        const request = await fetch(endpoint + "/api/experiences", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const response = await request.json()

        return response.data;
    } catch (err) {
        return err;
    }
};
const ExperienceContainer: FC<ExperienceContainerProps> = async ({ }) => {
    const experiences: Experience[] = await getExperience();
    return (
        <>
            {experiences.map((el, _i) => (
                <ExperienceCard key={el.companyName} experience={el} />
            ))}
        </>
    )
}

export default ExperienceContainer;