import * as flags from "../repository/FlagsRepository";
import {Country} from "../model/Country";

let countries = {
    "Albania": new Country("Albania", flags.albaniaFlag, "AL"),
    "Andorra": new Country("Andora", flags.andorraFlag),
    "Austria": new Country("Austria", flags.austriaFlag, "AT"),
    "Belarus": new Country("Białoruś", flags.belarusFlag, "BY"),
    "Belgium": new Country("Belgia", flags.belgiumFlag, "BE"),
    "BosniaAndHerzegovina": new Country("Bośnia i Hercegowina", flags.bosniaAndHerzegovinaFlag, "BA"),
    "Bulgaria": new Country("Bułgaria", flags.bulgariaFlag, "BG"),
    "Croatia": new Country("Chorwacja", flags.croatiaFlag, "HR"),
    "Cyprus": new Country("Cypr", flags.cyprusFlag, "CY"),
    "CzechRepublic": new Country("Czechy", flags.czechFlag, "CZ"),
    "Denmark": new Country("Dania", flags.denmarkFlag, "DK"),
    "Estonia": new Country("Estonia", flags.estoniaFlag, "EE"),
    "Finland": new Country("Finlandia", flags.finlandFlag, "FI"),
    "Macedonia": new Country("Macedonia", flags.macedoniaFlag, "MK"),
    "France": new Country("Francja", flags.franceFlag, "FR"),
    "Germany": new Country("Niemcy", flags.germanyFlag, "DE"),
    "Greece": new Country("Grecja", flags.greeceFlag, "GR"),
    "Hungary": new Country("Węgry", flags.hungaryFlag, "HU"),
    "Iceland": new Country("Islandia", flags.icelandFlag, "IS"),
    "Ireland": new Country("Irlandia", flags.irelandFlag, "IE"),
    "Italy": new Country("Włochy", flags.italyFlag, "IT"),
    "Latvia": new Country("Łotwa", flags.latviaFlag, "LV"),
    "Liechtenstein": new Country("Liechtenstein", flags.liechtensteinFlag),
    "Lithuania": new Country("Litwa", flags.lithuaniaFlag, "LT"),
    "Luxembourg": new Country("Luksemburg", flags.luxembourgFlag, "LU"),
    "Malta": new Country("Malta", flags.maltaFlag, "ML"),
    "Moldova": new Country("Mołdawia", flags.moldovaFlag, "MD"),
    "Monaco": new Country("Monako", flags.monacoFlag),
    "Montenegro": new Country("Czarnogóra", flags.montenegroFlag, "ME"),
    "Netherlands": new Country("Holandia", flags.netherlandsFlag, "NL"),
    "Norway": new Country("Norwegia", flags.norwayFlag, "NO"),
    "Poland": new Country("Polska", flags.polandFlag, "PL"),
    "Portugal": new Country("Portugalia", flags.portugalFlag, "PT"),
    "Romania": new Country("Rumunia", flags.romaniaFlag, "RO"),
    "Russia": new Country("Rosja", flags.russiaFlag, "RU"),
    "SanMarino": new Country("San Marino", flags.sanMarinoFlag),
    "Serbia": new Country("Serbia", flags.serbiaFlag, "RS"),
    "Slovakia": new Country("Słowacja", flags.slovakiaFlag, "SK"),
    "Slovenia": new Country("Słowenia", flags.sloveniaFlag, "SI"),
    "Spain": new Country("Hiszpania", flags.spainFlag, "ES"),
    "Sweden": new Country("Szwecja", flags.swedenFlag, "SE"),
    "Switzerland": new Country("Szwajcaria", flags.switzerlandFlag, "CH"),
    "Ukraine": new Country("Ukraina", flags.ukraineFlag, "UA"),
    "UnitedKingdom": new Country("Wielka Brytania", flags.ukFlag, "GB")
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
