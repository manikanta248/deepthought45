import React from 'react';
import Navbar from '../Components/Navbar';
import Main from '../Components/Main';
import Left from '../Components/Left';
import Right from '../Components/Right';
import Icons from '../Components/Icons';

export default function Home() {

    const project = {
        title: "Technical Project Management",
        description: `<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>
        <p>Let's prepare Sandwiches, we will use Pareto’s Law. That’s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>
        <p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>
        <p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>
        <p>Let's start thinking together, and search for how you can get the essence of project management.</p>`,
        tasks: [
          {
            title: "Explore the world of management",
            description:
              "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
            assets: [
              {
                title: "Technical Project Management",
                description:
                  "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
                content: "https://www.youtube.com/embed/TiMRwri1xJ8",
                type: "video",
              },
              {
                title: "Threadbuild",
                description:
                  "Watch the video and thread build, and jot out key threads while watching that video.",
                content: "",
                type: "threadbuilder",
              },
              {
                title: "Structure your pointers",
                description:
                  "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
                content: "",
                type: "article",
              },
              {
                title: "4SA Method",
                description: "To explore more read more",
                content:
                  "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                type: "article",
              },
            ],
          },
        ],
      };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div style={{ display: "flex", gap: "2rem" }}>
        <div className='mt-3' style={{ flexShrink: 0 }}>
          <Left project={project} />
        </div>
        <div style={{ flexGrow: 0 }}>
          <Main project={project} />
        </div>
        <div className='mt-3'>
            <Right/>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Icons/>
      </div>
    </div>
  );
}
