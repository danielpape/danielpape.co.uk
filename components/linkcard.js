import dateFormat from "dateformat";

export default function LinkCard({ link }) {

    function removeHttp(url) {
        return url.replace(/^https?:\/\//, '');
      }

  return (
    <div>
      <p>{dateFormat(link.date, "dddd, mmmm dS, yyyy")}</p>
      <h2>{link.pageName}</h2>
      <p>
        via{" "}
        <a href={link.link} target="_blank">
          {removeHttp(link.link)}
        </a>
      </p>
      <p>{link.plaintextdescription}</p>
    </div>
  );
}
