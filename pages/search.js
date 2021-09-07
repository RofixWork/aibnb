import { useRouter } from "next/router";
import { format } from "date-fns";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import Head from "next/head";
const Search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuests } = router.query;

  const formatStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formatStartDate} - ${formatEndDate}`;

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <Header placeholder={`${location} - ${range} - ${noOfGuests}`} />
      <div className="search container">
        <div className="search__info">
          <p className="search__info__subtitle">
            300+ stays - {range} - for {noOfGuests} guests
          </p>
          <h3 className="search__info__title">stays in {location}</h3>

          <ul className="search__info__items">
            <li>cancellation flexibility</li>
            <li>type of place</li>
            <li>price</li>
            <li>rooms and bads</li>
            <li>more filters</li>
          </ul>
        </div>

        <div className="search__content">
          <div>
            {searchResult?.map((result, index) => {
              return <InfoCard key={index} {...result} />;
            })}
          </div>
          <div className="search__map">
            <Map searchResult={searchResult} />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch("https://links.papareact.com/isz");
  const searchResult = await res.json();

  return {
    props: { searchResult },
  };
};

export default Search;
