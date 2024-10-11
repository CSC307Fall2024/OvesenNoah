import prisma from '@/db';
import type {Job} from '@prisma/client'

export default async function Jobs({params}: { params: { id: string} }) {

    const job = await prisma.job.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });

    // let jobsList = {
    //     '1': "Student Assistant. Diagnosing and repairing common computer issues in person and over the phone.",
    //     '2': "Zipline Guide. Training and guiding customers safely through obstacle course and ziplines",
    //     '3': "Part-time Courtesy Clerk. Bagging groceries, collecting carts, assisting customers with their needs"
    // };

    return (<div>
        <h1> { job?.name }</h1>
        <h3> {job?.employer}</h3>
        <div>{job?.description}</div>
        <br></br>
        <a href="/">Go Back</a>
        </div>
    );
}