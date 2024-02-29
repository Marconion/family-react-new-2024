import React from "react";
import { Navbar } from "./Navbar";
import { Typography, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";
import { Divider } from "./Divider";
import { MeniButton } from "./MeniButton";

const ponuda = [
  [
    <>
      <p class="p-3">Ponuda hrane</p>
      <ul>
        <li>
          Mešano meso (Ćevapi , Kobasice, Rolovani pileći file, Pileći štapići
          sa susamom)
        </li>
        <li>Selekcija suvomesnatog (Suva pečenica, Suvi vrat, Kulen)</li>
        <li>Selekcija sireva (Sjenički sir, Gauda, Kajmak)</li>
        <li>Dve vrste slanog rolata (Zeleni i Crveni)</li>
        <li>Domaće pita sa sirom i pečurkama</li>
        <li>Proja</li>
        <li>Mimoza salata</li>
        <li>Urnebes salata</li>
        <li>Bašta salata</li>
        <li>Pomfrit, začinjene kriške krompira</li>
        <li>Sarajevski somuni, baget</li>
      </ul>
      <p class="p-3">Ponuda pića</p>
      <ul>
        <li>Espresso, nes kafa, domaća kafa</li>
        <li>Kokteli - Hugo i Aperol spritz</li>
        <li>Gorki list</li>
        <li>
          Selekcija domaćih rakija destilerija "Nenadović" (dunja, šljiva,
          kajsija, kruška, medovača)
        </li>
        <li>Vina La Casona de Castano (Belo, Crveno ), Mateus (Rose)</li>
        <li>Zaječarsko 0,33</li>
        <li>Laško 0.33</li>
        <li>Vinjak</li>
        <li>Vermouth</li>
        <li>Vodka</li>
        <li>
          Gazirani sokovi 0.25 (Coca Cola, Fanta, Sprite, Bitter Lemon, Tonic)
        </li>
        <li>
          Negazirani sokovi 0.2 (narandža, breskva, borovnica, jabuka, Ice tea
          breskva, Cedevita)
        </li>
        <li>Guarana</li>
        <li>Knjaz Miloš 0,25</li>
        <li>Aqua Viva 0.25</li>
      </ul>
    </>,
  ],
  [
    <>
      <p class="p-3">Ponuda hrane</p>
      <ul>
        <li>
          Mešano meso (Ćevapi , Kobasice, Svinjski vrat, Rolovani pileći file,
          Pileći štapići sa susamom)
        </li>
        <li>Ćuretina u sosu od vrganja</li>
        <li>
          Selekcija suvomesnatog (Suva svinjska pečenica, Goveđa pršuta,
          Svinjska pršuta, Suvi vrat, Kulen)
        </li>
        <li>Selekcija sireva (Sjenički sir, Gauda, Gorgonzola, Kajmak)</li>
        <li>Dve vrste slanog rolata (Zeleni i Crveni)</li>
        <li>
          Finger food mix - tortilja sa piletinom, proledne rolinice, kanapei
        </li>
        <li>Italijanski štapići - Čeri, mozzarella, masline</li>
        <li>Domaće pite sa sirom i pečurkama</li>
        <li>Proja</li>
        <li>Mimoza salata</li>
        <li>Grčka salata</li>
        <li>Urnebes salata</li>
        <li>Bašta salata</li>
        <li>Pomfrit, Začinjeni krompir</li>
        <li>Sarajevski somuni, baget</li>
      </ul>
      <p class="p-3">Ponuda pića</p>
      <ul>
        <li>Espresso, nes kafa, domaća kafa</li>
        <li>Kokteli - Hugo i Aperol spritz</li>
        <li>
          Vina - La Casona de Castano (Belo, Crveno ), Mateus (Rose), Zvonko
          Bogdan (8 tamburaša, Život teče, 4 konja debela)
        </li>
        <li>Pivo -Zaječarsko 0,33, Laško 0.33, Heineken 0.25</li>
        <li>
          Žestoka alkoholna pića - Viski Johnnie Walker Red, Vodka Smirnoff,
          Vinjak, Gorki list, Vermouth, Martini, Gin Beefeater
        </li>
        <li>
          Selekcija domaćih rakija destilerija "Nenadović" (dunja, šljiva,
          kajsija, kruška, medovača)
        </li>
        <li>
          Gazirani sokovi 0.25 (Coca Cola, Fanta, Sprite, Bitter Lemon, Tonic)
        </li>
        <li>
          Negazirani sokovi 0.2 (narandža, breskva, borovnica, jabuka, Ice tea
          breskva, Cedevita)
        </li>
        <li>Guarana</li>
        <li>Vode - Knjaz Miloš 0,25, Aqua Viva 0.25</li>
      </ul>
    </>,
  ],
  [
    <>
      <p class="p-3">Ponuda hrane</p>
      <ul>
        <li>
          Mešano meso (Ćevapi , Dimljena vešalica, Kobasice, Rolovani pileći
          file, Piledi štapići sa susamom)
        </li>
        <li>Ćuretina u sosu sa vrganjima</li>
        <li>Svinjski file u lešniku sa sosom od višanja</li>
        <li>
          Selekcija suvomesnatog (Suva svinjska pečenica, Goveđa pršuta,
          Svinjska pršuta, Suvi vrat, Kulen)
        </li>
        <li>
          Selekcija sireva (Sjenički sir, Gauda, Camembert, Gorgonzola,
          Parmezan, Kajmak)
        </li>
        <li>Dve vrste slanog rolata - (Zeleni i Crveni) </li>
        <li>
          Finger food mix - tortilja sa piletinom, prolećne rolnice, kanapei sa
          lososom, grisini sa pršutom
        </li>
        <li>Italijanski štapići - Čeri, mozzarella, masline</li>
        <li>Domaće pite sa sirom i pečurkama</li>
        <li>Proja</li>
        <li>Mimoza salata</li>
        <li>Grčka salata</li>
        <li>Caprese salata</li>
        <li>Urnebes salata</li>
        <li>Bašta salata</li>
        <li>Grilovano povrće, Pomfrit, Začinjeni krompir</li>
        <li>Domaća pogača</li>
        <li>Sarajevski somuni, baget</li>
      </ul>
      <p class="p-3">Ponuda pića</p>
      <ul>
        <li>Espresso, nes kafa, domaća kafa</li>
        <li>Kokteli - Hugo i Aperol spritz</li>
        <li>
          Vina - La Casona de Castano (Belo, Crveno ), Mateus (Rose), Zvonko
          Bogdan (8 tamburaša, Život teče, 4 konja debela, Pinot blanc, Cuvee
          No1)
        </li>
        <li>Pivo -Zaječarsko 0,33, Laško 0.33, Heineken 0.25</li>
        <li>
          Žestoka alkoholna pića - Viski Johnnie Walker Red, Jameson, Jack
          Daniels, Vodka Smirnoff, Grey Goose, Vinjak, Jegermeister, Gorki list,
          Vermouth, Martini, Gin Beefeater
        </li>
        <li>
          Selekcija domaćih rakija destilerija "Nenadović" (dunja, šljiva,
          kajsija, kruška, medovača)
        </li>
        <li>Selekcija domaćih rakija "Zarić"</li>
        <li>
          Gazirani sokovi 0.25 (Coca Cola, Fanta, Sprite, Bitter Lemon, Tonic)
        </li>
        <li>
          Negazirani sokovi 0.2 (narandža, breskva, borovnica, jabuka, Ice tea
          breskva, Cedevita)
        </li>
        <li>Guarana</li>
        <li>Vode - Knjaz Miloš 0,25, Aqua Viva 0.25</li>
      </ul>
    </>,
  ],
];

export const PonudaPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [meni, setMeni] = useState(ponuda[0]);
  const [index, setIndex] = useState(0);
  const [vreme, setVreme] = useState(0);
  const [cena, setCena] = useState(32); // Inicijalna cena za prvi meni i 3 sata trajanja

  // Funkcija za ažuriranje cene na osnovu trenutno odabranog menija i trajanja proslave
  useEffect(() => {
    // Mapiranje indeksa menija i trajanja na odgovarajuću cenu iz ponude
    const cenaMap = {
      0: { 0: 25, 1: 32 }, // Cena za prvi meni
      1: { 0: 30, 1: 38 }, // Cena za drugi meni
      2: { 0: 35, 1: 50 }, // Cena za treći meni
    };

    // Ažuriranje cene na osnovu trenutno odabranih menija i trajanja proslave
    setCena(cenaMap[index][vreme]);
  }, [index, vreme]); // Ponovno izračunavanje cene kada se promeni index ili vreme

  return (
    <div>
      <Navbar />
      <Stack flex={1} alignItems={"center"} m={5}>
        <Typography variant="h4" color={"#12372A"}>
          Ponuda
        </Typography>
        <Divider />
        <Typography variant="h8" textAlign={"center"}>
          Kliknite na meni i na trajanje da bi dobili cenu
        </Typography>
        <br />

        {/* MENI BUTTONS*/}
        <Stack direction={"row"} spacing={3}>
          <button
            className={index === 0 ? "active" : ""}
            onClick={() => {
              setMeni(ponuda[0]);
              setIndex(0);
            }}>
            Set meni 1
          </button>
          <button
            className={index === 1 ? "active" : ""}
            onClick={() => {
              setMeni(ponuda[1]); // First function call
              setIndex(1); // Second function call
            }}>
            Set meni 2
          </button>
          <button
            className={index === 2 ? "active" : ""}
            onClick={() => {
              setMeni(ponuda[2]);
              setIndex(2);
            }}>
            Set meni 3
          </button>
        </Stack>
        <br />
        <Typography variant="h6">Proslava od:</Typography>

        {/* VREME BUTTONS */}
        <Stack direction={"row"} spacing={3}>
          <button
            className={vreme === 0 ? "active" : ""}
            onClick={() => {
              setVreme(0); // Second function call
            }}>
            3 sata
          </button>
          <button
            className={vreme === 1 ? "active" : ""}
            onClick={() => {
              setVreme(1);
            }}>
            6 sati
          </button>
        </Stack>

        {/* Prikaz cene */}
        <Typography>
          <h1>Cena: {cena} evra</h1>
        </Typography>
        <Divider className={"custom-divider"} />

        {/* Set meniji*/}
        <Typography>
          <p>{meni}</p>
        </Typography>
        <MeniButton />
        <Divider className={"custom-divider"} />
      </Stack>
      <Footer />
    </div>
  );
};
