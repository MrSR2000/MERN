import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import { presentationTopic } from "../constants";

const Homework = () => {
  const [presentationTopics, setpresentationTopic] =
    useState(presentationTopic);
  const [group, setGroup] = useState("");
  const [members, setMembers] = useState("");
  const [topic, setTopic] = useState("");

  const assignTopic = () => {
    setpresentationTopic = [
      ...presentationTopics,
      {
        group,
        members,
        topic,
      },
    ];
  };

  return (
    <div>
      <h1>Presentation Topic</h1>
      <div className="presentation-container">
        {presentationTopics.map((p, x) => (
          <div className="presentation-topic" key={p.id}>
            <div className="id">
              <span>{x + 1}</span>
            </div>

            <div className="Group" key={p.group}>
              <span>{p.group}</span>
            </div>

            <div className="members">
              <span>{p.groupMembers}</span>
            </div>

            <div className="Topic">
              <span>{p.topic}</span>
            </div>
            <BsTrash />
            <BiEdit />
          </div>
        ))}
      </div>

      {/* this section is to make new input boxes */}
      <div className="memberinput">
        <div className="textboxes">
          <input name="Group Members" placeholder="Members Name" />
        </div>
        <button className="firstbutton" onClick> 
          Add Members
        </button>

        <div className="Topics">
          <input name="Topic" placeholder="Topic" />
        </div>
        <button className="firstbutton" onClick={assignTopic}>
          Assign
        </button>
      </div>
    </div>
  );
};

export default Homework;
