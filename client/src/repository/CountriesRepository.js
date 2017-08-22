import * as flags from "../repository/FlagsRepository";
import {Country} from "../model/Country";

let countries = {
    "Albania": new Country("Albania", flags.albaniaFlag),
    "Andorra": new Country("Andora", flags.andorraFlag),
    "Austria": new Country("Austria", flags.austriaFlag),
    "Belarus": new Country("Białoruś", flags.belarusFlag),
    "Belgium": new Country("Belgia", flags.belgiumFlag),
    "BosniaAndHerzegovina": new Country("Bośnia i Hercegowina", flags.bosniaAndHerzegovinaFlag),
    "Bulgaria": new Country("Bułgaria", flags.bulgariaFlag),
    "Croatia": new Country("Chorwacja", flags.croatiaFlag),
    "Cyprus": new Country("Cypr", flags.cyprusFlag),
    "CzechRepublic": new Country("Czechy", flags.czechFlag),
    "Denmark": new Country("Dania", flags.denmarkFlag),
    "Estonia": new Country("Estonia", flags.estoniaFlag),
    "Finland": new Country("Finlandia", flags.finlandFlag),
    "Macedonia": new Country("Macedonia", flags.macedoniaFlag),
    "France": new Country("Francja", flags.franceFlag),
    "Germany": new Country("Niemcy", flags.germanyFlag),
    "Greece": new Country("Grecja", flags.greeceFlag),
    "Hungary": new Country("Węgry", flags.hungaryFlag),
    "Iceland": new Country("Islandia", flags.icelandFlag),
    "Ireland": new Country("Irlandia", flags.irelandFlag),
    "Italy": new Country("Włochy", flags.italyFlag),
    "Latvia": new Country("Łotwa", flags.latviaFlag),
    "Liechtenstein": new Country("Liechtenstein", flags.liechtensteinFlag),
    "Lithuania": new Country("Litwa", flags.lithuaniaFlag),
    "Luxembourg": new Country("Luksemburg", flags.luxembourgFlag),
    "Malta": new Country("Malta", flags.maltaFlag),
    "Moldova": new Country("Mołdawia", flags.moldovaFlag),
    "Monaco": new Country("Monako", flags.monacoFlag),
    "Montenegro": new Country("Czarnogóra", flags.montenegroFlag),
    "Netherlands": new Country("Holandia", flags.netherlandsFlag),
    "Norway": new Country("Norwegia", flags.norwayFlag),
    "Poland": new Country("Polska", flags.polandFlag),
    "Portugal": new Country("Portugalia", flags.portugalFlag),
    "Romania": new Country("Rumunia", flags.romaniaFlag),
    "Russia": new Country("Rosja", flags.russiaFlag),
    "SanMarino": new Country("San Marino", flags.sanMarinoFlag),
    "Serbia": new Country("Serbia", flags.serbiaFlag),
    "Slovakia": new Country("Słowacja", flags.slovakiaFlag),
    "Slovenia": new Country("Słowenia", flags.sloveniaFlag),
    "Spain": new Country("Hiszpania", flags.spainFlag),
    "Sweden": new Country("Szwecja", flags.swedenFlag),
    "Switzerland": new Country("Szwajcaria", flags.switzerlandFlag),
    "Ukraine": new Country("Ukraina", flags.ukraineFlag),
    "UnitedKingdom": new Country("Wielka Brytania", flags.ukFlag)
};

function findAll() {
    let result = [];

    for (let country in countries) {
        if (Object.prototype.hasOwnProperty.call(countries, country)) {
            result.push({
                code: country,
                country: countries[country]
            });
        }
    }

    return result;
}

let allCountries = findAll();
export {countries, allCountries};