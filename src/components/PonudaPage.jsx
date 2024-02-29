import React from "react";
import { Navbar } from "./Navbar";
import { Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { Divider } from "./Divider";

const ponuda = [
  [
    <>
      <p class="p-3">Ponuda hrane</p>
      <ul>
        <li>
          Mešano meso (Ćevapi , Kobasice, Svinjski vrat, Pileći štapići sa
          susamom)
        </li>
        <li>Selekcija suvomesnatog (Suva pečenica, Suvi vrat, Kulen)</li>
        <li>Selekcija sireva (Sjenički sir, Gauda, Kajmak)</li>
        <li>Dve vrste slanog rolata (Zeleni i Crveni)</li>
        <li>Domaća pita sa sirom</li>
        <li>Proja</li>
        <li>Španska pita</li>
        <li>Mimoza salata</li>
        <li>Urnebes salata</li>
        <li>Kupus salata</li>
        <li>Vitaminska salata</li>
        <li>Pomfrit</li>
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
        <li>Španska pita</li>
        <li>Mimoza salata</li>
        <li>Grčka salata</li>
        <li>Urnebes salata</li>
        <li>Kupus salata</li>
        <li>Vitaminska salata</li>
        <li>Pomfrit, Začinjeni krompir</li>
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
        <li>Rolovana ćuretina na pireu sa tartufima</li>
        <li>Svinjski file u lešniku sa sosom od višanja</li>
        <li>
          Selekcija suvomesnatog (Suva svinjska pečenica, Goveđa pršuta,
          Svinjska pršuta, Suvi vrat, Kulen)
        </li>
        <li>
          Selekcija sireva (Sjenički sir, Gauda, Gorgonzola, Parmezan, Kajmak)
        </li>
        <li>Tri vrste slanog rolata - Beli, zeleni, crveni</li>
        <li>
          Finger food mix - tortilja sa piletinom, prolećne rolnice, kanapei sa
          lososom, grisini sa pršutom
        </li>
        <li>Italijanski štapići - Čeri, mozzarella, masline</li>
        <li>Domaće pite sa sirom i pečurkama</li>
        <li>Proja</li>
        <li>Španska pita</li>
        <li>Mimoza salata</li>
        <li>Grčka salata</li>
        <li>Caprese salata</li>
        <li>Urnebes salata</li>
        <li>Kupus salata</li>
        <li>Vitaminska salata</li>
        <li>Grilovano povrće, Pomfrit, Začinjeni krompir</li>
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
  return (
    <div>
      <Navbar />
      <Stack flex={1} alignItems={"center"} m={5}>
        <Typography variant="h4" color={"#12372A"}>
          Ponuda
        </Typography>
        <Divider />
        <Typography>
          <set-1>
            <h2 class="set-pos">Set meni 1 (32e)</h2>
            <>{ponuda[0]}</>
          </set-1>
          <div class="button-pos">
            <Link to="/ponuda">
              <Button
                variant="contained"
                style={{ color: "#FBFADA" }}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>
                Povratak na početak
              </Button>
            </Link>
          </div>
          <Divider />
          <set-2>
            <h2 class="set-pos">Set meni 2 (38e)</h2>
            <>{ponuda[1]}</>
          </set-2>
          <div class="button-pos">
            <Link to="/ponuda">
              <Button
                variant="contained"
                style={{ color: "#FBFADA" }}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>
                Povratak na početak
              </Button>
            </Link>
          </div>
          <Divider />
          <set-3>
            <h2 class="set-pos">Set meni 3 (50e)</h2>
            <>{ponuda[2]}</>
          </set-3>

          <div class="button-pos">
            <Link to="/ponuda">
              <Button
                variant="contained"
                style={{ color: "#FBFADA" }}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}>
                Povratak na početak
              </Button>
            </Link>
          </div>
          <Divider />
        </Typography>
      </Stack>
      <Footer />
    </div>
  );
};
