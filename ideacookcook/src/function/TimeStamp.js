import Moment from "moment";
const TimeStamp = (t) => {
  var a = "";
  if (t.substring(4, 7) == "Jan") a = "01";
  else if (t.substring(4, 7) == "Feb") a = "02";
  else if (t.substring(4, 7) == "Mar") a = "03";
  else if (t.substring(4, 7) == "Apr") a = "04";
  else if (t.substring(4, 7) == "May") a = "05";
  else if (t.substring(4, 7) == "Jun") a = "06";
  else if (t.substring(4, 7) == "Jul") a = "07";
  else if (t.substring(4, 7) == "Aug") a = "08";
  else if (t.substring(4, 7) == "Sep") a = "09";
  else if (t.substring(4, 7) == "Oct") a = "10";
  else if (t.substring(4, 7) == "Nov") a = "11";
  else if (t.substring(4, 7) == "Dec") a = "12";
  Moment.updateLocale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few sec",
      ss: "%d sec",
      m: "a min",
      mm: "%d min",
      h: "an hr",
      hh: "%d hr",
      d: "a day",
      dd: "%d days",
      w: "a week",
      ww: "%d weeks",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
  });

  var d = parseInt(t.substring(8, 10));
  var h = parseInt(t.substring(16, 18)) + 7;
  if (h >= 24) {
    h -= 24;
    d += 1;
  }
  if (h < 0) h += 24;
  if (h < 10) h = "0" + h;
  if (d < 10) d = "0" + d;
  var out = Moment(
    t.substring(11, 15) + a + d + h + t.substring(19, 21) + t.substring(22, 24),
    "YYYYMMDDhhmmss"
  ).fromNow();
  return out;
};

export default TimeStamp;
