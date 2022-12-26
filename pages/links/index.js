import Menu from "/components/menu";
import LinkCard from "../../components/linkcard/linkcard";

import styles from "../../styles/LinksList.module.css";

const Links = ({ linksList }) => {
  return (
    <div>
      <Menu />
      <div className={styles.linkscontainer}>
        {linksList.map((link) => (
          <LinkCard link={link.fields} key={link.sys.id} />
        ))}
      </div>
    </div>
  );
};

const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticProps = async () => {
  const links = await client.getEntries();
  return {
    props: {
      linksList: links.items,
    },
  };
};

export default Links;
