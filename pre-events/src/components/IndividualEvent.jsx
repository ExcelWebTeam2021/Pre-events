import React, { Component } from "react"
import Events  from "../data/events.json"
import "./stylesheet/IndividualEvent.css"

class IndividualEvent extends Component {
    render() {
        return (
            <div>
                {Events.map((e, index) => {
                    return (
                        <div className="container">
                            <div className="card my-4 event" >
                                <div className="row no-gutters">
                                    {/* <div className="col-3" style={{backgroundImage: "https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"}}> */}
                                    <div className="col-3">
                                        <img src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" alt="" class="card-img h-100" />
                                        {/* <img src={require('../components/images/event-img1.jpg')} alt="nothing" /> */}
                                    </div>
                                    <div className="col-7 border-right">
                                        <div className="card-body">
                                            <h6 class="card-title">
                                                {e.name}
                                                <span class="badge badge-success ml-3">{e.status}</span>
                                            </h6>
                                            <p className="text-muted small card-text">{e.startDate} - {e.endDate}</p>
                                            <p class="card-text">{e.description}</p>

                                            <a href="#" className="btn btn-primary btn-block">Apply Now</a>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="card-body">
                                            <span class="badge badge-secondary mr-1">

                                                {e.tags[0]}

                                            </span>
                                            <span class="badge badge-secondary">

                                                {e.tags[1]}

                                            </span>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <h1>{e.event.name}</h1> */}
                        </div>
                        // <h1>{e.event.name}</h1>

                    )

                })}
            </div>
        );
    }
}

export default IndividualEvent;