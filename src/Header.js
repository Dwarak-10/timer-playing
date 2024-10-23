import React from "react";
import { LOGO_URL } from "./utils/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="p-14">
      <ul className="flex items-center justify-between">
        <li className="flex gap-3 items-center">
          <p>Firma</p>
          <img alt="logo" className="w-24" src={LOGO_URL} />
        </li>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faCalendar} />
          <label for="numbers">Geratenummer</label>
          <select
            id="numbers"
            className="border border-black p-1 rounded-md bg-yellow-50"
          >
            <option disabled>Select</option>
            <option value="12365478" selected>
              12365478
            </option>
            <option value="2311232">2311232</option>
            <option value="98777632">98777632</option>
            <option value="63575763">63575763</option>
            <option value="23239887">23239887</option>
            <option value="23768798">23768798</option>
          </select>
        </li>
        <li className="flex gap-3 items-center">
          <FontAwesomeIcon icon={faUser} />
          <label for="names">Bediener</label>
          <select
            id="names"
            className="border border-black p-1 rounded-md bg-yellow-50"
          >
            <option disabled>Select</option>
            <option value="Paramanathan Thamiliny">
              Paramanathan Thamiliny
            </option>
            <option value="Kanagaradnam Subesan">Kanagaradnam Subesan</option>
            <option value="Valavan Thikalga">Valavan Thikalga</option>
            <option value="Adbul Hamem Sathik">Adbul Hamem Sathik</option>
            <option value="Thavabalan Nikila">Thavabalan Nikila</option>
            <option value="Kanthan Kavin">Kanthan Kavin</option>
            <option value="Varathan Thevi">Varathan Thevi</option>
          </select>
        </li>
        <li className="flex gap-3 items-center">
          <button className="bg-green-400 font-bold text-white p-2 rounded-md">
            START
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
