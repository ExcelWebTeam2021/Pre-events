import React from "react";
import Events from "../events.json";
import "../stylesheet/IndividualEvent.css";

export default function IndividualEvent() {
   return (
      <div>
         {Events.map((e, index) => {
            return (
               <div className='container'>
                  <div className='card my-4 event'>
                     <div className='row no-gutters'>
                        <div className='col-3'>
                           <img src={e.img} alt='nothing' className='event-img ' />
                        </div>
                        <div className='col-7 border-right'>
                           <div className='card-body'>
                              <h6 class='card-title'>
                                 {e.name}
                                 <span class='badge badge-success ml-3'>{e.status}</span>
                              </h6>
                              <p className='text-muted small card-text'>
                                 {e.startDate} - {e.endDate}
                              </p>
                              <p class='card-text'>{e.description}</p>

                              <a href={e.application_url} className='btn btn-primary btn-block'>
                                 Apply Now
                              </a>
                           </div>
                        </div>
                        <div className='col-2'>
                           <div className='card-body'>
                              <span class='badge badge-secondary mr-1'>{e.tags[0]}</span>
                              <span class='badge badge-secondary'>{e.tags[1]}</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* <h1>{e.event.name}</h1> */}
               </div>
               // <h1>{e.event.name}</h1>
            );
         })}
      </div>
   );
}
