import React from "react";

function WorkItem({ data }) {

  return <section className="section-work" id="work">
    <div className="container">
      {data.map((item, i) => {
        return <div className="work-item mb-40 row" key={i}>
          <div className="work-info col-md-4">
            <img src={item.logoUrl} alt={item.title} />
            <h4>{item.title}</h4>
            <span>
              <a href={item.websiteUrl}>visit website</a>
            </span>
            <h6>{item.position}</h6>
            <p>{item.dateRange}</p>
          </div>
          <div className="work-about col-md-8">
            <p>{item.description}</p>
            <div className="skills-list">
              <ul>
                {item.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      }
      )};
    </div>
  </section>

}

export default WorkItem;
