import "../styles/app.scss";
import "../styles/singleCountry.scss";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import { filterContext } from "../context/filterContext";

import { BiArrowBack } from "react-icons/bi";

import "./../styles/app.scss";

// Local light and dark mode style objects
const darkStyle = { backgroundColor: "hsl(207, 26%, 17%)" };
const lightStyle = { backgroundColor: "hsl(0, 0%, 98%)" };

function SingleCountry() {
  const { countryName } = useParams();

  const { theme } = useContext(ThemeContext);
  const { countries } = useContext(filterContext);

  const country = countries.find((country) => country.name === countryName);

  return (
    <main
      className={`${theme} singleCountry`}
      style={theme === "Dark" ? darkStyle : lightStyle}
    >
      <Link to='/'>
        <button className={`${theme} back-btn`}>
          <BiArrowBack />
          <span>Back</span>
        </button>
      </Link>
      {countries.length ? (
        <div className='country-container'>
          <div className='flag-container'>
            <img alt={country.name} src={country.flag} />
          </div>

          <div className='country-details-container'>
            <h2 className='name'>{country.name}</h2>

            <div className='country-details'>
              <div className='country-details--info'>
                <div className='country-details--info--first'>
                  <p>
                    <strong>Native Name: </strong>
                    {country.nativeName}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {new Intl.NumberFormat().format(country.population)}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {country.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {country.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {country.capital}
                  </p>
                </div>

                <div className='country-details--info--second'>
                  <p>
                    <strong>Top Level Domain: </strong>
                    {country.topLevelDomain}
                  </p>
                  <p>
                    <strong>Currencies: </strong>
                    {country.currencies.map((curr) => curr.name).join(", ")}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {country.languages.map((lang) => lang.name).join(", ")}
                  </p>
                </div>
              </div>

              <div className='country-details--border'>
                <p>
                  <strong>Border Countries: </strong>
                  <span className='border-countries'>
                    {country.borders?.length
                      ? country.borders.map((border) => {
                          const country = countries.find(
                            (country) => country.alpha3Code === border
                          );
                          return (
                            <Link to={`/countries/${country.name}`}>
                              <span
                                className='border-country'
                                key={country.latlng}
                              >
                                {country.name}
                              </span>
                            </Link>
                          );
                        })
                      : "None"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p style={{ margin: "0 auto" }}>
          <em>Loading...</em>
        </p>
      )}
    </main>
  );
}

export default SingleCountry;
