/**
 * Content registry. Every content file is imported here once.
 * Pages never import content files directly; they use the helpers in src/lib/content.ts.
 */
import { arlington } from "./areas/arlington";
import { atlanticBeach } from "./areas/atlantic-beach";
import { baymeadowsDeerwood } from "./areas/baymeadows-deerwood";
import { fernandinaBeach } from "./areas/fernandina-beach";
import { flemingIsland } from "./areas/fleming-island";
import { greenCoveSprings } from "./areas/green-cove-springs";
import { jacksonvilleBeach } from "./areas/jacksonville-beach";
import { mandarin } from "./areas/mandarin";
import { middleburg } from "./areas/middleburg";
import { neptuneBeach } from "./areas/neptune-beach";
import { nocatee } from "./areas/nocatee";
import { northsideOceanway } from "./areas/northside-oceanway";
import { orangePark } from "./areas/orange-park";
import { ponteVedraBeach } from "./areas/ponte-vedra-beach";
import { riversideAvondale } from "./areas/riverside-avondale";
import { sanMarco } from "./areas/san-marco";
import { southside } from "./areas/southside";
import { stJohns } from "./areas/st-johns";
import { westside } from "./areas/westside";
import { yulee } from "./areas/yulee";
import { termiteSwarmSeasonJacksonville } from "./blog/termite-swarm-season-jacksonville";
import { fireAntsFloridaLawn } from "./blog/fire-ants-florida-lawn";
import { mosquitoesJacksonville } from "./blog/mosquitoes-jacksonville";
import { palmettoBugsVsCockroaches } from "./blog/palmetto-bugs-vs-cockroaches";
import { signsOfRatsInAttic } from "./blog/signs-of-rats-in-attic";
import { wdoInspectionBuyingHomeFlorida } from "./blog/wdo-inspection-buying-home-florida";
import { offices } from "./industries/offices";
import { propertyManagement } from "./industries/property-management";
import { warehouses } from "./industries/warehouses";
import { restaurants } from "./industries/restaurants";
import { antControl } from "./services/ant-control";
import { bedBugTreatment } from "./services/bed-bug-treatment";
import { cockroachControl } from "./services/cockroach-control";
import { ecoFriendlyPestControl } from "./services/eco-friendly-pest-control";
import { fleaTickControl } from "./services/flea-tick-control";
import { generalPestControl } from "./services/general-pest-control";
import { lawnPestControl } from "./services/lawn-pest-control";
import { moistureControl } from "./services/moisture-control";
import { mosquitoControl } from "./services/mosquito-control";
import { preConstructionTermiteTreatment } from "./services/pre-construction-termite-treatment";
import { rodentControl } from "./services/rodent-control";
import { termiteControl } from "./services/termite-control";
import { termiteInspection } from "./services/termite-inspection";
import { waspRemoval } from "./services/wasp-removal";
import { wildlifeRemoval } from "./services/wildlife-removal";
import type { AreaContent, BlogPost, IndustryContent, ServiceContent } from "./types";

/** Order here is the order used in menus and the footer. */
export const services: ServiceContent[] = [
  generalPestControl,
  termiteControl,
  termiteInspection,
  preConstructionTermiteTreatment,
  rodentControl,
  mosquitoControl,
  bedBugTreatment,
  cockroachControl,
  antControl,
  fleaTickControl,
  waspRemoval,
  wildlifeRemoval,
  lawnPestControl,
  moistureControl,
  ecoFriendlyPestControl,
];

/** Brief order (section 6.5). Within each hub region, areas appear in this order. */
export const areas: AreaContent[] = [
  orangePark,
  jacksonvilleBeach,
  ponteVedraBeach,
  mandarin,
  stJohns,
  flemingIsland,
  southside,
  arlington,
  riversideAvondale,
  sanMarco,
  baymeadowsDeerwood,
  atlanticBeach,
  neptuneBeach,
  nocatee,
  fernandinaBeach,
  yulee,
  middleburg,
  greenCoveSprings,
  northsideOceanway,
  westside,
];

export const industries: IndustryContent[] = [restaurants, propertyManagement, warehouses, offices];

/** Brief order (section 9.6). Newest first on the blog index; ties keep this order. */
export const blogPosts: BlogPost[] = [
  termiteSwarmSeasonJacksonville,
  palmettoBugsVsCockroaches,
  fireAntsFloridaLawn,
  wdoInspectionBuyingHomeFlorida,
  mosquitoesJacksonville,
  signsOfRatsInAttic,
];
