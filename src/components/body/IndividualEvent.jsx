import React from "react";

import "../stylesheet/IndividualEvent.css";

export default function IndividualEvent(props) {

    //   const [status, setStatus] = useState("upcoming");

  return (
    <div>
     
      { props.data.map((e, index) => {
        const curDate = new Date();
        const startDate = new Date(
          e.startDate.split("/")[2],
          e.startDate.split("/")[1] - 1,
          e.startDate.split("/")[0]
        );
        const endDate = new Date(
          e.startDate.split("/")[2],
          e.endDate.split("/")[1] - 1,
          e.endDate.split("/")[0]
        );

        let badgeClass = "badge-success";
        let status = "upcoming";
        if (curDate - startDate >= 0 && curDate - endDate <= 0) {
          status = "ongoing";
          badgeClass = "badge ml-3 badge-success";
        } else if (startDate - curDate > 0) {
          status = "upcoming";
          badgeClass = "badge ml-3 badge-warning";
        } else if (curDate - endDate > 0) {
          status = "over";
          badgeClass = "badge ml-3 badge-danger";
        }
        return (
         
          <div className="container">
            <div className="card my-4 event">
              <div className="row no-gutters">
                <div className="col-3">
                  <img src={e.img} alt="nothing" className="event-img" />
                </div>
                <div className="col-7 border-right">
                  <div className="card-body">
                    <h6 class="card-title">
                      {e.name}
                      <span className={badgeClass}>{status}</span>
                    </h6>
                    <p className="text-muted small card-text">
                      {e.startDate} - {e.endDate}
                    </p>
                    <p class="card-text">{e.description}</p>

                    <a
                      href={e.application_url}
                      className="btn btn-primary btn-block"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                <div className="col-2">
                  <div className="card-body">
                    <span class="badge badge-secondary mr-1">{e.tags[0]}</span>
                    <span class="badge badge-secondary">{e.tags[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* <h1>{e.event.name}</h1> */}
          </div>
         
        );
      })}
    </div>
  );
}
