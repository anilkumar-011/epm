"use client";
import Link from "next/link";
import React, { useEffect, useState, useMemo, memo, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Search, Filter, Download, BookOpen, Clock } from "lucide-react";

interface Magazine {
  name: string;
  month: string;
  image: string;
  download_url: string;
}

// Move static data outside component to prevent recreation
const initialMagazines: Magazine[] = [
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2008",
    image: "/magazine/nov_dec_2008.webp",
    download_url:
      "https://drive.google.com/file/d/11lOrN7O4FlOKJW9xfPTylv73XtsPK-er/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2009",
    image: "/magazine/jan_feb_2009.webp",
    download_url:
      "https://drive.google.com/file/d/1QMuSt3DAa7-0Ji6J9AKXGeOnlHFIoR15/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2009",
    image: "/magazine/jul_aug_2009.webp",
    download_url:
      "https://drive.google.com/file/d/1R3zVu7fx2n_B6XMNUjF-zQdxYI9Z0DXJ/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2009",
    image: "/magazine/sep_oct_2009.webp",
    download_url:
      "https://drive.google.com/file/d/1r9NrrNoc1YgSQVb8nWpNr20Avg-lgkDQ/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2009",
    image: "/magazine/nov_dec_2009.webp",
    download_url:
      "https://drive.google.com/file/d/1eRAY2QMnGWk0paxEmU-91jwu2YDrf8AF/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2010",
    image: "/magazine/jan_feb_2010.webp",
    download_url:
      "https://drive.google.com/file/d/1UZJ9Zb-BaJSI8GROvVMPlxntpbik_0Y8/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2010",
    image: "/magazine/mar_apr_2010.webp",
    download_url:
      "https://drive.google.com/file/d/1wrL5oFvYEIfhKy3yBtv9v-Lkmmwmr8i_/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2010",
    image: "/magazine/may_jun_2010.webp",
    download_url:
      "https://drive.google.com/file/d/1KpjEuooN1qBapk89gF4HQb-_S_ZxwvMC/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2010",
    image: "/magazine/sep_oct_2010.webp",
    download_url:
      "https://drive.google.com/file/d/1KAXCDCDJp6qiTQjRk5TMUEwhYCJOfwif/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2010",
    image: "/magazine/nov_dec_2010.webp",
    download_url:
      "https://drive.google.com/file/d/10R74xugE3yErfcxPzyRgOb1heB3_pBLK/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2011",
    image: "/magazine/jan_feb_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1XDXqh09daP8rYJCbU0epzvPgZSTbl-LY/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2011",
    image: "/magazine/mar_apr_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1qXAeVY-EPCw9TorxnjSwad40FcZGexuW/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2011",
    image: "/magazine/may_jun_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1Hzg0_9d8GeG2T3WgLX3MeyFPszuELrfa/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2011",
    image: "/magazine/jul_aug_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1oB4vwRbU0yGSQL1CKeVkz0Wn5lSILDD-/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2011",
    image: "/magazine/sep_oct_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1suWjhgrAZlVyDY53K51678ELClo0zEh4/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2011",
    image: "/magazine/nov_dec_2011.webp",
    download_url:
      "https://drive.google.com/file/d/1rJRqGYoz8mD26bvj7jcNkMsPNTbYNVLd/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2012",
    image: "/magazine/jan_feb_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1WbFTJBq5djPifdUfpb9wPJPW2F0UtGF4/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2012",
    image: "/magazine/mar_apr_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1sRJd-yhycX966_wbrZk-4-h2Es3w1DM8/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2012",
    image: "/magazine/may_jun_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1nTJuJEvEpwrexUhl1tkdAZOKAPOEewMt/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2012",
    image: "/magazine/jul_aug_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1MMX4h7PTmZeKuoYxxwaJrOL7S4Mde8JZ/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2012",
    image: "/magazine/sep_oct_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1J9nDTQlb8X6y3sednO06qzD8ZgRgTJvF/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2012",
    image: "/magazine/nov_dec_2012.webp",
    download_url:
      "https://drive.google.com/file/d/1aQxwN8yvEhGUKaDUbagne54RZvirm_xf/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2013",
    image: "/magazine/jan_feb_2013.webp",
    download_url:
      "https://drive.google.com/file/d/1i-VMbyAYf14sgddWHbG59iYLOcUeo46P/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2013",
    image: "/magazine/mar_apr_2013.webp",
    download_url:
      "https://drive.google.com/file/d/1YxpLmDUqO7t_szP-69ZFtdp-pAsaUGVT/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2013",
    image: "/magazine/jul_aug_2013.webp",
    download_url:
      "https://drive.google.com/file/d/1LYg-4bsvDokCdD1ZMD0ZGIOwr97iQeFC/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2013",
    image: "/magazine/sep_oct_2013.webp",
    download_url:
      "https://drive.google.com/file/d/1sXEx_X4Npm8S5M0zigDqkea75-bCUtRt/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2013",
    image: "/magazine/nov_dec_2013.webp",
    download_url:
      "https://drive.google.com/file/d/1g7TDGQVpo2EK2SPWhoQb6778J4x6FhvY/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2014",
    image: "/magazine/jan_feb_2014.webp",
    download_url:
      "https://drive.google.com/file/d/140Xc0uxZPvA4ECx02dnSgzPLHMEAnffC/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2014",
    image: "/magazine/mar_apr_2014.webp",
    download_url:
      "https://drive.google.com/file/d/146VyH1-_8GRtl49X2bSN5A1yj6-ztNRd/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2014",
    image: "/magazine/may_jun_2014.webp",
    download_url:
      "https://drive.google.com/file/d/1xepvIYg7J9dTBWJuXmoWveRmV8WBBp_S/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2014",
    image: "/magazine/jul_aug_2014.webp",
    download_url:
      "https://drive.google.com/file/d/1CdkIhBWiiyWdkv_gqXyUfUwmST3vs8MY/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2014",
    image: "/magazine/sep_oct_2014.webp",
    download_url:
      "https://drive.google.com/file/d/1EI5lXcKPEDh6sf0_rdIeuPpgMX_N7hsa/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2014",
    image: "/magazine/nov_dec_2014.webp",
    download_url:
      "https://drive.google.com/file/d/1yNqIFalj3zvNDPT8tsLsYAdvB6jOVPSm/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2015",
    image: "/magazine/jan_feb_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1Cb2ooKw-7IIuOf1cRn-VtJhGk1CDrRu7/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2015",
    image: "/magazine/mar_apr_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1FAqlo3fugS2nu3PWWuClrCL-_iPHqjKg/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2015",
    image: "/magazine/may_jun_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1hMt9lkGqFM-NkfCO7W3_lADT4TFv1q81/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2015",
    image: "/magazine/jul_aug_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1J5vw2I5g-hE5qh--tYTgDhCxPWm7dSw_/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2015",
    image: "/magazine/sep_oct_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1OUZZ8em40jsL8wss0dHhUNkM9gxPP6WC/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2015",
    image: "/magazine/nov_dec_2015.webp",
    download_url:
      "https://drive.google.com/file/d/1m1vGaik4HYrm72OHLFXlP5_Y6VlYSomp/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2016",
    image: "/magazine/jan_feb_2016.webp",
    download_url:
      "https://drive.google.com/file/d/1spFMpYBl5r2YF7tf1wBuPDls1PRSFvf4/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2016",
    image: "/magazine/mar_apr_2016.webp",
    download_url:
      "https://drive.google.com/file/d/1EHE5sAU8UgkyeQJ6RYvArIuQF3jvvd73/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2016",
    image: "/magazine/may_jun_2016.webp",
    download_url:
      "https://drive.google.com/file/d/17ECbwEMjYIPJ1YYUTjvoqB6Lh0OV79tc/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2016",
    image: "/magazine/jul_aug_2016.webp",
    download_url:
      "https://drive.google.com/file/d/1wQa6udhR_Kut1ZJJ0G3cL-UmJ5RBDt5c/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2016",
    image: "/magazine/sep_oct_2016.webp",
    download_url:
      "https://drive.google.com/file/d/1gyzXMYdbxIkkg1MIpwQ3tryEoFy1JFlq/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2017",
    image: "/magazine/jan_feb_2017.webp",
    download_url:
      "https://drive.google.com/file/d/1aY7Eekw7eAcX-tvEmUiXK7bYnErZDfby/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2017",
    image: "/magazine/mar_apr_2017.webp",
    download_url:
      "https://drive.google.com/file/d/1-HbmvtWJ20v6y84F2kBSmOB_keFDtPg4/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2019",
    image: "/magazine/jan_feb_2019.webp",
    download_url:
      "https://drive.google.com/file/d/1-5Kt-h2Bmvj-8fSXS1ixJm_WB4W1qhsI/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2019",
    image: "/magazine/mar_apr_2019.webp",
    download_url:
      "https://drive.google.com/file/d/18JihN0y5xHHkZQ0j4y3cdANVp-bDEYJI/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2019",
    image: "/magazine/may_jun_2019.webp",
    download_url:
      "https://drive.google.com/file/d/1GbjHxB65iVcy8Ba02tKMjJQl_uLGG4ys/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2019",
    image: "/magazine/jul_aug_2019.webp",
    download_url:
      "https://drive.google.com/file/d/1q9pGIT_my_SnTfiBmcOh7nf0wOBbGTSY/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2019",
    image: "/magazine/sep_oct_2019.webp",
    download_url:
      "https://drive.google.com/file/d/1I02motj3fypamspvYbeMI13FFdPy4zOo/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2019",
    image: "/magazine/nov_dec_2019.webp",
    download_url:
      "https://drive.google.com/file/d/1tPEC37Pc7wVKx1oAClLW5puduu1j9J5e/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2020",
    image: "/magazine/jan_feb_2020.webp",
    download_url:
      "https://drive.google.com/file/d/1mj5atrIN6w-3BQ_30VT8nttxMFoUpBtA/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2020",
    image: "/magazine/mar_apr_2020.webp",
    download_url:
      "https://drive.google.com/file/d/1r4n2GA8ytOWryTapIJIaBzLO5v_lFeAN/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2021",
    image: "/magazine/jan_feb_2021.webp",
    download_url:
      "https://drive.google.com/file/d/1xM26g8OhgTmGAgK87zmzXOWLQmnZhI9N/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2021",
    image: "/magazine/mar_apr_2021.webp",
    download_url:
      "https://drive.google.com/file/d/16dK-GOdmNn-MgpQb56dsdqjitrl-vY2U/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2021",
    image: "/magazine/jul_aug_2021.webp",
    download_url:
      "https://drive.google.com/file/d/19wZqPORs9Xr5qp3GRTfohIroibQncvhe/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2021",
    image: "/magazine/sep_oct_2021.webp",
    download_url:
      "https://drive.google.com/file/d/1sZHsheVsE8KnmV9FLmXJ86LbPW0fEWw7/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2021",
    image: "/magazine/nov_dec_2021.webp",
    download_url:
      "https://drive.google.com/file/d/1FvRQVcpuzOtjGJwKz36tW-JaBeAv3RrC/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2022",
    image: "/magazine/jan_feb_2022.webp",
    download_url:
      "https://drive.google.com/file/d/15jQl42-s5UIU7P0cHc_5l7lYbxAAAwM_/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2022",
    image: "/magazine/mar_apr_2022.webp",
    download_url:
      "https://drive.google.com/file/d/1FjgjP7RkVmjoXOBQ0naDD8Pyomy4RQm0/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2022",
    image: "/magazine/may_jun_2022.webp",
    download_url:
      "https://drive.google.com/file/d/1hxVCK7YXhkEdoXVx31cBCCb4eG6Z3f8u/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2022",
    image: "/magazine/jul_aug_2022.webp",
    download_url:
      "https://drive.google.com/file/d/14e-BBCzk3tBUc7yB6tOFG5ohLkzR__zE/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2022",
    image: "/magazine/sep_oct_2022.webp",
    download_url:
      "https://drive.google.com/file/d/1D4l5wlRgnWfKQRe0QeayfGQrF9D74JNs/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2022",
    image: "/magazine/nov_dec_2022.webp",
    download_url:
      "https://drive.google.com/file/d/13ojweZdyb3aaiZDPD1XVh2G3nuFa_D2X/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2023",
    image: "/magazine/jan_feb_2023.webp",
    download_url:
      "https://drive.google.com/file/d/18hl8QBvDZSKyE7hEsoOq90UxlQEMR9-a/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2023",
    image: "/magazine/mar_apr_2023.webp",
    download_url:
      "https://drive.google.com/file/d/1wUxqLHdlJPQeEC6xOQfe05S9kcSBxN_C/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2023",
    image: "/magazine/may_jun_2023.webp",
    download_url:
      "https://drive.google.com/file/d/1gyh6thk2FF_xcuamHYj1AH4bun3Tknvz/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2023",
    image: "/magazine/jul_aug_2023.webp",
    download_url:
      "https://drive.google.com/file/d/16H5DR2RWi8l-pvoHZwIWDzdb3OHisGFz/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2023",
    image: "/magazine/sep_oct_2023.webp",
    download_url:
      "https://drive.google.com/file/d/1nfBeluoqvP2v0hM_zJqjnSuju6MixW5-/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2023",
    image: "/magazine/nov_dec_2023.webp",
    download_url:
      "https://drive.google.com/file/d/1m5XvonrbicW-IJYiUHsf743xnr1tue7g/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2024",
    image: "/magazine/jan_feb_2024.webp",
    download_url:
      "https://drive.google.com/file/d/1v8xhPCDrUiZi8m0MMsMG9lTHdZTB6lFS/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2024",
    image: "/magazine/mar_apr_2024.webp",
    download_url:
      "https://drive.google.com/file/d/11pnemBBkKeu1Ox6mCxoHReNJxZ9_9Md2/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2024",
    image: "/magazine/may_jun_2024.webp",
    download_url:
      "https://drive.google.com/file/d/1E1mF0DovL69Ojyxkz3CWDsX8AKGf07TN/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2024",
    image: "/magazine/jul_aug_2024.webp",
    download_url:
      "https://drive.google.com/file/d/1L7zngfzDFl3Hc8YHSfFl90dwEdaF0UO5/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2024",
    image: "/magazine/sep_oct_2024.webp",
    download_url:
      "https://drive.google.com/file/d/1BV5u1pEIKwTIVIVwq0B3eaRH5ifVkeTd/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2024",
    image: "/magazine/nov_dec_2024.webp",
    download_url:
      "https://drive.google.com/file/d/1b6kUfeSpXzvFW7LcnNr7fHhPGcaEOem0/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jan Feb 2025",
    image: "/magazine/jan_feb_2025.webp",
    download_url:
      "https://drive.google.com/file/d/1qP9MJayUWhzZOEZ1bbOkNXpSk-eHyHMa/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Mar Apr 2025",
    image: "/magazine/mar_apr_2025.webp",
    download_url:
      "https://drive.google.com/file/d/1E9wu15LpkyK9d6uAMLtW-IWkFd2hvMq3/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "May Jun 2025",
    image: "/magazine/may_jun_2025.webp",
    download_url:
      "https://drive.google.com/file/d/1Gd8RciqEhsuQFD0N57vI3hew4kVBxZ3K/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Jul Aug 2025",
    image: "/magazine/jul_aug_2025.webp",
    download_url:
      "https://drive.google.com/file/d/1Rf0okFKuXz5l1sIIbZfQX-3WSj_fDpV2/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Sep Oct 2025",
    image: "/magazine/sep_oct_2025.webp",
    download_url:
      "https://drive.google.com/file/d/14-dVK1GAbNNUlfivRclDfGfbBh3cM760/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha ",
    month: "Nov Dec 2025",
    image: "/magazine/nov_dec_2025.webp",
    download_url:
      "https://drive.google.com/file/d/1Abglubsnwan-g8_JBRhn4rAzuKH5SjB1/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha",
    month: "Jan Feb 2026",
    image: "/magazine/jan_feb_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1qD7fqwCW27JziNxEQsYtMExy-HdbC7ci/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha",
    month: "Mar Apr 2026",
    image: "/magazine/mar_apr_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1zv8bHgj3B9oHNV3lPvohsmSR1hZmwUQb/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha",
    month: "May June 2026",
    image: "/magazine/may_june_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1HZHv_IBPL6gFAbgBh9dguO8O52otQsHO/view?usp=sharing",
  },
  {
    name: "Devuni Sparsha",
    month: "July Aug 2026",
    image: "/magazine/sparsha_jul_aug_2026.jpg",
    download_url:
      "https://drive.google.com/file/d/1ypWiLqdQwmH8qpRko9ytNLF18iYder6E/view?usp=sharing",
  },
];

// Pre-compute unique years once
const getUniqueYears = (magazines: Magazine[]): string[] => {
  const years = new Set<string>();
  magazines.forEach((magazine) => {
    const yearMatch = magazine.month.match(/\d{4}/);
    if (yearMatch) years.add(yearMatch[0]);
  });
  return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
};

const uniqueYears = ["All", ...getUniqueYears(initialMagazines)];

const LibraryPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  // Use useMemo for filtering instead of useEffect + state
  const filteredMagazines = useMemo(() => {
    if (selectedYear === "All") {
      return initialMagazines;
    }
    return initialMagazines.filter((magazine) =>
      magazine.month.includes(selectedYear),
    );
  }, [selectedYear]);

  const handleYearChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedYear(e.target.value);
    },
    [],
  );

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary mb-4 md:mb-6">
            Spiritual <span className="text-secondary">Library</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Access our complete collection of Devuni Sparsha magazines, dating
            back to 2008.
          </p>
        </div>

        {/* Filter Section */}
        <div className="glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-primary/5 shadow-premium mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 bg-primary/10 text-primary rounded-xl md:rounded-2xl shrink-0">
              <BookOpen size={20} className="md:w-6 md:h-6" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold">Devuni Sparsha</h3>
              <p className="text-[10px] md:text-sm text-gray-400 font-bold uppercase tracking-wider">
                Archives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Filter
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <select
                id="year-select"
                value={selectedYear}
                onChange={handleYearChange}
                className="w-full bg-white border border-gray-100 rounded-xl md:rounded-2xl pl-10 md:pl-12 pr-6 py-3 md:py-4 focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/5 transition-colors appearance-none font-bold text-gray-700 text-sm md:text-base"
              >
                {uniqueYears.map((year) => (
                  <option key={year} value={year}>
                    Year: {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <MagazineView
          magazines={filteredMagazines}
          selectedYear={selectedYear}
        />
      </div>
    </main>
  );
};

interface MagazineViewProps {
  magazines: Magazine[];
  selectedYear: string;
}

// Memoized magazine item component
const MagazineItem = memo(function MagazineItem({
  item,
  index,
}: {
  item: Magazine;
  index: number;
}) {
  return (
    <m.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
      className="group glass p-4 md:p-6 rounded-2xl md:rounded-[2rem] border border-gray-100 hover:border-primary/20 hover:bg-primary/5 transition-colors flex flex-col sm:flex-row items-center justify-between gap-4 md:gap-6"
    >
      <div className="flex items-center gap-4 md:gap-6 w-full sm:w-auto text-center sm:text-left">
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
          <Clock size={20} className="md:w-6 md:h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors truncate">
            {item.name}
          </h3>
          <p className="text-sm md:text-base text-gray-500 font-medium">
            {item.month}
          </p>
        </div>
      </div>

      <a
        href={item.download_url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white rounded-xl md:rounded-2xl font-bold text-sm md:text-base hover:bg-primary transition-colors group/btn"
      >
        <Download
          size={18}
          className="md:w-5 md:h-5 group-hover/btn:animate-bounce"
        />
        Download PDF
      </a>
    </m.div>
  );
});

const MagazineView: React.FC<MagazineViewProps> = memo(function MagazineView({
  magazines,
  selectedYear,
}) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="grid grid-cols-1 gap-4">
        <AnimatePresence mode="popLayout">
          {magazines.length > 0 ? (
            magazines.map((item, index) => (
              <MagazineItem
                key={`${item.month}-${selectedYear}`}
                item={item}
                index={index}
              />
            ))
          ) : (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center"
            >
              <div className="inline-block p-10 bg-gray-50 rounded-[3rem] border border-dashed border-gray-200">
                <Search size={48} className="mx-auto text-gray-300 mb-6" />
                <h4 className="text-2xl font-bold text-gray-400 mb-2">
                  No magazines found
                </h4>
                <p className="text-gray-500">
                  Please try selecting a different year.
                </p>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </LazyMotion>
  );
});

export default LibraryPage;
