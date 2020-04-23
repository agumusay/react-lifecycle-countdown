import React, { useEffect, useState } from "react";
import moment from "moment";
import "./countdown.scss";

// let countDownStyles = {
//   background: "black",
// };
function Countdown(props) {
  let [timeObject, setTimeObject] = useState({});

  useEffect(() => {
    let didCancel = false;
    let myInterval = setInterval(() => {
      let now = moment();
      let end = moment(props.endTime);
      let difference = Math.round((end - now) / 1000);
      props.parentFunction(difference);
      let duration = moment.duration(end.diff(now));
      if (!didCancel) {
        setTimeObject({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
      didCancel = true;
    };
  }, [props]);

  return (
    <section className="countdown">
      <div className="countdown-date">
        <div className="countdown-date-time">
          <span>{timeObject.days}</span> days
        </div>
        <div className="countdown-date-time">
          <span>{timeObject.hours}</span> hours
        </div>
        <div className="countdown-date-time">
          <span>{timeObject.minutes}</span> minutes
        </div>
        <div className="countdown-date-time">
          <span>{timeObject.seconds}</span> seconds
        </div>
      </div>
      <div className="countdown-message">
        <div className="countdown-message-title">{props.title}</div>
        <div className="countdown-message-lead">{props.leadText}</div>
      </div>
    </section>
  );
}

Countdown.defaultProps = {
  title: "Coming Soon",
  leadText: "Stick around to be one of the first",
};

export default Countdown;
